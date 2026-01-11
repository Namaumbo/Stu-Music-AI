import { useEffect, useMemo, useRef, useState } from "react";
import { FiCpu, FiUploadCloud, FiUser } from "react-icons/fi";
import { MALAWI_PRODUCERS } from "@/features/analysis/state/malawiProducers.js";

function formatSeconds(totalSeconds) {
  if (!Number.isFinite(totalSeconds)) return "—";
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

async function decodeAudioMeta(file) {
  const AudioContextCtor = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextCtor) {
    throw new Error("Your browser does not support audio decoding.");
  }

  const audioContext = new AudioContextCtor();
  try {
    const arrayBuffer = await file.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

    const durationSec = audioBuffer.duration;
    const sampleRate = audioBuffer.sampleRate;
    const channels = audioBuffer.numberOfChannels;
    const approxBitrateKbps =
      durationSec > 0 ? Math.round((file.size * 8) / 1000 / durationSec) : null;

    return { durationSec, sampleRate, channels, approxBitrateKbps };
  } finally {
    await audioContext.close();
  }
}

function buildAiTips(meta) {
  const tips = [];
  if (!meta) return tips;

  if (meta.approxBitrateKbps && meta.approxBitrateKbps < 160) {
    tips.push(
      "Quality looks a bit compressed. If possible, export at 256–320kbps MP3 or WAV for best analysis."
    );
  }

  if (meta.durationSec < 60) {
    tips.push(
      "Short track detected. Consider uploading the full song or the loudest chorus + verse for more useful feedback."
    );
  }

  tips.push(
    "Next steps: check gain staging, reduce harshness around 2–5kHz, and compare against a reference track in the same genre."
  );
  tips.push(
    "If you want mix notes: tell the AI your target vibe (e.g. amapiano club, afrobeats radio) and what you’re struggling with (kick/bass balance, vocals, loudness)."
  );

  return tips;
}

