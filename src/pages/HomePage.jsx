import SliderComponet from "../components/Slider/SliderComponent";

export default function HomePage(params) {

  const musictype = "px-4 py-2 bg-zinc-800 rounded hover:bg-zinc-700 hover:text-white";
  return (
    <div className="h-full bg-zinc-900 text-white ">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-2">
            <button className={musictype}>All</button>
            <button className={musictype}>Christian Music</button>
            <button className={musictype}>Secular Music</button>
            <button className={musictype}>Amapiano</button>
            <button className={musictype}>Genres</button>
          </div>
           
          <div>
            <button className="px-4 py-2 bg-yellow-500 rounded">
              More Information
            </button>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Recently played</h2>
          <SliderComponet />
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Jump back in</h2>

          <SliderComponet />
        </div>

      </div>
    </div>
  );
}
