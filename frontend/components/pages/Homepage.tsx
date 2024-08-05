
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";


export function Homepage() {
  return (
    <BackgroundGradientAnimation>
  <div className="absolute z-50 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 pointer-events-none text-center md:text-4xl lg:text-7xl">
    <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 text-3xl md:text-4xl lg:text-7xl">
      Apt Fund
    </p>
    <p className="bg-clip-text text-transparent drop-shadow-none bg-gradient-to-b from-white/80 to-white/20 text-xl md:text-2xl lg:text-3xl mt-4">
      A decentralized crowdfunding platform
    </p>
  </div>
</BackgroundGradientAnimation>

  );
}
