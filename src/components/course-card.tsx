"use client";
import Image from "next/image";
import { ArrowUpLeft, Star } from "lucide-react";
import type { Course } from "@/types";
import { categoryLabels } from "@/types";

export function CourseCard({ course, onOpen }: { course: Course; onOpen?: (course: Course) => void }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-card transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_18px_45px_-28px_rgba(22,124,99,.5)]">
      <div className="relative h-48 overflow-hidden bg-accent"><Image src={course.cover ?? "/assets/premium-courses/1.png"} alt={course.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" /></div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-2"><span className="rounded-full bg-accent px-3 py-1 text-[11px] font-medium text-primary">{categoryLabels[course.category]}</span>{course.featured && <span className="flex items-center gap-1 text-[11px] text-primary"><Star className="h-3.5 w-3.5 fill-primary" /> ویژه</span>}</div>
        <h3 className="mt-4 text-lg font-semibold">{course.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-7 text-muted-foreground">{course.description}</p>
        <div className="mt-4 flex items-end justify-between gap-3"><div><span className="block text-[11px] text-muted-foreground">هزینه دوره</span><strong className="mt-1 block text-base text-primary">تماس با پشتیبانی</strong></div><button type="button" onClick={() => onOpen ? onOpen(course) : (window.location.href = "/courses")} className="inline-flex items-center gap-1 text-nowrap text-sm font-medium text-primary">مشاهده جزئیات<ArrowUpLeft className="h-4 w-4" /></button></div>
      </div>
    </article>
  );
}
