import React, { useState } from "react";
import "./App.css";
import NavBarComponent from "./components/navbar/NavBarComponet";
import GreetingComponent from "./components/GreetingComponent";
import SideBar from "./components/sidebar/SideBar";
import AlbumPage from "./pages/AlbumsPage";
import VotingPage from "./pages/VotingPage";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PlayerComponent from "./components/player/PlayerComponent";

const Layout = () => {
  return (
    <>
      <NavBarComponent />
      <div className="flex">
        <div className="w-[15%] border-r-[0.5px]  max-h-full">
          <SideBar />
        </div>
        <div className="w-[85%] space-y-3 h-screen overflow-y-auto">
          <Outlet />
        </div>
        <div>
          <PlayerComponent/>
        </div>
      </div>

      {/* */}
      {/* <div className="lg:w-[23%] lg:bg-[rgba(13, 17, 23, 0)]  lg:border-r-[0.5px] lg:border-r-[#2b2b2b] "> */}
      {/*  */}
      {/* </div> */}
      {/* <div className="w-3/4  pl-5 space-y-3"> */}
      {/*  */}

      {/* <VotingPage /> */}
      {/* <AlbumPage/> */}
      {/*  <GreetingComponent />
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
    </>
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
          path: "/:id",
          element: <VotingPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
