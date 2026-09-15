import CoffeeMug from "./svgs/CoffeeMug";
import TasteNotes from "./TasteNotes";

export default function Roast() {
    return (
        <section id="roast" className="relative overflow-hidden">

          <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-4 px-6 pb-8 pt-8 sm:px-14 sm:pb-16 sm:pt-12 mlg:grid-cols-[minmax(0,1fr)_300px] mlg:gap-6">
            <div>
              <div className="flex flex-row items-center gap-4">
                <div>
                  <h1 className="font-heading text-[28px] leading-[1.08] tracking-[-0.015em] text-text sm:text-[62px] sm:leading-[1.06]">
                    <span className="block">Coffee that</span>
                    <span className="block">takes its time.</span>
                  </h1>
                </div>
                <div className="mr-auto flex h-[72px] w-[72px] items-center justify-center rounded-full bg-accent-200 sm:h-[128px] sm:w-[128px] sm:mx-auto mlg:hidden">
                  <CoffeeMug className="h-[48px] w-[48px] sm:h-[96px] sm:w-[96px]" />
                </div>
              </div>
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

            <div className="mx-auto hidden h-[168px] w-[168px] items-center justify-center rounded-full bg-accent-200 sm:h-[300px] sm:w-[300px] mlg:flex md:justify-self-end">
              <CoffeeMug className="h-[110px] w-[110px] sm:h-[196px] sm:w-[196px]" />
            </div>
          </div>
        </section>
    );
}