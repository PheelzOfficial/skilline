import svgPaths from "@/assets/svg-paths";
import FeatureRow from "@/components/sections/features/FeatureRow";
import FigmaArt from "@/components/ui/FigmaArt";
import {
  imgPortraitTeacherGivingOnlineClass1,
  imgPortraitTeacherGivingOnlineClass3,
  imgImage8,
  imgImage7,
  imgImage12,
} from "@/assets/image-placeholders";
import imgPortraitTeacherGivingOnlineClass2 from "@/assets/images/portrait-teacher-giving-online-class-2.png";
import imgImage9 from "@/assets/images/image-9.png";
import imgImage10 from "@/assets/images/image-10.png";
import imgImage11 from "@/assets/images/image-11.png";
import imgImage13 from "@/assets/images/image-13.png";

function ClassroomWindowChrome() {
  return (
    <div className="absolute h-[483px] left-[170px] top-[4287px] w-[783px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="483" preserveAspectRatio="none" viewBox="0 0 783 483" width="783">
        <g id="Group 67">
          <foreignObject height="643" width="943" x="-80" y="-80">
            <div style={{ backdropFilter: "blur(40px)", clipPath: "url(#bgblur_0_0_228_clip_path)", height: "100%", width: "100%" }} />
          </foreignObject>
          <rect fill="#F4F4F4" fillOpacity="0.6" height="483" id="Rectangle 49" rx="20" width="783" data-figma-bg-blur-radius="80" />
          <foreignObject height="194" width="943" x="-80" y="-80">
            <div style={{ backdropFilter: "blur(40px)", clipPath: "url(#bgblur_1_0_228_clip_path)", height: "100%", width: "100%" }} />
          </foreignObject>
          <path d={svgPaths.p39293f00} fill="#EAEAEA" fillOpacity="0.6" id="Rectangle 50" data-figma-bg-blur-radius="80" />
          <circle cx="34.0225" cy="16.5115" fill="#EE6767" id="Ellipse 16" r="7" />
          <circle cx="58.0225" cy="16.5115" fill="#F7C566" id="Ellipse 17" r="7" />
          <circle cx="82.0225" cy="16.5115" fill="#5BEB7B" id="Ellipse 18" r="7" />
        </g>
        <defs>
          <clipPath id="bgblur_0_0_228_clip_path" transform="translate(80 80)">
            <rect height="483" rx="20" width="783" />
          </clipPath>
          <clipPath id="bgblur_1_0_228_clip_path" transform="translate(80 80)">
            <path d={svgPaths.p39293f00} />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PresentButton() {
  return (
    <div className="absolute contents left-[214.66px] top-[4667.67px]">
      <div className="absolute bg-[#3465e1] h-[51.068px] left-[214.66px] rounded-[51.068px] shadow-[0px_8.511px_20.427px_0px_rgba(52,101,225,0.3)] top-[4667.67px] w-[153.203px]" />
      <p className="font-nunito font-bold [word-break:break-word] absolute leading-[normal] left-[calc(8.33%+92px)] text-[22.129px] text-white top-[4678px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Present
      </p>
    </div>
  );
}

function PhoneIcon() {
  return (
    <div className="absolute left-[calc(16.67%+122.56px)] size-[17.023px] top-[4685px]" data-name="phone 1">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.0225" preserveAspectRatio="none" viewBox="0 0 17.0225 17.0225" width="17.0225">
        <g clipPath="url(#clip0_0_244)" id="phone 1">
          <path d={svgPaths.p28a1dc80} fill="white" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_244">
            <rect fill="white" height="17.0225" width="17.0225" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CallButton() {
  return (
    <div className="absolute contents left-[calc(16.67%+72px)] top-[4661px]">
      <div className="absolute bg-[#ffd4e1] h-[65px] left-[calc(16.67%+72px)] rounded-[51.068px] top-[4661px] w-[169px]" />
      <div className="absolute bg-[#e13468] h-[51.068px] left-[calc(16.67%+80px)] rounded-[51.068px] shadow-[0px_8.511px_20.427px_0px_rgba(202,47,93,0.3)] top-[4668px] w-[153.203px]" />
      <p className="font-nunito font-bold [word-break:break-word] absolute h-[29.789px] leading-[normal] left-[calc(16.67%+148.94px)] text-[22.129px] text-white top-[4679px] w-[41.705px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Call
      </p>
      <PhoneIcon />
    </div>
  );
}

function InstructorPhoto() {
  return (
    <div className="absolute contents left-[calc(8.33%+104.07px)] top-[4406.16px]" data-name="Mask Group">
      <div className="absolute h-[227.081px] left-[calc(8.33%+65.7px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[38.369px_0px] mask-size-[234.911px_227.081px] rounded-[17.023px] top-[4406.16px] w-[339.055px]" style={{ maskImage: `url("${imgPortraitTeacherGivingOnlineClass1}")` }} data-name="portrait-teacher-giving-online-class 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[17.023px] size-full" src={imgPortraitTeacherGivingOnlineClass2} />
      </div>
    </div>
  );
}

function InstructorPhotoHighlight() {
  return (
    <div className="absolute contents left-[calc(8.33%+93.86px)] top-[4379.77px]" data-name="Mask Group">
      <div className="absolute h-[246.827px] left-[212.15px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[41.705px_0px] mask-size-[255.338px_246.827px] rounded-[17.023px] top-[4379.77px] w-[368.538px]" style={{ maskImage: `url("${imgPortraitTeacherGivingOnlineClass3}")` }} data-name="portrait-teacher-giving-online-class 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[17.023px] size-full" src={imgPortraitTeacherGivingOnlineClass2} />
      </div>
    </div>
  );
}

function InstructorSignalBars() {
  return (
    <div className="absolute contents left-[calc(8.33%+107.55px)] top-[4603.21px]">
      <div className="absolute bg-white h-[3.882px] left-[calc(8.33%+107.55px)] rounded-[0.555px] top-[4607.09px] w-[1.664px]" />
      <div className="absolute bg-white h-[5.823px] left-[calc(8.33%+110.32px)] rounded-[0.555px] top-[4605.15px] w-[1.664px]" />
      <div className="absolute bg-white h-[7.764px] left-[calc(8.33%+113.09px)] rounded-[0.555px] top-[4603.21px] w-[1.664px]" />
    </div>
  );
}

function InstructorNamePlate() {
  return (
    <div className="absolute contents left-[calc(8.33%+102px)] top-[4596px]">
      <div className="absolute backdrop-blur-[5.546px] bg-[rgba(201,211,231,0.4)] h-[22px] left-[calc(8.33%+102px)] rounded-[5.546px] top-[4596px] w-[170px]" />
      <div className="absolute bg-[#3793ff] h-[16px] left-[calc(8.33%+121px)] rounded-[5.546px] top-[4599px] w-[58px]" />
      <p className="font-nunito font-semibold [word-break:break-word] absolute leading-[normal] left-[calc(8.33%+188px)] text-[11.092px] text-white top-[4599.33px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Eveny Howard
      </p>
      <p className="font-nunito font-semibold [word-break:break-word] absolute leading-[normal] left-[calc(8.33%+128px)] text-[10px] text-white top-[4600px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Instructor
      </p>
      <InstructorSignalBars />
    </div>
  );
}

function InstructorTile() {
  return (
    <div className="absolute contents left-[calc(8.33%+93.86px)] top-[4379.77px]">
      <InstructorPhoto />
      <InstructorPhotoHighlight />
      <InstructorNamePlate />
    </div>
  );
}

function AdamLevinPhoto() {
  return (
    <div className="absolute contents left-[calc(41.67%+47px)] top-[4340.02px]" data-name="Mask Group">
      <div className="absolute h-[195.267px] left-[calc(41.67%+23.43px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[23.567px_0px] mask-size-[202px_195.267px] top-[4340.02px] w-[250.48px]" style={{ maskImage: `url("${imgImage8}")` }} data-name="image 8">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage9} />
      </div>
    </div>
  );
}

function AdamLevinSignalBars() {
  return (
    <div className="absolute contents left-[calc(41.67%+64.51px)] top-[4507px]">
      <div className="absolute bg-white h-[4.713px] left-[calc(41.67%+64.51px)] rounded-[0.673px] top-[4511.72px] w-[2.02px]" />
      <div className="absolute bg-white h-[7.07px] left-[calc(41.67%+67.87px)] rounded-[0.673px] top-[4509.36px] w-[2.02px]" />
      <div className="absolute bg-white h-[9.427px] left-[calc(41.67%+71.24px)] rounded-[0.673px] top-[4507px] w-[2.02px]" />
    </div>
  );
}

function AdamLevinNamePlate() {
  return (
    <div className="absolute contents left-[calc(41.67%+57.77px)] top-[4498.25px]">
      <div className="absolute backdrop-blur-[6.733px] bg-[rgba(201,211,231,0.4)] h-[26.26px] left-[calc(41.67%+57.77px)] rounded-[6.733px] top-[4498.25px] w-[102.347px]" />
      <p className="font-nunito font-semibold [word-break:break-word] absolute h-[18.18px] leading-[normal] left-[calc(41.67%+79.99px)] text-[13.467px] text-white top-[4502.29px] w-[73.393px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Adam Levin
      </p>
      <AdamLevinSignalBars />
    </div>
  );
}

function AdamLevinTile() {
  return (
    <div className="absolute contents left-[calc(41.67%+47px)] top-[4340.02px]">
      <AdamLevinPhoto />
      <AdamLevinNamePlate />
    </div>
  );
}

function TamaraClarkePhoto() {
  return (
    <div className="absolute contents left-[calc(25%+145.76px)] top-[4379.77px]" data-name="Mask Group">
      <div className="absolute h-[157.501px] left-[calc(25%+132.45px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[13.31px_-3.327px] mask-size-[166.374px_160.828px] top-[4383.1px] w-[192.994px]" style={{ maskImage: `url("${imgImage7}")` }} data-name="image 7">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage10} />
      </div>
    </div>
  );
}

function TamaraClarkeSignalBars() {
  return (
    <div className="absolute contents left-[calc(25%+160.18px)] top-[4517.31px]">
      <div className="absolute bg-white h-[3.882px] left-[calc(25%+160.18px)] rounded-[0.555px] top-[4521.19px] w-[1.664px]" />
      <div className="absolute bg-white h-[5.823px] left-[calc(25%+162.95px)] rounded-[0.555px] top-[4519.25px] w-[1.664px]" />
      <div className="absolute bg-white h-[7.764px] left-[calc(25%+165.72px)] rounded-[0.555px] top-[4517.31px] w-[1.664px]" />
    </div>
  );
}

function TamaraClarkeNamePlate() {
  return (
    <div className="absolute contents left-[calc(25%+154.63px)] top-[4510.1px]">
      <div className="absolute backdrop-blur-[5.546px] bg-[rgba(201,211,231,0.4)] h-[21.629px] left-[calc(25%+154.63px)] rounded-[5.546px] top-[4510.1px] w-[97.052px]" />
      <p className="font-nunito font-semibold [word-break:break-word] absolute h-[14.974px] leading-[normal] left-[calc(25%+172.93px)] text-[11.092px] text-white top-[4513.43px] w-[73.205px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Tamara Clarke
      </p>
      <TamaraClarkeSignalBars />
    </div>
  );
}

function TamaraClarkeTile() {
  return (
    <div className="absolute contents left-[calc(25%+145.76px)] top-[4379.77px]">
      <TamaraClarkePhoto />
      <TamaraClarkeNamePlate />
    </div>
  );
}

function HumbertHollandPhoto() {
  return (
    <div className="absolute contents left-[calc(25%+145.76px)] top-[4565.56px]" data-name="Mask Group">
      <div className="absolute h-[250.116px] left-[calc(25%+145.76px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[166.374px_160.828px] top-[4565.56px] w-[166.374px]" style={{ maskImage: `url("${imgImage7}")` }} data-name="image 11">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage11} />
      </div>
    </div>
  );
}

function HumbertHollandSignalBars() {
  return (
    <div className="absolute contents left-[calc(25%+160.18px)] top-[4703.09px]">
      <div className="absolute bg-white h-[3.882px] left-[calc(25%+160.18px)] rounded-[0.555px] top-[4706.98px] w-[1.664px]" />
      <div className="absolute bg-white h-[5.823px] left-[calc(25%+162.95px)] rounded-[0.555px] top-[4705.03px] w-[1.664px]" />
      <div className="absolute bg-white h-[7.764px] left-[calc(25%+165.72px)] rounded-[0.555px] top-[4703.09px] w-[1.664px]" />
    </div>
  );
}

function HumbertHollandNamePlate() {
  return (
    <div className="absolute contents left-[calc(25%+154.63px)] top-[4695.88px]">
      <div className="absolute backdrop-blur-[5.546px] bg-[rgba(201,211,231,0.4)] h-[21.629px] left-[calc(25%+154.63px)] rounded-[5.546px] top-[4695.88px] w-[113.134px]" />
      <p className="font-nunito font-semibold [word-break:break-word] absolute h-[14.974px] leading-[normal] left-[calc(25%+172.93px)] text-[11.092px] text-white top-[4699.21px] w-[89.287px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Humbert Holland
      </p>
      <HumbertHollandSignalBars />
    </div>
  );
}

function HumbertHollandTile() {
  return (
    <div className="absolute contents left-[calc(25%+145.76px)] top-[4565.56px]">
      <HumbertHollandPhoto />
      <HumbertHollandNamePlate />
    </div>
  );
}

function PatriciaMendozaPhoto() {
  return (
    <div className="absolute contents left-[calc(41.67%+26px)] top-[4577px]" data-name="Mask Group">
      <div className="absolute left-[calc(33.33%+135.6px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[50.4px_36.001px] mask-size-[240px_232px] size-[340.8px] top-[4541px]" style={{ maskImage: `url("${imgImage12}")` }} data-name="image 10">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage13} />
      </div>
    </div>
  );
}

