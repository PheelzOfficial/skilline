import svgPaths from "@/assets/svg-paths";
import FeatureRow from "@/components/sections/features/FeatureRow";
import FigmaArt from "@/components/ui/FigmaArt";
import {
  imgImage15,
  imgImage17,
} from "@/assets/image-placeholders";
import imgImage16 from "@/assets/images/image-16.png";

function QuizWrongAnswerBadge() {
  return (
    <div className="absolute flex items-center justify-center left-[calc(25%+118.22px)] size-[89.822px] top-[5814.99px]">
      <div className="flex-none rotate-[-10.96deg]">
        <div className="relative size-[76.646px]">
          <div className="absolute inset-[-47.51%_-52.26%_-57.01%_-52.26%]">
            <svg className="block size-full" fill="none" height="156.752" preserveAspectRatio="none" viewBox="0 0 156.752 156.752" width="156.752">
              <g id="SendIconLayer 90">
                <g filter="url(#filter0_d_0_112)" id="Ellipse 102">
                  <circle cx="78.3759" cy="74.7347" fill="white" r="38.323" />
                </g>
                <circle cx="77.8969" cy="74.2558" id="Ellipse 101" r="20.1912" stroke="#EE3175" strokeWidth="2.73088" />
                <path d={svgPaths.p1b85e8e0} id="Vector 7" stroke="#EE3175" strokeLinecap="round" strokeWidth="2.73088" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="156.752" id="filter0_d_0_112" width="156.752" x="0" y="-1.66893e-06">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="3.64118" />
                  <feGaussianBlur stdDeviation="20.0265" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.185194 0 0 0 0 0.197453 0 0 0 0 0.491667 0 0 0 0.1 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_112" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_112" mode="normal" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function QuizCorrectAnswerBadge() {
  return (
    <div className="absolute flex items-center justify-center left-[calc(25%+173.79px)] size-[92.816px] top-[5862.9px]">
      <div className="flex-none rotate-[13.9deg]">
        <div className="relative size-[76.646px]">
          <div className="absolute inset-[-47.51%_-52.26%_-57.01%_-52.26%]">
            <svg className="block size-full" fill="none" height="156.752" preserveAspectRatio="none" viewBox="0 0 156.752 156.752" width="156.752">
              <g id="SendIconLayer 88">
                <g filter="url(#filter0_d_0_247)" id="Ellipse 102">
                  <circle cx="78.3759" cy="74.7347" fill="white" r="38.323" />
                </g>
                <g id="SendIconLayer 85">
                  <circle cx="77.8969" cy="74.2559" id="Ellipse 101" r="20.1912" stroke="#2DD38E" strokeWidth="2.73088" />
                  <path d={svgPaths.pa188e40} id="Vector 6" stroke="#2DD38E" strokeLinecap="round" strokeWidth="2.73088" />
                </g>
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="156.752" id="filter0_d_0_247" width="156.752" x="0" y="-1.66893e-06">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="3.64118" />
                  <feGaussianBlur stdDeviation="20.0265" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.185194 0 0 0 0 0.197453 0 0 0 0 0.491667 0 0 0 0.1 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_247" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_247" mode="normal" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function QuizScreenshotBack() {
  return (
    <div className="absolute contents left-[calc(8.33%+149.84px)] top-[6134.99px]" data-name="Mask SendIconLayer">
      <div className="absolute h-[258.672px] left-[calc(8.33%+121.61px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[28.235px_15.484px] mask-size-[406.224px_227.704px] opacity-90 rounded-[18.206px] top-[6119.51px] w-[461.783px]" style={{ maskImage: `url("${imgImage15}")` }} data-name="image 13">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[18.206px] size-full" src={imgImage16} />
      </div>
    </div>
  );
}

function QuizScreenshotFront() {
  return (
    <div className="absolute contents left-[calc(8.33%+112.48px)] top-[6104.33px]" data-name="Mask SendIconLayer">
      <div className="absolute h-[290.395px] left-[calc(8.33%+80.78px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[31.698px_17.383px] mask-size-[456.043px_255.63px] rounded-[18.206px] top-[6086.95px] w-[518.417px]" style={{ maskImage: `url("${imgImage17}")` }} data-name="image 13">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[18.206px] size-full" src={imgImage16} />
      </div>
    </div>
  );
}

function SendIconShape() {
  return (
    <div className="absolute inset-[6.86%_0]" data-name="SendIconLayer">
      <svg className="absolute block inset-0 size-full" fill="none" height="41.3338" preserveAspectRatio="none" viewBox="0 0 47.9037 41.3338" width="47.9037">
        <g id="SendIconLayer">
          <path d={svgPaths.p297b8d80} fill="#41BE90" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SendIconLayer() {
  return (
    <div className="absolute contents inset-[6.86%_0]" data-name="SendIconLayer">
      <SendIconShape />
    </div>
  );
}

function SendIcon() {
  return (
    <div className="absolute flex items-center justify-center left-[calc(16.67%+176.66px)] size-[64.353px] top-[6340.02px]">
      <div className="flex-none rotate-[-26.79deg]">
        <div className="overflow-clip relative size-[47.904px]" data-name="send 1">
          <SendIconLayer />
        </div>
      </div>
    </div>
  );
}

function SendAnswerIcon() {
  return (
    <div className="absolute contents h-[76.444px] left-[calc(16.67%+152.72px)] top-[6340.02px] w-[88.3px]">
      <SendIcon />
      <div className="absolute flex h-[11.227px] items-center justify-center left-[calc(16.67%+160.92px)] top-[6378.72px] w-[22.236px]">
        <div className="flex-none rotate-[-26.79deg]">
          <div className="h-0 relative w-[24.91px]">
            <div className="absolute inset-[-2.73px_0_0_0]">
              <svg className="block size-full" fill="none" height="2.73088" preserveAspectRatio="none" viewBox="0 0 24.9099 2.73088" width="24.9099">
                <line id="Line 6" stroke="#41BE90" strokeLinecap="round" strokeWidth="2.73088" x1="1.36544" x2="23.5445" y1="1.36544" y2="1.36544" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[7.773px] items-center justify-center left-[calc(16.67%+170.35px)] top-[6383.85px] w-[15.394px]">
        <div className="flex-none rotate-[-26.79deg]">
          <div className="h-0 relative w-[17.245px]">
            <div className="absolute inset-[-2.73px_0_0_0]">
              <svg className="block size-full" fill="none" height="2.73088" preserveAspectRatio="none" viewBox="0 0 17.2453 2.73088" width="17.2453">
                <line id="Line 7" stroke="#FBA333" strokeLinecap="round" strokeWidth="2.73088" x1="1.36544" x2="15.8799" y1="1.36544" y2="1.36544" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[4.75px] items-center justify-center left-[calc(16.67%+178.93px)] top-[6388.99px] w-[9.408px]">
        <div className="flex-none rotate-[-26.79deg]">
          <div className="h-0 relative w-[10.539px]">
            <div className="absolute inset-[-2.73px_0_0_0]">
              <svg className="block size-full" fill="none" height="2.73088" preserveAspectRatio="none" viewBox="0 0 10.5388 2.73088" width="10.5388">
                <line id="Line 8" stroke="#41BE90" strokeLinecap="round" strokeWidth="2.73088" x1="1.36544" x2="9.17338" y1="1.36544" y2="1.36544" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AnswerSentConfirmation() {
  return (
    <div className="absolute contents left-[calc(16.67%+123.97px)] top-[6317.98px]">
      <div className="absolute bg-white h-[119.759px] left-[calc(16.67%+123.97px)] rounded-[18.206px] shadow-[0px_18.206px_52.797px_0px_rgba(40,43,111,0.08)] top-[6317.98px] w-[365.026px]" />
      <div className="absolute h-[38.323px] left-[calc(33.33%+101.93px)] top-[6378.34px] w-[37.365px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="38.323" preserveAspectRatio="none" viewBox="0 0 37.3649 38.323" width="37.3649">
          <ellipse cx="18.6825" cy="19.1615" fill="#D8F9ED" id="Ellipse 103" rx="18.6825" ry="19.1615" />
        </svg>
      </div>
      <div className="absolute left-[calc(16.67%+164.21px)] size-[59.401px] top-[6351.52px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="59.4006" preserveAspectRatio="none" viewBox="0 0 59.4006 59.4006" width="59.4006">
          <circle cx="29.7003" cy="29.7003" fill="#D8F9ED" id="Ellipse 104" r="29.7003" />
        </svg>
      </div>
      <p className="font-poppins font-semibold [word-break:break-word] absolute h-[67.065px] leading-[1.6] left-[calc(25%+109.6px)] not-italic text-[#41be90] text-[20.026px] top-[6344.81px] w-[190.657px]">Your answer was sent successfully</p>
      <SendAnswerIcon />
    </div>
  );
}

function QuizCard() {
  return (
    <div className="absolute contents left-[192px] top-[5792px]">
      <div className="absolute left-[224.57px] size-[19.161px] top-[6424.33px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="19.1615" preserveAspectRatio="none" viewBox="0 0 19.1615 19.1615" width="19.1615">
          <circle cx="9.58075" cy="9.58075" fill="#34E7A5" id="Ellipse 105" r="9.58075" />
        </svg>
      </div>
      <div className="absolute left-[calc(33.33%+103.85px)] size-[16.287px] top-[6150.32px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="16.2873" preserveAspectRatio="none" viewBox="0 0 16.2873 16.2873" width="16.2873">
          <circle cx="8.14363" cy="8.14363" fill="#F3538C" id="Ellipse 108" r="8.14363" />
        </svg>
      </div>
      <div className="absolute left-[192px] size-[99.64px] top-[5817.87px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="99.6397" preserveAspectRatio="none" viewBox="0 0 99.6397 99.6397" width="99.6397">
          <circle cx="49.8199" cy="49.8199" fill="#687EF3" id="Ellipse 106" r="49.8199" />
        </svg>
      </div>
      <div className="absolute left-[calc(8.33%+149.84px)] size-[22.994px] top-[5792px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="22.9938" preserveAspectRatio="none" viewBox="0 0 22.9938 22.9938" width="22.9938">
          <circle cx="11.4969" cy="11.4969" fill="#F3A268" id="Ellipse 107" r="11.4969" />
        </svg>
      </div>
      <div className="absolute bg-white h-[562.39px] left-[calc(8.33%+77.99px)] rounded-[18.206px] shadow-[0px_9.103px_43.694px_0px_rgba(40,43,111,0.1)] top-[5836.07px] w-[465.624px]" />
      <p className="font-poppins font-semibold [word-break:break-word] absolute h-[103.472px] leading-[1.6] left-[calc(8.33%+116.31px)] not-italic text-[#55578d] text-[30.95px] top-[5962.54px] w-[387.062px]">True or false? This play takes place in Italy</p>
      <QuizWrongAnswerBadge />
      <QuizCorrectAnswerBadge />
      <div className="absolute bg-[#cdd8ff] h-[47.904px] left-[calc(8.33%+116.31px)] rounded-[72.824px] top-[5874.39px] w-[174.37px]" />
      <p className="font-poppins font-medium [word-break:break-word] absolute h-[33.533px] leading-[1.6] left-[calc(8.33%+149.84px)] not-italic text-[#717fb0] text-[20.026px] top-[5881.1px] w-[108.262px]">Question 1</p>
      <QuizScreenshotBack />
      <QuizScreenshotFront />
      <AnswerSentConfirmation />
    </div>
  );
}

/**
 * Live quiz and assessment flow.
 */
export default function AssessmentsFeature() {
  return (
    <FeatureRow
      art={
        <FigmaArt
          className="mx-auto w-full max-w-[520px] lg:max-w-none"
          height={691}
          width={657}
          x={172}
          y={5772}
        >
          <QuizCard />
        </FigmaArt>
      }
      artFirst
    >
      <h3 className="max-w-[347px] font-poppins text-fluid-4xl font-semibold leading-[1.3] text-brand-navy">
        Assessments, <span className="text-brand-orange">Quizzes</span>, Tests
      </h3>

      <p className="mt-5 max-w-[596px] font-poppins text-fluid-base leading-[1.8] tracking-[0.02em] text-brand-muted lg:mt-7">
        Easily launch live assignments, quizzes, and tests. Student results are
        automatically entered in the online gradebook.
      </p>
    </FeatureRow>
  );
}
