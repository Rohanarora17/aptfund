/**
 * v0 by Vercel.
 * @see https://v0.dev/t/1Wd0sMf7l9V
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import rwa from "@/components/images/Rwa.png"
export default function Component() {
    return (
      <div className="flex flex-col min-h-[100dvh] bg-gradient-to-br from-[rgb(108,0,162)] to-[rgb(0,17,82)]">
        <header className="flex items-center justify-between px-6 py-4 bg-primary text-primary-foreground">
          <div className="text-2xl font-bold">APT FUND</div>
        </header>
        <main className="flex-1 px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="order-2 md:order-1 space-y-6 ml-12">
              <h1 className="text-4xl font-bold">RWA</h1>
              <p className="text-white">
                At APT FUND, we are excited to announce the launch of our Real-World Assets (RWA) Web3 Track, where
                traditional assets meet the innovative power of blockchain technology. This track is dedicated to projects
                that aim to tokenize and bring real-world assets onto the blockchain, creating new opportunities for
                transparency, liquidity, and accessibility.
              </p>
            </div>
            <div className="order-1 md:order-2 relative">
              <img
                src={rwa}
                alt="RWA"
                width={450}
                height={300}
                className="rounded-lg ml-8 object-cover"
                style={{ aspectRatio: "450/300", objectFit: "cover" }}
              />
              <div className="absolute top-2 left-4 bg-primary text-primary-foreground px-2 py-1 rounded-md text-sm font-medium">
                Soon to be released
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }