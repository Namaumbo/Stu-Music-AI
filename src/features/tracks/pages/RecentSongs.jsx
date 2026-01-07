const RecentSongs = () => {
  return (
    <div className="h-full overflow-y-auto">
      <div className="bg-background p-4">
        <h2 className="text-4xl font-bold text-foreground mb-4 text-white ">
          Recently Added
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="bg-card rounded-lg overflow-hidden shadow-lg border-b-8 border-orange-500">
            <img
              src="photo2.jpg"
              alt="Jazz Mix"
              className="w-full h-32 object-cover"
            />
            <div className="p-2 ">
              <h3 className="font-semibold text-primary text-gray-500">Jazz Mix</h3>
              <p className="text-white font-semibold">
                {"John C. O'Leary III"}, FORQ, Erik Pallian and more...
              </p>
            </div>
          </div>
          <div className="bg-card rounded-lg overflow-hidden shadow-lg border-b-8 border-yellow-500">
            <img
              src="logo-final.png"
              alt="Christian Mix"
              className="w-full h-32 object-cover"
            />
            <div className="p-2">
              <h3 className="font-semibold text-primary text-gray-500">Christian Mix</h3>
              <p className="text-white font-semibold">
                Keith Lancaster & The Acappella Company...
              </p>
            </div>
          </div>
          <div className="bg-card rounded-lg overflow-hidden shadow-lg border-b-8 border-blue-500">
            <img
              src="photo2.jpg"
              alt="2010s Mix"
              className="w-full h-32 object-cover"
            />
            <div className="p-2">
              <h3 className="font-semibold text-primary text-gray-500">2010s Mix</h3>
              <p className="text-white font-semibold">
                The Velvet Echoes Boy, Fat Night, and more...
              </p>
            </div>
          </div>
          <div className="bg-card rounded-lg overflow-hidden shadow-lg border-b-8 border-white-500">
            <img
              src="photo2.jpg"
              alt="Chill Mix"
              className="w-full h-32 object-cover"
            />
            <div className="p-2">
              <h3 className="font-semibold text-primary text-gray-500">Chill Mix</h3>
              <p className="text-white font-semibold">
                The Velvet Echoes Free Nationals, Tom Misch, Mg, and more...
              </p>
            </div>
          </div>
          <div className="bg-card rounded-lg overflow-hidden shadow-lg border-b-8 border-red-500">
            <img
              src="photo2.jpg"
              alt="Afrobeats Mix"
              className="w-full h-32 object-cover"
            />
            <div className="p-2">
              <h3 className="font-semibold text-primary text-gray-500">Afrobeats Mix</h3>
              <p className="text-white font-semibold">
                The Velvet Echoes Anendlessocean, TitoM, Burna Boy and more...
              </p>
            </div>
          </div>
          <div className="bg-card rounded-lg overflow-hidden shadow-lg border-b-8 border-orange-500">
            <img
              src="photo2.jpg"
              alt="Lawi Mix"
              className="w-full h-32 object-cover"
            />
            <div className="p-2">
              <h3 className="font-semibold text-primary text-gray-500">Lawi Mix</h3>
              <p className="text-white font-semibold">
                The Velvet Echoes Kell Kay, Praise Umali and Pop Young...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentSongs;
