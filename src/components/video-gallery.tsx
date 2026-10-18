"use client";

import { useMemo, useState } from "react";
import { Play, Clock, ExternalLink } from "lucide-react";
import type { Video, VideoCategory } from "@/types";
import { videoCategoryLabels } from "@/types";

interface VideoGalleryProps {
  videos: Video[];
}

export const videos: Video[] = [
  {
    id: "bitcoin-analysis",
    title: "تحلیل هفتگی بیت‌کوین",
    category: "analysis",
    url: "https://www.aparat.com/v/VIDEO_ID",
    thumbnail: "/assets/courses-cover-videos/1.png",
    duration: "۱۲ دقیقه",
  },
  {
    id: "technical-analysis",
    title: "آموزش ساختار بازار در تحلیل تکنیکال",
    category: "educational",
    url: "https://www.aparat.com/v/VIDEO_ID",
    thumbnail: "/assets/courses-cover-videos/2.png",
    duration: "۱۸ دقیقه",
  },
  {
    id: "forex-preview",
    title: "پیش‌نمایش دوره فارکس",
    category: "preview",
    url: "https://www.aparat.com/v/VIDEO_ID",
    thumbnail: "/assets/courses-cover-videos/3.png",
    duration: "۸ دقیقه",
  },
];

const filterOptions: { value: "all" | VideoCategory; label: string }[] = [
  { value: "all", label: "همه" },
  { value: "analysis", label: videoCategoryLabels.analysis },
  { value: "educational", label: videoCategoryLabels.educational },
  { value: "preview", label: videoCategoryLabels.preview },
];

export function VideoGallery({ videos }: VideoGalleryProps) {
  const [filter, setFilter] = useState<"all" | VideoCategory>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return videos;
    return videos.filter((v) => v.category === filter);
  }, [filter, videos]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {filterOptions.map((opt) => {
          const active = filter === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => setFilter(opt.value)}
              className={
                "rounded-full px-4 py-1.5 text-xs font-medium transition-colors " +
                (active
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-card text-muted-foreground hover:text-foreground")
              }
              aria-pressed={active}
            >
              {opt.label}
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 text-sm text-muted-foreground">
          ویدیویی در این دسته‌بندی موجود نیست.
        </p>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      )}
    </div>
  );
}

function VideoCard({ video }: { video: Video }) {
  const hasUrl = Boolean(video.url);
  const Wrapper = hasUrl ? "a" : "div";
  const wrapperProps = hasUrl
    ? { href: video.url, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={
        "group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 " +
        (hasUrl
          ? "hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_40px_-24px_rgba(23,121,99,0.35)]"
          : "opacity-95")
      }
    >
      <div className="relative aspect-video overflow-hidden bg-accent">
        {video.thumbnail ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={video.thumbnail}
            alt={video.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent to-accent/40">
            <Play className="h-10 w-10 text-primary/40" strokeWidth={1.5} />
          </div>
        )}
        <span className="absolute right-3 top-3 rounded-full bg-background/85 px-3 py-1 text-[11px] font-medium text-foreground backdrop-blur">
          {videoCategoryLabels[video.category]}
        </span>
        {hasUrl && (
          <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/10">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/95 text-primary-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <Play className="h-5 w-5" fill="currentColor" />
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-sm font-semibold leading-snug text-foreground">
          {video.title}
        </h3>
        <div className="mt-3 flex items-center justify-between text-[12px] text-muted-foreground">
          {video.duration && (
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {video.duration}
            </span>
          )}
          {hasUrl ? (
            <span className="inline-flex items-center gap-1 text-primary">
              تماشا
              <ExternalLink className="h-3.5 w-3.5" />
            </span>
          ) : (
            <span>به‌زودی</span>
          )}
        </div>
      </div>
    </Wrapper>
  );
}
