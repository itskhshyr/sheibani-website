// import Image from "next/image";
// import { BarChart3, BookOpen, Target } from "lucide-react";
// import { site } from "@/data/site";
// import { toPersianDigits } from "@/lib/format";
// const highlights = [
//   [
//     BarChart3,
//     "ØªØ¬Ø±Ø¨Ù‡ Ø¹Ù…Ù„ÛŒ",
//     "Ø¢Ù…ÙˆØ²Ø´ Ø¨Ø±Ø¢Ù…Ø¯Ù‡ Ø§Ø² Ù…ÙˆØ§Ø¬Ù‡Ù‡ ÙˆØ§Ù‚Ø¹ÛŒ Ø¨Ø§ Ø¨Ø§Ø²Ø§Ø±.",
//   ],
//   [
//     BookOpen,
//     "Ø¢Ù…ÙˆØ²Ø´ Ú©Ø§Ø±Ø¨Ø±Ø¯ÛŒ",
//     "Ù…ÙØ§Ù‡ÛŒÙ… Ù¾ÛŒÚ†ÛŒØ¯Ù‡ØŒ Ø±ÙˆØ´Ù† Ùˆ Ù‚Ø§Ø¨Ù„ Ø§Ø¬Ø±Ø§.",
//   ],
//   [
//     Target,
//     "Ù†Ú¯Ø§Ù‡ Ù…Ø³ØªÙ‚Ù„",
//     "Ø³Ø§Ø®ØªÙ† ØªØ­Ù„ÛŒÙ„ Ø´Ø®ØµÛŒ Ø¨Ù‡â€ŒØ¬Ø§ÛŒ ÙˆØ§Ø¨Ø³ØªÚ¯ÛŒ Ø¨Ù‡ Ø³ÛŒÚ¯Ù†Ø§Ù„.",
//   ],
// ];
// export function About() {
//   return (
//     <section id="about" className="border-t border-border">
//       <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
//         <div className="grid items-center gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
//           <div className="reveal-left relative mx-auto w-full max-w-md">
//             <div className="absolute -inset-4 rounded-[2rem] border border-primary/15" />
//             <div className="relative overflow-hidden rounded-[1.75rem] bg-accent p-2 shadow-[0_25px_60px_-30px_rgba(22,124,99,.5)]">
//               <Image
//                 src="/assets/amin-sheibani-portrait.png"
//                 alt="portrait"
//                 width={1024}
//                 height={1024}
//                 className="aspect-[4/5] w-full object-cover"
//               />
//               <div className="absolute bottom-5 right-5 rounded-xl border border-white/30 bg-foreground/75 px-4 py-3 text-white backdrop-blur">
//                 <strong className="block text-sm">{site.instructor}</strong>
//                 <span className="text-[11px] text-white/70">
//                   {site.instructorTitle}
//                 </span>
//               </div>
//             </div>
//           </div>
//           <div>
//             <p className="reveal text-xs font-semibold tracking-[.18em] text-primary">
//               Ø¯Ø±Ø¨Ø§Ø±Ù‡ Ù…Ù†
//             </p>
//             <h2 className="reveal mt-4 text-3xl font-semibold">
//               ØªØ¬Ø±Ø¨Ù‡â€ŒØ§ÛŒ Ú©Ù‡ Ø¨Ù‡ Ø²Ø¨Ø§Ù† Ø³Ø§Ø¯Ù‡ Ù…Ù†ØªÙ‚Ù„
//               Ù…ÛŒâ€ŒØ´ÙˆØ¯.
//             </h2>
//             <p className="reveal mt-6 text-sm leading-8 text-muted-foreground">
//               Ø¨ÛŒØ´ Ø§Ø² {toPersianDigits(site.experienceYears)} Ø³Ø§Ù„ Ø§Ø³Øª
//               Ú©Ù‡ Ø¨Ø§ Ø¨Ø§Ø²Ø§Ø±Ù‡Ø§ÛŒ Ù…Ø§Ù„ÛŒØŒ Ø§Ø² Ø§Ø±Ø² Ø¯ÛŒØ¬ÛŒØªØ§Ù„
//               Ùˆ ÙØ§Ø±Ú©Ø³ ØªØ§ Ø¨ÙˆØ±Ø³ Ø¢Ù…Ø±ÛŒÚ©Ø§ØŒ Ø²Ù†Ø¯Ú¯ÛŒ
//               Ù…ÛŒâ€ŒÚ©Ù†Ù…. Ø¯Ø± Ø§ÛŒÙ† Ù…Ø³ÛŒØ±ØŒ ØªÙ…Ø±Ú©Ø² Ù…Ù† Ù‡Ù…ÛŒØ´Ù‡
//               Ø±ÙˆÛŒ Ø³Ø§Ø®ØªÙ† Ù†Ú¯Ø§Ù‡ ØªØ­Ù„ÛŒÙ„ÛŒ Ùˆ ØªØµÙ…ÛŒÙ…â€ŒÚ¯ÛŒØ±ÛŒ
//               Ù…Ø³ØªÙ‚Ù„ Ø¨ÙˆØ¯Ù‡ Ø§Ø³Øª.
//             </p>
//             <p className="reveal mt-4 text-sm leading-8 text-muted-foreground">
//               Ù‡Ø¯Ù Ø¢Ù…ÙˆØ²Ø´ Ø¯Ø± Ø¢Ú©Ø§Ø¯Ù…ÛŒØŒ Ø§Ø±Ø§Ø¦Ù‡ Ø§Ø¨Ø²Ø§Ø±Ù‡Ø§ÛŒ
//               Ú©Ø§Ø±Ø¨Ø±Ø¯ÛŒ Ø¨Ø±Ø§ÛŒ ÙÙ‡Ù… Ø¨Ø§Ø²Ø§Ø±ØŒ Ù…Ø¯ÛŒØ±ÛŒØª
//               Ø³Ø±Ù…Ø§ÛŒÙ‡ Ùˆ Ø³Ø§Ø®ØªÙ† ÛŒÚ© Ù…Ø³ÛŒØ± Ø­Ø±ÙÙ‡â€ŒØ§ÛŒ Ø§Ø³Øª.
//             </p>
//             <div className="reveal mt-8 grid grid-cols-2 gap-4">
//               <div className="rounded-2xl bg-accent p-5">
//                 <strong className="text-3xl text-primary">
//                   {toPersianDigits(site.experienceYears)}+
//                 </strong>
//                 <span className="mt-2 block text-xs text-muted-foreground">
//                   Ø³Ø§Ù„ ØªØ¬Ø±Ø¨Ù‡
//                 </span>
//               </div>
//               <div className="rounded-2xl bg-accent p-5">
//                 <strong className="text-3xl text-primary">
//                   {toPersianDigits(site.coursesHeld)}+
//                 </strong>
//                 <span className="mt-2 block text-xs text-muted-foreground">
//                   Ø¯ÙˆØ±Ù‡ Ø¨Ø±Ú¯Ø²Ø§Ø±Ø´Ø¯Ù‡
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="mt-16 grid gap-4 sm:grid-cols-3">
//           {highlights.map(([Icon, title, text]) => {
//             const I = Icon as typeof BarChart3;
//             return (
//               <div
//                 key={title as string}
//                 className="reveal rounded-2xl border border-border bg-card p-6"
//               >
//                 <I className="h-6 w-6 text-primary" strokeWidth={1.5} />
//                 <h3 className="mt-5 font-semibold">{title as string}</h3>
//                 <p className="mt-2 text-sm leading-7 text-muted-foreground">
//                   {text as string}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import { BarChart3, BookOpen, Target, BriefcaseBusiness } from "lucide-react";
import { site } from "@/data/site";
import { toPersianDigits } from "@/lib/format";

