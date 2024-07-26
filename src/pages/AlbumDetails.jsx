import { BiLike } from "react-icons/bi";
import { SlUserFollow } from "react-icons/sl";
export default function AlbumDetails() {
  const bgButtonClasses = "bg-zinc-700 text-white px-3 py-1 rounded-md";
  const textGreenClasses = "text-gray-500";
  const tableItemClass = "pt-3 pb-3 px-4 text-[13px]";
  const tableHeader = "text-left font-[400] px-4";
  return (
    <>
      <div className=" text-white p-4">
        <div className="flex flex-row items-center  ">
          <div className="w-1/4">
            <img src="photo2.jpg" alt="Playlist Cover" className="rounded-lg" />
          </div>

          <div className="w-3/4 ml-5 ">
            <h2 className="text-2xl font-bold mb-2">Album</h2>
            <h1 className="text-4xl font-bold mb-2">
              Praise and Harmony, Accapella music
            </h1>
            <p className="text-zinc-400">
              Kelly Cody · 389 likes · 67 songs · about 3 hr
            </p>
            <div className="flex space-x-4 mt-4">
              <button className={textGreenClasses}>
                <img
                  aria-hidden="true"
                  alt="play"
                  src="play.png"
                  className="w-10"
                />
              </button>
              <button className={textGreenClasses}>
                <BiLike size="35px" />
              </button>
              <button className={textGreenClasses}>
                <SlUserFollow size="25px" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <table className="w-full text-zinc-400">
            <thead className="border-b">
              <tr>
                <th className={tableHeader}>#</th>
                <th className={tableHeader}>Title</th>
                <th className={tableHeader}>Album</th>
                <th className={tableHeader}>Date added</th>
                <th className={tableHeader}>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-[#616d7d1d] cursor-pointer">
                <td className={tableItemClass}>1</td>
                <td className={tableItemClass}>Kuli bwanji </td>
                <td className={tableItemClass}>Praise and Harmony</td>
                <td className={tableItemClass}>Jan 1, 2023</td>
                <td className={tableItemClass}>3:21</td>
              </tr>
              <tr className="hover:bg-[#616d7d1d] cursor-pointer">
                <td className={tableItemClass}>2</td>
                <td className={tableItemClass}>Days of Elijah</td>
                <td className={tableItemClass}>Praise and Harmony</td>
                <td className={tableItemClass}>Jan 1, 2023</td>
                <td className={tableItemClass}>3:21</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
