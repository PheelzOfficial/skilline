import Container from "@/components/ui/Container";
import imgImage2 from "@/assets/images/image-2.png";
import imgImage3 from "@/assets/images/image-3.png";
import imgImage5 from "@/assets/images/image-5.png";
import imgImage6 from "@/assets/images/image-6.png";

/**
 * The four partner marks, expressed as percentages of the collage box they were
 * arranged in on the original canvas (478 x 447). Percentages let the whole
 * arrangement scale as one piece without a transform.
 */
const LOGOS = [
  { height: "43.6%", left: "0%", src: imgImage2, top: "0%", width: "47.7%" },
  { height: "27.1%", left: "66.7%", src: imgImage5, top: "16.8%", width: "27.2%" },
  { height: "30.2%", left: "16.5%", src: imgImage3, top: "62.4%", width: "28.9%" },
  { height: "35.6%", left: "66.7%", src: imgImage6, top: "64.4%", width: "33.3%" },
];

/**
 * Third-party integrations strip.
 *
 * The logo collage keeps its scattered arrangement at every width; the copy
 * moves beneath it once the two columns no longer fit.
 */
export default function IntegrationsSection() {
  return (
    <section className="py-12 lg:py-20" data-name="Integrations">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div
            aria-hidden="true"
            className="relative mx-auto w-full max-w-[478px]"
            style={{ aspectRatio: "478 / 447" }}
          >
            {LOGOS.map((logo) => (
              <img
                alt=""
                className="absolute object-contain"
                key={logo.src}
                src={logo.src}
                style={{
                  height: logo.height,
                  left: logo.left,
                  top: logo.top,
                  width: logo.width,
                }}
              />
            ))}
          </div>

          <div>
            <p className="font-nunito text-fluid-sm tracking-[0.2em] text-brand-slate">
              INTEGRATIONS
            </p>
            <span
              aria-hidden="true"
              className="mt-3 block h-px w-20 bg-brand-slate"
            />

            <h2 className="mt-8 max-w-[480px] font-nunito text-fluid-3xl font-bold leading-[1.6] text-brand-navy">
              200+ educational tools and platform{" "}
              <span className="text-brand-orange">integrations</span>
            </h2>

            <p className="mt-8 max-w-[687px] font-nunito text-fluid-md leading-[1.8] text-brand-muted">
              Schoology has every tool your classroom needs and comes
              pre-integrated with more than 200+ tools, student information
              systems (SIS), and education platforms.
            </p>

            <a
              className="mt-10 inline-block rounded-[80px] border border-solid border-brand-orange px-10 py-4 font-nunito text-fluid-base leading-[1.8] text-brand-orange transition-colors hover:bg-brand-orange hover:text-white lg:px-14 lg:py-6"
              href="#top"
            >
              See All Integrations
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
