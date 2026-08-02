import Container from "@/components/ui/Container";
import imgRectangle32 from "@/assets/images/rectangle-32.png";
import imgRectangle33 from "@/assets/images/rectangle-33.png";
import imgRectangle34 from "@/assets/images/rectangle-34.png";
import imgRectangle37 from "@/assets/images/rectangle-37.png";

/** Amber category chip used on every card. */
function Tag({ children }: { children: string }) {
  return (
    <span className="inline-block rounded-[80px] bg-[#f4c467] px-5 py-1.5 font-poppins text-fluid-xs tracking-[0.02em] text-brand-ink">
      {children}
    </span>
  );
}

const SIDE_STORIES = [
  {
    excerpt: "Class Technologies Inc., the company that created Class,...",
    image: imgRectangle33,
    tag: "PRESS RELEASE",
    title:
      "Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand",
  },
  {
    excerpt: "Zoom was never created to be a consumer product. Nonetheless, the...",
    image: imgRectangle34,
    tag: "NEWS",
    title: "Zoom’s earliest investors are betting millions on a better Zoom for schools",
  },
  {
    excerpt: "This year, investors have reaped big financial returns from betting on Zoom...",
    image: imgRectangle37,
    tag: "NEWS",
    title:
      "Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms",
  },
];

/**
 * Latest news article cards.
 *
 * The lead story and the three follow-ups share a two-column grid on desktop.
 * Below `md` each side story stacks its thumbnail above its copy.
 */
export default function NewsSection() {
  return (
    <section className="py-12 lg:py-20" data-name="News">
      <Container>
        <h2 className="text-center font-nunito text-fluid-3xl font-bold leading-[1.8] text-brand-navy">
          Lastest News and Resources
        </h2>

        <p className="mx-auto mt-4 max-w-[820px] text-center font-nunito text-fluid-md leading-[1.8] text-brand-muted">
          See the developments that have occurred to Skillines in the world
        </p>

        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-2 lg:gap-14">
          <article>
            <div className="relative aspect-[64/34] overflow-hidden rounded-[20px]">
              <img
                alt=""
                className="absolute inset-0 size-full object-cover"
                src={imgRectangle32}
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-[#171b41] opacity-10"
              />
            </div>

            <div className="mt-8">
              <Tag>NEWS</Tag>

              <h3 className="mt-6 max-w-[609px] font-poppins text-fluid-lg font-medium leading-[1.8] text-brand-ink">
                Class adds $30 million to its balance sheet for a Zoom-friendly
                edtech solution
              </h3>

              <p className="mt-4 max-w-[609px] font-poppins text-fluid-sm leading-[1.8] tracking-[0.02em] text-brand-muted">
                Class, launched less than a year ago by Blackboard co-founder
                Michael Chasen, integrates exclusively...
              </p>

              <a
                className="mt-6 inline-block font-poppins text-fluid-sm leading-[1.8] tracking-[0.02em] text-brand-muted underline decoration-solid"
                href="#top"
              >
                Read more
              </a>
            </div>
          </article>

          <div className="flex flex-col gap-10">
            {SIDE_STORIES.map((story) => (
              <article
                className="grid gap-5 sm:grid-cols-[280px_minmax(0,1fr)] sm:items-start sm:gap-8"
                key={story.title}
              >
                <div className="relative aspect-[7/5] overflow-hidden rounded-[20px]">
                  <img
                    alt=""
                    className="absolute inset-0 size-full object-cover"
                    src={story.image}
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-[#171b41] opacity-10"
                  />
                </div>

                <div>
                  <h3 className="font-poppins text-fluid-base font-medium leading-[1.8] text-brand-ink">
                    {story.title}
                  </h3>

                  <p className="mt-3 font-poppins text-fluid-sm leading-[1.8] tracking-[0.02em] text-brand-muted">
                    {story.excerpt}
                  </p>

                  <div className="mt-5">
                    <Tag>{story.tag}</Tag>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
