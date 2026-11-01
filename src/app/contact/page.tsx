import { Mail, MapPin, Phone } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SocialIcon } from "@/components/social-icon";
import { site, socialLinks } from "@/data/site";

export const metadata = { title: "تماس با من | آکادمی امین شیبانی", description: "راه‌های ارتباطی با آکادمی امین شیبانی." };

export default function ContactPage() {
  return <><Header /><main>
    <section className="border-b border-border"><div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <p className="text-xs font-semibold tracking-[.18em] text-primary">در ارتباط باشیم</p>
      <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-6xl">برای شروع یک گفت‌وگوی خوب، پیام بدهید.</h1>
      <p className="mt-6 max-w-xl text-sm leading-8 text-muted-foreground sm:text-base">برای مشاوره، همکاری یا پرسش درباره دوره‌ها از طریق یکی از راه‌های زیر با ما در تماس باشید.</p>
    </div></section>
    <section className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.1fr_.9fr]">
      <div className="rounded-3xl bg-primary p-8 text-primary-foreground sm:p-12"><p className="text-sm text-primary-foreground/70">راه‌های مستقیم ارتباط</p><h2 className="mt-4 text-3xl font-semibold">همین حالا با من در تماس باشید</h2>
        <div className="mt-10 space-y-5"><a href={site.phoneHref} dir="ltr" className="flex items-center gap-4 transition-opacity hover:opacity-75"><span className="rounded-2xl bg-white/10 p-3"><Phone className="h-5 w-5" /></span><span><small className="block text-xs text-primary-foreground/65">شماره تماس</small><strong className="mt-1 block">{site.phone}</strong></span></a><a href={`mailto:${site.email}`} className="flex items-center gap-4 transition-opacity hover:opacity-75"><span className="rounded-2xl bg-white/10 p-3"><Mail className="h-5 w-5" /></span><span><small className="block text-xs text-primary-foreground/65">ایمیل</small><strong className="mt-1 block" dir="ltr">{site.email}</strong></span></a><div className="flex items-center gap-4"><span className="rounded-2xl bg-white/10 p-3"><MapPin className="h-5 w-5" /></span><span><small className="block text-xs text-primary-foreground/65">محل فعالیت</small><strong className="mt-1 block">تهران، ایران</strong></span></div></div>
      </div>
      <div className="rounded-3xl border border-border bg-card p-8 sm:p-12"><p className="text-sm text-muted-foreground">شبکه‌های اجتماعی</p><h2 className="mt-4 text-2xl font-semibold">همراه آکادمی باشید</h2><div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">{socialLinks.map((social) => <a key={social.name} href={social.href} target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-2xl border border-border px-4 py-4 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-accent"><span className="flex items-center gap-3"><span className="text-primary"><SocialIcon type={social.icon} /></span><span className="text-sm font-medium">{social.name}</span></span><span className="text-xs text-muted-foreground group-hover:text-primary">مشاهده</span></a>)}</div></div>
    </section>
  </main><Footer /></>;
}
