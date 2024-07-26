/* eslint-disable no-unused-vars */
import { Button } from "@chakra-ui/react";
export default function VotingPage() {

  const tableItemClass = "pt-3 pb-3";

  return (
    <>
      <main className="flex flex-col items-center justify-center  bg-[#0d1117] py-6">
        <div className="max-w-md w-full space-y-8 px- md:px-0">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-100 dark:text-gray-100">
              Vote for The Audio Track
            </h1>
            <p className="mt-4 text-lg text-gray-100 w-[20rem] m-[auto] dark:text-gray-400">
              Cast your vote to support the artist for the music shoot out.
            </p>
          </div>
          <div className=" bg-gray-900 rounded-lg shadow-md p-6 space-y-6">
            <div className="flex items-center space-x-4">
              <img
                alt="Candidate"
                className="rounded-md shadow-sm"
                height={80}
                src="photo2.jpg"
                style={{
                  aspectRatio: "80/80",
                  objectFit: "cover",
                }}
                width={150}
              />
              <div>
                <h2 className="text-xl font-bold text-gray-100 dark:text-gray-100">
                  John Doe
                </h2>
                <p className="text-gray-100 dark:text-gray-400">
                  Candidate for City Council
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-600 dark:text-gray-400">
                Total Votes :
                <span className=" pl-1 font-bold text-gray-100 dark:text-gray-100">
                  123
                </span>
              </p>
              <Button className="bg-blue-500 hover:bg-blue-600 w-[15rem] text-white font-bold py-2 px-6 rounded">
                Vote
              </Button>
            </div>
          </div>
        </div>
      </main>
      <h4 className=" tracking-tighter text-2xl font-bold text-gray-200">
        More Music from John Doe
      </h4>
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
            <tr className="hover:bg-gray-800 cursor-pointer">
              <td className={tableItemClass}>1</td>
              <td className={tableItemClass}>Kuli bwanji </td>
              <td className={tableItemClass}>Praise and Harmony</td>
              <td className={tableItemClass}>Jan 1, 2023</td>
              <td className={tableItemClass}>3:21</td>
            </tr>
            <tr className="hover:bg-gray-800 cursor-pointer">
              <td className={tableItemClass}>2</td>
              <td className={tableItemClass}>Days of Elijah</td>
              <td className={tableItemClass}>Praise and Harmony</td>
              <td className={tableItemClass}>Jan 1, 2023</td>
              <td className={tableItemClass}>3:21</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
