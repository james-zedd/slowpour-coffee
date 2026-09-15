import StarIcon from "./svgs/StarIcon";

type Testimonial = {
  quote: string;
  name: string;
  location: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "The bag says Tuesday roast, Friday delivery, and it has been exactly that for eight months straight. My espresso shots stopped tasting flat the week I switched.",
    name: "Marisol Chen",
    location: "Ottawa, ON",
  },
  {
    quote:
      "I paused for six weeks over the summer and restarted with one click. No phone call, no retention pitch — just coffee again the following Friday.",
    name: "Devon Fitzgerald",
    location: "Halifax, NS",
  },
  {
    quote:
      "Never had a coffee subscription outlast a gym membership before. A year in and the pour-over bag still tastes like it did the first week.",
    name: "Priyanka Osei",
    location: "Victoria, BC",
  },
];

function StarRating() {
  return (
    <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden">
      <div className="relative mx-auto w-full max-w-6xl px-6 py-16 sm:px-14 sm:py-24">
        <span className="block text-[11px] font-semibold uppercase tracking-[0.06em] text-accent-700 sm:text-[12.5px]">
          Testimonials
        </span>
        <h2 className="mt-3 font-heading text-base leading-[1.2] sm:mt-4 sm:text-[22px]">
          What&apos;s landing on people&apos;s counters.
        </h2>

        <div className="mt-10 flex flex-col gap-4 sm:mt-14 sm:grid sm:grid-cols-3 sm:gap-[34px]">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="card elev-sm flex flex-col gap-4 p-6"
            >
              <StarRating />
              <p className="text-[13.5px] leading-[1.6] text-text sm:text-[15px] sm:leading-[1.65]">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-auto pt-2">
                <p className="font-heading text-[15px] leading-[1.2]">
                  {testimonial.name}
                </p>
                <p className="mt-1 text-[12.5px] text-neutral-800">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