function PatriciaMendozaSignalBars() {
  return (
    <div className="absolute contents left-[calc(41.67%+46.8px)] top-[4775.4px]">
      <div className="absolute bg-white h-[5.6px] left-[calc(41.67%+46.8px)] rounded-[0.8px] top-[4781px] w-[2.4px]" />
      <div className="absolute bg-white h-[8.4px] left-[calc(41.67%+50.8px)] rounded-[0.8px] top-[4778.2px] w-[2.4px]" />
      <div className="absolute bg-white h-[11.2px] left-[calc(41.67%+54.8px)] rounded-[0.8px] top-[4775.4px] w-[2.4px]" />
    </div>
  );
}

function PatriciaMendozaNamePlate() {
  return (
    <div className="absolute contents left-[calc(41.67%+38.8px)] top-[4765px]">
      <div className="absolute backdrop-blur-[8px] bg-[rgba(201,211,231,0.4)] h-[31.2px] left-[calc(41.67%+38.8px)] rounded-[8px] top-[4765px] w-[159.2px]" />
      <p className="font-nunito font-semibold [word-break:break-word] absolute h-[21.6px] leading-[normal] left-[calc(41.67%+65.2px)] text-[16px] text-white top-[4769.8px] w-[124.8px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Patricia Mendoza
      </p>
      <PatriciaMendozaSignalBars />
    </div>
  );
}

