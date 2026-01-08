/* eslint-disable react/prop-types */
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  NEWS_ARTICLES,
  NEWS_CATEGORIES,
} from "@/features/news/state/newsArticles.js";
import { CiSearch } from "react-icons/ci";
import { FiArrowUpRight, FiX } from "react-icons/fi";

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  } catch {
    return iso;
  }
}

function readingTimeMinutes(article) {
  const text = [article.title, article.excerpt, ...(article.body ?? [])].join(
    " "
  );
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return minutes;
}

function CategoryChip({ active, label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "shrink-0 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold",
        "border transition-colors",
        active
          ? "border-blue-500/60 bg-blue-500/10 text-white"
          : "border-[#2b2b2b] bg-[#131314] text-zinc-300 hover:text-white hover:border-white/15",
      ].join(" ")}
    >
      {label}
    </button>
  );
}

function ArticleMeta({ a }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-400">
      <span>{formatDate(a.date)}</span>
      <span className="opacity-50">•</span>
      <span>{a.author}</span>
      <span className="opacity-50">•</span>
      <span>{readingTimeMinutes(a)} min read</span>
    </div>
  );
}

export default function NewsPage() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("newest");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    const base = NEWS_ARTICLES.filter((a) => {
      const catOk = category === "All" ? true : a.category === category;
      const qOk =
        !q ||
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q);
      return catOk && qOk;
    });

    base.sort((a, b) => {
      const ad = new Date(a.date).getTime();
      const bd = new Date(b.date).getTime();
      return sort === "oldest" ? ad - bd : bd - ad;
    });

    return base;
  }, [category, query, sort]);

  const featured = filtered[0];
  const rest = filtered.slice(1);
  const trending = filtered.slice(0, 4);

  return (
    <div className="h-full overflow-y-auto bg-[#0d1117] text-white">
      {/* top glow */}
      <div className="pointer-events-none absolute inset-x-0 -top-40 h-80 bg-[radial-gradient(closest-side,rgba(59,130,246,0.25),transparent)]" />

      <div className="px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-zinc-200">
                NyasaBeats • Newsroom
              </div>
              <h1 className="mt-4 text-4xl lg:text-6xl font-extrabold tracking-tight">
                News & Updates
              </h1>
              <p className="mt-3 text-zinc-400 max-w-2xl">
                Releases, interviews, events, community stories — curated and
                easy to filter.
              </p>
            </div>

            <div className="rounded-3xl border border-[#2b2b2b] bg-[#131314] p-4 w-full lg:w-[26rem]">
              <div className="relative">
                <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by title, category, excerpt…"
                  className="w-full h-11 pl-10 pr-10 rounded-2xl bg-black/20 border border-[#2b2b2b] text-white outline-none focus:border-blue-500/70"
                />
                {query ? (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
                    aria-label="Clear search"
                  >
                    <FiX />
                  </button>
                ) : null}
              </div>

              <div className="mt-3 flex items-center justify-between gap-3">
                <div className="text-sm text-zinc-400">
                  Showing{" "}
                  <span className="text-white font-bold">
                    {filtered.length}
                  </span>{" "}
                  articles
                </div>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="h-10 rounded-full bg-black/20 border border-[#2b2b2b] text-white px-4 outline-none focus:border-blue-500/70"
                >
                  <option value="newest">Newest</option>
                  <option value="oldest">Oldest</option>
                </select>
              </div>
            </div>
          </div>

          {/* sticky filters */}
          <div className="sticky top-0 z-10 mt-8 -mx-6 px-6 py-3 bg-[#0d1117]/80 backdrop-blur border-b border-white/5">
            <div className="max-w-6xl mx-auto flex items-center gap-3 overflow-x-auto no-scrollbar">
              {NEWS_CATEGORIES.map((c) => (
                <CategoryChip
                  key={c}
                  label={c}
                  active={category === c}
                  onClick={() => setCategory(c)}
                />
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="mt-10 rounded-3xl border border-[#2b2b2b] bg-[#131314] p-10 text-center">
              <p className="text-xl font-extrabold">No matching articles</p>
              <p className="text-zinc-400 mt-2">
                Try another category chip or change your search.
              </p>
            </div>
          ) : (
            <>
              <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* hero */}
                {featured ? (
                  <Link
                    to={`/newsletter/${featured.slug}`}
                    className="lg:col-span-2 group rounded-[28px] overflow-hidden border border-[#2b2b2b] bg-[#131314] hover:border-blue-500/50 transition-colors"
                  >
                    <div className="relative">
                      <div className="relative aspect-[16/9] lg:aspect-[16/8]">
                        <img
                          src={featured.coverSrc}
                          alt={featured.title}
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                      </div>

                      <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
                        <div className="flex items-center justify-between gap-4">
                          <span className="inline-flex items-center text-xs font-semibold px-3 py-1.5 rounded-full border border-white/10 bg-black/40">
                            Top story • {featured.category}
                          </span>
                          <div className="inline-flex items-center gap-2 text-blue-300 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                            Read <FiArrowUpRight />
                          </div>
                        </div>
                        <h2 className="mt-3 text-2xl lg:text-4xl font-extrabold leading-tight">
                          {featured.title}
                        </h2>
                        <p className="mt-3 text-zinc-200/90 max-w-2xl">
                          {featured.excerpt}
                        </p>
                        <div className="mt-4">
                          <ArticleMeta a={featured} />
                        </div>
                      </div>
                    </div>
                  </Link>
                ) : null}

                {/* trending */}
                <div className="rounded-[28px] border border-[#2b2b2b] bg-[#131314] p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-extrabold">Trending</h3>
                    <span className="text-xs text-zinc-400">Top picks</span>
                  </div>
                  <div className="mt-4 space-y-4">
                    {trending.map((a) => (
                      <Link
                        key={a.slug}
                        to={`/newsletter/${a.slug}`}
                        className="group flex gap-4 rounded-2xl border border-transparent hover:border-white/10 hover:bg-white/5 p-3 transition-colors"
                      >
                        <div className="h-14 w-14 rounded-xl overflow-hidden border border-white/10 shrink-0">
                          <img
                            src={a.coverSrc}
                            alt={a.title}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs text-zinc-400">
                            {a.category} • {formatDate(a.date)}
                          </div>
                          <div className="mt-1 font-bold truncate group-hover:text-white">
                            {a.title}
                          </div>
                          <div className="mt-1 text-xs text-zinc-400">
                            {readingTimeMinutes(a)} min read
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* grid */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {rest.map((a) => (
                  <Link
                    key={a.slug}
                    to={`/newsletter/${a.slug}`}
                    className="group rounded-[24px] border border-[#2b2b2b] bg-[#131314] overflow-hidden hover:-translate-y-1 hover:border-blue-500/40 transition-all duration-200"
                  >
                    <div className="relative aspect-[16/10]">
                      <img
                        src={a.coverSrc}
                        alt={a.title}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span className="text-xs font-semibold px-3 py-1.5 rounded-full border border-white/10 bg-black/40">
                          {a.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <ArticleMeta a={a} />
                      <h3 className="mt-3 font-extrabold text-xl leading-snug">
                        {a.title}
                      </h3>
                      <p className="mt-3 text-sm text-zinc-400">{a.excerpt}</p>
                      <div className="mt-5 inline-flex items-center gap-2 text-blue-300 font-semibold">
                        Read <FiArrowUpRight />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
