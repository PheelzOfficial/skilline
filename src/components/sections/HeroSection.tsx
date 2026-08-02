import { useState } from "react";

import svgPaths from "@/assets/svg-paths";
import Container from "@/components/ui/Container";
import FigmaArt from "@/components/ui/FigmaArt";
import {
  imgLovelyTeenageGirlWithCurlyHairPosingYellowTshirtMin1,
} from "@/assets/image-placeholders";
import imgLovelyTeenageGirlWithCurlyHairPosingYellowTshirtMin2 from "@/assets/images/lovely-teenage-girl-with-curly-hair-posing-yellow-tshirt-min-2.png";
import imgEllipse from "@/assets/images/ellipse.png";

function JoinNowButton() {
  return (
    <div className="absolute contents left-[calc(50%+28px)] top-[853px]">
      <div className="absolute bg-[#d8587e] h-[50px] left-[calc(50%+28px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-988px_-853px] mask-size-[1920px_1118px] rounded-[80px] top-[853px] w-[180px]" style={{ maskImage: `url("${imgLovelyTeenageGirlWithCurlyHairPosingYellowTshirtMin1}")` }} />
      <p className="font-nunito font-bold [word-break:break-word] absolute leading-[normal] left-[calc(50%+76px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1036px_-865px] mask-size-[1920px_1118px] text-[20px] text-white top-[865px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100', maskImage: `url("${imgLovelyTeenageGirlWithCurlyHairPosingYellowTshirtMin1}")` }}>
        Join Now
      </p>
    </div>
  );
}

