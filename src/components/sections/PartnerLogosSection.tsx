import type { ReactNode } from "react";

import svgPaths from "@/assets/svg-paths";
import Container from "@/components/ui/Container";

/**
 * Holds one logo at its native aspect ratio while letting it shrink with the
 * row. `flex-basis` keeps every logo optically the same size, and the
 * `aspect-ratio` stops the SVG collapsing once it is no longer absolutely
 * positioned.
 */
function Logo({
  height,
  name,
  width,
  children,
}: {
  height: number;
  name: string;
  width: number;
  children: ReactNode;
}) {
  return (
    <li
      className="relative w-[96px] shrink-0 sm:w-[118px] lg:w-[140px] xl:w-[168px]"
      data-name={name}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      {children}
    </li>
  );
}

function GoogleLogo() {
  return (
    <Logo height={54.6985} name="google-2015 1" width={168.303}>
      <svg className="absolute block inset-0 size-full" fill="none" height="54.6985" preserveAspectRatio="xMidYMid meet" viewBox="0 0 168.303 54.6985" width="168.303">
        <g clipPath="url(#clip0_0_36)" id="google-2015 1">
          <path d={svgPaths.p1a14d100} fill="#CFCFDE" id="Vector" />
          <path d={svgPaths.p1703a940} fill="#CFCFDE" id="Vector_2" />
          <path d={svgPaths.p17c41800} fill="#CFCFDE" id="Vector_3" />
          <path d={svgPaths.p295209f0} fill="#CFCFDE" id="Vector_4" />
          <path d={svgPaths.p27b33d00} fill="#CFCFDE" id="Vector_5" />
          <path d={svgPaths.p863be00} fill="#CFCFDE" id="Vector_6" />
        </g>
        <defs>
          <clipPath id="clip0_0_36">
            <rect fill="white" height="54.6985" width="168.303" />
          </clipPath>
        </defs>
      </svg>
    </Logo>
  );
}

function GrabLogo() {
  return (
    <Logo height={50.4896} name="grab-logo" width={130.435}>
      <svg className="absolute block inset-0 size-full" fill="none" height="50.4896" preserveAspectRatio="xMidYMid meet" viewBox="0 0 130.435 50.4896" width="130.435">
        <g id="grab-logo">
          <path d={svgPaths.p4c9b900} fill="#CFCFDE" id="Vector" />
        </g>
      </svg>
    </Logo>
  );
}

function AirbnbLogo() {
  return (
    <Logo height={49.9333} name="airbnb 1" width={161.323}>
      <svg className="absolute block inset-0 size-full" fill="none" height="49.9333" preserveAspectRatio="xMidYMid meet" viewBox="0 0 161.323 49.9333" width="161.323">
        <g clipPath="url(#clip0_0_34)" id="airbnb 1">
          <path d={svgPaths.p11a0ca00} fill="#CFCFDE" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_34">
            <rect fill="white" height="49.9333" width="161.323" />
          </clipPath>
        </defs>
      </svg>
    </Logo>
  );
}

function NetflixLogo() {
  return (
    <Logo height={40.7149} name="netflix-3 1" width={151.336}>
      <svg className="absolute block inset-0 size-full" fill="none" height="40.7149" preserveAspectRatio="xMidYMid meet" viewBox="0 0 151.336 40.7149" width="151.336">
        <g clipPath="url(#clip0_0_32)" id="netflix-3 1">
          <path d={svgPaths.p19855700} fill="#CFCFDE" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_32">
            <rect fill="white" height="40.7149" width="151.336" />
          </clipPath>
        </defs>
      </svg>
    </Logo>
  );
}

function AmazonLogo() {
  return (
    <Logo height={46.0923} name="amazon-2 (1) 1" width={153.634}>
      {/* The export ships this mark upside-down, so it is flipped back here. */}
      <svg className="absolute block inset-0 size-full rotate-180" fill="none" height="46.0923" preserveAspectRatio="xMidYMid meet" viewBox="0 0 153.634 46.0923" width="153.634">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p399a6480} fill="#CFCFDE" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p1bea89f2} fill="#CFCFDE" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p2582b380} fill="#CFCFDE" fillRule="evenodd" id="Vector_3" />
        </g>
      </svg>
    </Logo>
  );
}

function FacebookLogo() {
  return (
    <Logo height={38.4103} name="facebook" width={193.371}>
      <svg className="absolute block inset-0 size-full" fill="none" height="38.4103" preserveAspectRatio="xMidYMid meet" viewBox="0 0 193.371 38.4103" width="193.371">
        <g id="facebook">
          <path d={svgPaths.p26418ff0} fill="#CFCFDE" id="Vector" />
        </g>
      </svg>
    </Logo>
  );
}

/**
 * Logos of companies using Skilline.
 *
 * The row wraps: six across on desktop, three on tablet, two on a phone.
 */
export default function PartnerLogosSection() {
  return (
    <section className="py-14 lg:py-20" data-name="Company">
      <Container>
        <p className="text-center font-poppins text-fluid-lg font-medium leading-[1.6] tracking-[0.02em] text-brand-muted">
          Trusted by 5,000+ Companies Worldwide
        </p>

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-8 sm:gap-x-12 lg:mt-16 lg:justify-between lg:gap-x-6">
          <GoogleLogo />
          <NetflixLogo />
          <AirbnbLogo />
          <AmazonLogo />
          <FacebookLogo />
          <GrabLogo />
        </ul>
      </Container>
    </section>
  );
}
