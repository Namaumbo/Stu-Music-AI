import { Divider } from "@chakra-ui/react";
import { BiLike } from "react-icons/bi";
import { SlUserFollow } from "react-icons/sl";

export default function AlbumPage() {
  const buttonClasses = "text-zinc-400 hover:text-white";
  const bgButtonClasses = "bg-zinc-700 text-white px-3 py-1 rounded-md";
  const textGreenClasses = "text-gray-500";
  const tableItemClass = "pt-3 pb-3";
  return (
    <>
      <div className=" text-white p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-4"></div>
          <div className="flex space-x-2">
            <button className={bgButtonClasses}>Explore more</button>
          </div>
        </div>
        <div className="flex items-start space-x-8">
          <div className="w-1/4">
            <img src="photo2.jpg" alt="Playlist Cover" className="rounded-lg" />
          </div>
          <div className="w-3/4">
            <h2 className="text-2xl font-bold">Album</h2>
            <h1 className="text-4xl font-bold mb-2">
              Praise and Harmony, Accapella music
            </h1>
            <p className="text-zinc-400">
              Kelly Cody · 389 likes · 67 songs, about 3 hr
            </p>
            <div className="flex space-x-4 mt-4">
              <button className={textGreenClasses}>
                <img aria-hidden="true" alt="play" src="play.png" />
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
                <th className="text-left">#</th>
                <th className="text-left">Title</th>
                <th className="text-left">Album</th>
                <th className="text-left">Date added</th>
                <th className="text-left">Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-[#718096] cursor-pointer">
                <td className={tableItemClass}>1</td>
                <td className={tableItemClass}>Kuli bwanji </td>
                <td className={tableItemClass}>Praise and Harmony</td>
                <td className={tableItemClass}>Jan 1, 2023</td>
                <td className={tableItemClass}>3:21</td>
              </tr>
              <tr className="hover:bg-[#718096] cursor-pointer">
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
