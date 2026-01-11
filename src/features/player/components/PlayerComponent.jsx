import "../styles/PlayerComponent.css";
import { useEffect, useMemo, useRef } from "react";
import * as fiIcons from "react-icons/fi";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  PlayerState,
  PlayingState,
  SongDescription,
} from "@/features/player/state/player.atoms.js";
import {
  MdOutlinePauseCircleOutline,
  MdOutlinePlayCircleOutline,
} from "react-icons/md";
import { BsArrowRepeat } from "react-icons/bs";
import { PiShuffleThin } from "react-icons/pi";
import { VotesAtom } from "@/features/voting/state/votes.atom.js";
import { FiThumbsUp } from "react-icons/fi";

export default function PlayerComponent() {
  const song = useRecoilValue(SongDescription);
  const [isPlaying, setIsPlaying] = useRecoilState(PlayingState);
  const [isVisible, setIsVisible] = useRecoilState(PlayerState);
  const [votes, setVotes] = useRecoilState(VotesAtom);

  const audioRef = useRef(null);
  const hasTrack = Boolean(song?.audioSrc);

  const voteCount = useMemo(() => {
    if (!song?.id) return 0;
    return votes?.[song.id] ?? 0;
  }, [song?.id, votes]);

  const handleCancel = () => setIsVisible(false);

  const togglePlay = async () => {
    if (!hasTrack) return;
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  const voteNowPlaying = () => {
    if (!song?.id) return;
    setVotes((prev) => {
      const next = { ...(prev ?? {}) };
      next[song.id] = (next[song.id] ?? 0) + 1;
      return next;
    });
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (!hasTrack) return;

    // When the track changes, reload and attempt to play if requested.
    audio.load();
    if (!isPlaying) return;

    audio.play().catch(() => setIsPlaying(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [song?.audioSrc]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (!hasTrack) return;

    if (isPlaying) {
      audio.play().catch(() => setIsPlaying(false));
    } else {
      audio.pause();
    }
  }, [hasTrack, isPlaying, setIsPlaying]);

  if (!isVisible) return null;

  return (
    <div className="bg-black h-[10%] w-full fixed bottom-0 left-0 flex flex-row items-center">
      <audio ref={audioRef} preload="metadata">
        {song?.audioSrc ? <source src={song.audioSrc} /> : null}
      </audio>

      <div className="artwork-song-info">
        <img
          src={song.artwork || "/photo2.jpg"}
          alt="artwork"
          className="w-14 h-14 rounded-sm object-cover"
        />
        <div className="info">
          <p className="text-white font-semibold">
            {song.artist || "Select a track to play"}
          </p>
          <p className="text-sm font-semibold text-gray-700 ">
            {song.title || "—"}
          </p>
        </div>
      </div>

      <div className="controls">
        <div className="text-center items-center mb-4">
          <ul className="flex flex-row justify-center items-center">
            <li className="btn-control">
              <PiShuffleThin fontSize={20} color="white" />
            </li>
            <li
              className="btn-control"
              onClick={() => {
                const audio = audioRef.current;
                if (!audio) return;
                audio.currentTime = Math.max(0, (audio.currentTime ?? 0) - 10);
              }}
            >
              <fiIcons.FiRewind fontSize={20} color="white" />
            </li>
            <li
              className={[
                "btn-control",
                !hasTrack ? "opacity-40 cursor-not-allowed" : "",
              ].join(" ")}
              onClick={togglePlay}
            >
              {isPlaying ? (
                <MdOutlinePauseCircleOutline fontSize={32} color="white" />
              ) : (
                <MdOutlinePlayCircleOutline fontSize={32} color="white" />
              )}
            </li>
            <li
              className="btn-control"
              onClick={() => {
                const audio = audioRef.current;
                if (!audio) return;
                audio.currentTime = Math.min(
                  audio.duration || Infinity,
                  (audio.currentTime ?? 0) + 10
                );
              }}
            >
              <fiIcons.FiFastForward fontSize={20} color="white" />
            </li>
            <li className="btn-control">
              <BsArrowRepeat fontSize={20} color="white" />
            </li>
          </ul>
        </div>
      </div>

      <div className="ml-auto mr-16 flex items-center gap-3">
        <button
          onClick={voteNowPlaying}
          disabled={!song?.id}
          className={[
            "flex items-center gap-2 rounded-full px-4 py-2 text-white font-semibold",
            "border border-white/10 bg-white/5 hover:bg-white/10 transition-colors",
            !song?.id ? "opacity-40 cursor-not-allowed" : "cursor-pointer",
          ].join(" ")}
          type="button"
        >
          <FiThumbsUp size={18} />
          <span>Vote</span>
          <span className="opacity-80">{voteCount}</span>
        </button>
      </div>

      <fiIcons.FiX
        fontSize={30}
        color="grey"
        id="cancel"
        onClick={handleCancel}
      />
    </div>
  );
}
