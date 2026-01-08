import { useMemo } from "react";
import { useRecoilState } from "recoil";
import {
  SongDescription,
  PlayingState,
} from "@/features/player/state/player.atoms.js";
import { VotesAtom } from "@/features/voting/state/votes.atom.js";
import { VOTING_SONGS } from "@/features/voting/state/votingSongs.js";
import SongCoverCard from "@/features/voting/components/SongCoverCard.jsx";

export default function VotingPage() {
  const [song, setSong] = useRecoilState(SongDescription);
  const [isPlaying, setIsPlaying] = useRecoilState(PlayingState);
  const [votes, setVotes] = useRecoilState(VotesAtom);

  const songs = useMemo(() => VOTING_SONGS, []);
  const totalVotes = useMemo(() => {
    return songs.reduce((acc, s) => acc + (votes?.[s.id] ?? 0), 0);
  }, [songs, votes]);

  const playSong = (s) => {
    setSong({
      id: s.id,
      title: s.title,
      artist: s.artist,
      artwork: s.coverSrc,
      audioSrc: s.audioSrc,
    });
    setIsPlaying(true);
  };

  const voteSong = (s) => {
    setVotes((prev) => {
      const next = { ...(prev ?? {}) };
      next[s.id] = (next[s.id] ?? 0) + 1;
      return next;
    });
  };

  return (
    <>
      <div className="h-full overflow-y-auto bg-[#0d1117] text-white">
        <div className="px-6 py-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
                Vote for the Audio Tracks
              </h1>
              <p className="mt-3 text-zinc-400 max-w-2xl">
                Browse the song covers below. Click a cover to play the track,
                then vote either on the card or directly from the player while
                it’s playing.
              </p>
            </div>

            <div className="rounded-2xl border border-[#2b2b2b] bg-[#131314] px-5 py-4">
              <p className="text-sm text-zinc-400">Total votes</p>
              <p className="text-3xl font-extrabold">{totalVotes}</p>
              <p className="text-xs text-zinc-500 mt-1">
                (Saved on this device)
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
            {songs.map((s) => (
              <SongCoverCard
                key={s.id}
                song={s}
                votes={votes?.[s.id] ?? 0}
                isActive={song?.id === s.id && isPlaying}
                onPlay={playSong}
                onVote={voteSong}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
