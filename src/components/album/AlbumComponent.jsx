
export default function AlbumComponent() {
  return (
    <div className=" flex justify-center border-t-4 w-[12.5rem] rounded-lg border-[#8a7a61]">
      <div className=" flex justify-center border-t-4 w-[14rem] rounded-lg border-[#648594]">
        <div className="w-[15rem] rounded overflow-hidden shadow-lg bg-white dark:bg-zinc-800 hover:bg-black hover:pointer" >
          <div className=" relative">
            <img
              className="object-cover h-auto object-cover h-auto w-full rounded-sm shadow-md rounded-md shadow-md"
              src="photo2.jpg"
              alt="Video Thumbnail"
              id="artwork"
            />
            <div className="absolute bottom-6  top-[-1rem] left-[-1rem]  bg-opacity-50 text-black text-xs px-1 ">
              <img className="w-[7rem]" src="logo-final.png" alt="Logo" />
            </div>
            <div className="absolute bottom-2 right-6 bg-black bg-opacity-50 text-white text-xs px-3 py-3 rounded">
              <p className="font-bold">Mix</p>
            </div>
          </div>
          <div className="px-4 py-2">
            <div className="font-bold text-sm mb-1 text-zinc-900 dark:text-white">
              Album Title (Release Date)
            </div>
            <p className="text-zinc-700 dark:text-zinc-400 text-xs">
              Name of the Artist + Supporting Artists
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
