"use client";

import { useMemo, useState } from "react";
import { Clock, Play, X } from "lucide-react";
import type { Video, VideoCategory } from "@/types";
import { videoCategoryLabels } from "@/types";

interface VideoGalleryProps {
  videos: Video[];
}

const filterOptions: { value: "all" | VideoCategory; label: string }[] = [
  { value: "all", label: "همه" },
  { value: "analysis", label: videoCategoryLabels.analysis },
  { value: "educational", label: videoCategoryLabels.educational },
  { value: "preview", label: videoCategoryLabels.preview },
];

export function VideoGallery({ videos }: VideoGalleryProps) {
  const [filter, setFilter] = useState<"all" | VideoCategory>("all");
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const filtered = useMemo(() => {
    if (filter === "all") return videos;
    return videos.filter((video) => video.category === filter);
  }, [filter, videos]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {filterOptions.map((option) => {
          const active = filter === option.value;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => setFilter(option.value)}
              className={
                "rounded-full px-4 py-1.5 text-xs font-medium transition-colors " +
                (active
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-card text-muted-foreground hover:text-foreground")
              }
              aria-pressed={active}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      {selectedVideo && (
        <div className="mt-8 overflow-hidden rounded-2xl border border-primary/20 bg-card shadow-[0_18px_50px_-30px_rgba(23,121,99,0.45)]">
          <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-4">
            <h3 className="text-sm font-semibold text-foreground">{selectedVideo.title}</h3>
            <button
              type="button"
              onClick={() => setSelectedVideo(null)}
              className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              aria-label="بستن ویدیو"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="aspect-video w-full bg-black">
            <iframe
              src={`https://www.aparat.com/video/video/embed/videohash/${getAparatVideoId(selectedVideo.url)}/vt/frame`}
              title={selectedVideo.title}
              className="h-full w-full border-0"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {filtered.length === 0 ? (
        <p className="mt-10 text-sm text-muted-foreground">ویدیویی در این دسته‌بندی موجود نیست.</p>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((video) => (
            <VideoCard key={video.id} video={video} onSelect={setSelectedVideo} />
          ))}
        </div>
      )}
    </div>
  );
}

function VideoCard({ video, onSelect }: { video: Video; onSelect: (video: Video) => void }) {
  const hasUrl = Boolean(video.url);

  return (
    <button
      type="button"
      onClick={() => hasUrl && onSelect(video)}
      disabled={!hasUrl}
      className={
        "group flex w-full flex-col overflow-hidden rounded-2xl border border-border bg-card text-right transition-all duration-300 " +
        (hasUrl
          ? "hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_40px_-24px_rgba(23,121,99,0.35)]"
          : "opacity-95")
      }
    >
      <div className="relative aspect-video w-full overflow-hidden bg-accent">
        {video.thumbnail ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={video.thumbnail} alt={video.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
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
        <h3 className="text-sm font-semibold leading-snug text-foreground">{video.title}</h3>
        <div className="mt-3 flex items-center justify-between text-[12px] text-muted-foreground">
          {video.duration && (
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {video.duration}
            </span>
          )}
          <span className="text-primary">تماشا در همین‌جا</span>
        </div>
      </div>
    </button>
  );
}

function getAparatVideoId(url: string) {
  return url.split("/v/")[1]?.split(/[?#/]/)[0] ?? "";
}
