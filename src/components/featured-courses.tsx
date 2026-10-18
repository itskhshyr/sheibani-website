import Link from "next/link";
import { courses } from "@/data/courses";
import { CourseCard } from "./course-card";
import Image from "next/image";
export function FeaturedCourses() {
  return (
    <section className="relative z-10 border-b border-border ">
        <Image src="/assets/bg-2.png" fill alt="" className="bg-contain -z-10" />
              <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold tracking-[.18em] text-primary">
              مسیر یادگیری
            </p>
            <h2 className="mt-3 text-3xl font-semibold">دوره‌های منتخب</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              اطلاعات دوره‌ها تا زمان تأیید نهایی، نمونه و قابل جایگزینی هستند.
            </p>
          </div>
          <Link href="/courses" className="text-sm font-medium text-primary">
            مشاهده همه دوره‌ها ←
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {courses
            .filter((c) => c.featured)
            .map((c) => (
              <CourseCard key={c.id} course={c} />
            ))}
        </div>
      </div>
    </section>
  );
}
