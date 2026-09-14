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

function SunIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[20px] w-[20px] sm:h-[24px] sm:w-[24px]"
      fill="none"
      stroke="var(--color-accent-700)"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-hidden
    >
      <circle cx="12" cy="12" r="4.5" fill="var(--color-accent-400)" />
      <path d="M12 2.5v3" />
      <path d="M12 18.5v3" />
      <path d="M2.5 12h3" />
      <path d="M18.5 12h3" />
      <path d="M5.5 5.5l2 2" />
      <path d="M16.5 16.5l2 2" />
      <path d="M18.5 5.5l-2 2" />
      <path d="M7.5 16.5l-2 2" />
    </svg>
  );
}

function RainIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[20px] w-[20px] sm:h-[24px] sm:w-[24px]"
      fill="none"
      stroke="var(--color-accent-2-800)"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-hidden
    >
      <path
        d="M7 15a4 4 0 0 1 .3-8 5.5 5.5 0 0 1 10.4-1A4.5 4.5 0 0 1 17 15H7z"
        fill="var(--color-accent-2-200)"
      />
      <path d="M9 19l-1 2" />
      <path d="M13 19l-1 2" />
      <path d="M17 19l-1 2" />
    </svg>
  );
}

function SproutIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[20px] w-[20px] sm:h-[24px] sm:w-[24px]"
      fill="none"
      stroke="var(--color-accent-700)"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-hidden
    >
      <path d="M12 21V10" />
      <path d="M12 10c0-4 3-7 7-7 0 4-3 7-7 7z" fill="var(--color-accent-400)" />
      <path d="M12 14c0-3-2.5-5-6-5 0 3 2.5 5 6 5z" fill="var(--color-accent-200)" />
    </svg>
  );
}

const icons: Record<Highlight["icon"], () => React.JSX.Element> = {
  sun: SunIcon,
  rain: RainIcon,
  sprout: SproutIcon,
};

function LandscapeGraphic() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="h-[110px] w-[110px] sm:h-[196px] sm:w-[196px]"
      role="img"
      aria-label="Rolling hills under a soft sun, beside the coastline"
    >
      <circle
        cx="72"
        cy="26"
        r="10"
        fill="var(--color-accent-400)"
        stroke="var(--color-accent-700)"
        strokeWidth="3.2"
      />
      <path
        d="M4 70C18 42 34 42 48 60C58 48 72 48 96 68V84H4Z"
        fill="var(--color-accent-2-200)"
      />
      <path
        d="M4 84C16 64 30 64 44 78C56 66 74 66 96 84Z"
        fill="var(--color-accent-2-500)"
        stroke="var(--color-accent-2-800)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 91h88"
        fill="none"
        stroke="var(--color-accent-700)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M14 95h72"
        fill="none"
        stroke="var(--color-accent-700)"
        strokeWidth="2.4"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

export default function Farms() {
  return (
    <section id="farms" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-28 top-1/3 h-[280px] w-[280px] rounded-full bg-accent-2-100 sm:h-[380px] sm:w-[380px]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-16 sm:px-14 sm:py-24">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[minmax(0,1fr)_300px] md:gap-12">
          <div>
            <span className="block text-[11px] font-semibold uppercase tracking-[0.06em] text-accent-700 sm:text-[12.5px]">
              Our farms
            </span>
            <h2 className="mt-3 font-heading text-base leading-[1.2] sm:mt-4 sm:text-[22px]">
              A greenhouse that never really sees a Canadian winter.
            </h2>
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

          <div className="mx-auto flex h-[168px] w-[168px] items-center justify-center rounded-full bg-accent-100 sm:mx-0 sm:h-[300px] sm:w-[300px] md:justify-self-end">
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
