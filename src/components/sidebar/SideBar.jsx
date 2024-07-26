import * as ciIcons from "react-icons/ci";
import * as fiIcons from "react-icons/fi";
import { Tag, TagLabel, Divider } from "@chakra-ui/react";
import "./siderbar.css";
import { NavLink } from "react-router-dom";

export default function SideBar() {
  const links = [
    {
      name: "Home",
      icon: <ciIcons.CiHome fontSize={20} color="#4c566a" />,
      path: "/",
    },
    {
      name: "Albums",
      icon: <fiIcons.FiDisc fontSize={20} color="#4c566a" />,
      path: "/albums",
    },
    {
      name: "Studios",
      icon: <fiIcons.FiSpeaker fontSize={20} color="#4c566a" />,
      path: "/studios",
    },
    {
      name: "News",
      icon: <fiIcons.FiPaperclip fontSize={20} color="#4c566a" />,
      path: "/newsletter",
    },
  ];

  const genreList = [
    "Afro-pop",
    "hip-pop",
    "pop",
    "gospel",
    "rock",
    "reggae",
    "amapiano",
    "metal",
    "RnB",
    "Mangelengele",
    "reggaes",
  ];

  const artists = [
    "Namadingo",
    "Eli Njuchi",
    "Ranken",
    "Ethel Kamwendo Banda",
    "Lawi",
    "Temwa",
    "Kraizy G",
    "Gwamba",
    "Success",
    "Suffix",
    "Zenze",
  ];
  return (
    <div className=" max-h-full ">
      <ul>
        {links.map((link) => {
          return (
            <NavLink to={link["path"]}>
              <li
                key={link["name"]}
                className="mb-5 flex flex-row  items-center "
                id="hovered-list"
              >
                <div className="flex flex-row  justify-center items-center">
                  <div className=" pr-3">{link["icon"]}</div>
                  <div className=" text-[#cad2e0]">{link["name"]}</div>
                </div>
              </li>
            </NavLink>
          );
        })}
      </ul>

      {/* <ul className="list-none m-8"> */}

      {/*       
        {links.map((item, index) => (
          <li key={index} className="mb-5 flex flex-row  items-center " id="hovered-list">
            <div className=" pr-3">{item["icon"]}</div>
            <div className=" text-[#cad2e0]">{item["name"]}</div>
          </li>
        ))}
      </ul> */}

      {/* 
      <Divider />
      <h4 className="mt-3 ml-2 text-xl text-gray-400">Available Genres</h4>
      <div className=" py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ">
        {genreList.map((genre) => (
          <Tag
            key={genre}
            variant="solid"
            className="mr-2 mt-3 cursor-pointer bg-green-500"
          >
            <TagLabel>{genre}</TagLabel>
          </Tag>
        ))}
      </div>

      <h4 className="mt-3 ml-2 text-xl text-gray-400">
        People are Listening To..
      </h4>
      <div className=" py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ">
        {artists.map((genre) => (
          <Tag
            key={genre}
            variant="solid"
            className="mr-2 mt-3 cursor-pointer"
          >
            <TagLabel>{genre}</TagLabel>
            <fiIcons.FiPlayCircle />
          </Tag>
        ))}
      </div> */}
    </div>
  );
}
