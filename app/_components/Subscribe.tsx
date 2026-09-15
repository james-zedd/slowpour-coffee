"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

const roastOptions = ["Light", "Medium", "Dark", "Extra Dark"] as const;
const grindOptions = ["Extra Fine", "Fine", "Medium", "Coarse", "Whole Beans"] as const;
const frequencyOptions = ["Weekly", "Bi-weekly", "Monthly"] as const;

type Roast = (typeof roastOptions)[number];
type Grind = (typeof grindOptions)[number];
type Frequency = (typeof frequencyOptions)[number];

export default function Subscribe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [roast, setRoast] = useState<Roast>("Medium");
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
      className="relative overflow-hidden px-6 py-16 sm:px-14 sm:py-24 bg-surface"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 h-[260px] w-[260px] rounded-full bg-accent-2-100 sm:h-[360px] sm:w-[360px] 3xl:hidden"
      />

      <div className="relative mx-auto flex w-full max-w-2xl flex-col gap-10">
        <div className="text-center">
          <h2 className="font-heading text-[28px] leading-[1.08] tracking-[-0.015em] text-text sm:text-[62px] sm:leading-[1.06]">
            Start a subscription.
          </h2>
          <p className="mt-4 text-[13.5px] leading-[1.6] text-neutral-800 sm:text-[17px] sm:leading-[1.65]">
            Pick a roast, let us know your grind preference, and we will have a fresh bag
            on the counter before you run out. No contracts — pause, skip, or
            cancel whenever life gets in the way.
          </p>
        </div>

        <div className="card elev-md relative p-6 sm:p-8">
          {submitted ? (
            <div className="flex flex-col gap-2 py-6 text-center">
              <span className="font-heading text-[22px]">
                Thanks for filling out this form, {name || "friend"}!
              </span>
              <p className="text-[13.5px] leading-[1.6] text-neutral-800">
                This is a fictional subscription form, so we will not actually be sending you coffee. But if we were, we would send it to {address || "the address you provided"} and email you at{" "}
                {email || "the email you provided"}.
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
                <span>What roast do you prefer?</span>
                <div className="seg" role="group" aria-label="Roast level">
                  {roastOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      className="seg-option"
                      aria-pressed={roast === option}
                      onClick={() => setRoast(option)}
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

              <button type="submit" className="btn btn-primary btn-block mt-3">
                Start my subscription
              </button>
              <p className="text-[12px] text-center tracking-[0.06em]">
                Free shipping &middot; Pause anytime
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