function PatriciaMendozaTile() {
  return (
    <div className="absolute contents left-[calc(41.67%+26px)] top-[4577px]">
      <PatriciaMendozaPhoto />
      <PatriciaMendozaNamePlate />
    </div>
  );
}

function CursorIcon() {
  return (
    <div className="absolute inset-[39.7%_66.77%_59.9%_31.25%]" data-name="surface1">
      <svg className="absolute block inset-0 size-full" fill="none" height="46.8696" preserveAspectRatio="none" viewBox="0 0 37.9587 46.8696" width="37.9587">
        <g id="surface1">
          <path d={svgPaths.p1faf0f00} fill="#F48C06" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function CursorIconLayer() {
  return (
    <div className="absolute contents inset-[39.7%_66.77%_59.9%_31.25%]">
      <CursorIcon />
    </div>
  );
}

function CursorBadge() {
  return (
    <div className="absolute contents left-[calc(25%+90px)] top-[4540px]">
      <div className="absolute left-[calc(25%+90px)] size-[93px] top-[4540px]">
        <div className="absolute inset-[-25.81%_-38.71%_-47.31%_-34.41%]">
          <svg className="block size-full" fill="none" height="161" preserveAspectRatio="none" viewBox="0 0 161 161" width="161">
            <g filter="url(#filter0_d_0_243)" id="Ellipse 24" opacity="0.8">
              <circle cx="78.5" cy="70.5" fill="#F9F9F9" r="46.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="161" id="filter0_d_0_243" width="161" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dx="2" dy="10" />
                <feGaussianBlur stdDeviation="17" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0599965 0 0 0 0 0.0750638 0 0 0 0 0.154167 0 0 0 0.15 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_243" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_243" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-[calc(25%+100px)] size-[73px] top-[4550px]">
        <div className="absolute inset-[-32.88%_-49.32%_-60.27%_-43.84%]">
          <svg className="block size-full" fill="none" height="141" preserveAspectRatio="none" viewBox="0 0 141 141" width="141">
            <g filter="url(#filter0_d_0_134)" id="Ellipse 23">
              <circle cx="68.5" cy="60.5" fill="#F9F9F9" r="36.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="141" id="filter0_d_0_134" width="141" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dx="2" dy="10" />
                <feGaussianBlur stdDeviation="17" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0599965 0 0 0 0 0.0750638 0 0 0 0 0.154167 0 0 0 0.15 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_134" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_134" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <CursorIconLayer />
    </div>
  );
}

function ClassroomWindow() {
  return (
    <div className="absolute contents left-[170px] top-[4287px]">
      <ClassroomWindowChrome />
      <PresentButton />
      <CallButton />
      <InstructorTile />
      <AdamLevinTile />
      <TamaraClarkeTile />
      <HumbertHollandTile />
      <PatriciaMendozaTile />
      <CursorBadge />
    </div>
  );
}

function GridViewBulletIcon() {
  return (
    <div className="absolute contents left-[calc(58.33%+86px)] top-[4534px]">
      <div className="absolute bg-[#2f327d] left-[calc(58.33%+86px)] rounded-[2px] size-[11.818px] top-[4534px]" />
      <div className="absolute bg-[#2f327d] left-[calc(58.33%+86px)] rounded-[2px] size-[11.818px] top-[4548.18px]" />
      <div className="absolute bg-[#2f327d] left-[calc(58.33%+100.77px)] rounded-[2px] size-[11.818px] top-[4534px]" />
      <div className="absolute bg-[#f48c06] left-[calc(58.33%+100.77px)] rounded-[2px] size-[11.818px] top-[4548.18px]" />
    </div>
  );
}

function PodiumBulletIcon() {
  return (
    <div className="absolute contents left-[calc(58.33%+85px)] top-[4658px]">
      <div className="absolute bg-[#2f327d] left-[calc(58.33%+93px)] rounded-[2px] size-[20px] top-[4664px]" />
      <div className="absolute bg-[#f48c06] left-[calc(58.33%+85px)] rounded-[2px] size-[21.224px] top-[4658px]" />
    </div>
  );
}

function AllStudentsBulletIcon() {
  return (
    <div className="absolute h-[26px] left-[calc(58.33%+84px)] top-[4772px] w-[30px]" data-name="users 2">
      <svg className="absolute block inset-0 size-full" fill="none" height="26" preserveAspectRatio="none" viewBox="0 0 30 26" width="30">
        <g id="users 2">
          <path d={svgPaths.p8465080} fill="#2F327D" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

/** Coloured discs scattered around the class-view mockup. */
function Decorations() {
  return (
    <>
      <div className="absolute left-[calc(33.33%+137px)] size-[264px] top-[4597px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="264" preserveAspectRatio="none" viewBox="0 0 264 264" width="264">
          <circle cx="132" cy="132" fill="#5B61EB" id="Ellipse 19" r="132" />
        </svg>
      </div>
      <div className="absolute left-[calc(33.33%+108px)] size-[30px] top-[4809px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="30" preserveAspectRatio="none" viewBox="0 0 30 30" width="30">
          <circle cx="15" cy="15" fill="#F56666" id="Ellipse 20" r="15" />
        </svg>
      </div>
      <div className="absolute left-[calc(16.67%+73px)] size-[30px] top-[4219px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="30" preserveAspectRatio="none" viewBox="0 0 30 30" width="30">
          <circle cx="15" cy="15" fill="#33D9EF" id="Ellipse 21" r="15" />
        </svg>
      </div>
      <div className="absolute left-[calc(8.33%+73px)] size-[140px] top-[4211px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="140" preserveAspectRatio="none" viewBox="0 0 140 140" width="140">
          <circle cx="70" cy="70" fill="#33EFA0" id="Ellipse 22" r="70" />
        </svg>
      </div>
    </>
  );
}

/** The soft white disc each bullet icon sits on, at a given canvas row. */
function BulletDisc({ top }: { top: number }) {
  return (
    <div
      className="absolute left-[calc(58.33%+69px)] size-[60px]"
      style={{ top }}
    >
      <div className="absolute inset-[-48.33%_-73.33%_-98.33%_-73.33%]">
        <svg className="block size-full" fill="none" height="148" preserveAspectRatio="none" viewBox="0 0 148 148" width="148">
          <g filter="url(#filter0_d_0_227)" id="Ellipse 24">
            <circle cx="74" cy="59" fill="#FBFBFB" r="30" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="148" id="filter0_d_0_227" width="148" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="15" />
              <feGaussianBlur stdDeviation="22" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.0509804 0 0 0 0 0.0588235 0 0 0 0 0.109804 0 0 0 0.12 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_227" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_227" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

/**
 * Each bullet's icon lives at a fixed spot on the original canvas, so it is
 * lifted out with a 100x100 crop and rendered at a fixed size in the list.
 */
const BULLETS = [
  {
    copy: "Teachers don’t get lost in the grid view and have a dedicated Podium space.",
    cropY: 4497,
    discTop: 4517,
    icon: <GridViewBulletIcon />,
  },
  {
    copy: "TA’s and presenters can be moved to the front of the class.",
    cropY: 4621,
    discTop: 4641,
    icon: <PodiumBulletIcon />,
  },
  {
    copy: "Teachers can easily see all students and class data at one time.",
    cropY: 4735,
    discTop: 4755,
    icon: <AllStudentsBulletIcon />,
  },
];

/**
 * Dedicated podium and grid-free class view.
 */
export default function UserInterfaceFeature() {
  return (
    <FeatureRow
      art={
        <FigmaArt className="w-full" height={711} width={986} x={150} y={4191}>
          <Decorations />
          <ClassroomWindow />
        </FigmaArt>
      }
      artFirst
    >
      <h3 className="max-w-[542px] font-poppins text-fluid-4xl font-semibold leading-[1.3] text-brand-navy">
        A <span className="text-brand-orange">user interface</span> designed for
        the classroom
      </h3>

      <ul className="mt-5 flex flex-col gap-5 lg:mt-7 lg:gap-6">
        {BULLETS.map((bullet) => (
          <li className="flex items-center gap-4 lg:gap-6" key={bullet.copy}>
            <FigmaArt
              className="w-[56px] shrink-0 lg:w-[72px]"
              height={100}
              width={100}
              x={1169}
              y={bullet.cropY}
            >
              <BulletDisc top={bullet.discTop} />
              {bullet.icon}
            </FigmaArt>

            <p className="max-w-[459px] font-poppins text-fluid-base leading-[1.8] tracking-[0.02em] text-brand-muted">
              {bullet.copy}
            </p>
          </li>
        ))}
      </ul>
    </FeatureRow>
  );
}
