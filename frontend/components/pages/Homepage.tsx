import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { Header } from "@/components/Header";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "A",
    },
    {
      text: "decentralize",
    },
    {
      text: "fundraising",
    },
    {
      text: "Platform",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div >
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}



export function Homepage() {

  return (
    <BackgroundGradientAnimation>
      <Header />
      <div className="absolute z-50 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 pointer-events-none text-center md:text-4xl lg:text-7xl">
        <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 text-3xl md:text-4xl lg:text-7xl hover:cursor-pointer">
          Apt Fund
        </p>
        <p className="bg-clip-text text-transparent drop-shadow-none bg-gradient-to-b from-black to-gray-700 text-xl md:text-2xl lg:text-3xl mt-4">
        <TypewriterEffectSmoothDemo />
        </p>

        <p className="bg-clip-text text drop-shadow-none bg-black text-xl md;text-l lg:text-l mt-4">
        Money raised so far $$$$
        </p>
      </div>
    </BackgroundGradientAnimation>
  );
}
