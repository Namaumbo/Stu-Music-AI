import AlbumComponent from "../components/album/AlbumComponent";

export default function AlbumPage() {
  return (
    <>
      <div className="text-white p-8">
        <h2 className="text-2xl font-bold mb-4">Available Albums</h2>
        <div
          className=" mx-auto grid  lg:grid-rows-1 lg:grid-cols-6
       md:grid-cols-5 md:grid-rows-1  sm:grid-cols-4  sm:grid-rows-1"
        >
          {[1, 2, 3, 4, 5, 6, 7].map((album, index) => {
            return (
              <div key={index} className="pb-4">
                <AlbumComponent />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
