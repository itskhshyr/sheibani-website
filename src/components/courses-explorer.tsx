"use client";
import { useMemo, useState } from "react";
import { Search, X, Clock, Check, Users } from "lucide-react";
import type { Course, CourseCategory } from "@/types";
import { categoryLabels } from "@/types";
import { formatPrice } from "@/lib/format";
import { CourseCard } from "./course-card";
import { CourseArt } from "./course-art";
const options: [CourseCategory | "all", string][] = [
  ["all", "\u0647\u0645\u0647"],
  ["crypto", "\u0627\u0631\u0632 \u062f\u06cc\u062c\u06cc\u062a\u0627\u0644"],
  [
    "technical-analysis",
    "\u062a\u062d\u0644\u06cc\u0644 \u062a\u06a9\u0646\u06cc\u06a9\u0627\u0644",
  ],
  [
    "forex-global",
    "\u0641\u0627\u0631\u06a9\u0633 \u0648 \u0628\u0627\u0632\u0627\u0631\u0647\u0627\u06cc \u062c\u0647\u0627\u0646\u06cc",
  ],
  [
    "us-stocks",
    "\u0628\u0648\u0631\u0633 \u0622\u0645\u0631\u06cc\u06a9\u0627",
  ],
  [
    "psychology-risk",
    "\u0631\u0648\u0627\u0646\u0634\u0646\u0627\u0633\u06cc \u0648 \u0645\u062f\u06cc\u0631\u06cc\u062a \u0631\u06cc\u0633\u06a9",
  ],
  [
    "business",
    "\u0645\u0647\u0627\u0631\u062a\u200c\u0647\u0627\u06cc \u06a9\u0633\u0628\u200c\u0648\u06a9\u0627\u0631",
  ],
];
export function CoursesExplorer({ courses }: { courses: Course[] }) {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<CourseCategory | "all">("all");
  const [sort, setSort] = useState("newest");
  const [selected, setSelected] = useState<Course | null>(null);
  const filtered = useMemo(
    () =>
      courses
        .filter(
          (c) =>
            (cat === "all" || c.category === cat) &&
            (
              c.title +
              " " +
              c.description +
              " " +
              (c.highlights || []).join(" ")
            ).includes(query)
        )
        .sort((a, b) =>
          sort === "newest"
            ? b.date.localeCompare(a.date)
            : (a.price ?? Infinity) - (b.price ?? Infinity)
        ),
    [courses, cat, query, sort]
  );
  return (
    <>
      <div className="rounded-2xl border border-border bg-card p-4">
        <div className="flex flex-col gap-3 lg:flex-row">
          <label className="relative flex-1">
            <Search className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="دوره مد نظر را جستجو کنید..."
              className="h-12 w-full rounded-xl border border-border bg-background pr-11 pl-4 text-sm outline-none focus:border-primary"
            />
          </label>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="h-12 rounded-xl border border-border bg-background px-4 text-sm outline-none"
          >
            <option value="newest">جدید ترین</option>
            <option value="price">قیمت</option>
          </select>
        </div>
        <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
          {options.map(([value, label]) => (
            <button
              key={value}
              type="button"
              onClick={() => setCat(value)}
              className={
                "whitespace-nowrap rounded-full px-4 py-2 text-xs " +
                (cat === value
                  ? "bg-primary text-white"
                  : "bg-background text-muted-foreground")
              }
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((c) => (
          <CourseCard key={c.id} course={c} onOpen={setSelected} />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="py-20 text-center text-sm text-muted-foreground ">
          وجود ندارد
        </p>
      )}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-foreground/40 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          onClick={() => setSelected(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-2xl overflow-auto rounded-t-3xl bg-card sm:rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <CourseArt variant={selected.art} className="h-44" />
              <button
                type="button"
                aria-label="مشاهده جزییات"
                onClick={() => setSelected(null)}
                className="absolute left-4 top-4 rounded-full bg-background/90 p-2"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-accent px-3 py-1 text-xs text-primary">
                  {categoryLabels[selected.category]}
                </span>
                {selected.featured && (
                  <span className="rounded-full bg-primary px-3 py-1 text-xs text-white">
                    جزییات دوره
                  </span>
                )}
              </div>
              <h2 className="mt-5 text-2xl font-semibold">{selected.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {selected.description}
              </p>
              <div className="mt-7">
                <h3 className="text-sm font-semibold ">مسیر پیش رو</h3>
                {selected.highlights && (
                  <ul className="mt-4 space-y-3">
                    {selected.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-sm leading-7"
                      >
                        <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="mt-7 flex flex-wrap items-center gap-5 border-t border-border pt-5 text-sm">
                <span className="flex items-center gap-1.5 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {selected.duration}
                </span>
                {selected.category === "business" && (
                  <span className="flex items-center gap-1.5 text-muted-foreground">
                    <Users className="h-4 w-4 " />
                    تعداد نفرات
                  </span>
                )}
                <strong className="mr-auto text-lg text-primary">
                  {selected.price
                    ? formatPrice(selected.price)
                    : "\u062f\u0631 \u0627\u0646\u062a\u0638\u0627\u0631 \u062a\u0627\u06cc\u06cc\u062f"}
                </strong>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
