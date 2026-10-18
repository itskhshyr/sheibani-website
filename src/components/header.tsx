"use client";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks, site } from "@/data/site";
export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/assets/amin-sheibani-logo.png"
            alt="logo"
            width={62}
            height={62}
            className="h-24 w-24  rounded-xl object-contain"
          />
          <span>
            <strong className="block text-sm">{site.name}</strong>
            <small className="text-[11px] text-muted-foreground">
              آموزش با نگاه تحلیلی
            </small>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <button
          aria-label="نمایش منو"
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-5 py-3 md:hidden">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block py-3 text-sm"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
