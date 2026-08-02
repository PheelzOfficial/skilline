import svgPaths from "@/assets/svg-paths";
import FeatureRow from "@/components/sections/features/FeatureRow";
import FigmaArt from "@/components/ui/FigmaArt";
import {
  imgImage19,
  imgPortraitTeacherGivingOnlineClass4,
  imgPortraitTeacherGivingOnlineClass5,
  imgImage20,
} from "@/assets/image-placeholders";
import imgPortraitTeacherGivingOnlineClass2 from "@/assets/images/portrait-teacher-giving-online-class-2.png";
import imgImage9 from "@/assets/images/image-9.png";
import imgImage10 from "@/assets/images/image-10.png";
import imgImage11 from "@/assets/images/image-11.png";
import imgImage13 from "@/assets/images/image-13.png";

function ClassroomWindowChrome() {
  return (
    <div className="absolute h-[365.476px] left-[209.83px] top-[7355.07px] w-[658.115px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="365.476" preserveAspectRatio="none" viewBox="0 0 658.115 365.476" width="658.115">
        <g id="Group 67">
          <rect fill="#F4F4F4" height="365.476" id="Rectangle 49" rx="18.8302" width="658.115" />
          <path d={svgPaths.p2cc94300} fill="#EAEAEA" id="Rectangle 50" />
          <circle cx="19.3374" cy="12.8911" fill="#EE6767" id="Ellipse 16" r="6.44579" />
          <circle cx="38.6747" cy="12.8911" fill="#F7C566" id="Ellipse 17" r="6.44579" />
          <circle cx="58.0121" cy="12.8911" fill="#5BEB7B" id="Ellipse 18" r="6.44579" />
        </g>
      </svg>
    </div>
  );
}

function PresentButton() {
  return (
    <div className="absolute contents left-[calc(8.33%+85.93px)] top-[7650.93px]">
      <div className="absolute bg-[#3465e1] h-[38.675px] left-[calc(8.33%+85.93px)] rounded-[38.675px] shadow-[0px_6.446px_15.47px_0px_rgba(52,101,225,0.3)] top-[7650.93px] w-[116.024px]" />
      <p className="font-nunito font-bold [word-break:break-word] absolute h-[22.56px] leading-[normal] left-[calc(8.33%+113.64px)] text-[16.759px] text-white top-[7658.67px] w-[59.946px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Present
      </p>
    </div>
  );
}

