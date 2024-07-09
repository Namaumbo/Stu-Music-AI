

import { atom } from "recoil";

export const PlayerAtom = atom({
key: "PlayerAtom",
default:{
    'closeBtnState': true,
}
})

export const SongDescription = atom({
    key: "SongDescription",
    default:{
        'title': "",
        'artist': "",
        'artwork': "",
    }
});