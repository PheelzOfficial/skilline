import svgPaths from "@/assets/svg-paths";
import imgConfidentTeacherExplainingLessonPupils1 from "@/assets/images/confident-teacher-explaining-lesson-pupils-1.png";

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

function Group17() {
  return (
    <div className="absolute contents left-[calc(50%+48px)] top-[3331px]">
      <div className="absolute h-[471.079px] left-[calc(50%+48px)] rounded-[20px] top-[3331px] w-[705px]" data-name="confident-teacher-explaining-lesson-pupils 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgConfidentTeacherExplainingLessonPupils1} />
      </div>
      <PlayButton />
    </div>
  );
}

/**
 * Capability highlights.
 *
 * Absolutely positioned against the 1920px landing-page canvas.
 */
export default function WhatYouCanDoSection() {
  return (
    <div className="absolute contents left-[186px] top-[3311px]" data-name="You Can Do With Skilline">
      <div className="absolute left-[186px] size-[73px] top-[3362px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="73" preserveAspectRatio="none" viewBox="0 0 73 73" width="73">
          <circle cx="36.5" cy="36.5" fill="#F4B767" id="Ellipse 12" r="36.5" />
        </svg>
      </div>
      <p className="font-poppins font-normal [word-break:break-word] absolute leading-[1.8] left-[211px] not-italic text-[#696984] text-[24px] top-[3521px] tracking-[0.48px] w-[730px]">Skilline’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</p>
      <p className="font-poppins font-normal [text-decoration-skip-ink:none] [text-underline-position:from-font] [word-break:break-word] absolute decoration-from-font decoration-solid leading-[1.8] left-[211px] not-italic text-[#696984] text-[22px] top-[3723px] underline whitespace-nowrap">Learn more</p>
      <p className="font-nunito font-bold [word-break:break-word] absolute leading-[0] left-[211px] not-italic text-[#2f327d] text-[36px] top-[3375px] w-[655px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        <span className="font-poppins font-medium leading-[1.6]">{`Everything you can do in a physical classroom, `}</span>
        <span className="font-poppins font-medium leading-[1.6] text-[#f48c06]">you can do with Skilline</span>
      </p>
      <div className="absolute bg-[#f3ac50] left-[calc(75%+62px)] rounded-[20px] size-[231px] top-[3592px]" />
      <div className="absolute bg-[#23bdee] left-[calc(50%+28px)] rounded-[20px] size-[138px] top-[3311px]" />
      <Group17 />
      <div className="absolute left-[calc(41.67%+102px)] size-[30px] top-[3594px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="30" preserveAspectRatio="none" viewBox="0 0 30 30" width="30">
          <circle cx="15" cy="15" fill="#F4B767" id="Ellipse 13" r="15" />
        </svg>
      </div>
    </div>
  );
}
