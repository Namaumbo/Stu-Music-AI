/* eslint-disable react/prop-types */
import { CiSearch } from "react-icons/ci";
import { FiX } from "react-icons/fi";

/**
 * Reusable page header component with search, filters, and category chips
 * @param {Object} props
 * @param {string} props.badge - Badge text (e.g., "NyasaBeats • Newsroom")
 * @param {string} props.title - Main title
 * @param {string} props.description - Description text
 * @param {boolean} props.showSearch - Show search box
 * @param {string} props.searchQuery - Current search query
 * @param {Function} props.onSearchChange - Search change handler
 * @param {string} props.searchPlaceholder - Search placeholder text
 * @param {number} props.resultCount - Number of results to display
 * @param {boolean} props.showSort - Show sort dropdown
 * @param {string} props.sortValue - Current sort value
 * @param {Function} props.onSortChange - Sort change handler
 * @param {Array} props.sortOptions - Array of sort options {value, label}
 * @param {Array} props.categories - Array of category buttons
 * @param {string} props.activeCategory - Currently active category
 * @param {Function} props.onCategoryChange - Category change handler
 * @param {React.ReactNode} props.extraContent - Additional content to render in the header
 */
export default function PageHeader({
  badge,
  title,
  description,
  showSearch = false,
  searchQuery = "",
  onSearchChange,
  searchPlaceholder = "Search...",
  resultCount,
  showSort = false,
  sortValue,
  onSortChange,
  sortOptions = [],
  categories = [],
  activeCategory,
  onCategoryChange,
  extraContent,
}) {
  return (
    <>
      {/* top glow effect */}
      <div className="pointer-events-none absolute inset-x-0 -top-40 h-80 bg-[radial-gradient(closest-side,rgba(59,130,246,0.25),transparent)]" />

      <div className="px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              {badge && (
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-zinc-200">
                  {badge}
                </div>
              )}
              <h1 className="mt-4 text-4xl lg:text-6xl font-extrabold tracking-tight">
                {title}
              </h1>
              {description && (
                <p className="mt-3 text-zinc-400 max-w-2xl">{description}</p>
              )}
            </div>

            {showSearch && (
              <div className="rounded-3xl border border-[#2b2b2b] bg-[#131314] p-4 w-full lg:w-[26rem]">
                <div className="relative">
                  <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                  <input
                    value={searchQuery}
                    onChange={(e) => onSearchChange?.(e.target.value)}
                    placeholder={searchPlaceholder}
                    className="w-full h-11 pl-10 pr-10 rounded-2xl bg-black/20 border border-[#2b2b2b] text-white outline-none focus:border-blue-500/70"
                  />
                  {searchQuery ? (
                    <button
                      type="button"
                      onClick={() => onSearchChange?.("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
                      aria-label="Clear search"
                    >
                      <FiX />
                    </button>
                  ) : null}
                </div>

                {(resultCount !== undefined || showSort) && (
                  <div className="mt-3 flex items-center justify-between gap-3">
                    {resultCount !== undefined && (
                      <div className="text-sm text-zinc-400">
                        Showing{" "}
                        <span className="text-white font-bold">
                          {resultCount}
                        </span>{" "}
                        results
                      </div>
                    )}
                    {showSort && (
                      <select
                        value={sortValue}
                        onChange={(e) => onSortChange?.(e.target.value)}
                        className="h-10 rounded-full bg-black/20 border border-[#2b2b2b] text-white px-4 outline-none focus:border-blue-500/70"
                      >
                        {sortOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    )}
                  </div>
                )}
              </div>
            )}

            {extraContent}
          </div>

          {/* Category chips */}
          {categories.length > 0 && (
            <div className="sticky top-0 z-10 mt-8 -mx-6 px-6 py-3 bg-[#0d1117]/80 backdrop-blur border-b border-white/5">
              <div className="max-w-6xl mx-auto flex items-center gap-3 overflow-x-auto no-scrollbar">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => onCategoryChange?.(category)}
                    className={[
                      "shrink-0 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold",
                      "border transition-colors",
                      activeCategory === category
                        ? "border-blue-500/60 bg-blue-500/10 text-white"
                        : "border-[#2b2b2b] bg-[#131314] text-zinc-300 hover:text-white hover:border-white/15",
                    ].join(" ")}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

