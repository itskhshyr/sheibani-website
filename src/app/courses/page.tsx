import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CoursesExplorer } from "@/components/courses-explorer";
import { courses } from "@/data/courses";
export const metadata = {
  title: "دوره‌های آموزشی | آکادمی امین شیبانی",
  description: "کاتالوگ دوره‌های آموزشی بازارهای مالی آکادمی امین شیبانی.",
};
export default function CoursesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
            <p className="text-xs font-semibold tracking-[.18em] text-primary">
              کتابخانه یادگیری
            </p>
            <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
              دوره‌هایی برای دیدن بهتر بازار
            </h1>
            <p className="mt-5 max-w-2xl text-sm lg:text-[16px] leading-8 text-muted-foreground">
              دوره‌ها در دسته‌های مختلف بازارهای مالی، تحلیل تکنیکال و مهارت‌های
              حرفه‌ای. اطلاعات قیمت و مدت، فقط پس از تأیید نهایی نمایش داده
              می‌شوند.
            </p>
          </div>
        </section>
        <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-20">
          <CoursesExplorer courses={courses} />
        </section>
      </main>
      <Footer />
    </>
  );
}
