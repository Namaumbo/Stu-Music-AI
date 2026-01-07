import Track from "./Track";
// import "../styles/slider.css";

export default function SliderComponet() {
  const songList = [
    {
      id: 1,
      title: "Midnight Serenade",
      artist: "The Velvet Echoes",
      album: "Album 1",
      duration: "00:00",
      image: "image1.jpg",
    },
    {
      id: 2,
      title: "Neon Dreams",
      artist: "Cosmic Wanderers",
      album: "Album 2",
      duration: "00:00",
      image: "image2.jpg",
    },
    {
      id: 3,
      title: "Whispers of the Wind",
      artist: "Sylvan Harmony",
      album: "Album 3",
      duration: "00:00",
      image: "image3.jpg",
    },
    {
      id: 4,
      title: "Electric Pulse",
      artist: "Quantum Beats",
      album: "Album 4",
      duration: "00:00",
      image: "image4.jpg",
    },
    {
      id: 5,
      title: "Sunflower Waltz",
      artist: "Meadow Melodies",
      album: "Album 5",
      duration: "00:00",
      image: "image5.jpg",
    },
    {
      id: 6,
      title: "Neon Noir",
      artist: "Midnight Syndicate",
      album: "Album 6",
      duration: "00:00",
      image: "image6.jpg",
    },
  ];

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