function PhoneIcon() {
  return (
    <div className="absolute left-[calc(16.67%+99.96px)] size-[12.892px] top-[7663.82px]" data-name="phone 1">
      <svg className="absolute block inset-0 size-full" fill="none" height="12.8916" preserveAspectRatio="none" viewBox="0 0 12.8916 12.8916" width="12.8916">
        <g id="phone 1">
          <g clipPath="url(#clip0_0_74)">
            <path d={svgPaths.p1fc9b600} fill="white" id="Vector" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_0_74">
            <rect fill="white" height="12.8916" width="12.8916" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CallButton() {
  return (
    <div className="absolute contents left-[calc(16.67%+67.73px)] top-[7650.93px]">
      <div className="absolute bg-[#e13468] h-[38.675px] left-[calc(16.67%+67.73px)] rounded-[38.675px] shadow-[0px_6.446px_15.47px_0px_rgba(202,47,93,0.3)] top-[7650.93px] w-[116.024px]" />
      <p className="font-nunito font-bold [word-break:break-word] absolute h-[22.56px] leading-[normal] left-[calc(16.67%+119.94px)] text-[16.759px] text-white top-[7658.67px] w-[31.584px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Call
      </p>
      <PhoneIcon />
    </div>
  );
}

function AdamLevinPhoto() {
  return (
    <div className="absolute contents left-[calc(33.33%+69.72px)] top-[7425.33px]" data-name="Mask Group">
      <div className="absolute h-[121.799px] left-[calc(33.33%+55.02px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[14.7px_0px] mask-size-[125.999px_121.799px] top-[7425.33px] w-[156.239px]" style={{ maskImage: `url("${imgImage19}")` }} data-name="image 8">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage9} />
      </div>
    </div>
  );
}

function AdamLevinSignalBars() {
  return (
    <div className="absolute contents left-[calc(33.33%+80.64px)] top-[7529.49px]">
      <div className="absolute bg-white h-[2.94px] left-[calc(33.33%+80.64px)] rounded-[0.42px] top-[7532.43px] w-[1.26px]" />
      <div className="absolute bg-white h-[4.41px] left-[calc(33.33%+82.74px)] rounded-[0.42px] top-[7530.96px] w-[1.26px]" />
      <div className="absolute bg-white h-[5.88px] left-[calc(33.33%+84.84px)] rounded-[0.42px] top-[7529.49px] w-[1.26px]" />
    </div>
  );
}

function AdamLevinNamePlate() {
  return (
    <div className="absolute contents left-[calc(33.33%+76.44px)] top-[7524.03px]">
      <div className="absolute backdrop-blur-[4.2px] bg-[rgba(201,211,231,0.4)] h-[16.38px] left-[calc(33.33%+76.44px)] rounded-[4.2px] top-[7524.03px] w-[63.84px]" />
      <p className="font-nunito font-semibold [word-break:break-word] absolute h-[11.34px] leading-[normal] left-[calc(33.33%+90.3px)] text-[8.4px] text-white top-[7526.55px] w-[45.78px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Adam Levin
      </p>
      <AdamLevinSignalBars />
    </div>
  );
}

function AdamLevinTile() {
  return (
    <div className="absolute contents left-[calc(33.33%+69.72px)] top-[7425.33px]">
      <AdamLevinPhoto />
      <AdamLevinNamePlate />
    </div>
  );
}

function TamaraClarkePhoto() {
  return (
    <div className="absolute contents left-[calc(25%+77.26px)] top-[7425.33px]" data-name="Mask Group">
      <div className="absolute h-[119.279px] left-[calc(25%+67.18px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[10.08px_-2.52px] mask-size-[125.999px_121.799px] top-[7427.85px] w-[146.159px]" style={{ maskImage: `url("${imgImage19}")` }} data-name="image 7">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage10} />
      </div>
    </div>
  );
}

function TamaraClarkeSignalBars() {
  return (
    <div className="absolute contents left-[calc(25%+88.18px)] top-[7529.49px]">
      <div className="absolute bg-white h-[2.94px] left-[calc(25%+88.18px)] rounded-[0.42px] top-[7532.43px] w-[1.26px]" />
      <div className="absolute bg-white h-[4.41px] left-[calc(25%+90.28px)] rounded-[0.42px] top-[7530.96px] w-[1.26px]" />
      <div className="absolute bg-white h-[5.88px] left-[calc(25%+92.38px)] rounded-[0.42px] top-[7529.49px] w-[1.26px]" />
    </div>
  );
}

function TamaraClarkeNamePlate() {
  return (
    <div className="absolute contents left-[calc(25%+83.98px)] top-[7524.03px]">
      <div className="absolute backdrop-blur-[4.2px] bg-[rgba(201,211,231,0.4)] h-[16.38px] left-[calc(25%+83.98px)] rounded-[4.2px] top-[7524.03px] w-[73.5px]" />
      <p className="font-nunito font-semibold [word-break:break-word] absolute h-[11.34px] leading-[normal] left-[calc(25%+97.84px)] text-[8.4px] text-white top-[7526.55px] w-[55.44px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Tamara Clarke
      </p>
      <TamaraClarkeSignalBars />
    </div>
  );
}

function TamaraClarkeTile() {
  return (
    <div className="absolute contents left-[calc(25%+77.26px)] top-[7425.33px]">
      <TamaraClarkePhoto />
      <TamaraClarkeNamePlate />
    </div>
  );
}

function InstructorPhoto() {
  return (
    <div className="absolute contents left-[calc(8.33%+93.34px)] top-[7444.72px]" data-name="Mask Group">
      <div className="absolute h-[171.974px] left-[224.28px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[29.058px_0px] mask-size-[177.904px_171.974px] opacity-50 rounded-[12.892px] top-[7444.72px] w-[256.774px]" style={{ maskImage: `url("${imgPortraitTeacherGivingOnlineClass4}")` }} data-name="portrait-teacher-giving-online-class 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12.892px] size-full" src={imgPortraitTeacherGivingOnlineClass2} />
      </div>
    </div>
  );
}

