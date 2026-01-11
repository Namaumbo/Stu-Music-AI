import "./App.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import NavBarComponent from "@/app/layout/NavBar.jsx";
import SideBar from "@/app/layout/SideBar.jsx";
import PlayerComponent from "@/features/player/components/PlayerComponent.jsx";
import HomePage from "@/features/home/pages/HomePage.jsx";
import AlbumPage from "@/features/albums/pages/AlbumsPage.jsx";
import VotingPage from "@/features/voting/pages/VotingPage.jsx";
import RecentSongs from "@/features/tracks/pages/RecentSongs.jsx";
import NewsPage from "@/features/news/pages/NewsPage.jsx";
import NewsDetailPage from "@/features/news/pages/NewsDetailPage.jsx";
import StudiosPage from "@/features/studios/pages/StudiosPage.jsx";

/* eslint-disable react/prop-types */
const ComingSoonPage = ({ title }) => {
  return (
    <div className="h-full overflow-y-auto bg-[#0d1117] text-white p-8">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="mt-3 text-zinc-400">Coming soon.</p>
    </div>
  );
};

const Layout = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <NavBarComponent />
      <div className="flex flex-1 overflow-hidden pb-[10vh]">
        <div className="w-[15%] border-r-[0.5px] max-h-full overflow-y-auto">
          <SideBar />
        </div>
        <div className="w-[85%] h-full overflow-hidden">
          <Outlet />
        </div>
      </div>
      <div className="">
        <PlayerComponent />
      </div>

      {/* */}
      {/* <div className="lg:w-[23%] lg:bg-[rgba(13, 17, 23, 0)]  lg:border-r-[0.5px] lg:border-r-[#2b2b2b] "> */}
      {/*  */}
      {/* </div> */}
      {/* <div className="w-3/4  pl-5 space-y-3"> */}
      {/*  */}

      {/* <VotingPage /> */}
      {/* <AlbumPage/> */}
      {/*  
            <div>
              <div className="flex flex-row justify-between px-2">
                <h4 className=" tracking-tighter text-2xl font-bold text-gray-200">
                  NyasaBeats Tracks For You
                </h4>
                <p className="text-gray-500 font-bold hover:underline cursor-pointer">
                  See all
                </p>
              </div>
              <SliderComponet />
            </div>
            <div> */}
      {/* New Releases */}
      {/* <div className="flex flex-row justify-between px-2">
                <h4 className=" tracking-tighter text-2xl font-bold text-gray-200">
                  New Releases
                </h4>
                <p className="text-gray-500 font-bold hover:underline cursor-pointer">
                  See all
                </p>
              </div>
              <SliderComponet />
            </div>
            <div> */}
      {/* Recommendations of the tracks */}
      {/* <div className="flex flex-row justify-between px-2">
                <h4 className=" tracking-tighter text-2xl font-bold text-gray-200">
                  NyasaBeats Recommendations
                </h4>
                <p className="text-gray-500 font-bold hover:underline cursor-pointer">
                  See all
                </p>
              </div>
              <SliderComponet />
            </div>*/}
      {/* </div>
      </div> */}
      {/* </> */}
    </div>
  );
};
const App = () => {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/albums",
          element: <AlbumPage />,
        },
        {
          path: "/voting",
          element: <VotingPage />,
        },
        {
          path: "/recently-added",
          element: <RecentSongs />,
        },
        {
          path: "/studios",
          element: <StudiosPage />,
        },
        {
          path: "/newsletter",
          element: <NewsPage />,
        },
        {
          path: "/newsletter/:slug",
          element: <NewsDetailPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
