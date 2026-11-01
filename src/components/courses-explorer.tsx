"use client";
import { useMemo, useState } from "react";
import { Search, X, Clock, Check } from "lucide-react";
import type { Course, CourseCategory } from "@/types";
import { categoryLabels } from "@/types";
import { CourseCard } from "./course-card";
import { CourseArt } from "./course-art";

const options: [CourseCategory | "all", string][] = [["all", "همه"], ["technical-analysis", "تحلیل تکنیکال"]];

export function CoursesExplorer({ courses }: { courses: Course[] }) {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<CourseCategory | "all">("all");
  const [selected, setSelected] = useState<Course | null>(null);
  const filtered = useMemo(() => courses.filter((course) => (cat === "all" || course.category === cat) && (course.title + " " + course.description + " " + (course.highlights || []).join(" ")).includes(query)), [courses, cat, query]);

  return <>
    <div className="rounded-2xl border border-border bg-card p-4"><label className="relative block"><Search className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="دوره مورد نظر را جستجو کنید..." className="h-12 w-full rounded-xl border border-border bg-background pr-11 pl-4 text-sm outline-none focus:border-primary" /></label><div className="mt-4 flex gap-2 overflow-x-auto pb-1">{options.map(([value, label]) => <button key={value} type="button" onClick={() => setCat(value)} className={"whitespace-nowrap rounded-full px-4 py-2 text-xs " + (cat === value ? "bg-primary text-white" : "bg-background text-muted-foreground")}>{label}</button>)}</div></div>
    <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{filtered.map((course) => <CourseCard key={course.id} course={course} onOpen={setSelected} />)}</div>
    {filtered.length === 0 && <p className="py-20 text-center text-sm text-muted-foreground">دوره‌ای پیدا نشد.</p>}
    {selected && <div className="fixed inset-0 z-50 flex items-end justify-center bg-foreground/40 p-0 backdrop-blur-sm sm:items-center sm:p-6" onClick={() => setSelected(null)}><div className="max-h-[90vh] w-full max-w-2xl overflow-auto rounded-t-3xl bg-card sm:rounded-3xl" onClick={(event) => event.stopPropagation()}><div className="relative"><CourseArt variant={selected.art} className="h-44" /><button type="button" aria-label="بستن جزئیات" onClick={() => setSelected(null)} className="absolute left-4 top-4 rounded-full bg-background/90 p-2"><X className="h-4 w-4" /></button></div><div className="p-6 sm:p-8"><div className="flex flex-wrap items-center gap-2"><span className="rounded-full bg-accent px-3 py-1 text-xs text-primary">{categoryLabels[selected.category]}</span><span className="rounded-full bg-primary px-3 py-1 text-xs text-white">جزئیات دوره</span></div><h2 className="mt-5 text-2xl font-semibold">{selected.title}</h2><p className="mt-3 text-sm leading-7 text-muted-foreground">{selected.description}</p><div className="mt-7"><h3 className="text-sm font-semibold">سرفصل‌های دوره</h3><ul className="mt-4 space-y-3">{selected.highlights?.map((highlight) => <li key={highlight} className="flex items-start gap-2 text-sm leading-7"><Check className="mt-1 h-4 w-4 shrink-0 text-primary" />{highlight}</li>)}</ul></div><div className="mt-7 flex flex-wrap items-center gap-5 border-t border-border pt-5 text-sm"><span className="flex items-center gap-1.5 text-muted-foreground"><Clock className="h-4 w-4" />{selected.duration}</span><a href="/contact" className="mr-auto rounded-full bg-primary px-5 py-2.5 font-medium text-primary-foreground transition-opacity hover:opacity-90">تماس با پشتیبانی</a></div></div></div></div>}
  </>;
}
