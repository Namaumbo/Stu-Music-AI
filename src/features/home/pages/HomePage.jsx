import SliderComponet from "@/features/tracks/components/SliderComponent.jsx";

const Musictype = () => {
  const Genres = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "Christian Music",
    },
    {
      id: 3,
      name: "Secular Music",
    },
    {
      id: 4,
      name: "Amapiano",
    },
    {
      id: 5,
      name: "Genres",
    },
  ];
  const musictype =
    "px-4 py-2 bg-zinc-800 rounded hover:bg-zinc-700 hover:text-white";
  return (
    <>
      {Genres.map((genre, index) => {
        return (
          <button className={musictype} key={index}>
            {genre.name}
          </button>
        );
      })}
    </>
  );
};
export default function HomePage() {
  return (
    <div className="h-full bg-zinc-900 text-white ">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-2">{Musictype()}</div>
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