function InstructorPhotoMask() {
  return (
    <div className="absolute h-[186.928px] left-[calc(8.33%+85.61px)] top-[7424.74px] w-[193.374px]" data-name="Mask Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="186.928" preserveAspectRatio="none" viewBox="0 0 193.374 186.928" width="193.374">
        <g id="Mask Group">
          <rect fill="#EEEEEE" height="186.928" id="Rectangle 46" rx="12.8916" width="193.374" />
          <mask height="187" id="mask0_0_145" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="194" x="0" y="0">
            <rect fill="#C4C4C4" height="186.928" id="Rectangle 45" rx="12.8916" width="193.374" />
          </mask>
          <g mask="url(#mask0_0_145)">
            <path d={svgPaths.p1882e971} fill="#BABABA" id="Vector" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function InstructorTile() {
  return (
    <div className="absolute contents left-[calc(8.33%+85.61px)] top-[7424.74px]">
      <InstructorPhoto />
      <InstructorPhotoMask />
    </div>
  );
}

function HumbertHollandPhoto() {
  return (
    <div className="absolute contents left-[calc(25%+77.26px)] top-[7566.03px]" data-name="Mask Group">
      <div className="absolute h-[189.419px] left-[calc(25%+77.26px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[125.999px_121.799px] top-[7566.03px] w-[125.999px]" style={{ maskImage: `url("${imgImage19}")` }} data-name="image 11">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage11} />
      </div>
    </div>
  );
}

function HumbertHollandSignalBars() {
  return (
    <div className="absolute contents left-[calc(25%+88.18px)] top-[7670.19px]">
      <div className="absolute bg-white h-[2.94px] left-[calc(25%+88.18px)] rounded-[0.42px] top-[7673.13px] w-[1.26px]" />
      <div className="absolute bg-white h-[4.41px] left-[calc(25%+90.28px)] rounded-[0.42px] top-[7671.66px] w-[1.26px]" />
      <div className="absolute bg-white h-[5.88px] left-[calc(25%+92.38px)] rounded-[0.42px] top-[7670.19px] w-[1.26px]" />
    </div>
  );
}

function HumbertHollandNamePlate() {
  return (
    <div className="absolute contents left-[calc(25%+83.98px)] top-[7664.73px]">
      <div className="absolute backdrop-blur-[4.2px] bg-[rgba(201,211,231,0.4)] h-[16.38px] left-[calc(25%+83.98px)] rounded-[4.2px] top-[7664.73px] w-[85.679px]" />
      <p className="font-nunito font-semibold [word-break:break-word] absolute h-[11.34px] leading-[normal] left-[calc(25%+97.84px)] text-[8.4px] text-white top-[7667.25px] w-[67.62px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Humbert Holland
      </p>
      <HumbertHollandSignalBars />
    </div>
  );
}

function HumbertHollandTile() {
  return (
    <div className="absolute contents left-[calc(25%+77.26px)] top-[7566.03px]">
      <HumbertHollandPhoto />
      <HumbertHollandNamePlate />
    </div>
  );
}

function PatriciaMendozaPhoto() {
  return (
    <div className="absolute contents left-[calc(33.33%+69.72px)] top-[7566.03px]" data-name="Mask Group">
      <div className="absolute left-[calc(33.33%+43.26px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[26.46px_18.9px] mask-size-[125.999px_121.799px] size-[178.919px] top-[7547.13px]" style={{ maskImage: `url("${imgImage19}")` }} data-name="image 10">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage13} />
      </div>
    </div>
  );
}

function PatriciaMendozaSignalBars() {
  return (
    <div className="absolute contents left-[calc(33.33%+80.64px)] top-[7670.19px]">
      <div className="absolute bg-white h-[2.94px] left-[calc(33.33%+80.64px)] rounded-[0.42px] top-[7673.13px] w-[1.26px]" />
      <div className="absolute bg-white h-[4.41px] left-[calc(33.33%+82.74px)] rounded-[0.42px] top-[7671.66px] w-[1.26px]" />
      <div className="absolute bg-white h-[5.88px] left-[calc(33.33%+84.84px)] rounded-[0.42px] top-[7670.19px] w-[1.26px]" />
    </div>
  );
}

