import CoffeeMug from "./_components/svgs/CoffeeMug";
import Farms from "./_components/Farms";
import Footer from "./_components/Footer";
import HowItWorks from "./_components/HowItWorks";
import Nav from "./_components/Nav";
import Subscribe from "./_components/Subscribe";
import TasteNotes from "./_components/TasteNotes";
import Testimonials from "./_components/Testimonials";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <div className="bg-bg">
        <section id="roast" className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-36 -top-48 h-[420px] w-[420px] rounded-full bg-accent-2-200 sm:-right-52 sm:-top-64 sm:h-[600px] sm:w-[600px]"
          />
          {/* <div
            aria-hidden
            className="pointer-events-none absolute -bottom-28 -right-20 h-[220px] w-[220px] rounded-full bg-accent-100 sm:-bottom-40 sm:-right-32 sm:h-[340px] sm:w-[340px]"
          /> */}

          <Nav />

          <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-4 px-6 pb-0 pt-8 sm:px-14 sm:pb-0 sm:pt-14 md:grid-cols-[minmax(0,1fr)_300px] md:gap-6">
            <div>
              <h1 className="font-heading text-[34px] leading-[1.08] tracking-[-0.015em] text-text sm:text-[62px] sm:leading-[1.06]">
                <span className="block">Coffee that</span>
                <span className="block">takes its time.</span>
              </h1>
              <p className="mt-5 max-w-[44ch] text-[13.5px] leading-[1.6] text-neutral-800 sm:mt-6 sm:text-[17px] sm:leading-[1.65]">
                Twelve pounds a batch, roasted the morning it ships. Tell us
                how you brew and we will send the bag that suits it — Tuesday
                in the drum, Friday on your counter.
              </p>
              <div className="mt-7 flex flex-wrap gap-3 sm:mt-8">
                <a href="#subscribe" className="btn btn-primary">
                  Pick my roast
                </a>
                <TasteNotes />
              </div>
              <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.06em] text-accent-700 sm:mt-8 sm:text-[12.5px]">
                Free shipping &middot; pause anytime
              </p>
            </div>

            <div className="mx-auto flex h-[168px] w-[168px] items-center justify-center rounded-full bg-accent-200 sm:mx-0 sm:h-[300px] sm:w-[300px] md:justify-self-end">
              <CoffeeMug className="h-[110px] w-[110px] sm:h-[196px] sm:w-[196px]" />
            </div>
          </div>
        </section>

        <HowItWorks />
        <Farms />
        <Testimonials />
      </div>
      <Subscribe />
      <Footer />
    </main>
  );
}
