import { useState } from "react";
import Track from "../Track/Track";
// import "./sliderStyle.css";

export default function SliderComponet() {
  const [songList, setSongList] = useState([
    {
      id: 1,
      title: "Song 1",
      artist: "Artist 1",
      album: "Album 1",
      duration: "00:00",
      image: "image1.jpg",
    },
    {
      id: 2,
      title: "Song 2",
      artist: "Artist 2",
      album: "Album 2",
      duration: "00:00",
      image: "image2.jpg",
    },
    {
      id: 3,
      title: "Song 3",
      artist: "Artist 3",
      album: "Album 3",
      duration: "00:00",
      image: "image3.jpg",
    },
    {
      id: 4,
      title: "Song 4",
      artist: "Artist 4",
      album: "Album 4",
      duration: "00:00",
      image: "image4.jpg",
    },
    {
      id: 5,
      title: "Song 5",
      artist: "Artist 5",
      album: "Album 5",
      duration: "00:00",
      image: "image5.jpg",
    },
    {
      id: 6,
      title: "Song 6",
      artist: "Artist 6",
      album: "Album 6",
      duration: "00:00",
      image: "image6.jpg",
    },
  ]);

  return (
    <>
      <div
        className=" mx-auto grid  lg:grid-rows-1 lg:grid-cols-6
       md:grid-cols-5 md:grid-rows-1  sm:grid-cols-4  sm:grid-rows-1 "
      >
        {songList.map((song, index) => {
          return (
            <div key={index} className="pb-2">
              <Track props={song} />
            </div>
          );
        })}
      </div>
    </>
  );
}
