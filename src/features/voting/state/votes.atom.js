import { atom } from "recoil";

const STORAGE_KEY = "nyasa:votes:v1";

function safeParse(json) {
  try {
    return JSON.parse(json);
  } catch {
    return null;
  }
}

function loadVotes() {
  if (typeof window === "undefined") return {};
  const raw = window.localStorage.getItem(STORAGE_KEY);
  const parsed = raw ? safeParse(raw) : null;
  return parsed && typeof parsed === "object" ? parsed : {};
}

function persistVotesEffect({ setSelf, onSet }) {
  setSelf(loadVotes());
  onSet((newVal) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(newVal ?? {}));
    } catch {
      // ignore storage failures (private mode, quota, etc.)
    }
  });
}

export const VotesAtom = atom({
  key: "VotesAtom",
  default: {},
  effects_UNSTABLE: [persistVotesEffect],
});


