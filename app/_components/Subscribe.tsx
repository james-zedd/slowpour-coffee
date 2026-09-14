"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

const brewOptions = ["Drip", "Pour-over", "Espresso", "French press"] as const;
const grindOptions = ["Extra-fine", "Fine", "Medium", "Coarse"] as const;
const frequencyOptions = ["Weekly", "Biweekly", "Monthly"] as const;

type Brew = (typeof brewOptions)[number];
type Grind = (typeof grindOptions)[number];
type Frequency = (typeof frequencyOptions)[number];

export default function Subscribe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [brew, setBrew] = useState<Brew>("Drip");
  const [grind, setGrind] = useState<Grind>("Medium");
  const [frequency, setFrequency] = useState<Frequency>("Weekly");
  const [submitted, setSubmitted] = useState(false);

  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handleAddressChange(event: ChangeEvent<HTMLInputElement>) {
    setAddress(event.target.value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="subscribe"
      className="relative overflow-hidden px-6 py-16 sm:px-14 sm:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 h-[260px] w-[260px] rounded-full bg-accent-2-100 sm:h-[360px] sm:w-[360px]"
      />

      <div className="relative mx-auto flex w-full max-w-2xl flex-col gap-10">
        <div>
          <span className="block text-[11px] font-semibold uppercase tracking-[0.06em] text-accent-700 sm:text-[12.5px]">
            Subscribe
          </span>
          <h2 className="mt-3 font-heading text-base leading-[1.2] sm:mt-4 sm:text-[22px]">
            Start a subscription.
          </h2>
          <p className="mt-4 max-w-[44ch] text-[13.5px] leading-[1.6] text-neutral-800 sm:text-[17px] sm:leading-[1.65]">
            Pick a roast, tell us how you brew, and we will have a fresh bag
            on the counter before you run out. No contracts — pause, skip, or
            cancel whenever life gets in the way.
          </p>
          <ul className="mt-6 flex flex-col gap-2 text-[12.5px] font-medium text-neutral-800 sm:text-[14.5px]">
            <li className="flex items-center gap-2">
              <span
                aria-hidden
                className="h-1.5 w-1.5 flex-none rounded-full bg-accent-500"
              />
              Free shipping on every bag
            </li>
            <li className="flex items-center gap-2">
              <span
                aria-hidden
                className="h-1.5 w-1.5 flex-none rounded-full bg-accent-500"
              />
              Pause or cancel anytime
            </li>
            <li className="flex items-center gap-2">
              <span
                aria-hidden
                className="h-1.5 w-1.5 flex-none rounded-full bg-accent-500"
              />
              Roasted the morning it ships
            </li>
          </ul>
        </div>

        <div className="card elev-md relative p-6 sm:p-8">
          {submitted ? (
            <div className="flex flex-col gap-2 py-6 text-center">
              <span className="font-heading text-[22px]">
                You&apos;re on the list.
              </span>
              <p className="text-[13.5px] leading-[1.6] text-neutral-800">
                We&apos;ll email {email || "you"} to confirm your first
                roast — {brew.toLowerCase()}, {grind.toLowerCase()} grind,{" "}
                {frequency.toLowerCase()}.
              </p>
            </div>
          ) : (
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="subscribe-name">Name</label>
                <input
                  id="subscribe-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Priya Natarajan"
                  className="input"
                  value={name}
                  onChange={handleNameChange}
                />
              </div>

              <div className="field">
                <label htmlFor="subscribe-email">Email</label>
                <input
                  id="subscribe-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="input"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>

              <div className="field">
                <label htmlFor="subscribe-address">Mailing address</label>
                <input
                  id="subscribe-address"
                  name="address"
                  type="text"
                  required
                  autoComplete="street-address"
                  placeholder="48 Wharf St, Victoria, BC"
                  className="input"
                  value={address}
                  onChange={handleAddressChange}
                />
              </div>

              <div className="field">
                <span>How do you brew?</span>
                <div className="seg" role="group" aria-label="Brew method">
                  {brewOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      className="seg-option"
                      aria-pressed={brew === option}
                      onClick={() => setBrew(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div className="field">
                <span>Preferred grind size</span>
                <div className="seg" role="group" aria-label="Grind size">
                  {grindOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      className="seg-option"
                      aria-pressed={grind === option}
                      onClick={() => setGrind(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div className="field">
                <span>How often?</span>
                <div
                  className="seg"
                  role="group"
                  aria-label="Delivery frequency"
                >
                  {frequencyOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      className="seg-option"
                      aria-pressed={frequency === option}
                      onClick={() => setFrequency(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Start my subscription
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
