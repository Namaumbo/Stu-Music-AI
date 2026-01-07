import "../styles/PlayerComponent.css";
// import { Slider, Stack } from "@mui/material";
import * as fiIcons from "react-icons/fi";
import { PlayerAtom, SongDescription } from "@/features/player/state/player.atoms.js";
import { useRecoilState, useRecoilValue } from "recoil";
import { MdOutlinePlayCircleOutline } from "react-icons/md";
import { BsArrowRepeat } from "react-icons/bs";
import { PiShuffleThin } from "react-icons/pi";

export default function PlayerComponent() {
  const [btnState, setBtnState] = useRecoilState(PlayerAtom);
  const song = useRecoilValue(SongDescription);

  const handelCancel = () => {
    setBtnState(!btnState);
  };
  return (
    <div className="bg-black h-[10%] w-full fixed bottom-0 left-0 flex flex-row items-center">
      <div className="artwork-song-info">
        <img src="/photo2.jpg" alt="artwork" className="w-14 h-14 rounded-sm" />
        <div className="info">
          <p className="text-white font-semibold">
            {song.artist || "The Velvet Echoes"}
          </p>
          <p className="text-sm font-semibold text-gray-700 ">
            {song.title || "Midnight Serenade"}
          </p>
        </div>
      </div>
      <div className="controls">
        <div className="text-center items-center mb-4">
          <ul className="flex flex-row justify-center items-center">
            <li className="btn-control">
              <PiShuffleThin fontSize={20} color="white" />
            </li>
            <li className="btn-control">
              <fiIcons.FiRewind fontSize={20} color="white" />
            </li>
            <li className="btn-control">
              <MdOutlinePlayCircleOutline fontSize={30} color="white" />
            </li>
            <li className="btn-control">
              <fiIcons.FiFastForward fontSize={20} color="white" />
            </li>
            <li className="btn-control">
              <BsArrowRepeat fontSize={20} color="white" />
            </li>
          </ul>
        </div>

        {/* <Slider
          size="big"
          defaultValue={20}
          aria-label="Small"
          valueLabelDisplay="auto"
        /> */}
      </div>
      {/* <div className="volume">
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <fiIcons.FiVolume1 fontSize={40} color="grey" />
          <Slider aria-label="Volume" value={23} />
          <fiIcons.FiVolume2 fontSize={40} color="grey" />
        </Stack>
      </div>
   
    </div> */}
      <fiIcons.FiX
        fontSize={30}
        color="grey"
        id="cancel"
        onClick={handelCancel}
      />
    </div>
  );
}
