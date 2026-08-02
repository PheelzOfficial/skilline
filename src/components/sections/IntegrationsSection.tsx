import imgImage2 from "@/assets/images/image-2.png";
import imgImage3 from "@/assets/images/image-3.png";
import imgImage5 from "@/assets/images/image-5.png";
import imgImage6 from "@/assets/images/image-6.png";

function Group120() {
  return (
    <div className="absolute contents left-[calc(50%+40px)] top-[8592px]">
      <div className="absolute border border-[#f48c06] border-solid h-[80px] left-[calc(50%+40px)] rounded-[80px] top-[8592px] w-[280px]" />
      <p className="font-nunito font-normal [word-break:break-word] absolute leading-[1.8] left-[calc(50%+82px)] text-[#f48c06] text-[22px] top-[8612px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        See All Integrations
      </p>
    </div>
  );
}

function Group121() {
  return (
    <div className="absolute contents left-[calc(50%+40px)] top-[8213px]">
      <p className="font-nunito font-normal [word-break:break-word] absolute leading-[normal] left-[calc(58.33%-9px)] text-[#525596] text-[20px] top-[8213px] tracking-[4px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        INTEGRATIONS
      </p>
      <p className="font-nunito font-normal [word-break:break-word] absolute leading-[1.8] left-[calc(50%+41px)] text-[#696984] text-[24px] top-[8419px] w-[687px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Schoology has every tool your classroom needs and comes pre-integrated with more than 200+ tools, student information systems (SIS), and education platforms.
      </p>
      <p className="font-nunito font-bold [word-break:break-word] absolute leading-[0] left-[calc(50%+41px)] text-[#2f327d] text-[36px] top-[8273px] w-[480px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        <span className="leading-[1.6]">{`200+ educational tools and platform `}</span>
        <span className="leading-[1.6] text-[#f48c06]">integrations</span>
      </p>
      <Group120 />
      <div className="absolute h-0 left-[calc(50%+41px)] top-[8228px] w-[80px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 80 1" width="80">
            <line id="Line 4" stroke="#525596" x2="80" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/**
 * Third-party integrations strip.
 *
 * Absolutely positioned against the 1920px landing-page canvas.
 */
export default function IntegrationsSection() {
  return (
    <div className="absolute contents left-[calc(8.33%+71px)] top-[8213px]" data-name="Integrations">
      <div className="absolute h-[195px] left-[calc(8.33%+71px)] top-[8225px] w-[228px]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
      <div className="absolute h-[135px] left-[calc(8.33%+150px)] top-[8504px] w-[138px]" data-name="image 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
      <div className="absolute h-[121px] left-[calc(25%+70px)] top-[8300px] w-[130px]" data-name="image 5">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
      </div>
      <div className="absolute left-[calc(25%+70px)] size-[159px] top-[8513px]" data-name="image 6">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
      </div>
      <Group121 />
    </div>
  );
}
