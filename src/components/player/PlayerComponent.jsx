import "./player.css";
// import pic from "../../assets/photo2.jpg";
// import { Slider, Stack } from "@mui/material";
import * as fiIcons from "react-icons/fi";
import { PlayerAtom } from "../../core/stores/Player";
import { useRecoilState, useRecoilValue } from "recoil";
import { SongDescription } from "../../core/stores/Player";

export default function PlayerComponent() {
  const [btnState, setBtnState] = useRecoilState(PlayerAtom);
  const [song, setSong] = useRecoilState(SongDescription);

  const handelCancel = () => {
    setBtnState(!btnState);
  };
  return (
    <div className="bg-black h-[10%] w-full fixed bottom-0 left-0 flex flex-row items-center">
      <div className="artwork-song-info">
        <img src={song.artwork} alt="artwork" className="artwork-song-icon" />
        <div className="info">
          <span>{song.title}</span>
          <p>{song.artist}</p>
        </div>
      </div>
      <div className="controls">
        <li className="btn-control">
          <fiIcons.FiRewind fontSize={40} color="grey" />
        </li>
        <li className="btn-control">
          <fiIcons.FiPlayCircle fontSize={55} color="grey" />
        </li>
        <li className="btn-control">
          <fiIcons.FiFastForward fontSize={40} color="grey" />
        </li>

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
      <fiIcons.FiX
        fontSize={40}
        color="grey"
        id="cancel"
        onClick={handelCancel}
      />
    </div> */}
    </div>
  );
}
