import { atom } from "recoil";

export const PlayerAtom = atom({
  key: "PlayerAtom",
  default: {
    closeBtnState: true,
  },
});

export const SongDescription = atom({
  key: "SongDescription",
  default: {
    title: "",
    artist: "",
    artwork: "",
  },
});

export const SongList = atom({
  key: "SongList",
  default: [],
});

export const Volume = atom({
  key: "Volume",
  default: 0.5,
});

export const CurrentTime = atom({
  key: "CurrentTime",
  default: 0,
});

export const Duration = atom({
  key: "Duration",
  default: 0,
});

export const PlayingState = atom({
  key: "PlayingState",
  default: false,
});

export const ShuffleState = atom({
  key: "ShuffleState",
  default: false,
});

export const RepeatState = atom({
  key: "RepeatState",
  default: false,
});

export const SearchTerm = atom({
  key: "SearchTerm",
  default: "",
});

export const GenreFilter = atom({
  key: "GenreFilter",
  default: "",
});

export const PlayerState = atom({
  key: "PlayerState",
  default: false,
});