const highlights = [
  {
    icon: BarChart3,
    title: "تجربه عملی در بازار",
    text: "بیش از ۱۴ سال حضور فعال در بازارهای مالی و تجربه مستقیم در تحلیل، آموزش و مدیریت محصول.",
  },
  {
    icon: BookOpen,
    title: "آموزش کاربردی",
    text: "برگزاری بیش از ۲۵ دوره آموزشی حضوری و غیرحضوری در حوزه تحلیل تکنیکال، مدیریت سرمایه، روانشناسی بازار و بازارهای جهانی.",
  },
  {
    icon: Target,
    title: "نگاه مستقل و تحلیلی",
    text: "هدف آموزش، ساختن توانایی تحلیل و تصمیم‌گیری مستقل است؛ نه وابستگی به سیگنال و هیجان بازار.",
  },
  {
    icon: BriefcaseBusiness,
    title: "تجربه در کسب‌وکار",
    text: "فعالیت به‌عنوان کوچ کسب‌وکار و همراهی با کارآفرینان و فعالان اقتصادی در مسیر رشد حرفه‌ای.",
  },
];

const careerItems = [
  {
    title: "مدیر محصول و تحلیلگر ارشد",
    description:
      "شرکت پردازش اطلاعات مالی پارت — اپلیکیشن و وبسایت سیگنال؛ از سال ۱۳۹۸ تا ۱۴۰۴",
  },
  {
    title: "مؤلف و سردبیر علمی",
    description:
      "همکاری با مجموعه‌های خانه سرمایه و نارون — از سال ۱۳۹۹ تا ۱۴۰۱",
  },
  {
    title: "مدرس بازارهای مالی",
    description:
      "برگزاری بیش از ۲۵ دوره آموزشی در حوزه تحلیل تکنیکال، مدیریت سرمایه، روانشناسی بازار و بازارهای جهانی",
  },
  {
    title: "کوچ کسب‌وکار",
    description:
      "کوچینگ و مشاوره بنگاه‌های اقتصادی در حوزه برند، مدل کسب‌وکار، متقاعدسازی، مارکتینگ، فروش و فن بیان",
  },
];

