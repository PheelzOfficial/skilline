import { useEffect } from "react";

type VideoModalProps = {
  isOpen: boolean;
  onClose: () => void;
  /** YouTube video ID */
  // videoId: string;
};

/**
 * A modal that displays a YouTube video.
 * Uses a backdrop blur and handles closing via click outside or Escape key.
 */
export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    // Prevent scrolling on the body when modal is open
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-12"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-brand-navy/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal content */}
      <div className="relative w-full max-w-5xl rounded-2xl bg-black shadow-2xl overflow-hidden ring-1 ring-white/10 motion-safe:animate-hero-pop">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex size-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-colors hover:bg-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2 focus:ring-offset-black sm:right-6 sm:top-6"
          aria-label="Close video"
        >
          <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* 16:9 Video wrapper */}
        <div className="relative w-full aspect-video">
          <iframe
            className="absolute inset-0 size-full border-0"
            src="https://www.youtube.com/embed/fy-o-Dkf85o?si=fO3Lov4Hy1YO6QGV"
            title="Skilline Intro Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