function UpcomingClassCard() {
  return (
    <div className="absolute contents left-[calc(41.67%+83px)] top-[744px]">
      <div className="absolute backdrop-blur-[10px] bg-[rgba(255,255,255,0.8)] h-[187px] left-[calc(41.67%+83px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-883px_-744px] mask-size-[1920px_1118px] rounded-[20px] top-[744px] w-[390px]" style={{ maskImage: `url("${imgLovelyTeenageGirlWithCurlyHairPosingYellowTshirtMin1}")` }} />
      <p className="font-nunito font-bold [word-break:break-word] absolute leading-[1.8] left-[calc(50%+28px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-988px_-764px] mask-size-[1920px_1118px] text-[#595959] text-[24px] top-[764px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100', maskImage: `url("${imgLovelyTeenageGirlWithCurlyHairPosingYellowTshirtMin1}")` }}>
        User Experience Class
      </p>
      <p className="font-nunito font-semibold [word-break:break-word] absolute leading-[1.8] left-[calc(50%+28px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-988px_-798px] mask-size-[1920px_1118px] text-[#545567] text-[20px] top-[798px] tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100', maskImage: `url("${imgLovelyTeenageGirlWithCurlyHairPosingYellowTshirtMin1}")` }}>
        Today at 12.00 PM
      </p>
      <JoinNowButton />
      <div className="absolute left-[calc(41.67%+109px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-909px_-770px] mask-size-[1920px_1118px] size-[56px] top-[770px]" style={{ maskImage: `url("${imgLovelyTeenageGirlWithCurlyHairPosingYellowTshirtMin1}")` }} data-name="Ellipse">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="56" src={imgEllipse} width="56" />
      </div>
      <div className="absolute left-[calc(41.67%+146px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-946px_-809px] mask-size-[1920px_1118px] size-[20px] top-[809px]" style={{ maskImage: `url("${imgLovelyTeenageGirlWithCurlyHairPosingYellowTshirtMin1}")` }}>
        <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
          <circle cx="10" cy="10" fill="#2EBB5E" id="Ellipse 4" r="9" stroke="#FBECD7" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}

function AdmissionIconTile() {
  return (
    <div className="absolute contents left-[calc(75%+10px)] top-[634px]">
      <div className="absolute bg-[#f88c3d] left-[calc(75%+10px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1450px_-634px] mask-size-[1920px_1118px] rounded-[8px] size-[50px] top-[634px]" style={{ maskImage: `url("${imgLovelyTeenageGirlWithCurlyHairPosingYellowTshirtMin1}")` }} />
    </div>
  );
}

function EmailIconBodyShape() {
  return (
    <div className="absolute inset-[14.29%_3.05%_47.47%_3.57%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.4729" preserveAspectRatio="none" viewBox="0 0 28.0146 11.4729" width="28.0146">
        <g id="Group">
          <path d={svgPaths.p2a804a00} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function EmailIconBody() {
  return (
    <div className="absolute contents inset-[14.29%_3.05%_47.47%_3.57%]" data-name="Group">
      <EmailIconBodyShape />
    </div>
  );
}

function EmailIconSealShape() {
  return (
    <div className="absolute inset-[20.59%_0_14.29%_0]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="19.5364" preserveAspectRatio="none" viewBox="0 0 30 19.5364" width="30">
        <g id="Group">
          <path d={svgPaths.pddd6600} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function EmailIconSeal() {
  return (
    <div className="absolute contents inset-[20.59%_0_14.29%_0]" data-name="Group">
      <EmailIconSealShape />
    </div>
  );
}

function EmailIcon() {
  return (
    <div className="absolute left-[calc(75%+20px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1460px_-644px] mask-size-[1920px_1118px] overflow-clip size-[30px] top-[644px]" style={{ maskImage: `url("${imgLovelyTeenageGirlWithCurlyHairPosingYellowTshirtMin1}")` }} data-name="email 2 1">
      <EmailIconBody />
      <EmailIconSeal />
    </div>
  );
}

function AdmissionCompletedCard() {
  return (
    <div className="absolute contents left-[calc(75%-16px)] top-[604px]">
      <div className="absolute backdrop-blur-[10px] bg-[rgba(255,255,255,0.8)] h-[110px] left-[calc(75%-16px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1424px_-604px] mask-size-[1920px_1118px] rounded-[20px] top-[604px] w-[370px]" style={{ maskImage: `url("${imgLovelyTeenageGirlWithCurlyHairPosingYellowTshirtMin1}")` }} />
      <p className="font-nunito font-bold [word-break:break-word] absolute leading-[1.8] left-[calc(75%+84px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1524px_-624px] mask-size-[1920px_1118px] text-[#595959] text-[24px] top-[624px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100', maskImage: `url("${imgLovelyTeenageGirlWithCurlyHairPosingYellowTshirtMin1}")` }}>
        Congratulations
      </p>
      <p className="font-nunito font-semibold [word-break:break-word] absolute leading-[1.8] left-[calc(75%+84px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1524px_-658px] mask-size-[1920px_1118px] text-[#545567] text-[20px] top-[658px] tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100', maskImage: `url("${imgLovelyTeenageGirlWithCurlyHairPosingYellowTshirtMin1}")` }}>
        Your admission completed
      </p>
      <AdmissionIconTile />
      <EmailIcon />
    </div>
  );
}

function BarChartGlyph() {
  return (
    <div className="absolute h-[24.15px] left-[calc(83.33%+50.88px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1650.875px_-376.425px] mask-size-[1920px_1118px] top-[376.42px] w-[18.112px]" style={{ maskImage: `url("${imgLovelyTeenageGirlWithCurlyHairPosingYellowTshirtMin1}")` }}>
      <div className="absolute inset-[-8.28%_-6.28%_-8.28%_-11.04%]">
        <svg className="block size-full" fill="none" height="28.15" preserveAspectRatio="none" viewBox="0 0 21.25 28.15" width="21.25">
          <g id="Group 8">
            <path d="M10.625 2V26.15" id="Vector 1" stroke="#F25471" strokeLinecap="round" strokeWidth="4" />
            <path d="M2 6.3125L2 26.15" id="Vector 3" stroke="#F25471" strokeLinecap="round" strokeWidth="4" />
            <path d="M19.25 11.4875V26.15" id="Vector 2" stroke="#F25471" strokeLinecap="round" strokeWidth="4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function StatsBadge() {
  return (
    <div className="absolute contents left-[calc(83.33%+25px)] top-[354px]">
      <div className="absolute bg-[#f3627c] left-[calc(83.33%+25px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1625px_-354px] mask-size-[1920px_1118px] rounded-[14px] shadow-[0px_8px_40px_0px_rgba(210,77,101,0.26)] size-[69px] top-[354px]" style={{ maskImage: `url("${imgLovelyTeenageGirlWithCurlyHairPosingYellowTshirtMin1}")` }} />
      <div className="absolute bg-white h-[44.85px] left-[calc(83.33%+36.35px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1636.35px_-366.075px] mask-size-[1920px_1118px] rounded-[8px] top-[366.08px] w-[47.3px]" style={{ maskImage: `url("${imgLovelyTeenageGirlWithCurlyHairPosingYellowTshirtMin1}")` }} />
      <BarChartGlyph />
    </div>
  );
}

function HeroCalendarIconPart1Shape() {
  return (
    <div className="absolute inset-[0_71.43%_89.29%_21.43%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="2.94643" preserveAspectRatio="none" viewBox="0 0 1.96427 2.94643" width="1.96427">
        <g id="Group">
          <path d={svgPaths.p17671500} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function HeroCalendarIconPart1() {
  return (
    <div className="absolute contents inset-[0_71.43%_89.29%_21.43%]" data-name="Group">
      <HeroCalendarIconPart1Shape />
    </div>
  );
}

function HeroCalendarIconPart2Shape() {
  return (
    <div className="absolute inset-[0_21.43%_89.29%_71.43%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="2.94643" preserveAspectRatio="none" viewBox="0 0 1.96426 2.94643" width="1.96426">
        <g id="Group">
          <path d={svgPaths.p3f97b8c0} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function HeroCalendarIconPart2() {
  return (
    <div className="absolute contents inset-[0_21.43%_89.29%_71.43%]" data-name="Group">
      <HeroCalendarIconPart2Shape />
    </div>
  );
}

function HeroCalendarIconPart3Shape() {
  return (
    <div className="absolute inset-[10.71%_0_0_0]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="24.5536" preserveAspectRatio="none" viewBox="0 0 27.5 24.5536" width="27.5">
        <g id="Group">
          <path d={svgPaths.p341e7e80} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function HeroCalendarIconPart3() {
  return (
    <div className="absolute contents inset-[10.71%_0_0_0]" data-name="Group">
      <HeroCalendarIconPart3Shape />
    </div>
  );
}

function HeroCalendarIconPart4Shape() {
  return (
    <div className="absolute bottom-[42.86%] left-[17.86%] right-[67.86%] top-1/2" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="1.96433" preserveAspectRatio="none" viewBox="0 0 3.92859 1.96433" width="3.92859">
        <g id="Group">
          <path d={svgPaths.p3e07e700} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function HeroCalendarIconPart4() {
  return (
    <div className="absolute bottom-[42.86%] contents left-[17.86%] right-[67.86%] top-1/2" data-name="Group">
      <HeroCalendarIconPart4Shape />
    </div>
  );
}

function HeroCalendarIconPart5Shape() {
  return (
    <div className="absolute bottom-[42.86%] left-[42.86%] right-[42.86%] top-1/2" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="1.96433" preserveAspectRatio="none" viewBox="0 0 3.9286 1.96433" width="3.9286">
        <g id="Group">
          <path d={svgPaths.pd9cea80} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function HeroCalendarIconPart5() {
  return (
    <div className="absolute bottom-[42.86%] contents left-[42.86%] right-[42.86%] top-1/2" data-name="Group">
      <HeroCalendarIconPart5Shape />
    </div>
  );
}

function HeroCalendarIconPart6Shape() {
  return (
    <div className="absolute bottom-[42.86%] left-[67.86%] right-[17.86%] top-1/2" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="1.96433" preserveAspectRatio="none" viewBox="0 0 3.92859 1.96433" width="3.92859">
        <g id="Group">
          <path d={svgPaths.p16dc3080} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function HeroCalendarIconPart6() {
  return (
    <div className="absolute bottom-[42.86%] contents left-[67.86%] right-[17.86%] top-1/2" data-name="Group">
      <HeroCalendarIconPart6Shape />
    </div>
  );
}

function HeroCalendarIconPart7Shape() {
  return (
    <div className="absolute inset-[64.29%_67.86%_28.57%_17.86%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="1.96432" preserveAspectRatio="none" viewBox="0 0 3.92859 1.96432" width="3.92859">
        <g id="Group">
          <path d={svgPaths.p3f43c800} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function HeroCalendarIconPart7() {
  return (
    <div className="absolute contents inset-[64.29%_67.86%_28.57%_17.86%]" data-name="Group">
      <HeroCalendarIconPart7Shape />
    </div>
  );
}

function HeroCalendarIconPart8Shape() {
  return (
    <div className="absolute inset-[64.29%_42.86%_28.57%_42.86%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="1.96432" preserveAspectRatio="none" viewBox="0 0 3.9286 1.96432" width="3.9286">
        <g id="Group">
          <path d={svgPaths.p1d983c80} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function HeroCalendarIconPart8() {
  return (
    <div className="absolute contents inset-[64.29%_42.86%_28.57%_42.86%]" data-name="Group">
      <HeroCalendarIconPart8Shape />
    </div>
  );
}

function HeroCalendarIconPart9Shape() {
  return (
    <div className="absolute inset-[64.29%_17.86%_28.57%_67.86%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="1.96432" preserveAspectRatio="none" viewBox="0 0 3.92859 1.96432" width="3.92859">
        <g id="Group">
          <path d={svgPaths.p3436dd00} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function HeroCalendarIconPart9() {
  return (
    <div className="absolute contents inset-[64.29%_17.86%_28.57%_67.86%]" data-name="Group">
      <HeroCalendarIconPart9Shape />
    </div>
  );
}

function HeroCalendarIconPart10Shape() {
  return (
    <div className="absolute inset-[78.57%_67.86%_14.29%_17.86%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="1.96426" preserveAspectRatio="none" viewBox="0 0 3.92859 1.96426" width="3.92859">
        <g id="Group">
          <path d={svgPaths.p24282400} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function HeroCalendarIconPart10() {
  return (
    <div className="absolute contents inset-[78.57%_67.86%_14.29%_17.86%]" data-name="Group">
      <HeroCalendarIconPart10Shape />
    </div>
  );
}

function HeroCalendarIconPart11Shape() {
  return (
    <div className="absolute inset-[78.57%_42.86%_14.29%_42.86%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="1.96432" preserveAspectRatio="none" viewBox="0 0 3.9286 1.96432" width="3.9286">
        <g id="Group">
          <path d={svgPaths.p10abf740} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function HeroCalendarIconPart11() {
  return (
    <div className="absolute contents inset-[78.57%_42.86%_14.29%_42.86%]" data-name="Group">
      <HeroCalendarIconPart11Shape />
    </div>
  );
}

function HeroCalendarIconPart12Shape() {
  return (
    <div className="absolute inset-[78.57%_17.86%_14.29%_67.86%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="1.96432" preserveAspectRatio="none" viewBox="0 0 3.92859 1.96432" width="3.92859">
        <g id="Group">
          <path d={svgPaths.p3ddc3a00} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function HeroCalendarIconPart12() {
  return (
    <div className="absolute contents inset-[78.57%_17.86%_14.29%_67.86%]" data-name="Group">
      <HeroCalendarIconPart12Shape />
    </div>
  );
}

function HeroCalendarIcon() {
  return (
    <div className="absolute left-[calc(41.67%+134.25px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-934.25px_-445.25px] mask-size-[1920px_1118px] overflow-clip size-[27.5px] top-[445.25px]" style={{ maskImage: `url("${imgLovelyTeenageGirlWithCurlyHairPosingYellowTshirtMin1}")` }} data-name="calendar 1">
      <HeroCalendarIconPart1 />
      <HeroCalendarIconPart2 />
      <HeroCalendarIconPart3 />
      <HeroCalendarIconPart4 />
      <HeroCalendarIconPart5 />
      <HeroCalendarIconPart6 />
      <HeroCalendarIconPart7 />
      <HeroCalendarIconPart8 />
      <HeroCalendarIconPart9 />
      <HeroCalendarIconPart10 />
      <HeroCalendarIconPart11 />
      <HeroCalendarIconPart12 />
    </div>
  );
}

function AssistedStudentsIconTile() {
  return (
    <div className="absolute contents left-[calc(41.67%+123px)] top-[434px]">
      <div className="absolute bg-[#23bdee] left-[calc(41.67%+123px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-923px_-434px] mask-size-[1920px_1118px] rounded-[8px] size-[50px] top-[434px]" style={{ maskImage: `url("${imgLovelyTeenageGirlWithCurlyHairPosingYellowTshirtMin1}")` }} />
      <HeroCalendarIcon />
    </div>
  );
}

function AssistedStudentsCard() {
  return (
    <div className="absolute contents left-[calc(41.67%+95px)] top-[409px]">
      <div className="absolute backdrop-blur-[10px] bg-[rgba(255,255,255,0.8)] h-[100px] left-[calc(41.67%+95px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-895px_-409px] mask-size-[1920px_1118px] rounded-[20px] top-[409px] w-[300px]" style={{ maskImage: `url("${imgLovelyTeenageGirlWithCurlyHairPosingYellowTshirtMin1}")` }} />
      <p className="font-nunito font-bold [word-break:break-word] absolute leading-[1.8] left-[calc(50%+45px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1005px_-424px] mask-size-[1920px_1118px] text-[#595959] text-[24px] top-[424px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100', maskImage: `url("${imgLovelyTeenageGirlWithCurlyHairPosingYellowTshirtMin1}")` }}>
        250k
      </p>
      <p className="font-nunito font-semibold [word-break:break-word] absolute leading-[1.8] left-[calc(50%+45px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1005px_-458px] mask-size-[1920px_1118px] text-[#545567] text-[20px] top-[458px] tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100', maskImage: `url("${imgLovelyTeenageGirlWithCurlyHairPosingYellowTshirtMin1}")` }}>
        Assisted Student
      </p>
      <AssistedStudentsIconTile />
    </div>
  );
}

function HeroPhoto() {
  return (
    <div className="absolute contents left-[calc(41.67%+83px)] top-[224px]" data-name="header-pic">
      <div className="absolute h-[892px] left-[calc(50%+128px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1088px_-224px] mask-size-[1920px_1118px] shadow-[0px_4px_100px_0px_rgba(29,28,24,0.25)] top-[224px] w-[544px]" style={{ maskImage: `url("${imgLovelyTeenageGirlWithCurlyHairPosingYellowTshirtMin1}")` }} data-name="lovely-teenage-girl-with-curly-hair-posing-yellow-tshirt-min 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[100.06%] left-[-73.12%] max-w-none top-[-0.03%] w-[246.25%]" src={imgLovelyTeenageGirlWithCurlyHairPosingYellowTshirtMin2} />
        </div>
      </div>
      <UpcomingClassCard />
      <AdmissionCompletedCard />
      <StatsBadge />
      <AssistedStudentsCard />
    </div>
  );
}

/** The two stacked status dots that sit on the hero photo. */
function StatusDots() {
  return (
    <>
      <div className="absolute left-[calc(91.67%-2px)] size-[20px] top-[625px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
          <circle cx="10" cy="10" fill="#C4C4C4" id="Ellipse 2" r="10" />
        </svg>
      </div>
      <div className="absolute left-[calc(91.67%-2px)] size-[20px] top-[625px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
          <g id="Group 11">
            <circle cx="10" cy="10" fill="#4EE381" id="Ellipse 3" r="10" />
            <path d="M6 10.6944L8.88679 14L15 7" id="Vector 4" stroke="white" strokeLinecap="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </>
  );
}

/** Circular play glyph beside the "Watch how it works" link. */
function PlayBadge() {
  return (
    <span className="relative block size-[56px] shrink-0 lg:size-[70px]">
      <span className="absolute inset-[-50%_-77.5%_-100%_-72.5%]">
        <svg className="block size-full" fill="none" height="200" preserveAspectRatio="none" viewBox="0 0 200 200" width="200">
          <g id="Group 4">
            <g filter="url(#filter0_d_0_23)" id="Ellipse 1">
              <circle cx="98" cy="80" fill="white" r="40" />
            </g>
            <path d={svgPaths.p2071b0c0} fill="#23BDEE" id="Polygon 2" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="200" id="filter0_d_0_23" width="200" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="2" dy="20" />
              <feGaussianBlur stdDeviation="30" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.239854 0 0 0 0 0.607896 0 0 0 0 0.725 0 0 0 0.1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_23" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_23" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </span>
    </span>
  );
}

/** Skilline wordmark, shared by the header and the mobile menu. */
function Wordmark() {
  return (
    <a className="flex shrink-0 items-center gap-2" href="#top">
      <span className="relative block size-[52px] lg:size-[64px] xl:size-[83px]">
        <span className="absolute inset-[2.99%]">
          <svg className="block size-full" fill="none" height="78.0294" preserveAspectRatio="none" viewBox="0 0 78.0294 78.0294" width="78.0294">
            <path d={svgPaths.p2ea81f00} fill="#65DAFF" id="Polygon 1" />
          </svg>
        </span>
      </span>
      {/*
        * The export tucked the wordmark far enough left that the solid diamond
        * swallowed the "S". The overlap is kept, just shallow enough to read.
        */}
      <span className="-ml-2 font-poppins text-fluid-2xl font-bold tracking-[0.04em] text-[#113c49]">
        Skilline
      </span>
    </a>
  );
}

const NAV_LINKS = ["Home", "Careers", "Blog", "About Us"];

/**
 * Top navigation and hero banner.
 *
 * Below `lg` the nav links and account buttons collapse into a toggle menu, and
 * the hero stacks copy above artwork.
 */
export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="relative overflow-hidden pb-16 sm:pb-24 lg:pb-32 xl:pb-40"
      id="top"
    >
      {/*
        * Cream banner with the curved lower edge, stretched to the section.
        * No negative z-index: that would drop it behind the page's white
        * background. It paints first and the content below is `relative`, so
        * DOM order alone puts the copy on top.
        */}
      <div aria-hidden="true" className="absolute inset-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 1118">
          <path d={svgPaths.p181f7680} fill="#FFF3E4" id="Rectangle 4" />
        </svg>
      </div>

      <Container className="relative">
        <nav className="flex items-center justify-between gap-4 py-4 lg:py-6">
          <Wordmark />

          <ul className="hidden items-center gap-6 xl:gap-10 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  className="font-poppins text-fluid-base tracking-[0.02em] text-brand-ink transition-colors hover:text-brand-orange"
                  href="#top"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              className="rounded-[80px] bg-white px-8 py-3 font-poppins text-fluid-base font-medium tracking-[0.02em] text-[#6c6c6c] shadow-[0px_20px_24px_0px_rgba(0,0,0,0.03)] transition-colors hover:text-brand-ink xl:px-12"
              href="#top"
            >
              Login
            </a>
            <a
              className="rounded-[80px] bg-brand-orange px-8 py-3 font-poppins text-fluid-base font-medium tracking-[0.02em] text-white transition-opacity hover:opacity-90 xl:px-12"
              href="#top"
            >
              Sign Up
            </a>
          </div>

          <button
            aria-controls="primary-navigation"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            className="flex size-11 items-center justify-center rounded-full bg-white/70 lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            <span className="relative block h-4 w-6">
              <span
                className={`absolute left-0 block h-0.5 w-6 rounded bg-brand-ink transition-transform ${menuOpen ? "top-[7px] rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute left-0 top-[7px] block h-0.5 w-6 rounded bg-brand-ink transition-opacity ${menuOpen ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-6 rounded bg-brand-ink transition-transform ${menuOpen ? "top-[7px] -rotate-45" : "top-[14px]"}`}
              />
            </span>
          </button>
        </nav>

        {menuOpen ? (
          <div
            className="mb-4 rounded-2xl bg-white/90 p-5 shadow-[0px_20px_40px_0px_rgba(0,0,0,0.06)] backdrop-blur-sm lg:hidden"
            id="primary-navigation"
          >
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  <a
                    className="block font-poppins text-fluid-base text-brand-ink"
                    href="#top"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                className="rounded-[80px] border border-[#e0e0e0] px-6 py-2.5 font-poppins text-fluid-sm font-medium text-[#6c6c6c]"
                href="#top"
              >
                Login
              </a>
              <a
                className="rounded-[80px] bg-brand-orange px-6 py-2.5 font-poppins text-fluid-sm font-medium text-white"
                href="#top"
              >
                Sign Up
              </a>
            </div>
          </div>
        ) : null}

        <div className="grid items-center gap-10 pt-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-8 lg:pt-16 xl:gap-16">
          <div className="max-w-[681px]">
            <h1 className="font-poppins text-fluid-6xl font-bold leading-tight text-brand-navy">
              <span className="text-brand-orange">Studying</span> Online is now
              much easier
            </h1>

            <p className="mt-6 max-w-[523px] font-nunito text-fluid-md leading-[1.6] text-[#464646] lg:mt-10">
              Skilline is an interesting platform that will teach you in more an
              interactive way
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-5 lg:mt-12 lg:gap-8">
              <a
                className="rounded-[80px] bg-brand-orange px-10 py-4 font-poppins text-fluid-md font-semibold text-white transition-opacity hover:opacity-90 lg:px-14 lg:py-6"
                href="#top"
              >
                Join for free
              </a>

              <a className="flex items-center gap-4" href="#what-is-skilline">
                <PlayBadge />
                <span className="font-poppins text-fluid-md text-brand-ink">
                  Watch how it works
                </span>
              </a>
            </div>
          </div>

          <FigmaArt
            className="mx-auto w-full max-w-[600px] lg:max-w-none"
            height={932}
            width={951}
            x={863}
            y={204}
          >
            <HeroPhoto />
            <StatusDots />
          </FigmaArt>
        </div>
      </Container>
    </header>
  );
}
