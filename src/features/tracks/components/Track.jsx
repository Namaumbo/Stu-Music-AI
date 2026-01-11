import "../styles/track.css";
/* eslint-disable react/prop-types */
export default function Track({props}) {
  return (
    <div className="track-container lg:w-45 relative">
      <img
        src="photo2.jpg"
        alt="artwork"
        className="object-cover h-auto w-full rounded-md shadow-md"
      />
    
      <div className="overlay absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100">
        <img
          src="play.png"
          alt="play"
          className="absolute bottom-[20%] right-4 w-12"
        />
      </div>
      <div className="flex flex-col pt-2">
        <span className=" text-sm font-semibold">{props.artist}</span>
        <h4 className="text-xs text-zinc-400">
          {props.title}
        </h4>
      </div>
    </div>
  );
}
