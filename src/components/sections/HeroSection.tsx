import { useEffect, useState } from "react";

import svgPaths from "@/assets/svg-paths";
import Container from "@/components/ui/Container";
import FigmaArt from "@/components/ui/FigmaArt";
import VideoModal from "@/components/ui/VideoModal";
import imgLovelyTeenageGirl from "@/assets/images/hero-girl-optimized.png";
import imgEllipse from "@/assets/images/ellipse.png";
import imgLogo from "@/assets/navlogo.png";

/*
 * The hero artwork is drawn in the coordinates of the 1920px Figma canvas and
 * scaled as a unit by <FigmaArt>. These are the bounds of the crop it occupies.
 */
const ART = { x: 863, y: 204, width: 951, height: 914 };

/** Shared look of the four glass cards floating over the photo. */
const FLOAT_CARD =
  "absolute flex items-center rounded-[20px] bg-white/80 backdrop-blur-[10px]";

/**
 * Calendar glyph, 27.5px square.
 *
 * The export shipped this as twelve separately positioned SVG fragments; the
 * nine identical pills are plain rounded rects here and the rest are folded
 * into one viewBox with transforms.
 */
function CalendarIcon() {
  const columns = [4.9115, 11.7865, 18.6615];
  const rows = [13.75, 17.68, 21.607];

  return (
    <svg className="block size-[27.5px]" fill="none" viewBox="0 0 27.5 27.5">
      <path d={svgPaths.p17671500} fill="white" transform="translate(5.893 0)" />
      <path d={svgPaths.p3f97b8c0} fill="white" transform="translate(19.643 0)" />
      <path d={svgPaths.p341e7e80} fill="white" transform="translate(0 2.946)" />
      {rows.map((y) =>
        columns.map((x) => (
          <rect
            key={`${x}-${y}`}
            fill="white"
            height="1.9643"
            rx="0.982"
            width="3.9286"
            x={x}
            y={y}
          />
        )),
      )}
    </svg>
  );
}

/** Sealed-envelope glyph, 30px square. */
function EmailIcon() {
  return (
    <svg className="block size-[30px]" fill="none" viewBox="0 0 30 30">
      <path d={svgPaths.p2a804a00} fill="white" transform="translate(1.071 4.287)" />
      <path d={svgPaths.pddd6600} fill="white" transform="translate(0 6.177)" />
    </svg>
  );
}

/** Green "done" tick used on the avatar and the admission card. */
function CheckDot({ className }: { className: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 20 20">
      <circle cx="10" cy="10" fill="#4EE381" r="10" />
      <path
        d="M6 10.6944L8.88679 14L15 7"
        stroke="white"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </svg>
  );
}

/**
 * The cut-out student photo.
 *
 * The source PNG is already transparent, so it gets no backing plate, no card
 * shadow and no mask — anything of that sort reads as a rectangular box behind
 * a subject that is supposed to float free. Its lower edge is trimmed by the
 * banner's curve instead, which is why the crop runs to the canvas bottom.
 */
function HeroPhoto() {
  return (
    <div className="absolute left-[1088px] top-[224px] h-[894px] w-[544px] overflow-hidden">
      <img
        alt=""
        className="h-full w-full object-cover object-top"
        fetchPriority="high"
        loading="eager"
        src={imgLovelyTeenageGirl}
      />
    </div>
  );
}

/** "250k assisted students" pill, upper left of the photo. */
function AssistedStudentsCard() {
  return (
    <div
      className={`${FLOAT_CARD} left-[895px] top-[409px] h-[100px] w-[300px] gap-[32px] pl-[28px] motion-safe:animate-float-a`}
    >
      <div className="flex size-[50px] shrink-0 items-center justify-center rounded-[8px] bg-[#23bdee]">
        <CalendarIcon />
      </div>
      <div className="font-nunito leading-[1.6]">
        <p className="text-[24px] font-bold tracking-[0.48px] text-[#595959]">
          250k
        </p>
        <p className="text-[20px] font-semibold tracking-[0.4px] text-[#545567]">
          Assisted Student
        </p>
      </div>
    </div>
  );
}

