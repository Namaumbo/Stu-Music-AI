/* eslint-disable react/prop-types */
import { FiPlay, FiThumbsUp } from "react-icons/fi";

export default function SongCoverCard({
  song,
  isActive,
  votes,
  onPlay,
  onVote,
}) {
  return (
    <div
      onClick={() => onPlay?.(song)}
      className={[
        "group relative rounded-2xl border border-[#2b2b2b] bg-[#131314] overflow-hidden",
        "cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_60px_rgba(0,0,0,0.55)]",
        isActive ? "ring-2 ring-blue-500/60" : "",
      ].join(" ")}
      role="button"
      tabIndex={0}
    >
      <div className="relative aspect-square">
        <img
          src={song.coverSrc}
          alt={`${song.title} cover`}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-150">
            <div className="h-14 w-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
              <FiPlay className="text-white" size={24} />
            </div>
          </div>
        </div>

        <div className="absolute top-3 right-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onVote?.(song);
            }}
            className="flex items-center gap-2 rounded-full bg-black/50 hover:bg-black/65 border border-white/10 px-3 py-1.5 text-white text-sm"
            type="button"
          >
            <FiThumbsUp size={16} />
            <span className="font-semibold">{votes ?? 0}</span>
          </button>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-white font-bold truncate">{song.title}</h3>
            <p className="text-zinc-400 text-sm truncate">{song.artist}</p>
          </div>

          <span className="text-xs text-zinc-400 border border-[#2b2b2b] rounded-full px-2 py-1">
            Tap to play
          </span>
        </div>
      </div>
    </div>
  );
}


