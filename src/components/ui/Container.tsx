import type { ReactNode } from "react";

type ContainerProps = {
  className?: string;
  children: ReactNode;
};

/**
 * The single horizontal rhythm for the page: centred, capped at the design's
 * content width, with gutters that grow with the viewport.
 */
export default function Container({
  className = "",
  children,
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-[1520px] px-5 sm:px-8 lg:px-12 xl:px-[100px] ${className}`}
    >
      {children}
    </div>
  );
}