/** "Congratulations" pill, lower right of the photo. */
function AdmissionCompletedCard() {
  return (
    <div
      className={`${FLOAT_CARD} left-[1424px] top-[604px] h-[110px] w-[370px] gap-[24px] pl-[26px] motion-safe:animate-float-b`}
    >
      <div className="flex size-[50px] shrink-0 items-center justify-center rounded-[8px] bg-[#f88c3d]">
        <EmailIcon />
      </div>
      <div className="font-nunito leading-[1.6]">
        <p className="text-[24px] font-bold tracking-[0.48px] text-[#595959]">
          Congratulations
        </p>
        <p className="text-[20px] font-semibold tracking-[0.4px] text-[#545567]">
          Your admission completed
        </p>
      </div>
      <CheckDot className="absolute left-[334px] top-[21px] size-[20px]" />
    </div>
  );
}

/** "User Experience Class" card with the Join Now button, lower left. */
function UpcomingClassCard() {
  return (
    <div
      className={`${FLOAT_CARD} left-[883px] top-[744px] w-[390px] flex-col items-stretch px-[26px] pb-[28px] pt-[20px] motion-safe:animate-float-c`}
    >
      <div className="flex items-center gap-[23px]">
        <div className="relative size-[56px] shrink-0">
          <img
            alt=""
            className="block size-full rounded-full object-cover"
            src={imgEllipse}
          />
          <CheckDot className="absolute -bottom-[3px] right-[1px] size-[20px]" />
        </div>
        <div className="font-nunito leading-[1.6]">
          <p className="whitespace-nowrap text-[24px] font-bold tracking-[0.48px] text-[#595959]">
            User Experience Class
          </p>
          <p className="whitespace-nowrap text-[20px] font-semibold tracking-[0.4px] text-[#545567]">
            Today at 12.00 PM
          </p>
        </div>
      </div>

      {/* Art, not a control: the whole crop is aria-hidden, so nothing here
          may be focusable. */}
      <div className="ml-[79px] mt-[19px] flex h-[50px] w-[180px] items-center justify-center rounded-[80px] bg-[#d8587e] font-nunito text-[20px] font-bold text-white">
        Join Now
      </div>
    </div>
  );
}

/** Small pink tile with a bar chart, top right of the photo. */
function StatsBadge() {
  return (
    <div className="absolute left-[1625px] top-[354px] flex size-[69px] items-center justify-center rounded-[14px] bg-[#f3627c] shadow-[0px_8px_40px_0px_rgba(210,77,101,0.26)] motion-safe:animate-float-d">
      <div className="flex h-[44.85px] w-[47.3px] items-center justify-center rounded-[8px] bg-white">
        <svg
          className="block h-[28.15px] w-[21.25px]"
          fill="none"
          viewBox="0 0 21.25 28.15"
        >
          <path
            d="M10.625 2V26.15"
            stroke="#F25471"
            strokeLinecap="round"
            strokeWidth="4"
          />
          <path
            d="M2 6.3125L2 26.15"
            stroke="#F25471"
            strokeLinecap="round"
            strokeWidth="4"
          />
          <path
            d="M19.25 11.4875V26.15"
            stroke="#F25471"
            strokeLinecap="round"
            strokeWidth="4"
          />
        </svg>
      </div>
    </div>
  );
}

/** Circular play glyph beside the "Watch how it works" link. */
function PlayBadge() {
  return (
    <span className="relative block size-[56px] shrink-0 lg:size-[70px]">
      <span className="absolute inset-[-50%_-77.5%_-100%_-72.5%]">
        <svg className="block size-full" fill="none" height="200" preserveAspectRatio="none" viewBox="0 0 200 200" width="200">
          <g id="Group 4">
            <g filter="url(#filter0_d_0_23)" id="Ellipse 1">
              <circle cx="98" cy="80" fill="white" r="40" />
            </g>
            <path d={svgPaths.p2071b0c0} fill="#23BDEE" id="Polygon 2" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="200" id="filter0_d_0_23" width="200" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="2" dy="20" />
              <feGaussianBlur stdDeviation="30" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.239854 0 0 0 0 0.607896 0 0 0 0 0.725 0 0 0 0.1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_23" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_23" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </span>
    </span>
  );
}

/** Skilline wordmark, shared by the header and the mobile menu. */
function Wordmark() {
  return (
    <a className="link-logo shrink-0 items-center gap-2" href="#top">
      <img src={imgLogo} alt="logo" />
    </a>
  );
}

