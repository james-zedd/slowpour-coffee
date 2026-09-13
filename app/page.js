const features = [
  {
    title: "Slow-brewed, always",
    description:
      "Every cup is poured over by hand, never rushed. Good coffee takes time — we let it.",
  },
  {
    title: "Small-batch roasts",
    description:
      "We roast in short runs each week so every bag is fresh when it reaches you.",
  },
  {
    title: "Direct-trade beans",
    description:
      "Sourced straight from growers we know by name, at prices that support the next harvest.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-zinc-50 font-sans dark:bg-black">
      <header className="w-full border-b border-black/[.06] dark:border-white/[.08]">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-5 sm:px-16">
          <span className="text-lg font-semibold tracking-tight text-black dark:text-zinc-50">
            Slowpour
          </span>
          <a
            href="#order"
            className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
          >
            Order beans
          </a>
        </div>
      </header>

      <main className="flex flex-1 flex-col">
        <section className="mx-auto flex w-full max-w-5xl flex-col items-start gap-6 px-6 py-24 sm:px-16 sm:py-32">
          <p className="text-sm font-medium tracking-wide text-zinc-600 uppercase dark:text-zinc-400">
            Small-batch &middot; Slow-brewed
          </p>
          <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-black sm:text-5xl dark:text-zinc-50">
            Coffee for people who aren&apos;t in a hurry.
          </h1>
          <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            We roast in small batches and brew every cup by hand, so it comes
            out right. No shortcuts, no rush — just a really good cup of
            coffee.
          </p>
          <div className="flex flex-col gap-4 pt-2 sm:flex-row">
            <a
              id="order"
              href="#"
              className="flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-base font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
            >
              Order beans
            </a>
            <a
              href="#learn-more"
              className="flex h-12 items-center justify-center rounded-full border border-solid border-black/[.08] px-6 text-base font-medium transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
            >
              Our story
            </a>
          </div>
        </section>

        <section
          id="learn-more"
          className="border-t border-black/[.06] bg-white px-6 py-20 sm:px-16 dark:border-white/[.08] dark:bg-zinc-950"
        >
          <div className="mx-auto grid w-full max-w-5xl gap-10 sm:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col gap-2">
                <h2 className="text-lg font-semibold text-black dark:text-zinc-50">
                  {feature.title}
                </h2>
                <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 py-20 sm:px-16">
          <div className="mx-auto flex w-full max-w-5xl flex-col items-start gap-4 rounded-2xl bg-foreground px-8 py-12 text-background sm:px-12">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Get fresh beans on your doorstep.
            </h2>
            <p className="max-w-md text-base leading-7 opacity-80">
              Subscribe and never run out. Cancel or change your roast
              anytime.
            </p>
            <a
              href="#"
              className="mt-2 flex h-12 items-center justify-center rounded-full bg-background px-6 text-base font-medium text-foreground transition-colors hover:opacity-90"
            >
              Start subscription
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/[.06] px-6 py-10 sm:px-16 dark:border-white/[.08]">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 text-sm text-zinc-600 sm:flex-row dark:text-zinc-400">
          <span>&copy; {new Date().getFullYear()} Slowpour Coffee</span>
          <span>Roasted &amp; brewed slowly.</span>
        </div>
      </footer>
    </div>
  );
}
