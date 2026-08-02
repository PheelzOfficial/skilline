import { useEffect, useRef, useState } from "react";

import imgLogo from "@/assets/navlogo.png";

/**
 * Duration (ms) that the lift-off CSS animation takes.
 * Must match `--animate-loader-lift` in index.css.
 */
const EXIT_MS = 900;

/**
 * How long the loader stays visible before it starts to lift off (ms).
 * Should be enough for fonts / images to paint.
 */
const HOLD_MS = 1400;

/**
 * Full-screen first-load curtain.
 *
 * Lifecycle:
 *   1. Mounts covering the whole viewport (cream, same as the hero banner).
 *   2. A shimmer bar sweeps across the Skilline logo while content loads.
 *   3. After HOLD_MS the "lifting" class is applied, triggering `loader-lift`.
 *   4. After the animation finishes the component unmounts entirely so it
 *      never blocks pointer events or accessibility scanning.
 */
export default function PageLoader() {
  const [phase, setPhase] = useState<"visible" | "lifting" | "gone">(
    "visible",
  );
  const liftTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const unmountTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    liftTimer.current = setTimeout(() => {
      setPhase("lifting");
      unmountTimer.current = setTimeout(() => setPhase("gone"), EXIT_MS + 50);
    }, HOLD_MS);

    return () => {
      if (liftTimer.current) clearTimeout(liftTimer.current);
      if (unmountTimer.current) clearTimeout(unmountTimer.current);
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <div
      aria-hidden="true"
      className={[
        /*
         * Fixed so it covers the viewport regardless of scroll position.
         * z-[9999] keeps it above every section, including the sticky nav.
         */
        "pointer-events-none fixed inset-0 z-[9999]",
        "flex flex-col items-center justify-center",
        /*
         * Same cream as the hero banner so the first visible frame already
         * reads as the brand — the banner feels like it's been here all along
         * rather than fading in from white.
         */
        "bg-brand-cream",
        /*
         * The same elliptical bottom corners that the hero uses, so the
         * exit looks like the hero banner peeling upward.
         */
        "rounded-b-[50%_36px] sm:rounded-b-[50%_60px] lg:rounded-b-[50%_92px] xl:rounded-b-[50%_128px]",
        phase === "lifting"
          ? "motion-safe:animate-loader-lift"
          : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* ── Logo + wordmark ─────────────────────────────────────────────── */}
      <div className="relative flex flex-col items-center gap-6">
        {/* Outer glow ring */}
        <div className="absolute inset-0 -m-8 rounded-full bg-brand-orange/10 blur-2xl" />

        {/* Logo mark */}
        <div className="relative">
          <div className="flex size-24 items-center justify-center rounded-3xl bg-white shadow-[0_20px_60px_-10px_rgba(244,140,6,0.35)]">
            <img
              alt="Skilline"
              className="h-14 w-auto object-contain"
              src={imgLogo}
            />
          </div>

          {/* Spinning ring around the logo */}
          <svg
            aria-hidden="true"
            className="absolute -inset-3 motion-safe:animate-[spin_2s_linear_infinite]"
            fill="none"
            viewBox="0 0 120 120"
          >
            <circle
              cx="60"
              cy="60"
              r="56"
              stroke="url(#loader-ring-grad)"
              strokeDasharray="264"
              strokeDashoffset="176"
              strokeLinecap="round"
              strokeWidth="4"
            />
            <defs>
              <linearGradient
                id="loader-ring-grad"
                x1="0%"
                x2="100%"
                y1="0%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#f48c06" />
                <stop offset="100%" stopColor="#23bdee" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Brand name */}
        <p className="font-poppins text-2xl font-bold tracking-wide text-brand-navy">
          Skil<span className="text-brand-orange">line</span>
        </p>

        {/* Tagline */}
        <p className="font-nunito text-sm font-medium tracking-wider text-brand-muted uppercase">
          Studying Online is now much easier
        </p>

        {/* ── Progress bar ──────────────────────────────────────────────── */}
        <div className="mt-2 h-1 w-48 overflow-hidden rounded-full bg-brand-navy/10">
          {/* Sheen sweep */}
          <div
            className="h-full rounded-full bg-gradient-to-r from-brand-orange via-brand-cyan to-brand-orange motion-safe:animate-loader-sheen"
            style={{ width: "60%" }}
          />
        </div>

        {/* Three bouncing dots */}
        <div className="mt-1 flex items-center gap-1.5">
          {[0, 150, 300].map((delay) => (
            <span
              key={delay}
              className="block size-1.5 rounded-full bg-brand-orange motion-safe:animate-bounce"
              style={{ animationDelay: `${delay}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
