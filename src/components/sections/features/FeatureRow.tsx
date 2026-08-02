import type { ReactNode } from "react";

type FeatureRowProps = {
  /** Illustration column. */
  art: ReactNode;
  /** When true the artwork sits on the left from `lg` up. */
  artFirst?: boolean;
  /** Copy column. */
  children: ReactNode;
};

/**
 * One feature: copy beside artwork, alternating sides down the page.
 *
 * Copy always comes first in the DOM so the stacked mobile layout leads with
 * words rather than decoration; `order` only kicks in once the two columns fit
 * side by side.
 */
export default function FeatureRow({
  art,
  artFirst = false,
  children,
}: FeatureRowProps) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
      <div className={artFirst ? "lg:order-2" : undefined}>{children}</div>
      <div className={artFirst ? "lg:order-1" : undefined}>{art}</div>
    </div>
  );
}
