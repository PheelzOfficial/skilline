import AssessmentsFeature from "@/components/sections/features/AssessmentsFeature";
import ClassManagementFeature from "@/components/sections/features/ClassManagementFeature";
import OneOnOneDiscussionsFeature from "@/components/sections/features/OneOnOneDiscussionsFeature";
import TeachingToolsFeature from "@/components/sections/features/TeachingToolsFeature";
import UserInterfaceFeature from "@/components/sections/features/UserInterfaceFeature";

function Group37() {
  return (
    <div className="absolute contents left-[calc(41.67%+20px)] top-[7973px]">
      <div className="absolute border border-[#f48c06] border-solid h-[80px] left-[calc(41.67%+20px)] rounded-[80px] top-[7973px] w-[280px]" />
      <p className="font-nunito font-normal [word-break:break-word] absolute leading-[1.8] left-[calc(41.67%+58px)] text-[#f48c06] text-[24px] top-[7992px] tracking-[0.48px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        See more features
      </p>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <div className="absolute contents left-[170px] top-[3983px]" data-name="Our Features">
      <p className="font-nunito font-bold [word-break:break-word] absolute leading-[0] left-[calc(41.67%+41px)] not-italic text-[#2f327d] text-[36px] top-[3983px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        <span className="font-poppins font-bold leading-[1.8]">{`Our `}</span>
        <span className="font-poppins font-bold leading-[1.8] text-[#f48c06]">Features</span>
      </p>
      <p className="font-poppins font-normal -translate-x-1/2 [word-break:break-word] absolute leading-[1.8] left-[calc(25%+480px)] not-italic text-[#696984] text-[24px] text-center top-[4068px] whitespace-nowrap">This very extraordinary feature, can make learning activities more efficient</p>
      <Group37 />
      <UserInterfaceFeature />
      <TeachingToolsFeature />
      <AssessmentsFeature />
      <ClassManagementFeature />
      <OneOnOneDiscussionsFeature />
    </div>
  );
}
