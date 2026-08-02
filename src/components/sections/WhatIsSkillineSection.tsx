import Container from "@/components/ui/Container";
import imgRectangle19 from "@/assets/images/rectangle-19.png";
import imgRectangle21 from "@/assets/images/rectangle-21.png";

type AudienceCardProps = {
  cta: string;
  ctaClassName: string;
  image: string;
  overlayClassName: string;
  title: string;
};

/**
 * One of the two audience panels. The 600x400 art direction is preserved as a
 * 3/2 aspect ratio so the crop stays consistent at every width.
 */
function AudienceCard({
  cta,
  ctaClassName,
  image,
  overlayClassName,
  title,
}: AudienceCardProps) {
  return (
    <div className="relative aspect-[3/2] overflow-hidden rounded-[20px] bg-[#c4c4c4]">
      <img
        alt=""
        className="absolute inset-0 size-full object-cover"
        src={image}
      />
      <div className={`absolute inset-0 opacity-60 ${overlayClassName}`} />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-6 text-center lg:gap-10">
        <p className="font-poppins text-fluid-2xl font-semibold text-white">
          {title}
        </p>
        <a
          className={`btn btn-solid rounded-[80px] px-7 py-3 font-poppins text-fluid-base font-medium text-white sm:px-10 lg:py-3.5 ${ctaClassName}`}
          href="#top"
        >
          {cta}
        </a>
      </div>
    </div>
  );
}

/**
 * Product explainer with the two audience panels.
 *
 * Panels sit side by side from `md` up and stack below it.
 */
export default function WhatIsSkillineSection() {
  return (
    <section
      className="py-12 lg:py-20"
      data-name="What Is Skilline"
      id="what-is-skilline"
    >
      <Container>
        <h2 className="text-center font-poppins text-fluid-5xl font-semibold leading-[1.3] text-brand-navy">
          What is <span className="text-brand-orange">Skilline?</span>
        </h2>

        <p className="mx-auto mt-6 max-w-[1101px] text-center font-poppins text-fluid-md leading-[1.8] tracking-[0.02em] text-brand-muted">
          Skilline is a platform that allows educators to create online classes
          whereby they can store the course materials online; manage assignments,
          quizzes and exams; monitor due dates; grade results and provide
          students with feedback all in one place.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:mt-14 lg:gap-10">
          <AudienceCard
            cta="Start a class today"
            /* Outlined over a photo, so hover fills it rather than lightening it. */
            ctaClassName="border border-white hover:bg-white/20 hover:backdrop-blur-sm"
            image={imgRectangle19}
            overlayClassName="border border-solid border-black bg-[rgba(23,27,65,0.5)]"
            title="FOR INSTRUCTORS"
          />
          <AudienceCard
            cta="Enter access code"
            ctaClassName="bg-[rgba(35,189,238,0.9)]"
            image={imgRectangle21}
            overlayClassName="bg-[rgba(23,27,65,0.45)]"
            title="FOR STUDENTS"
          />
        </div>
      </Container>
    </section>
  );
}
