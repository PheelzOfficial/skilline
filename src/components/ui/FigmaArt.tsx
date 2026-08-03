import { useLayoutEffect, useRef, type CSSProperties, type ReactNode } from "react";

/** Width of the canvas the Figma export was authored against. */
export const CANVAS_WIDTH = 1920;

/**
 * Tall enough to contain every absolute `top` in the export, so percentage-based
 * offsets inside the artwork resolve against a stable box.
 */
const CANVAS_HEIGHT = 11494;

type FigmaArtProps = {
  /** Left edge of the crop, in canvas coordinates. */
  x: number;
  /** Top edge of the crop, in canvas coordinates. */
  y: number;
  /** Crop width, in canvas coordinates. */
  width: number;
  /** Crop height, in canvas coordinates. */
  height: number;
  /**
   * Extra classes for the crop box. Sizing only — the box positions itself
   * `relative`, so wrap it rather than passing `absolute`/`fixed` here.
   */
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

/**
 * Renders a rectangular crop of the original Figma canvas, scaled to fill
 * whatever width its parent gives it.
 *
 * The landing page was exported as one 1920px-wide canvas of absolutely
 * positioned elements. Page structure (headings, copy, cards, nav) has been
 * rebuilt as real flow layout, but the decorative clusters — the hero photo
 * card, the quiz and gradebook mockups, the chat UI — are dozens of hand-placed
 * SVG fragments each. Reflowing those would destroy the artwork for no gain,
 * since they carry no reading content.
 *
 * So this component keeps them exactly as exported and makes them responsive
 * the only way that makes sense for artwork: proportional scaling. Children are
 * offset by (-x, -y) so their original canvas coordinates still land correctly,
 * then the whole crop is scaled by (container width / crop width).
 *
 * The scale factor is measured rather than expressed in CSS because CSS cannot
 * divide one length by another to produce the unitless number `scale()` needs.
 */
export default function FigmaArt({
  x,
  y,
  width,
  height,
  className = "",
  style,
  children,
}: FigmaArtProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const scalerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const host = hostRef.current;
    const scaler = scalerRef.current;

    if (!host || !scaler) {
      return;
    }

    /*
     * Written straight to the node rather than held in state: a resize must
     * take effect in the same frame as the layout that caused it, and a
     * setState round-trip would leave the artwork a frame behind while the
     * window is being dragged.
     */
    const apply = () => {
      const scale = host.clientWidth / width;

      scaler.style.transform = `scale(${scale})`;

      /*
       * Published for descendants that need to cancel the scale back out.
       * Anything animating in canvas units gets its motion shrunk by `scale`
       * too — a 12px drift becomes 4px on a phone, which reads as static — so
       * those animations multiply by this to stay constant in screen pixels.
       */
      host.style.setProperty("--art-inv-scale", scale > 0 ? String(1 / scale) : "1");
    };

    apply();

    const observer = new ResizeObserver(apply);
    observer.observe(host);

    return () => observer.disconnect();
  }, [width]);

  return (
    <div
      ref={hostRef}
      aria-hidden="true"
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio: `${width} / ${height}`, ...style }}
    >
      <div
        ref={scalerRef}
        className="absolute left-0 top-0 origin-top-left"
        style={{ width, height }}
      >
        <div
          className="absolute"
          style={{
            left: -x,
            top: -y,
            width: CANVAS_WIDTH,
            height: CANVAS_HEIGHT,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
