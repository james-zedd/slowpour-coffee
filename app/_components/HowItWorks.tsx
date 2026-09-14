"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    title: "Tell us how you brew",
    body: "Four questions about your grinder, your water and how early you get up.",
  },
  {
    title: "We roast on Tuesday",
    body: "One drum, one small batch, logged by hand. Nothing sits in a warehouse.",
  },
  {
    title: "It lands by Friday",
    body: "Still warm enough to smell through the box. Skip a week whenever life says so.",
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="how"
      ref={sectionRef}
      className="mx-auto w-full max-w-6xl px-6 py-8 sm:px-14 sm:py-16"
    >
      <span className="mb-[14px] block text-[11px] font-semibold uppercase tracking-[0.06em] text-accent-700 sm:mb-[22px] sm:text-[12.5px]">
        How it works
      </span>

      <div className="flex flex-col gap-4 sm:grid sm:grid-cols-3 sm:gap-[34px]">
        {steps.map((step, i) => (
          <div
            key={step.title}
            className={`flex items-start gap-3.5 transition-all duration-500 ease-[cubic-bezier(.2,.7,.3,1)] sm:block ${
              visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: visible ? `${i * 80}ms` : "0ms" }}
          >
            <div
              className={`flex h-[38px] w-[38px] flex-none items-center justify-center rounded-full font-heading text-base sm:h-[52px] sm:w-[52px] sm:text-[21px] ${
                i % 2 === 0
                  ? "bg-accent-100 text-accent-700"
                  : "bg-accent-2-200 text-accent-2-800"
              }`}
            >
              {i + 1}
            </div>
            <div>
              <h3 className="mt-1.5 font-heading text-base leading-[1.2] sm:mt-[18px] sm:text-[22px]">
                {step.title}
              </h3>
              <p className="mt-1.5 text-[12.5px] leading-[1.55] text-neutral-800 sm:mt-2.5 sm:text-[14.5px] sm:leading-[1.65]">
                {step.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
