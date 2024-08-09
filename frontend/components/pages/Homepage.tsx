import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { Header } from "@/components/Header";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
// import { cn } from "@shadcn/ui";

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
    <div>
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}

export function AnimatedNumber({ targetValue }: { targetValue: number }) {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const increment = targetValue / 100; // Speed of the animation
    let value = 0;
    const interval = setInterval(() => {
      value += increment;
      if (value >= targetValue) {
        value = targetValue;
        clearInterval(interval);
      }
      setCurrentValue(Math.floor(value));
    }, 30); // Interval timing in ms

    return () => clearInterval(interval);
  }, [targetValue]);

  return (
    <span className="text-2xl md:text-4xl lg:text-6xl font-bold">
      ${currentValue.toLocaleString()}
    </span>
  );
}

export function Homepage() {
  return (
    <BackgroundGradientAnimation>
      
        <div className="flex justify-between items-center w-full px-6 py-1 bg-black bg-opacity-60">
          {/* <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
            Apt Fund
          </h1> */}
          <Header/>
          {/* <Button className="text-white bg-blue-500 hover:bg-blue-600">
            Get Started
          </Button> */}
        </div>


      <div className="absolute z-50 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 pointer-events-none text-center md:text-4xl lg:text-7xl">
        <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 text-3xl md:text-4xl lg:text-7xl hover:cursor-pointer">
          Apt Fund
        </p>
        <p className="bg-clip-text text-transparent drop-shadow-none bg-gradient-to-b from-black to-gray-700 text-xl md:text-2xl lg:text-3xl mt-4">
          <TypewriterEffectSmoothDemo />
        </p>
        <div className="flex flex-col items-center mt-4">
          <p className="text-xl md:text-3xl lg:text-5xl font-bold">
            Money raised so far
          </p>
          <AnimatedNumber targetValue={5000000} />
        </div>

      </div>
    </BackgroundGradientAnimation>
  );
}
