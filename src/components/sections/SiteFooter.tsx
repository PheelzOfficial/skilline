import svgPaths from "@/assets/svg-paths";
import Container from "@/components/ui/Container";

const FOOTER_LINKS = ["Careers", "Privacy Policy", "Terms & Conditions"];

/**
 * Site footer: branding, newsletter form and legal links.
 *
 * Every row is centred and wraps, so the same markup works from 320px up.
 */
export default function SiteFooter() {
  return (
    <footer className="bg-brand-ink py-16 lg:py-24" data-name="Footer">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          <a className="flex items-center gap-2" href="#top">
            <span className="relative block size-[56px] lg:size-[83px]">
              <span className="absolute inset-[2.99%]">
                <svg className="block size-full" fill="none" height="78.0294" preserveAspectRatio="none" viewBox="0 0 78.0294 78.0294" width="78.0294">
                  <path d={svgPaths.pde64000} id="Polygon 2" stroke="#26C1F2" strokeWidth="2" />
                </svg>
              </span>
            </span>
            <span className="-ml-2 font-poppins text-fluid-2xl font-bold tracking-[0.04em] text-white">
              Skilline
            </span>
          </a>

          <span
            aria-hidden="true"
            className="hidden h-[83px] w-px bg-[#626381] sm:block"
          />

          <p className="max-w-[156px] font-poppins text-fluid-base font-semibold tracking-[0.04em] text-white">
            Virtual Class for Zoom
          </p>
        </div>

        <p className="mt-14 text-center font-poppins text-fluid-lg font-medium tracking-[0.04em] text-[#b2b3cf]">
          Subscribe to get our Newsletter
        </p>

        <form
          className="mx-auto mt-8 flex w-full max-w-[600px] flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-center"
          onSubmit={(event) => event.preventDefault()}
        >
          <label className="sr-only" htmlFor="newsletter-email">
            Your Email
          </label>
          <input
            autoComplete="email"
            className="min-w-0 flex-1 rounded-[80px] border border-solid border-[#83839a] bg-transparent px-8 py-4 text-center font-poppins text-fluid-sm tracking-[0.04em] text-white placeholder:text-[#83839a] sm:text-left"
            id="newsletter-email"
            name="email"
            placeholder="Your Email"
            type="email"
          />
          <button
            className="rounded-[60px] bg-[linear-gradient(129.6deg,rgb(84,90,231)_19.572%,rgb(57,63,207)_78.846%)] px-10 py-4 font-poppins text-fluid-base font-medium text-white transition-opacity hover:opacity-90"
            type="submit"
          >
            Subscribe
          </button>
        </form>

        <ul className="mt-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-x-10">
          {FOOTER_LINKS.map((link, index) => (
            <li className="flex items-center gap-6 sm:gap-10" key={link}>
              {index > 0 ? (
                <span aria-hidden="true" className="h-[17px] w-px bg-[#626381]" />
              ) : null}
              <a
                className="font-poppins text-fluid-base tracking-[0.04em] text-[#b2b3cf] transition-colors hover:text-white"
                href="#top"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-center font-poppins text-fluid-base tracking-[0.04em] text-[#b2b3cf]">
          © 2021 Class Technologies Inc.
        </p>
      </Container>
    </footer>
  );
}
