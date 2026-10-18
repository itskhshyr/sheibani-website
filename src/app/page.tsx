import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { FeaturedCourses } from "@/components/featured-courses";
import { About } from "@/components/about";
import { VideoGallery } from "@/components/video-gallery";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { videos } from "@/data/videos";
import { RevealOnMount } from "@/components/reveal-on-mount";
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedCourses />
        <About />
        <section id="videos" className="border-t border-border">
          <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
            <p className="text-xs font-semibold tracking-[.18em] text-primary">
              محتوای رایگان
            </p>
            <h2 className="mt-3 text-3xl font-semibold">ویدیوهای آموزشی</h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
              تحلیل بازار، آموزش‌های کوتاه و پیش‌نمایش دوره‌ها؛ برای آشنایی با
              سبک آموزش آکادمی.
            </p>
            <div className="mt-8">
              <VideoGallery videos={videos} />
            </div>
          </div>
        </section>
        <FinalCTA />
      </main>
      <Footer />
      <RevealOnMount />
    </>
  );
}
