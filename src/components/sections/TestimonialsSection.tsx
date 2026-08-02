import svgPaths from "@/assets/svg-paths";
import Container from "@/components/ui/Container";
import FigmaArt from "@/components/ui/FigmaArt";
import {
  imgSmilingWomanWithAfroPosingPinkSweater1,
} from "@/assets/image-placeholders";
import imgSmilingWomanWithAfroPosingPinkSweater2 from "@/assets/images/smiling-woman-with-afro-posing-pink-sweater-2.png";

function ReviewerPhoto() {
  return (
    <div className="absolute contents left-[calc(50%+10px)] top-[8842px]" data-name="Mask Group">
      <div className="absolute h-[702px] left-[calc(33.33%+94px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[236px_0px] mask-size-[560px_700px] top-[8842px] w-[1052px]" style={{ maskImage: `url("${imgSmilingWomanWithAfroPosingPinkSweater1}")` }} data-name="smiling-woman-with-afro-posing-pink-sweater 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSmilingWomanWithAfroPosingPinkSweater2} />
      </div>
    </div>
  );
}

/** Five-star rating mark from the export. */
function RatingStars() {
  return (
    <span className="block h-[24px] w-[137px] max-w-full">
      <svg className="block size-full" fill="none" height="23.975" preserveAspectRatio="xMidYMid meet" viewBox="0 0 137 23.975" width="137">
        <g id="Group 29">
          <path d={svgPaths.pae59200} fill="#FBA333" id="Star 1" />
          <path d={svgPaths.p284b4200} fill="#FBA333" id="Star 2" />
          <path d={svgPaths.p332a7a80} fill="#FBA333" id="Star 3" />
          <path d={svgPaths.p3aa7af80} fill="#FBA333" id="Star 4" />
          <path d={svgPaths.p6f34400} fill="#FBA333" id="Star 5" />
        </g>
      </svg>
    </span>
  );
}

/** Circular arrow that terminates the "Write your assessment" pill. */
function ArrowBadge() {
  return (
    <span className="block size-[56px] shrink-0 lg:size-[80px]">
      <svg className="block size-full" fill="none" height="80" preserveAspectRatio="xMidYMid meet" viewBox="0 0 80 80" width="80">
        <g id="Group 32">
          <circle cx="40" cy="40" id="Ellipse 15" r="39.5" stroke="#F48C06" />
          <path d={svgPaths.p3c24de80} fill="#F48C06" id="Arrow 2" />
        </g>
      </svg>
    </span>
  );
}

/** The white "next" chip floating over the portrait. */
function NextTestimonialButton() {
  return (
    <div className="absolute left-[calc(75%+68px)] size-[80px] top-[9130px]">
      <div className="absolute inset-[-70%_-75%_-80%_-75%]">
        <svg className="block size-full" fill="none" height="200" preserveAspectRatio="none" viewBox="0 0 200 200" width="200">
          <g id="Group 51">
            <g filter="url(#filter0_d_0_67)" id="Ellipse 15">
              <circle cx="100" cy="96" fill="white" r="40" />
            </g>
            <path d="M94 86L106 96L94 106" id="Vector 5" stroke="#1EA4CE" strokeWidth="4" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="200" id="filter0_d_0_67" width="200" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="30" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.15925 0 0 0 0 0.17238 0 0 0 0 0.4875 0 0 0 0.15 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_67" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_67" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

/**
 * Customer quote and rating.
 *
 * Copy and portrait share a two-column grid on wide screens; the quote card
 * always sits below the portrait so it never overlaps it at narrow widths.
 */
export default function TestimonialsSection() {
  return (
    <section className="py-12 lg:py-20" data-name="Testimonials">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="font-nunito text-fluid-sm tracking-[0.2em] text-brand-slate">
              TESTIMONIAL
            </p>
            <span
              aria-hidden="true"
              className="mt-3 block h-px w-20 bg-brand-slate"
            />

            <h2 className="mt-8 font-nunito text-fluid-6xl font-bold text-brand-navy">
              What They Say?
            </h2>

            <div className="mt-8 flex flex-col gap-6 font-poppins text-fluid-lg leading-[1.6] tracking-[0.02em] text-brand-muted lg:mt-12 lg:gap-10">
              <p className="max-w-[607px]">
                Skilline has got more than 100k positive ratings from our users
                around the world.
              </p>
              <p className="max-w-[573px]">
                Some of the students and teachers were greatly helped by the
                Skilline.
              </p>
              <p>Are you too? Please give your assessment</p>
            </div>

            <a
              className="mt-10 inline-flex items-center gap-4 rounded-[80px] border border-solid border-brand-orange py-2 pl-8 pr-2 font-poppins text-fluid-base leading-[1.6] tracking-[0.02em] text-brand-orange transition-colors hover:bg-brand-orange/5 lg:pl-12"
              href="#top"
            >
              Write your assessment
              <ArrowBadge />
            </a>
          </div>

          <div className="flex flex-col gap-10">
            <FigmaArt
              className="mx-auto w-full max-w-[560px] lg:max-w-none"
              height={740}
              width={700}
              x={955}
              y={8822}
            >
              <ReviewerPhoto />
              <NextTestimonialButton />
            </FigmaArt>

            <figure className="relative overflow-hidden rounded-[20px] bg-white px-6 py-8 shadow-[2px_4px_60px_0px_rgba(41,44,124,0.1)] sm:px-10 sm:py-12">
              <span
                aria-hidden="true"
                className="absolute inset-y-0 left-0 w-[14px] bg-[#f67766]"
              />

              <blockquote className="ml-4 font-nunito text-fluid-base leading-[1.8] tracking-[0.02em] text-[#5f5f7e] sm:ml-8">
                &ldquo;Thank you so much for your help. It&rsquo;s exactly what
                I&rsquo;ve been looking for. You won&rsquo;t regret it. It really
                saves me time and effort. Skilline is exactly what our business
                has been lacking.&rdquo;
              </blockquote>

              <figcaption className="ml-4 mt-8 flex flex-wrap items-center justify-between gap-4 sm:ml-8">
                <div>
                  <p className="font-nunito text-fluid-md font-semibold leading-[1.8] text-[#5f5f7e]">
                    Gloria Rose
                  </p>
                  <p className="font-nunito text-fluid-xs font-semibold leading-[1.8] tracking-[0.02em] text-[#80819a]">
                    12 reviews at Yelp
                  </p>
                </div>
                <RatingStars />
              </figcaption>
            </figure>
          </div>
        </div>
      </Container>
    </section>
  );
}
