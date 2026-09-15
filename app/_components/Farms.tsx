import LandscapeGraphic from "./svgs/LandscapeGraphic";
import RainIcon from "./svgs/RainIcon";
import SunIcon from "./svgs/SunIcon";
import SproutIcon from "./svgs/SproutIcon";

type Highlight = {
  title: string;
  body: string;
  icon: "sun" | "rain" | "sprout";
};

const highlights: Highlight[] = [
  {
    icon: "sun",
    title: "Year-round flowering",
    body: "Without a hard winter to reset the plant, flowering and ripening overlap in rotating flushes all year instead of one big harvest.",
  },
  {
    icon: "rain",
    title: "Mild, marine air",
    body: "Pacific humidity and a climate that barely dips below freezing mean the greenhouses run on a trickle of heat instead of a furnace.",
  },
  {
    icon: "sprout",
    title: "Small, hand-tended lots",
    body: "A handful of greenhouses in the Cowichan Valley, walked and picked by hand every week of the year.",
  },
];

const icons: Record<Highlight["icon"], () => React.JSX.Element> = {
  sun: SunIcon,
  rain: RainIcon,
  sprout: SproutIcon,
};

export default function Farms() {
  return (
    <section id="farms" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-28 top-1/3 h-[280px] w-[280px] rounded-full bg-accent-2-100 sm:h-[380px] sm:w-[380px] 3xl:hidden"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-8 sm:px-14 sm:py-16">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[minmax(0,1fr)_300px] md:gap-12">
          <div>
            <span className="block text-[11px] font-semibold uppercase tracking-[0.06em] text-accent-700 sm:text-[12.5px]">
              Our farms
            </span>
            <h2 className="mt-3 font-heading text-base leading-[1.2] sm:mt-4 sm:text-[22px]">
              A greenhouse that never really sees a Canadian winter.
            </h2>
            <div className="mx-auto flex h-[168px] w-[168px] items-center justify-center rounded-full bg-accent-100 sm:mx-0 sm:h-[300px] sm:w-[300px] mt-4 md:hidden">
              <LandscapeGraphic />
            </div>
            <p className="mt-4 max-w-[44ch] text-[13.5px] leading-[1.6] text-neutral-800 sm:text-[17px] sm:leading-[1.65]">
              Our arabica comes from a cluster of greenhouses in the
              Cowichan Valley on Vancouver Island — mild enough, most
              winters, that the heaters barely turn on. Without a killing
              frost to force the plant dormant, it flowers and ripens in
              overlapping flushes instead of one big harvest, so there is
              always a lot somewhere between blossom and cherry. We pick by
              hand, sort on long tables under the glass, and wet-process the
              same week it comes off the branch.
            </p>
          </div>

          <div className="mx-auto hidden h-[168px] w-[168px] items-center justify-center rounded-full bg-accent-100 sm:mx-0 sm:h-[300px] sm:w-[300px] md:flex md:justify-self-end">
            <LandscapeGraphic />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:mt-14 sm:grid sm:grid-cols-3 sm:gap-[34px]">
          {highlights.map((highlight, i) => {
            const Icon = icons[highlight.icon];
            return (
              <div
                key={highlight.title}
                className="flex items-start gap-3.5 sm:block"
              >
                <div
                  className={`flex h-[38px] w-[38px] flex-none items-center justify-center rounded-full sm:h-[52px] sm:w-[52px] ${
                    i % 2 === 0 ? "bg-accent-100" : "bg-accent-2-200"
                  }`}
                >
                  <Icon />
                </div>
                <div>
                  <h3 className="mt-1.5 font-heading text-base leading-[1.2] sm:mt-[18px] sm:text-[22px]">
                    {highlight.title}
                  </h3>
                  <p className="mt-1.5 text-[12.5px] leading-[1.55] text-neutral-800 sm:mt-2.5 sm:text-[14.5px] sm:leading-[1.65]">
                    {highlight.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
