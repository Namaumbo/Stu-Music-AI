import { CiSearch } from "react-icons/ci";
export default function NavBarComponent() {
  return (
    <nav className=" border-b-0.5 flex flex-row align-baseline items-center  border-[#2b2b2b]">
      <div className="w-1/4 cursor-pointer">
        <img src="/logo-final.png" className="w-28 " alt="logo" />
      </div>
      <div className="w-3/4 text-center flex flex-row justify-center items-center">
        <input
          type="text"
          placeholder="What are you search for ?"
          className="  h-14 w-[35rem] pl-5 rounded-full bg-[#2b2b2b] border-[#2b2b2b] text-white"
        />
        <button className="w-[10rem] h-12 text-white font-bold bg-[#131314] rounded-3xl hover:bg-[#2b2b2b] ml-3">
          <div className="flex flex-row justify-center items-center space-x-2">
          <CiSearch size='23'/><p>Search</p>
          </div>
        </button>
      </div>
      
    </nav>
  );
}
