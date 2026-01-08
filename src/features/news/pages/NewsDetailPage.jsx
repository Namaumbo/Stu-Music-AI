/* eslint-disable react/prop-types */
import { Link, useParams } from "react-router-dom";
import { NEWS_ARTICLES } from "@/features/news/state/newsArticles.js";
import { FiArrowUpRight } from "react-icons/fi";

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
  const text = [article.title, article.excerpt, ...(article.body ?? [])].join(" ");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return minutes;
}

export default function NewsDetailPage() {
  const { slug } = useParams();
  const article = NEWS_ARTICLES.find((a) => a.slug === slug);
  const related = NEWS_ARTICLES.filter(
    (a) => a.slug !== slug && a.category === article?.category
  ).slice(0, 3);

  if (!article) {
    return (
      <div className="h-full overflow-y-auto bg-[#0d1117] text-white">
        <div className="px-6 py-10 max-w-3xl">
          <p className="text-zinc-400">Article not found.</p>
          <Link
            to="/newsletter"
            className="mt-4 inline-flex items-center gap-2 text-blue-400 font-semibold"
          >
            ← Back to News
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto bg-[#0d1117] text-white">
      <div className="pointer-events-none absolute inset-x-0 -top-40 h-80 bg-[radial-gradient(closest-side,rgba(59,130,246,0.20),transparent)]" />

      <div className="px-6 py-8">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/newsletter"
            className="inline-flex items-center gap-2 text-blue-300 font-semibold"
          >
            ← Back to News
          </Link>

          <div className="mt-6 rounded-[30px] overflow-hidden border border-[#2b2b2b] bg-[#131314]">
            <div className="relative">
              <div className="relative aspect-[16/9] lg:aspect-[16/7]">
                <img
                  src={article.coverSrc}
                  alt={article.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6 lg:p-10">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center text-xs font-semibold px-3 py-1.5 rounded-full border border-white/10 bg-black/40">
                    {article.category}
                  </span>
                  <span className="text-xs text-zinc-300">
                    {formatDate(article.date)} • {article.author} •{" "}
                    {readingTimeMinutes(article)} min read
                  </span>
                </div>

                <h1 className="mt-4 text-3xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                  {article.title}
                </h1>
                <p className="mt-4 text-zinc-200/90 text-lg max-w-3xl">
                  {article.excerpt}
                </p>
              </div>
            </div>

            <div className="p-6 lg:p-10">
              <div className="max-w-3xl">
                <div className="space-y-5 text-zinc-200 leading-relaxed text-[15px] lg:text-[16px]">
                  {article.body.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>

              {related.length > 0 ? (
                <div className="mt-10 pt-8 border-t border-white/5">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-extrabold">Related</h2>
                      <p className="text-sm text-zinc-400">
                        More from {article.category}
                      </p>
                    </div>
                    <Link
                      to="/newsletter"
                      className="text-blue-300 font-semibold inline-flex items-center gap-2"
                    >
                      All news <FiArrowUpRight />
                    </Link>
                  </div>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {related.map((a) => (
                      <Link
                        key={a.slug}
                        to={`/newsletter/${a.slug}`}
                        className="group rounded-[22px] border border-[#2b2b2b] bg-black/10 overflow-hidden hover:-translate-y-1 hover:border-blue-500/40 transition-all duration-200"
                      >
                        <div className="relative aspect-[16/10]">
                          <img
                            src={a.coverSrc}
                            alt={a.title}
                            className="h-full w-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                          <div className="absolute top-3 left-3">
                            <span className="text-xs font-semibold px-3 py-1.5 rounded-full border border-white/10 bg-black/40">
                              {a.category}
                            </span>
                          </div>
                        </div>
                        <div className="p-5">
                          <div className="text-xs text-zinc-400">
                            {formatDate(a.date)} • {readingTimeMinutes(a)} min read
                          </div>
                          <div className="mt-2 font-extrabold leading-snug">
                            {a.title}
                          </div>
                          <div className="mt-2 text-sm text-zinc-400">
                            {a.excerpt}
                          </div>
                          <div className="mt-4 inline-flex items-center gap-2 text-blue-300 font-semibold">
                            Read <FiArrowUpRight />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


