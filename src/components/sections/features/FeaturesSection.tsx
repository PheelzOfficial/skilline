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
    <section className="py-12 lg:py-20" data-name="Our Features" id="features">
      <Container>
        <h2 className="text-center font-poppins text-fluid-3xl font-bold leading-[1.3] text-brand-navy">
          Our <span className="text-brand-orange">Features</span>
        </h2>

        <p className="mx-auto mt-4 max-w-[820px] text-center font-poppins text-fluid-md leading-[1.8] text-brand-muted">
          This very extraordinary feature, can make learning activities more
          efficient
        </p>

        <div className="mt-12 flex flex-col gap-16 lg:mt-16 lg:gap-20">
          <UserInterfaceFeature />
          <TeachingToolsFeature />
          <AssessmentsFeature />
          <ClassManagementFeature />
          <OneOnOneDiscussionsFeature />
        </div>

        <div className="mt-12 flex justify-center lg:mt-16">
          <a
            className="btn btn-outline rounded-[80px] border border-solid border-brand-orange px-8 py-3.5 font-nunito text-fluid-md leading-[1.4] tracking-[0.02em] text-brand-orange lg:px-10 lg:py-4"
            href="#top"
          >
            See more features
          </a>
        </div>
      </Container>
    </section>
  );
}
