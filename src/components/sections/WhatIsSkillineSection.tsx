import imgRectangle19 from "@/assets/images/rectangle-19.png";
import imgRectangle21 from "@/assets/images/rectangle-21.png";

function Group22() {
  return (
    <div className="absolute contents left-[calc(8.33%+150px)] top-[2751px]">
      <div className="absolute h-[400px] left-[calc(8.33%+150px)] rounded-[20px] top-[2751px] w-[600px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgRectangle19} />
      </div>
      <div className="absolute bg-[rgba(23,27,65,0.5)] border border-black border-solid h-[400px] left-[calc(8.33%+150px)] opacity-60 rounded-[20px] top-[2751px] w-[600px]" />
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute contents left-[calc(50%+50px)] top-[2751px]">
      <div className="absolute bg-[#c4c4c4] h-[400px] left-[calc(50%+50px)] rounded-[20px] top-[2751px] w-[600px]" />
      <div className="absolute h-[400px] left-[calc(50%+50px)] rounded-[20px] top-[2751px] w-[600px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgRectangle21} />
      </div>
      <div className="absolute bg-[rgba(23,27,65,0.45)] h-[400px] left-[calc(50%+50px)] opacity-60 rounded-[20px] top-[2751px] w-[600px]" />
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute contents left-[calc(16.67%+149px)] top-[2948px]">
      <div className="absolute border border-solid border-white h-[80px] left-[calc(16.67%+149px)] rounded-[80px] top-[2948px] w-[283px]" />
      <p className="font-poppins font-medium -translate-x-1/2 [word-break:break-word] absolute leading-[normal] left-[calc(16.67%+290px)] not-italic text-[22px] text-center text-white top-[2972px] whitespace-nowrap">Start a class today</p>
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents left-[calc(58.33%+49px)] top-[2948px]">
      <div className="absolute bg-[rgba(35,189,238,0.9)] h-[80px] left-[calc(58.33%+49px)] rounded-[80px] top-[2948px] w-[283px]" />
      <p className="font-poppins font-medium -translate-x-1/2 [word-break:break-word] absolute leading-[normal] left-[calc(58.33%+190px)] not-italic text-[22px] text-center text-white top-[2972px] whitespace-nowrap">Enter access code</p>
    </div>
  );
}

/**
 * Product explainer with video still.
 *
 * Absolutely positioned against the 1920px landing-page canvas.
 */
export default function WhatIsSkillineSection() {
  return (
    <div className="absolute contents left-[calc(8.33%+150px)] top-[2443px]" data-name="What Is Skilline">
      <p className="font-poppins font-normal -translate-x-1/2 [word-break:break-word] absolute leading-[1.8] left-[calc(16.67%+639.5px)] not-italic text-[#696984] text-[24px] text-center top-[2542px] tracking-[0.48px] w-[1101px]">Skilline is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>
      <p className="font-poppins font-semibold -translate-x-1/2 [word-break:break-word] absolute leading-[0] left-[calc(33.33%+320.5px)] not-italic text-[#2f327d] text-[44px] text-center top-[2443px] whitespace-nowrap">
        <span className="leading-[1.8]">{`What is `}</span>
        <span className="leading-[1.8] text-[#f48c06]">{`Skilline? `}</span>
      </p>
      <Group22 />
      <Group23 />
      <p className="font-poppins font-semibold -translate-x-1/2 [word-break:break-word] absolute leading-[normal] left-[calc(16.67%+290px)] not-italic text-[32px] text-center text-white top-[2883px] whitespace-nowrap">FOR INSTRUCTORS</p>
      <p className="font-poppins font-semibold -translate-x-1/2 [word-break:break-word] absolute leading-[normal] left-[calc(58.33%+190px)] not-italic text-[32px] text-center text-white top-[2883px] whitespace-nowrap">FOR STUDENTS</p>
      <Group20 />
      <Group21 />
    </div>
  );
}