const NAV_LINKS = [
  { label: "Home", href: "#top" },
  { label: "About Us", href: "#what-is-skilline" },
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
];

/**
 * Tracks whether the page has been scrolled past a given pixel threshold.
 * Returns true once the threshold is crossed, false once back above it.
 */
function useScrolled(threshold = 80) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > threshold);
    }
    // Passive listener — never blocks the thread.
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Sync immediately in case the page is restored mid-scroll.
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}

/**
 * Top navigation and hero banner.
 *
 * Below `lg` the nav links and account buttons collapse into a toggle menu, and
 * the hero stacks copy above artwork.
 */
export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [stickyMenuOpen, setStickyMenuOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const scrolled = useScrolled(80);

  return (
    <header className="relative" id="top">
      {/*
       * ── Sticky nav ──────────────────────────────────────────────────────
       *
       * A completely separate element from the hero nav, fixed to the top of
       * the viewport. It slides in from above when the user scrolls past the
       * hero and retreats back when they return to the top.
       *
       * Using CSS `transform` + `transition` (not `top`) gives the browser a
       * GPU-composited animation that never causes layout recalculation.
       */}
      <div
        aria-label="Site navigation"
        className={[
          "fixed inset-x-0 top-0 z-50",
          "transition-[transform,opacity,box-shadow] duration-500",
          "ease-[cubic-bezier(0.22,1,0.36,1)]",
          scrolled
            ? "translate-y-0 opacity-100 shadow-[0_4px_40px_-8px_rgba(47,50,125,0.18)]"
            : "-translate-y-full opacity-0 shadow-none",
        ].join(" ")}
        role="navigation"
      >
        {/* Frosted-glass backing */}
        <div className="bg-white/85 backdrop-blur-[14px]">
          <div className="mx-auto max-w-[1520px] px-4 sm:px-6 lg:px-10">
            <div className="flex items-center justify-between gap-4 py-3 lg:py-4">
              {/* Logo */}
              <a className="link-logo shrink-0 items-center gap-2" href="#top">
                <img src={imgLogo} alt="logo" />
              </a>

              {/* Desktop links */}
              <ul className="hidden items-center gap-6 xl:gap-10 lg:flex">
                {NAV_LINKS.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      className="link font-poppins text-fluid-base tracking-[0.02em] text-brand-ink"
                      href={href}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Desktop CTA buttons */}
              <div className="hidden items-center gap-4 lg:flex">
                <a
                  className="btn btn-soft rounded-[80px] bg-white px-6 py-2 font-poppins text-fluid-base font-medium tracking-[0.02em] text-[#6c6c6c] shadow-[0px_20px_24px_0px_rgba(0,0,0,0.03)] hover:text-brand-ink xl:px-9"
                  href="#top"
                >
                  Login
                </a>
                <a
                  className="btn btn-solid rounded-[80px] bg-brand-orange px-6 py-2 font-poppins text-fluid-base font-medium tracking-[0.02em] text-white xl:px-9"
                  href="#top"
                >
                  Sign Up
                </a>
              </div>

              {/* Mobile hamburger */}
              <button
                aria-controls="sticky-navigation"
                aria-expanded={stickyMenuOpen}
                aria-label="Toggle navigation"
                className="btn btn-icon size-11 rounded-full bg-brand-navy/5 lg:hidden"
                onClick={() => setStickyMenuOpen((o) => !o)}
                type="button"
              >
                <span className="relative block h-4 w-6">
                  <span
                    className={`absolute left-0 block h-0.5 w-6 rounded bg-brand-ink transition-transform ${stickyMenuOpen ? "top-[7px] rotate-45" : "top-0"
                      }`}
                  />
                  <span
                    className={`absolute left-0 top-[7px] block h-0.5 w-6 rounded bg-brand-ink transition-opacity ${stickyMenuOpen ? "opacity-0" : "opacity-100"
                      }`}
                  />
                  <span
                    className={`absolute left-0 block h-0.5 w-6 rounded bg-brand-ink transition-transform ${stickyMenuOpen ? "top-[7px] -rotate-45" : "top-[14px]"
                      }`}
                  />
                </span>
              </button>
            </div>

            {/* Mobile dropdown for the sticky nav */}
            {stickyMenuOpen ? (
              <div
                className="mb-3 rounded-2xl bg-white/90 p-5 shadow-[0px_20px_40px_0px_rgba(0,0,0,0.06)] backdrop-blur-sm lg:hidden"
                id="sticky-navigation"
              >
                <ul className="flex flex-col gap-3">
                  {NAV_LINKS.map(({ label, href }) => (
                    <li key={label}>
                      <a
                        className="link font-poppins text-fluid-base text-brand-ink"
                        href={href}
                        onClick={() => setStickyMenuOpen(false)}
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    className="btn btn-soft rounded-[80px] border border-[#e0e0e0] px-6 py-2.5 font-poppins text-fluid-sm font-medium text-[#6c6c6c]"
                    href="#top"
                  >
                    Login
                  </a>
                  <a
                    className="btn btn-solid rounded-[80px] bg-brand-orange px-6 py-2.5 font-poppins text-fluid-sm font-medium text-white"
                    href="#top"
                  >
                    Sign Up
                  </a>
                </div>
              </div>
            ) : null}
          </div>

          {/* Hairline border at the bottom of the sticky bar */}
          <div className="h-px bg-gradient-to-r from-transparent via-brand-navy/10 to-transparent" />
        </div>
      </div>
      {/* ── End sticky nav ─────────────────────────────────────────────── */}
      {/*
        * The cream banner's curved lower edge.
        *
        * It used to be a full-bleed SVG stretched with preserveAspectRatio
        * "none", which distorted the arc at every viewport that wasn't 1920x1118
        * and — worse — could not clip the artwork sitting on top of it. A pair
        * of elliptical bottom corners (half the banner wide, a fixed number of
        * pixels deep) draws the same shape without distortion, and `overflow`
        * makes the photo obey it for free.
        */}
      <div className="relative overflow-hidden rounded-b-[50%_36px] bg-brand-cream sm:rounded-b-[50%_60px] lg:rounded-b-[50%_92px] xl:rounded-b-[50%_128px]">
        <Container>
          <nav className="flex items-center justify-between gap-4 py-4 lg:py-6">
            <Wordmark />

            <ul className="hidden items-center gap-6 xl:gap-10 lg:flex">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    className="link font-poppins text-fluid-base tracking-[0.02em] text-brand-ink"
                    href={href}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="hidden items-center gap-4 lg:flex">
              <a
                className="btn btn-soft rounded-[80px] bg-white px-6 py-2.5 font-poppins text-fluid-base font-medium tracking-[0.02em] text-[#6c6c6c] shadow-[0px_20px_24px_0px_rgba(0,0,0,0.03)] hover:text-brand-ink xl:px-9"
                href="#top"
              >
                Login
              </a>
              <a
                className="btn btn-solid rounded-[80px] bg-brand-orange px-6 py-2.5 font-poppins text-fluid-base font-medium tracking-[0.02em] text-white xl:px-9"
                href="#top"
              >
                Sign Up
              </a>
            </div>

            <button
              aria-controls="primary-navigation"
              aria-expanded={menuOpen}
              aria-label="Toggle navigation"
              className="btn btn-icon size-11 rounded-full bg-white/70 lg:hidden"
              onClick={() => setMenuOpen((open) => !open)}
              type="button"
            >
              <span className="relative block h-4 w-6">
                <span
                  className={`absolute left-0 block h-0.5 w-6 rounded bg-brand-ink transition-transform ${menuOpen ? "top-[7px] rotate-45" : "top-0"}`}
                />
                <span
                  className={`absolute left-0 top-[7px] block h-0.5 w-6 rounded bg-brand-ink transition-opacity ${menuOpen ? "opacity-0" : "opacity-100"}`}
                />
                <span
                  className={`absolute left-0 block h-0.5 w-6 rounded bg-brand-ink transition-transform ${menuOpen ? "top-[7px] -rotate-45" : "top-[14px]"}`}
                />
              </span>
            </button>
          </nav>

          {menuOpen ? (
            <div
              className="mb-4 rounded-2xl bg-white/90 p-5 shadow-[0px_20px_40px_0px_rgba(0,0,0,0.06)] backdrop-blur-sm lg:hidden"
              id="primary-navigation"
            >
              <ul className="flex flex-col gap-3">
                {NAV_LINKS.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      className="link font-poppins text-fluid-base text-brand-ink"
                      href={href}
                      onClick={() => setMenuOpen(false)}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  className="btn btn-soft rounded-[80px] border border-[#e0e0e0] px-6 py-2.5 font-poppins text-fluid-sm font-medium text-[#6c6c6c]"
                  href="#top"
                >
                  Login
                </a>
                <a
                  className="btn btn-solid rounded-[80px] bg-brand-orange px-6 py-2.5 font-poppins text-fluid-sm font-medium text-white"
                  href="#top"
                >
                  Sign Up
                </a>
              </div>
            </div>
          ) : null}

          {/*
            * `items-end` bottom-anchors the artwork against the banner's lower
            * edge so the curve trims it, exactly as in the design; the copy
            * opts back out with `self-center`.
            */}
          <div className="grid gap-10 pt-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-end lg:gap-8 lg:pt-16 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] xl:gap-16">
            <div className="relative max-w-[681px] pb-6 motion-safe:animate-hero-rise lg:self-center lg:pb-16 xl:pb-24">

              {/* ── Decorative blobs ─────────────────────────────────── */}
              {/* Soft amber circle behind the heading */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -left-6 -top-8 -z-10 size-32 rounded-full bg-brand-orange/10 blur-2xl"
              />
              {/* Soft cyan blob low-left */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-4 left-10 -z-10 size-24 rounded-full bg-brand-cyan/10 blur-2xl"
              />

              {/* ── Live-class badge ────────────────────────────────── */}
              <div
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-orange/20 bg-white px-4 py-1.5 shadow-[0_4px_20px_-6px_rgba(244,140,6,0.25)] motion-safe:animate-hero-rise"
                style={{ animationDelay: "0ms" }}
              >
                {/* Pulsing green dot */}
                <span className="relative flex size-2.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#4EE381] opacity-75" />
                  <span className="relative inline-flex size-2.5 rounded-full bg-[#4EE381]" />
                </span>
                <span className="font-poppins text-xs font-semibold uppercase tracking-widest text-brand-navy">
                  Live Classes Available
                </span>
              </div>

              {/* ── Heading ─────────────────────────────────────────── */}
              <h1
                className="font-poppins text-fluid-6xl font-bold leading-tight text-brand-navy motion-safe:animate-hero-rise"
                style={{ animationDelay: "60ms" }}
              >
                <span className="relative inline-block">
                  <span className="text-brand-orange">Studying</span>
                  {/* Animated squiggle underline */}
                  <svg
                    aria-hidden="true"
                    className="absolute -bottom-1 left-0 w-full"
                    fill="none"
                    height="6"
                    preserveAspectRatio="none"
                    viewBox="0 0 120 6"
                  >
                    <path
                      d="M2 4 Q 30 1 60 4 Q 90 7 118 4"
                      stroke="#f48c06"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      strokeDasharray="130"
                      strokeDashoffset="130"
                      className="motion-safe:[animation:hero-underline_0.8s_0.4s_cubic-bezier(0.22,1,0.36,1)_forwards]"
                    />
                  </svg>
                </span>{" "}
                Online is now{" "}
                <span className="relative whitespace-nowrap">
                  much easier
                </span>
              </h1>

              {/* ── Body copy ───────────────────────────────────────── */}
              <p
                className="mt-6 max-w-[500px] font-nunito text-fluid-md leading-[1.75] text-[#464646] motion-safe:animate-hero-rise lg:mt-8"
                style={{ animationDelay: "160ms" }}
              >
                Skilline is an interactive learning platform that connects
                students and educators worldwide — live sessions, recorded
                lessons, and smart assessments all in one place.
              </p>

              {/* ── Three trust micro-stats ─────────────────────────── */}
              <div
                className="mt-7 flex items-center divide-x divide-brand-navy/10 rounded-2xl bg-white/60 p-4 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.08)] ring-1 ring-brand-navy/5 backdrop-blur-md motion-safe:animate-hero-rise sm:p-5 lg:mt-8 lg:max-w-[480px]"
                style={{ animationDelay: "200ms" }}
              >
                {[
                  { value: "250k+", label: "Students", valueColor: "text-brand-cyan" },
                  { value: "1,200+", label: "Courses", valueColor: "text-brand-orange" },
                  { value: "98%", label: "Satisfaction", valueColor: "text-[#22a855]" },
                ].map(({ value, label, valueColor }) => (
                  <div
                    key={label}
                    className="flex flex-1 flex-col items-center px-2 text-center"
                  >
                    <span className={`font-poppins text-fluid-xl font-bold leading-none ${valueColor}`}>
                      {value}
                    </span>
                    <span className="mt-1.5 font-nunito text-[11px] font-bold uppercase tracking-wider text-brand-navy/60">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              {/* ── CTAs ────────────────────────────────────────────── */}
              <div
                className="mt-8 flex flex-wrap items-center gap-5 motion-safe:animate-hero-rise lg:mt-10 lg:gap-8"
                style={{ animationDelay: "280ms" }}
              >
                <a
                  className="btn btn-solid rounded-[80px] bg-brand-orange px-8 py-3.5 font-poppins text-fluid-md font-semibold text-white shadow-[0_12px_32px_-8px_rgba(244,140,6,0.5)] lg:px-12 lg:py-4"
                  href="#top"
                >
                  Join for free
                </a>

                {/*
                  * Deliberately not a `.btn`: the play badge's glow is drawn
                  * outside its own box, and `.btn` clips overflow.
                  */}
                <button
                  className="group flex cursor-pointer items-center gap-4 rounded-[80px] outline-offset-4 focus-visible:outline-2 focus-visible:outline-brand-orange"
                  onClick={() => setVideoOpen(true)}
                  type="button"
                >
                  <span className="transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 group-active:scale-95">
                    <PlayBadge />
                  </span>
                  <span className="font-poppins text-fluid-md text-brand-ink transition-colors duration-300 group-hover:text-brand-orange">
                    Watch how it works
                  </span>
                </button>
              </div>

              {/* ── Social proof avatars ─────────────────────────────── */}
              <div
                className="mt-8 flex items-center gap-4 motion-safe:animate-hero-rise"
                style={{ animationDelay: "340ms" }}
              >
                {/* Stacked avatar circles */}
                <div className="flex -space-x-3">
                  {[
                    { bg: "bg-[#f48c06]", initials: "AK" },
                    { bg: "bg-[#23bdee]", initials: "SJ" },
                    { bg: "bg-[#d8587e]", initials: "MR" },
                    { bg: "bg-[#2f327d]", initials: "TL" },
                  ].map(({ bg, initials }) => (
                    <span
                      key={initials}
                      className={`flex size-9 items-center justify-center rounded-full border-2 border-brand-cream font-poppins text-[11px] font-bold text-white ring-1 ring-white/40 ${bg}`}
                    >
                      {initials}
                    </span>
                  ))}
                  <span className="flex size-9 items-center justify-center rounded-full border-2 border-brand-cream bg-white font-poppins text-[10px] font-bold text-brand-navy ring-1 ring-white/40 shadow-sm">
                    +2k
                  </span>
                </div>

                {/* Stars + label */}
                <div>
                  {/* Five stars */}
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className="size-4 text-[#fba333]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.062 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.951-.69L9.049 2.927z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mt-0.5 font-nunito text-xs font-semibold text-brand-muted">
                    <span className="text-brand-navy">4.9</span> from 2,000+ learners
                  </p>
                </div>
              </div>
            </div>

            <FigmaArt
              className="mx-auto w-full max-w-[600px] motion-safe:animate-hero-pop lg:max-w-none lg:scale-105 lg:origin-bottom xl:scale-110"
              height={ART.height}
              style={{ animationDelay: "160ms" }}
              width={ART.width}
              x={ART.x}
              y={ART.y}
            >
              <HeroPhoto />
              <AssistedStudentsCard />
              <StatsBadge />
              <AdmissionCompletedCard />
              <UpcomingClassCard />
            </FigmaArt>
          </div>
        </Container>
      </div>

      <VideoModal
        isOpen={videoOpen}
        onClose={() => setVideoOpen(false)}
      // videoId="7QJqQ4R1V2Q" // generic education/elearning intro placeholder
      />
    </header>
  );
}
