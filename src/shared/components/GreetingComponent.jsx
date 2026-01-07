export default function GreetingComponent() {
  return (
    <div
      className="
    lg:flex 
    lg:items-center
    lg:flex-row
    lg:content-center 
    lg:border
     lg:border-[#2b2b2b]
    sm:hidden  w-[85%]  
    m-[auto] 
     mt-12
     p-10
      rounded-sm
     "
    >
      <div>
        <h3 className="text-slate-400 font-[100] md:text-4xl sm:text-2xl ">
          The Only Platform Helping
          <span className="text-orange-600 font-[1000]"> Music Artists </span>
        </h3>
        <p className="text-slate-300 font-bold text-[20px] tracking-tight">
          NyasaBeats is the only Platform in Malawi , helping artists to be
          their own heros Upload your song and be a hero .
        </p>
      </div>
      <div className="bg-[#616d7d1d] rounded-lg">
        <img src="logo-final.png" width={400} height={200} />
      </div>
    </div>
  );
}