function PatriciaMendozaNamePlate() {
  return (
    <div className="absolute contents left-[calc(33.33%+76.44px)] top-[7664.73px]">
      <div className="absolute backdrop-blur-[4.2px] bg-[rgba(201,211,231,0.4)] h-[16.38px] left-[calc(33.33%+76.44px)] rounded-[4.2px] top-[7664.73px] w-[83.579px]" />
      <p className="font-nunito font-semibold [word-break:break-word] absolute h-[11.34px] leading-[normal] left-[calc(33.33%+90.3px)] text-[8.4px] text-white top-[7667.25px] w-[65.52px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Patricia Mendoza
      </p>
      <PatriciaMendozaSignalBars />
    </div>
  );
}

function PatriciaMendozaTile() {
  return (
    <div className="absolute contents left-[calc(33.33%+69.72px)] top-[7566.03px]">
      <PatriciaMendozaPhoto />
      <PatriciaMendozaNamePlate />
    </div>
  );
}

function ClassroomWindow() {
  return (
    <div className="absolute contents left-[209.83px] top-[7355.07px]">
      <ClassroomWindowChrome />
      <PresentButton />
      <CallButton />
      <AdamLevinTile />
      <TamaraClarkeTile />
      <InstructorTile />
      <HumbertHollandTile />
      <PatriciaMendozaTile />
      <div className="absolute backdrop-blur-[4.708px] bg-[rgba(136,167,227,0.1)] h-[363.423px] left-[209.83px] rounded-[18.83px] top-[7356.95px] w-[658.115px]" />
    </div>
  );
}

function PrivateInstructorPhoto() {
  return (
    <div className="absolute contents left-[calc(8.33%+206.99px)] top-[7516.07px]" data-name="Mask Group">
      <div className="absolute h-[192.538px] left-[calc(8.33%+174.45px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[32.532px_0px] mask-size-[199.177px_192.538px] rounded-[12.892px] top-[7516.07px] w-[287.479px]" style={{ maskImage: `url("${imgPortraitTeacherGivingOnlineClass5}")` }} data-name="portrait-teacher-giving-online-class 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12.892px] size-full" src={imgPortraitTeacherGivingOnlineClass2} />
      </div>
    </div>
  );
}

function PrivateInstructorTile() {
  return (
    <div className="absolute contents left-[calc(8.33%+206.99px)] top-[7516.07px]">
      <PrivateInstructorPhoto />
    </div>
  );
}

function PrivateParticipantPhoto() {
  return (
    <div className="absolute contents left-[calc(25%+169.52px)] top-[7516.07px]" data-name="Mask Group">
      <div className="absolute left-[calc(25%+127.76px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[41.759px_29.829px] mask-size-[198.853px_192.225px] size-[282.372px] top-[7486.24px]" style={{ maskImage: `url("${imgImage20}")` }} data-name="image 10">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage13} />
      </div>
    </div>
  );
}

function PrivateParticipantSignalBars() {
  return (
    <div className="absolute contents left-[calc(33.33%+26.75px)] top-[7680.45px]">
      <div className="absolute bg-white h-[4.64px] left-[calc(33.33%+26.75px)] rounded-[0.663px] top-[7685.09px] w-[1.989px]" />
      <div className="absolute bg-white h-[6.96px] left-[calc(33.33%+30.06px)] rounded-[0.663px] top-[7682.77px] w-[1.989px]" />
      <div className="absolute bg-white h-[9.28px] left-[calc(33.33%+33.38px)] rounded-[0.663px] top-[7680.45px] w-[1.989px]" />
    </div>
  );
}