export default function SongAnalysisPage() {
  const inputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [mode, setMode] = useState("ai"); // "ai" | "producer"
  const [producerId, setProducerId] = useState(MALAWI_PRODUCERS[0]?.id ?? "");
  const [meta, setMeta] = useState(null);
  const [status, setStatus] = useState({ kind: "idle", message: "" }); // idle|loading|ready|error

  const producer = useMemo(
    () => MALAWI_PRODUCERS.find((p) => p.id === producerId) ?? null,
    [producerId]
  );

  const fileUrl = useMemo(() => {
    if (!file) return "";
    return URL.createObjectURL(file);
  }, [file]);

  useEffect(() => {
    if (!fileUrl) return;
    return () => {
      URL.revokeObjectURL(fileUrl);
    };
  }, [fileUrl]);

  const aiTips = useMemo(() => buildAiTips(meta), [meta]);

  async function onPickFile(nextFile) {
    setStatus({ kind: "idle", message: "" });
    setMeta(null);
    setFile(null);

    if (!nextFile) return;

    const name = (nextFile.name || "").toLowerCase();
    const looksLikeMp3 =
      nextFile.type === "audio/mpeg" || nextFile.type === "audio/mp3" || name.endsWith(".mp3");
    if (!looksLikeMp3) {
      setStatus({
        kind: "error",
        message: "Please upload an MP3 file (.mp3).",
      });
      return;
    }

    setFile(nextFile);
    setStatus({ kind: "loading", message: "Analyzing audio…" });

    try {
      const decoded = await decodeAudioMeta(nextFile);
      setMeta(decoded);
      setStatus({ kind: "ready", message: "Analysis ready." });
    } catch (e) {
      setStatus({
        kind: "error",
        message:
          e?.message ||
          "Could not decode this MP3 in your browser. Try a different file or re-export it.",
      });
    }
  }

  return (
    <div className="h-full overflow-y-auto bg-[#0d1117] text-white p-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Song Upload & MP3 Analysis
          </h1>
          <p className="text-zinc-400">
            Upload an MP3 and choose: AI feedback or a Malawi producer to help with analysis.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="rounded-2xl border border-[#2b2b2b] bg-[#131314] p-5">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">1) Upload MP3</h2>
              <button
                className="text-sm text-zinc-300 hover:text-white"
                onClick={() => inputRef.current?.click()}
                type="button"
              >
                Browse
              </button>
            </div>

            <input
              ref={inputRef}
              type="file"
              accept=".mp3,audio/mpeg"
              className="hidden"
              onChange={(e) => onPickFile(e.target.files?.[0] ?? null)}
            />

            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="mt-4 w-full rounded-xl border border-dashed border-[#2b2b2b] bg-[#0d1117] p-6 hover:border-zinc-500 transition-colors"
            >
              <div className="flex flex-col items-center text-center gap-2">
                <FiUploadCloud size={26} />
                <div className="font-semibold">Click to upload your MP3</div>
                <div className="text-sm text-zinc-400">
                  We’ll show duration, sample rate, channels, and an estimated bitrate.
                </div>
              </div>
            </button>

            {status.kind !== "idle" && (
              <div
                className={`mt-4 rounded-xl border p-3 text-sm ${
                  status.kind === "error"
                    ? "border-red-700/60 bg-red-900/20 text-red-200"
                    : status.kind === "loading"
                      ? "border-yellow-700/60 bg-yellow-900/20 text-yellow-100"
                      : "border-emerald-700/60 bg-emerald-900/20 text-emerald-100"
                }`}
              >
                {status.message}
              </div>
            )}

            {file && (
              <div className="mt-4 rounded-xl border border-[#2b2b2b] bg-[#0d1117] p-4">
                <div className="text-sm text-zinc-300">
                  <span className="font-semibold text-white">File:</span> {file.name}
                </div>
                <div className="mt-3">
                  <audio controls className="w-full" src={fileUrl} />
                </div>
              </div>
            )}
          </div>

          <div className="rounded-2xl border border-[#2b2b2b] bg-[#131314] p-5">
            <h2 className="text-lg font-semibold">2) Choose who analyzes it</h2>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setMode("ai")}
                className={`rounded-xl border p-4 text-left transition-colors ${
                  mode === "ai"
                    ? "border-blue-500/60 bg-blue-900/20"
                    : "border-[#2b2b2b] bg-[#0d1117] hover:border-zinc-500"
                }`}
              >
                <div className="flex items-center gap-2">
                  <FiCpu />
                  <div className="font-semibold">AI model</div>
                </div>
                <div className="mt-2 text-sm text-zinc-400">
                  Instant feedback based on your upload.
                </div>
              </button>

              <button
                type="button"
                onClick={() => setMode("producer")}
                className={`rounded-xl border p-4 text-left transition-colors ${
                  mode === "producer"
                    ? "border-purple-500/60 bg-purple-900/20"
                    : "border-[#2b2b2b] bg-[#0d1117] hover:border-zinc-500"
                }`}
              >
                <div className="flex items-center gap-2">
                  <FiUser />
                  <div className="font-semibold">Malawi producer</div>
                </div>
                <div className="mt-2 text-sm text-zinc-400">
                  Pick a producer profile and request help.
                </div>
              </button>
            </div>

            {mode === "producer" && (
              <div className="mt-4 rounded-xl border border-[#2b2b2b] bg-[#0d1117] p-4">
                <label className="block text-sm font-semibold text-zinc-200">
                  Select producer
                </label>
                <select
                  value={producerId}
                  onChange={(e) => setProducerId(e.target.value)}
                  className="mt-2 w-full rounded-lg bg-[#131314] border border-[#2b2b2b] p-3 text-white"
                >
                  {MALAWI_PRODUCERS.map((p) => (
                    <option value={p.id} key={p.id}>
                      {p.name} — {p.city}
                    </option>
                  ))}
                </select>

                {producer && (
                  <div className="mt-3 text-sm text-zinc-300 space-y-1">
                    <div>
                      <span className="font-semibold text-white">City:</span> {producer.city}
                    </div>
                    <div>
                      <span className="font-semibold text-white">Specialties:</span>{" "}
                      {producer.specialties.join(", ")}
                    </div>
                    <div>
                      <span className="font-semibold text-white">Preferred contact:</span>{" "}
                      {producer.preferredContact}
                    </div>
                    {producer.note && <div className="text-zinc-500">{producer.note}</div>}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-[#2b2b2b] bg-[#131314] p-5">
          <h2 className="text-lg font-semibold">3) Results</h2>

          {!file && (
            <div className="mt-3 text-zinc-400 text-sm">
              Upload an MP3 to see analysis details here.
            </div>
          )}

          {file && (
            <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="rounded-xl border border-[#2b2b2b] bg-[#0d1117] p-4">
                <div className="font-semibold">Audio metadata</div>
                <div className="mt-3 text-sm text-zinc-300 space-y-2">
                  <div>
                    <span className="text-white font-semibold">Duration:</span>{" "}
                    {formatSeconds(meta?.durationSec)}
                  </div>
                  <div>
                    <span className="text-white font-semibold">Sample rate:</span>{" "}
                    {meta?.sampleRate ? `${meta.sampleRate} Hz` : "—"}
                  </div>
                  <div>
                    <span className="text-white font-semibold">Channels:</span>{" "}
                    {meta?.channels ?? "—"}
                  </div>
                  <div>
                    <span className="text-white font-semibold">Estimated bitrate:</span>{" "}
                    {meta?.approxBitrateKbps ? `${meta.approxBitrateKbps} kbps` : "—"}
                  </div>
                  <div>
                    <span className="text-white font-semibold">File size:</span>{" "}
                    {Math.round((file.size / (1024 * 1024)) * 100) / 100} MB
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-[#2b2b2b] bg-[#0d1117] p-4">
                {mode === "ai" ? (
                  <>
                    <div className="font-semibold">AI feedback (starter)</div>
                    <ul className="mt-3 text-sm text-zinc-300 space-y-2 list-disc pl-5">
                      {aiTips.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                    <div className="mt-4 text-xs text-zinc-500">
                      Note: This is a local “starter” analyzer. If you want real AI feedback, tell
                      me what AI API/provider you want and I’ll wire it up.
                    </div>
                  </>
                ) : (
                  <>
                    <div className="font-semibold">Producer request</div>
                    <div className="mt-3 text-sm text-zinc-300 space-y-2">
                      <div>
                        <span className="text-white font-semibold">Producer:</span>{" "}
                        {producer?.name ?? "—"}
                      </div>
                      <div className="text-zinc-400">
                        Next step: connect this to your backend/email/WhatsApp flow to actually send
                        the file + notes.
                      </div>
                      <div className="rounded-lg border border-[#2b2b2b] bg-[#131314] p-3">
                        <div className="text-white font-semibold">What to send</div>
                        <div className="mt-1 text-zinc-300">
                          - MP3 file
                          <br />
                          - Genre + reference song
                          <br />
                          - What you want feedback on (mix, master, arrangement)
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


