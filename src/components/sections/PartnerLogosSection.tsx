import svgPaths from "@/assets/svg-paths";

function Google() {
  return (
    <div className="absolute h-[54.699px] left-[calc(8.33%+132px)] top-[1305.92px] w-[168.303px]" data-name="google-2015 1">
      <svg className="absolute block inset-0 size-full" fill="none" height="54.6985" preserveAspectRatio="none" viewBox="0 0 168.303 54.6985" width="168.303">
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
    </div>
  );
}

function GrabLogo() {
  return (
    <div className="absolute h-[50.49px] left-[calc(75%+58.66px)] top-[1295.93px] w-[130.435px]" data-name="grab-logo">
      <svg className="absolute block inset-0 size-full" fill="none" height="50.4896" preserveAspectRatio="none" viewBox="0 0 130.435 50.4896" width="130.435">
        <g id="grab-logo">
          <path d={svgPaths.p4c9b900} fill="#CFCFDE" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Airbnb() {
  return (
    <div className="absolute h-[49.933px] left-[calc(33.33%+123.11px)] top-[1305.92px] w-[161.323px]" data-name="airbnb 1">
      <svg className="absolute block inset-0 size-full" fill="none" height="49.9333" preserveAspectRatio="none" viewBox="0 0 161.323 49.9333" width="161.323">
        <g clipPath="url(#clip0_0_34)" id="airbnb 1">
          <path d={svgPaths.p11a0ca00} fill="#CFCFDE" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_34">
            <rect fill="white" height="49.9333" width="161.323" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Netflix() {
  return (
    <div className="absolute h-[40.715px] left-[calc(25%+56.04px)] top-[1315.14px] w-[151.336px]" data-name="netflix-3 1">
      <svg className="absolute block inset-0 size-full" fill="none" height="40.7149" preserveAspectRatio="none" viewBox="0 0 151.336 40.7149" width="151.336">
        <g clipPath="url(#clip0_0_32)" id="netflix-3 1">
          <path d={svgPaths.p19855700} fill="#CFCFDE" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_0_32">
            <rect fill="white" height="40.7149" width="151.336" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group35() {
  return (
    <div className="absolute flex inset-0 items-center justify-center" style={{ containerType: "size" }}>
      <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
        <div className="relative size-full" data-name="Group">
          <svg className="absolute block inset-0 size-full" fill="none" height="46.0923" preserveAspectRatio="none" viewBox="0 0 153.634 46.0923" width="153.634">
            <g id="Group">
              <path clipRule="evenodd" d={svgPaths.p399a6480} fill="#CFCFDE" fillRule="evenodd" id="Vector" />
              <path clipRule="evenodd" d={svgPaths.p1bea89f2} fill="#CFCFDE" fillRule="evenodd" id="Vector_2" />
              <path clipRule="evenodd" d={svgPaths.p2582b380} fill="#CFCFDE" fillRule="evenodd" id="Vector_3" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Amazon() {
  return (
    <div className="absolute flex h-[46.092px] items-center justify-center left-[calc(50%+40.17px)] top-[1317.44px] w-[153.641px]">
      <div className="flex-none rotate-180">
        <div className="h-[46.092px] overflow-clip relative w-[153.641px]" data-name="amazon-2 (1) 1">
          <Group35 />
        </div>
      </div>
    </div>
  );
}

function Facebook() {
  return (
    <div className="absolute h-[38.41px] left-[calc(58.33%+109.55px)] top-[1306.69px] w-[193.371px]" data-name="facebook">
      <svg className="absolute block inset-0 size-full" fill="none" height="38.4103" preserveAspectRatio="none" viewBox="0 0 193.371 38.4103" width="193.371">
        <g id="facebook">
          <path d={svgPaths.p26418ff0} fill="#CFCFDE" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group34() {
  return (
    <div className="absolute contents left-[calc(8.33%+132px)] top-[1295.93px]">
      <Google />
      <GrabLogo />
      <Airbnb />
      <Netflix />
      <Amazon />
      <Facebook />
    </div>
  );
}

/**
 * Logos of companies using Skilline.
 *
 * Absolutely positioned against the 1920px landing-page canvas.
 */
export default function PartnerLogosSection() {
  return (
    <div className="absolute contents left-[calc(8.33%+132px)] top-[1218px]" data-name="Company">
      <p className="font-nunito font-semibold [word-break:break-word] absolute leading-[0] left-[calc(25%+179px)] not-italic text-[#696984] text-[0px] top-[1218px] tracking-[0.56px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        <span className="font-poppins font-medium leading-[1.6] text-[28px]">Trusted by 5,000+</span>
        <span className="font-poppins font-medium leading-[1.6] text-[28px]">{` Companies Worldwide`}</span>
      </p>
      <Group34 />
    </div>
  );
}
