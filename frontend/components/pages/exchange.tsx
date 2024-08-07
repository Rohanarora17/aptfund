import { SVGProps } from "react"
import { JSX } from "react/jsx-runtime"

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/fy2VaLE8XfM
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
              <h1 className="text-4xl font-bold">First Decentralized Crypto Exchange</h1>
              <p className="text-white">
                Introducing the first truly decentralized crypto exchange, transforming the way we trade digital assets.
                This pioneering platform leverages blockchain technology to offer a secure, transparent, and efficient
                trading experience without the need for intermediaries. Users have complete control over their funds, with
                peer-to-peer transactions ensuring privacy and security. The exchange features a wide range of
                cryptocurrencies, seamless trading, and innovative tools to enhance user experience. Join us in leading
                the next wave of financial innovation, where decentralization empowers users and redefines the future of
                crypto trading.
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
              <div className="flex items-center gap-4">
                <div className="text-white font-bold text-2xl">Countdown:</div>
                <div className="relative w-full max-w-md">
                  <div id="countdown-bar" className="h-4 bg-primary rounded-full" style={{ width: "100%" }} />
                  <div
                    id="countdown"
                    className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl"
                  >
                    00:00
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 relative">
              <img
                src="/placeholder.svg"
                alt="Defi Crypto Exchange"
                width={450}
                height={300}
                className="rounded-lg ml-8 object-cover"
                style={{ aspectRatio: "450/300", objectFit: "cover" }}
              />
            </div>
          </div>
        </main>
      </div>
    )
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
    )
  }