function PrivateParticipantNamePlate() {
  return (
    <div className="absolute contents left-[calc(33.33%+20.12px)] top-[7671.84px]">
      <div className="absolute backdrop-blur-[6.628px] bg-[rgba(201,211,231,0.4)] h-[25.851px] left-[calc(33.33%+20.12px)] rounded-[6.628px] top-[7671.84px] w-[131.906px]" />
      <p className="font-nunito font-semibold [word-break:break-word] absolute h-[17.897px] leading-[normal] left-[calc(33.33%+41.99px)] text-[13.257px] text-white top-[7675.81px] w-[103.404px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Patricia Mendoza
      </p>
      <PrivateParticipantSignalBars />
    </div>
  );
}

function PrivateParticipantTile() {
  return (
    <div className="absolute contents left-[calc(25%+169.52px)] top-[7516.07px]">
      <PrivateParticipantPhoto />
      <PrivateParticipantNamePlate />
    </div>
  );
}

function EndDiscussionButton() {
  return (
    <div className="absolute contents left-[calc(33.33%+29.29px)] top-[7748.62px]">
      <div className="absolute bg-[#eb493a] blur-[25.421px] h-[27.304px] left-[calc(33.33%+40.58px)] rounded-[56.491px] top-[7771.22px] w-[172.296px]" />
      <div className="absolute h-[54.608px] left-[calc(33.33%+29.29px)] rounded-[56.491px] top-[7748.62px] w-[197.717px]" style={{ backgroundImage: "linear-gradient(135.1193414236296deg, rgb(245, 84, 84) 19.572%, rgb(229, 66, 43) 78.846%)" }} />
      <p className="font-poppins font-medium [word-break:break-word] absolute h-[31.07px] leading-[normal] left-[calc(33.33%+50.94px)] not-italic text-[20.713px] text-white top-[7760.86px] w-[155.349px]">End Discussion</p>
    </div>
  );
}

function PrivateWindowChrome() {
  return (
    <div className="absolute h-[12.24px] left-[calc(8.33%+181.64px)] top-[7460.99px] w-[48.958px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="12.2397" preserveAspectRatio="none" viewBox="0 0 48.9585 12.2397" width="48.9585">
        <g id="Group 102">
          <circle cx="6.11981" cy="6.11994" fill="#EE6767" id="Ellipse 16" r="6.11981" />
          <circle cx="24.4792" cy="6.11981" fill="#F7C566" id="Ellipse 17" r="6.11981" />
          <circle cx="42.8387" cy="6.11981" fill="#5BEB7B" id="Ellipse 18" r="6.11981" />
        </g>
      </svg>
    </div>
  );
}

