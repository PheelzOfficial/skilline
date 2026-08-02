import svgPaths from "@/assets/svg-paths";
import Container from "@/components/ui/Container";
import FigmaArt from "@/components/ui/FigmaArt";
import imgConfidentTeacherExplainingLessonPupils1 from "@/assets/images/confident-teacher-explaining-lesson-pupils-1.png";
import { useInView } from "@/hooks/useInView";

function PlayButton() {
  return (
    <div className="absolute left-[calc(66.67%+46px)] size-[70px] top-[3532px]" data-name="play-button">
      <div className="absolute inset-[-57.14%_-88.57%_-114.29%_-82.86%]">
        <svg className="block size-full" fill="none" height="190" preserveAspectRatio="none" viewBox="0 0 190 190" width="190">
          <g id="play-button">
            <g filter="url(#filter0_d_0_109)" id="Ellipse 1">
              <circle cx="93" cy="75" fill="white" r="35" />
            </g>
            <path d={svgPaths.p2cb6d3e0} fill="#23BDEE" id="Polygon 2" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="190" id="filter0_d_0_109" width="190" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="2" dy="20" />
              <feGaussianBlur stdDeviation="30" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.239854 0 0 0 0 0.607896 0 0 0 0 0.725 0 0 0 0.1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_109" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_109" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function ClassroomVideoThumbnail() {
  return (
    <div className="absolute contents left-[calc(50%+48px)] top-[3331px]">
      <div className="absolute h-[471.079px] left-[calc(50%+48px)] rounded-[20px] top-[3331px] w-[705px]" data-name="confident-teacher-explaining-lesson-pupils 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgConfidentTeacherExplainingLessonPupils1} />
      </div>
      <PlayButton />
    </div>
  );
}

/** Decorative shapes that flank the artwork on the original canvas. */
function Decorations() {
  return (
    <>
      <div className="absolute bg-[#f3ac50] left-[calc(75%+62px)] rounded-[20px] size-[231px] top-[3592px]" />
      <div className="absolute bg-[#23bdee] left-[calc(50%+28px)] rounded-[20px] size-[138px] top-[3311px]" />
      <div className="absolute left-[calc(41.67%+102px)] size-[30px] top-[3594px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="30" preserveAspectRatio="none" viewBox="0 0 30 30" width="30">
          <circle cx="15" cy="15" fill="#F4B767" id="Ellipse 13" r="15" />
        </svg>
      </div>
    </>
  );
}

/**
 * Capability highlights.
 *
 * Copy and artwork sit side by side from `lg` up; below that the artwork drops
 * under the copy.
 */
export default function WhatYouCanDoSection() {
  const { ref, inView } = useInView(0.2);

  return (
    <section ref={ref} className="py-12 lg:py-20" data-name="You Can Do With Skilline">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative max-w-[730px]">
            {/* Amber disc tucked behind the first line of the heading. */}
            <span
              aria-hidden="true"
              className="absolute -left-2 -top-6 -z-10 size-12 rounded-full bg-[#F4B767] lg:-left-6 lg:-top-8 lg:size-[73px]"
            />

            <h2 
              className={`font-poppins text-fluid-3xl font-medium leading-[1.3] text-brand-navy transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              Everything you can do in a physical classroom,{" "}
              <span className="text-brand-orange">you can do with Skilline</span>
            </h2>

            <p 
              className={`mt-5 font-poppins text-fluid-md leading-[1.8] tracking-[0.02em] text-brand-muted lg:mt-7 transition-all duration-700 delay-100 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              Skilline’s school management software helps traditional and online
              schools manage scheduling, attendance, payments and virtual
              classrooms all in one secure cloud-based system.
            </p>

            <div 
              className={`mt-7 lg:mt-8 transition-all duration-700 delay-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <a
                className="link link-cta font-poppins text-fluid-base leading-[1.8] text-brand-muted"
                href="#top"
              >
                Learn more
              </a>
            </div>
          </div>

          <FigmaArt
            className={`w-full transition-all duration-1000 delay-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              inView ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
            }`}
            height={540}
            width={840}
            x={900}
            y={3300}
          >
            <Decorations />
            <ClassroomVideoThumbnail />
          </FigmaArt>
        </div>
      </Container>
    </section>
  );
}
