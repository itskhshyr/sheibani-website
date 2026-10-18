import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { site } from "@/data/site";
export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,#e6f2ec_0,transparent_38%)]" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:py-32">
        <div className="relative">
          <p className="text-sm font-medium text-primary">{site.name}</p>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.3] sm:leading-[1.4] lg:leading-[4.5rem] sm:text-5xl lg:text-[3.25rem]">
            بازار را از دریچه یک تحلیلگر ارشد ببینید، نه یک تماشاگر.
          </h1>

          <p className="mt-7 max-w-2xl text-base lg:text-[16px] leading-8 text-muted-foreground">
            آموزش کاربردی بازارهای مالی، از تحلیل تکنیکال و مدیریت سرمایه تا
            شناخت بازارهای جهانی؛ با تکیه بر تجربه عملی و نگاه تحلیلی.
          </p>
          <p className="mt-5 text-sm">
            {site.instructor} <span className="mx-2 text-border">|</span>
            <span className="text-muted-foreground">
              {site.instructorTitle}
            </span>
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/courses"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition hover:bg-primary/90"
            >
              مشاهده دوره‌ها
              <ArrowLeft className="h-4 w-4" />
            </Link>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium transition hover:border-primary/40"
            >
              درباره آکادمی
              <ChevronDown className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="reveal-scale relative mx-auto w-full max-w-md ">
          <div className="relative  aspect-square overflow-hidden rounded-[2rem] ">
            <Image
              //   src="/assets/amin-sheibani-office.webp"
              src="/assets/me-vector.png"
              alt="امین شیبانی در فضای تحلیل بازار"
              fill
              className="object-cover opacity-90"
              sizes="(max-width: 1024px) 90vw, 420px"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-foreground/15 via-transparent to-transparent" />
      
            <div className="absolute inset-3 rounded-[1.6rem] border border-white/20" />
          </div>
          <div className="hidden">
            <div className="flex h-full flex-col justify-between rounded-[1.5rem] border border-primary/15 bg-background/60 p-6">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>MARKET VIEW</span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">
                  تحلیل
                </span>
              </div>
              <svg
                className="h-56 w-full text-primary"
                viewBox="0 0 360 220"
                fill="none"
              >
                <path
                  d="M10 184C50 170 55 143 86 150C118 157 119 105 152 117C186 129 191 73 224 89C260 107 269 56 305 55C328 54 338 26 350 18"
                  stroke="currentColor"
                  strokeWidth="3"
                />
                <path
                  d="M10 184H350M10 130H350M10 76H350"
                  stroke="currentColor"
                  strokeOpacity=".12"
                />
              </svg>
              <div>
                <p className="text-2xl font-semibold">دیدن ساختار پشت نمودار</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  دانش، انضباط، تصمیم بهتر
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
