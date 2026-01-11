import { useMemo, useState } from "react";
import { studios } from "@/features/studios/state/studios.js";
import { FiDollarSign, FiMapPin, FiMic, FiSearch, FiTrendingUp } from "react-icons/fi";

export default function StudiosPage() {
  const [query, setQuery] = useState("");

  const filteredStudios = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return studios;
    return studios.filter((s) => {
      return (
        s.name.toLowerCase().includes(q) ||
        s.location.toLowerCase().includes(q) ||
        String(s.hitsProduced).includes(q)
      );
    });
  }, [query]);

  return (
    <div className="h-full overflow-y-auto bg-[#0d1117] text-white">
      <div className="p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Studios</h1>
            <p className="mt-2 text-zinc-400">
              Find a studio by location, price, or past hits.
            </p>
          </div>

          <div className="w-full md:w-[28rem]">
            <div className="flex items-center gap-3 rounded-2xl border border-[#2b2b2b] bg-[#131314] px-4 py-3">
              <FiSearch className="text-zinc-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search studios (e.g. Lilongwe, 45,000, 28 hits)"
                className="w-full bg-transparent text-white placeholder:text-zinc-500 outline-none"
              />
            </div>
          </div>
        </div>

        <div className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredStudios.map((studio) => (
            <div
              key={studio.id}
              className="group relative overflow-hidden rounded-2xl border border-[#2b2b2b] bg-[#131314] p-5 transition hover:border-[#3b3b3b]"
            >
              <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-cyan-500/10 blur-2xl transition group-hover:from-purple-500/30 group-hover:via-pink-500/20 group-hover:to-cyan-500/20" />

              <div className="relative flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0d1117] ring-1 ring-[#2b2b2b]">
                    <FiMic className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-lg font-bold leading-tight">{studio.name}</div>
                    <div className="mt-1 flex items-center gap-2 text-sm text-zinc-400">
                      <FiMapPin />
                      <span>{studio.location}</span>
                    </div>
                  </div>
                </div>

                <div className="shrink-0 rounded-full bg-[#0d1117] px-3 py-1 text-xs font-semibold text-zinc-200 ring-1 ring-[#2b2b2b]">
                  Studio
                </div>
              </div>

              <div className="relative mt-5 grid grid-cols-1 gap-3">
                <div className="flex items-center justify-between rounded-xl bg-[#0d1117] px-4 py-3 ring-1 ring-[#2b2b2b]">
                  <div className="flex items-center gap-2 text-sm text-zinc-300">
                    <FiDollarSign className="text-zinc-400" />
                    <span>Price</span>
                  </div>
                  <div className="text-sm font-semibold text-white">{studio.price}</div>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-[#0d1117] px-4 py-3 ring-1 ring-[#2b2b2b]">
                  <div className="flex items-center gap-2 text-sm text-zinc-300">
                    <FiTrendingUp className="text-zinc-400" />
                    <span>Hits produced</span>
                  </div>
                  <div className="text-sm font-semibold text-white">{studio.hitsProduced}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredStudios.length === 0 && (
          <div className="mt-8 rounded-2xl border border-[#2b2b2b] bg-[#131314] p-6 text-zinc-300">
            No studios match your search.
          </div>
        )}
      </div>
    </div>
  );
}




