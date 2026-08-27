#!/usr/bin/env python3
"""
video-add-music.py — mixa trilha de fundo com ducking automatico.
uso: video-add-music.py <video> [<trilha>] [<output>] [<volume>] [--threshold X]
  <trilha>     default: data/trilhas/default.mp3 do squad (passe "" pra usar o default)
  <volume>     default: 0.18. Piso util ~0.06 — abaixo disso a trilha some.
  --threshold  default: auto (calibra pelo RMS da voz). Ou um valor linear fixo.

Ducking AUTO-CALIBRADO: o threshold sai do nivel real da voz (RMS medido pelo
volumedetect, joelho 10 dB abaixo), ratio=4 release=150ms — trilha respira nas
pausas em vez de ficar 100% esmagada, e funciona igual pra voz baixa ou alta.
O valor fixo antigo (0.1) so duckava voz forte: num video de celular sem ganho
(voz em -40 dBFS) o compressor NUNCA disparava e a trilha tocava por cima da fala.

Output: -c:v copy (nao re-encoda video) + AAC 192k.

Cross-platform (porta do antigo video-add-music.sh). So precisa de ffmpeg/ffprobe
(com sidechaincompress). Roda com python puro, nao precisa do venv.
"""
import sys, os, subprocess, argparse

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import _common

FFMPEG = _common.ffmpeg()
FFPROBE = _common.ffprobe()

p = argparse.ArgumentParser()
p.add_argument("video")
p.add_argument("trilha", nargs="?", default=None)
p.add_argument("output", nargs="?", default=None)
p.add_argument("volume", nargs="?", default="0.18")
p.add_argument("--threshold", default="auto",
    help="threshold do ducking. 'auto' (default) calibra pelo nivel da voz; "
         "ou passe um valor linear fixo (ex: 0.002)")
args = p.parse_args()

video = args.video
# "" (string vazia) tambem cai pro default
trilha = args.trilha or os.path.join(_common.SQUAD_DIR, "data", "trilhas", "default.mp3")
base = os.path.splitext(video)[0]
output = args.output or f"{base}_final.mp4"
volume = args.volume

if not os.path.isfile(trilha):
    print(f"trilha nao encontrada: {trilha}")
    print('   passe uma trilha como 2o argumento, ou ponha uma em data/trilhas/default.mp3')
    sys.exit(1)

# ─────────────────────────────────────────────────────────────────────────────
# Threshold do ducking — calibrado pelo nivel REAL da voz
# ─────────────────────────────────────────────────────────────────────────────
# O valor fixo antigo (0.1 linear = -20 dBFS) so duckava quem gravava com voz
# forte. Medido em 26/08/2026 num video gravado de celular sem ganho: a voz
# tinha RMS de -40 dBFS e NUNCA cruzava o threshold — o compressor nunca
# disparava e a trilha tocava no volume cheio, por cima da fala.
#
# Agora o threshold sai do proprio audio: medimos o RMS com o volumedetect do
# ffmpeg e colocamos o joelho ~10 dB abaixo dele. Assim a fala normal cruza o
# limiar (dispara o ducking) e o ruido de fundo das pausas nao (a trilha volta).
# Funciona igual pra voz baixa ou alta — e sobrevive a troca de microfone.
THRESHOLD_OFFSET_DB = 10.0   # quanto abaixo do RMS medido fica o joelho
THRESHOLD_MIN = 0.0005       # piso: abaixo disso qualquer ruido duckaria
THRESHOLD_MAX = 0.05         # teto: acima disso nem fala forte dispararia


def medir_rms_db(caminho):
    """RMS do audio em dBFS, via volumedetect do ffmpeg. None se nao der pra medir.
    Usa ffmpeg puro de proposito: este script roda sem o venv (sem numpy/scipy)."""
    r = subprocess.run([FFMPEG, "-hide_banner", "-i", caminho, "-af", "volumedetect",
        "-f", "null", "-"], capture_output=True, text=True)
    for linha in (r.stderr or "").splitlines():
        if "mean_volume:" in linha:
            try:
                return float(linha.split("mean_volume:")[1].split("dB")[0].strip())
            except ValueError:
                return None
    return None


def calibrar_threshold(caminho):
    """Threshold linear pro sidechaincompress, a partir do RMS da voz."""
    rms_db = medir_rms_db(caminho)
    if rms_db is None:
        print("   [!] nao consegui medir o nivel da voz — usando threshold 0.002")
        return 0.002, None
    alvo_db = rms_db - THRESHOLD_OFFSET_DB
    thr = 10 ** (alvo_db / 20.0)
    thr = max(THRESHOLD_MIN, min(THRESHOLD_MAX, thr))
    return thr, rms_db


if args.threshold == "auto":
    threshold, rms_medido = calibrar_threshold(video)
    if rms_medido is not None:
        print(f"ducking calibrado: voz em {rms_medido:.1f} dBFS -> threshold {threshold:.5f}")
else:
    threshold = float(args.threshold)
    print(f"ducking com threshold fixo: {threshold}")

dur = float(subprocess.run([FFPROBE, "-v", "error", "-show_entries", "format=duration",
    "-of", "default=noprint_wrappers=1:nokey=1", video],
    capture_output=True, text=True).stdout.strip())
fade_out = dur - 2.5

filtergraph = (
    f"[1:a]volume={volume},afade=t=in:st=0:d=2,afade=t=out:st={fade_out:.3f}:d=2.5[music];\n"
    f"[0:a]asplit=2[voice][sc];\n"
    f"[music][sc]sidechaincompress=threshold={threshold:.5f}:ratio=4:attack=15:release=150:makeup=1:level_sc=1[ducked];\n"
    f"[voice][ducked]amix=inputs=2:duration=first:dropout_transition=0:normalize=0[aout]"
)
ff = _common.tmp_path(".txt")
open(ff, "w").write(filtergraph)

subprocess.run([FFMPEG, "-y", "-i", video, "-stream_loop", "-1", "-i", trilha,
    *_common.filter_script_args(ff),
    "-map", "0:v", "-map", "[aout]",
    "-c:v", "copy", "-c:a", "aac", "-b:a", "192k", "-t", f"{dur}",
    # faststart: move o moov atom pro inicio. Sem isso o player baixa o arquivo
    # quase inteiro antes de comecar — os outros scripts ja faziam, este era o
    # unico da cadeia que nao fazia, e como e o ULTIMO passo, o final saia sem.
    "-movflags", "+faststart",
    output], check=True)
os.remove(ff)

print(f"trilha aplicada: volume={volume}, ducking balanceado (voz manda, trilha respira nas pausas)")
print(f"output: {output}")