function PrivateDiscussionPanel() {
  return (
    <div className="absolute contents left-[calc(8.33%+153.4px)] top-[7454.87px]">
      <div className="absolute bg-white h-[368.13px] left-[calc(8.33%+153.4px)] rounded-[18.83px] shadow-[0px_18.83px_47.075px_0px_rgba(47,50,125,0.1)] top-[7454.87px] w-[591.268px]" />
      <div className="absolute bg-[#eaeaea] h-[24.479px] left-[calc(8.33%+153.4px)] rounded-tl-[18.83px] rounded-tr-[18.83px] top-[7454.87px] w-[591.268px]" />
      <PrivateInstructorTile />
      <PrivateParticipantTile />
      <EndDiscussionButton />
      <p className="font-nunito font-bold [word-break:break-word] absolute h-[35.777px] leading-[1.6] left-[calc(8.33%+191.06px)] text-[#696984] text-[22.596px] top-[7743.91px] w-[192.068px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Private Discussion
      </p>
      <p className="font-nunito font-semibold [word-break:break-word] absolute h-[27.304px] leading-[1.6] left-[calc(8.33%+191.06px)] text-[#a8a8b6] text-[16.947px] top-[7776.87px] w-[262.681px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Your video can’t be seen by others
      </p>
      <PrivateWindowChrome />
      <div className="absolute flex h-[197.717px] items-center justify-center left-[calc(25%+129.03px)] top-[7516.07px] w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[197.717px]">
            <div className="absolute inset-[-0.94px_0_0_0]">
              <svg className="block size-full" fill="none" height="0.941509" preserveAspectRatio="none" viewBox="0 0 197.717 0.941509" width="197.717">
                <line id="Line 9" stroke="#D5E2FB" strokeWidth="0.941509" x2="197.717" y1="0.470755" y2="0.470755" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PrivateDiscussionBadge() {
  return (
    <div className="absolute flex items-center justify-center left-[calc(8.33%+95.02px)] size-[111.025px] top-[7482.17px]">
      <div className="flex-none rotate-[-6.16deg]">
        <div className="relative size-[100.79px]">
          <div className="absolute inset-[-35.5%_-44.84%_-54.18%_-44.84%]">
            <svg className="block size-full" fill="none" height="191.175" preserveAspectRatio="none" viewBox="0 0 191.175 191.175" width="191.175">
              <g id="Group 105">
                <g filter="url(#filter0_d_0_97)" id="Ellipse 117" opacity="0.8">
                  <circle cx="95.5877" cy="86.1726" fill="white" r="50.3952" />
                </g>
                <g filter="url(#filter1_d_0_97)" id="Ellipse 116">
                  <circle cx="95.5877" cy="86.1724" fill="white" r="39.3713" />
                </g>
                <g clipPath="url(#clip0_0_97)" id="user-friends 1">
                  <path d={svgPaths.p3cf83e00} fill="#2C93F1" id="Vector" />
                </g>
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="191.175" id="filter0_d_0_97" width="191.175" x="0" y="1.90735e-06">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="9.41509" />
                  <feGaussianBlur stdDeviation="22.5962" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.156863 0 0 0 0 0.168627 0 0 0 0 0.435294 0 0 0 0.15 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_97" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_97" mode="normal" result="shape" />
                </filter>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="169.127" id="filter1_d_0_97" width="169.127" x="11.024" y="11.0238">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="9.41509" />
                  <feGaussianBlur stdDeviation="22.5962" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.156863 0 0 0 0 0.168627 0 0 0 0 0.435294 0 0 0 0.15 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_97" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_97" mode="normal" result="shape" />
                </filter>
                <clipPath id="clip0_0_97">
                  <rect fill="white" height="36.2216" transform="translate(72.7524 68.0616)" width="44.8833" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function DiscussionsIllustration() {
  return (
    <div className="absolute contents left-[191px] top-[7324px]">
      <div className="absolute left-[calc(33.33%+149.8px)] size-[112.981px] top-[7324px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="112.981" preserveAspectRatio="none" viewBox="0 0 112.981 112.981" width="112.981">
          <circle cx="56.4906" cy="56.4906" id="Ellipse 118" r="47.0755" stroke="#23BDEE" strokeWidth="18.8302" />
        </svg>
      </div>
      <div className="absolute flex h-[33.811px] items-center justify-center left-[calc(41.67%+111.25px)] top-[7433.22px] w-[34.987px]">
        <div className="flex-none rotate-[-18.24deg]">
          <div className="h-[26.317px] relative w-[28.164px]">
            <div className="absolute bottom-1/4 left-[6.7%] right-[6.7%] top-0">
              <svg className="block size-full" fill="none" height="19.7375" preserveAspectRatio="none" viewBox="0 0 24.3903 19.7375" width="24.3903">
                <path d={svgPaths.p1894eb00} fill="#FBA333" id="Polygon 3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#73bcff] h-[193.009px] left-[191px] rounded-[18.83px] top-[7547.14px] w-[196.775px]" />
      <ClassroomWindow />
      <PrivateDiscussionPanel />
      <PrivateDiscussionBadge />
    </div>
  );
}

/**
 * Private teacher/student side conversations.
 */
export default function OneOnOneDiscussionsFeature() {
  return (
    <FeatureRow
      art={
        <FigmaArt className="w-full" height={539} width={795} x={171} y={7304}>
          <DiscussionsIllustration />
        </FigmaArt>
      }
      artFirst
    >
      <h3 className="max-w-[274px] font-poppins text-fluid-4xl font-semibold leading-[1.6] text-brand-navy">
        One-on-One <span className="text-brand-orange">Discussions</span>
      </h3>

      <p className="mt-8 max-w-[540px] font-poppins text-fluid-base leading-[1.8] tracking-[0.02em] text-brand-muted lg:mt-12">
        Teachers and teacher assistants can talk with students privately without
        leaving the Zoom environment.
      </p>
    </FeatureRow>
  );
}
