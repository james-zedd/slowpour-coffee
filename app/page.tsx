import Roast from "./_components/Roast";
import Farms from "./_components/Farms";
import Footer from "./_components/Footer";
import HowItWorks from "./_components/HowItWorks";
import Nav from "./_components/Nav";
import Subscribe from "./_components/Subscribe";
import Testimonials from "./_components/Testimonials";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <div className="relative overflow-hidden bg-bg">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-36 -top-48 h-[420px] w-[420px] rounded-full bg-accent-2-200 sm:-right-52 sm:-top-64 sm:h-[600px] sm:w-[600px] 3xl:hidden"
        />
        <Nav />
        <Roast />

        <HowItWorks />
        <Farms />
        <Testimonials />
      </div>
      <Subscribe />
      <Footer />
    </main>
  );
}
