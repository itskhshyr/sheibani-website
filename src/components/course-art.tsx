import {
  TrendingUp,
  CandlestickChart,
  Compass,
  Waves,
  Grid3X3,
  Waypoints,
} from "lucide-react";
import type { Course } from "@/types";
export function CourseArt({
  variant,
  className = "",
}: {
  variant: Course["art"];
  className?: string;
}) {
  const Icon = {
    trend: TrendingUp,
    candles: CandlestickChart,
    compass: Compass,
    waves: Waves,
    grid: Grid3X3,
    bridge: Waypoints,
  }[variant];
  return (
    <div className={"relative overflow-hidden bg-accent " + className}>
      <div className="absolute -left-8 -top-10 h-40 w-40 rounded-full border border-primary/10" />
      <div className="absolute -bottom-12 -right-8 h-48 w-48 rounded-full border border-primary/10" />
      <Icon
        className="absolute bottom-6 right-7 h-20 w-20 text-primary/65"
        strokeWidth={1}
      />
      <svg
        className="absolute bottom-5 left-5 h-16 w-36 text-primary/30"
        viewBox="0 0 140 60"
        fill="none"
      >
        <path
          d="M2 52C22 44 24 45 39 28C54 11 64 35 78 29C92 23 98 6 114 17C124 24 126 15 138 3"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}
