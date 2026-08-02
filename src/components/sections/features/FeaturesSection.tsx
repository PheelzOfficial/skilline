import AssessmentsFeature from "@/components/sections/features/AssessmentsFeature";
import ClassManagementFeature from "@/components/sections/features/ClassManagementFeature";
import OneOnOneDiscussionsFeature from "@/components/sections/features/OneOnOneDiscussionsFeature";
import TeachingToolsFeature from "@/components/sections/features/TeachingToolsFeature";
import UserInterfaceFeature from "@/components/sections/features/UserInterfaceFeature";
import Container from "@/components/ui/Container";

/**
 * Feature showcase.
 *
 * Each child row alternates copy and artwork on wide screens and stacks into a
 * single column below `lg`.
 */
export default function FeaturesSection() {
  return (
    <section className="py-12 lg:py-20" data-name="Our Features">
      <Container>
        <h2 className="text-center font-poppins text-fluid-3xl font-bold leading-[1.8] text-brand-navy">
          Our <span className="text-brand-orange">Features</span>
        </h2>

        <p className="mx-auto mt-4 max-w-[820px] text-center font-poppins text-fluid-md leading-[1.8] text-brand-muted">
          This very extraordinary feature, can make learning activities more
          efficient
        </p>

        <div className="mt-16 flex flex-col gap-20 lg:mt-24 lg:gap-28">
          <UserInterfaceFeature />
          <TeachingToolsFeature />
          <AssessmentsFeature />
          <ClassManagementFeature />
          <OneOnOneDiscussionsFeature />
        </div>

        <div className="mt-16 flex justify-center lg:mt-24">
          <a
            className="rounded-[80px] border border-solid border-brand-orange px-10 py-4 font-nunito text-fluid-md leading-[1.8] tracking-[0.02em] text-brand-orange transition-colors hover:bg-brand-orange hover:text-white lg:px-14 lg:py-6"
            href="#top"
          >
            See more features
          </a>
        </div>
      </Container>
    </section>
  );
}
