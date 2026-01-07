import AlbumComponent from "../components/AlbumComponent.jsx";

export default function AlbumsPage() {
  return (
    <>
      <div className="h-full overflow-y-auto bg-zinc-900 text-white">
        <div className="p-4 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-1">
              <p className="text-xs font-semibold tracking-widest text-zinc-400">
                DISCOVER
              </p>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Albums
              </h1>
              <p className="text-sm text-zinc-400">
                Browse releases, curated mixes, and what people are playing
                right now.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search albums (UI only)"
                  className="h-11 w-full sm:w-[22rem] rounded-full bg-zinc-800/80 px-4 pr-10 text-sm text-white placeholder:text-zinc-400 outline-none ring-1 ring-zinc-700/50 focus:ring-2 focus:ring-yellow-500/60"
                />
                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400">
                  ⌘K
                </span>
              </div>

              <select className="h-11 w-full sm:w-[12rem] rounded-full bg-zinc-800/80 px-4 text-sm text-white outline-none ring-1 ring-zinc-700/50 focus:ring-2 focus:ring-yellow-500/60">
                <option>Sort: Popular</option>
                <option>Sort: Newest</option>
                <option>Sort: A–Z</option>
              </select>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <h2 className="text-lg font-bold tracking-tight">
              Available albums
            </h2>
            <button className="rounded-full bg-yellow-500 px-4 py-2 text-sm font-semibold text-black hover:bg-yellow-400">
              See featured
            </button>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((album) => {
              return (
                <div
                  key={album}
                  className="flex justify-center transition-transform duration-200 hover:-translate-y-1"
                >
                  <AlbumComponent />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
