import botimage from "@/components/images/bot.jpeg";// Adjust the import path as needed
import { SVGProps } from "react";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/JeZinC3pCrv
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-gradient-to-br from-[rgb(108,0,162)] to-[rgb(0,17,82)]">
      <header className="flex items-center justify-between px-6 py-4 bg-primary text-primary-foreground">
        <div className="text-2xl font-bold">APT FUND</div>
      </header>
      <main className="flex-1 px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="order-2 md:order-1 space-y-6 ml-12">
            <h1 className="text-4xl font-bold">Arbitrage Bot</h1>
            <p className="text-white">
            Introducing a powerful DeFi arbitrage bot designed to maximize your profits in the decentralized finance
                space. This cutting-edge bot leverages advanced algorithms to identify and execute profitable arbitrage
                opportunities across various DeFi platforms with lightning speed and precision. By continuously scanning
                multiple markets, the bot ensures you capitalize on price discrepancies, optimizing your returns while
                minimizing risk. Its user-friendly interface and automated operations make it accessible for both seasoned
                traders and newcomers alike.
            </p>
            <div className="flex gap-4">
              <button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                Fund Me
              </button>
              <button className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                <HeartIcon className="mr-2 h-5 w-5" />
                <span id="like-count">0</span>
              </button>
            </div>
          </div>
          <div className="order-1 md:order-2 relative group">
            <span className="absolute inset-0 z-10" />
            <img
              src={botimage}
              alt="FPS Game"
              width={450}
              height={300}
              className="object-cover w-full rounded-lg aspect-[3/4] group-hover:scale-105 transition-transform"
              style={{ aspectRatio: "450/300", objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="text-xl font-semibold text-white">Arbitrage Bot</h3>
              <p className="text-white/80 text-sm">Revolutionizing the way do trading</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function HeartIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}