export function About() {
  return (
    <section id="about" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="reveal-left relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-[2rem] border border-primary/15" />

            <div className="relative overflow-hidden rounded-[1.75rem] bg-accent p-2 shadow-[0_25px_60px_-30px_rgba(22,124,99,.5)]">
              <Image
                src="/assets/amin-sheibani-portrait.png"
                alt="محمدامین شیبانی، مدرس و تحلیلگر ارشد بازارهای مالی"
                width={1024}
                height={1024}
                className="aspect-[4/5] w-full object-cover  rounded-3xl"
              />

              <div className="absolute bottom-5 right-5 rounded-xl border border-white/30 bg-foreground/75 px-4 py-3 text-white backdrop-blur">
                <strong className="block text-sm">
                  {site.instructor}
                </strong>

                <span className="text-[11px] text-white/70">
                  {site.instructorTitle}
                </span>
              </div>
            </div>
          </div>

          <div>
            <p className="reveal text-xs font-semibold tracking-[0.18em] text-primary">
              درباره من
            </p>

            <h2 className="reveal mt-4 text-3xl font-semibold leading-tight">
              تجربه بازار، آموزش کاربردی و نگاه حرفه‌ای
            </h2>

            <p className="reveal mt-6 text-sm leading-8 text-muted-foreground">
              با بیش از ۱۴ سال حضور فعال در بازارهای مالی، مسیرم را از
              تحلیل‌گری شروع کردم و امروز به‌عنوان مدرس و تحلیلگر ارشد بازار،
              تجربه‌ام را در قالب دوره‌های آموزشی کاربردی در اختیار علاقه‌مندان
              قرار می‌دهم.
            </p>

            <p className="reveal mt-4 text-sm leading-8 text-muted-foreground">
              در کنار تدریس، به‌عنوان مدیر محصول یکی از پرمخاطب‌ترین
              اپلیکیشن‌ها و وبسایت‌های مالی ایران فعالیت کرده‌ام و مسئولیت‌هایی
              را در نهادهای مالی معتبر کشور بر عهده داشته‌ام. همچنین به‌عنوان
              کوچ کسب‌وکار، در کنار کارآفرینان و فعالان اقتصادی بوده‌ام.
            </p>

            <div className="reveal mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-accent p-5">
                <strong className="text-3xl text-primary">
                  {toPersianDigits(site.experienceYears)}+
                </strong>

                <span className="mt-2 block text-xs text-muted-foreground">
                  سال سابقه کاری
                </span>
              </div>

              <div className="rounded-2xl bg-accent p-5">
                <strong className="text-3xl text-primary">
                  {toPersianDigits(site.coursesHeld)}+
                </strong>

                <span className="mt-2 block text-xs text-muted-foreground">
                  دوره آموزشی برگزارشده
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="reveal rounded-2xl border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_18px_40px_-28px_rgba(22,124,99,.45)]"
              >
                <Icon
                  className="h-6 w-6 text-primary"
                  strokeWidth={1.5}
                />

                <h3 className="mt-5 font-semibold">{item.title}</h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

        <div className="reveal mt-16 rounded-3xl border border-border bg-card p-6 sm:p-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-primary">
                مسیر حرفه‌ای
              </p>

              <h3 className="mt-3 text-2xl font-semibold">
                تجربه‌هایی که مسیر آموزش را ساخته‌اند
              </h3>
            </div>

            <BriefcaseBusiness className="hidden h-8 w-8 text-primary/60 sm:block" />
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {careerItems.map((item) => (
              <div
                key={item.title}
                className="border-r-2 border-primary/20 pr-4"
              >
                <h4 className="font-semibold text-foreground">
                  {item.title}
                </h4>

                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
