/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Uqjn0SI0GSb
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import DefiImage from "@/components/images/DEFI.jpeg"
import cryptoimage from "@/components/images/cryptocurrencyex.jpeg"
import botimage from "@/components/images/bot.jpeg"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-gradient-to-br from-[rgb(108,0,162)] to-[rgb(0,17,82)]">
      <header className="flex items-center justify-between px-6 py-4 bg-primary text-primary-foreground">
        <div className="text-2xl font-bold">APT FUND</div>
      </header>
      <main className="flex-1 px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="order-2 md:order-1 space-y-6 ml-12">
            <h1 className="text-4xl font-bold">Defi</h1>
            <p className="text-white">
              The DeFi Track in our crowdfunding platform is designed to accelerate the development and adoption of
              decentralized finance (DeFi) projects. DeFi represents a revolutionary shift in the financial industry,
              leveraging blockchain technology to create transparent, efficient, and inclusive financial systems.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img
              src={DefiImage}
              alt="Defi"
              width={350}
              height={300}
              className="rounded-lg ml-8"
              style={{ aspectRatio: "450/300", objectFit: "cover" }}
            />
          </div>
        </div>
        <h2 className="text-2xl font-bold mt-8">Current Running Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          <Card className="flex flex-col">
            <CardContent className="flex-1">
              <div className="flex flex-col items-start gap-4">
                <div className="flex items-center justify-evenly w-full">
                  <img
                    src={cryptoimage}
                    alt="Defi Crypto Exchange"
                    width={300}
                    height={200}
                    className="rounded-lg"
                    style={{ aspectRatio: "150/150", objectFit: "cover" }}
                  />
                  <div className="flex flex-col items-end gap-2">
                    <div className="text-black font-bold">Defi Crypto Exchange</div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon">
                        <HeartIcon className="w-4 h-4" />
                        <span className="sr-only">Like</span>
                      </Button>
                      <span className="text-black">250 likes</span>
                    </div>
                    <Button variant="ghost" className="mt-4 shadow-lg shadow-black/50 bg-black text-white">
                      View Project
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardHeader />
          </Card>
          <Card className="flex flex-col">
            <CardContent className="flex-1">
              <div className="flex flex-col items-start gap-4">
                <div className="flex items-center justify-evenly w-full">
                  <img
                    src={botimage}
                    alt="Arbitrage bot"
                    width={300}
                    height={150}
                    className="rounded-lg"
                    style={{ aspectRatio: "150/150", objectFit: "cover" }}
                  />
                  <div className="flex flex-col items-end gap-2">
                    <div className="text-black font-bold">Arbitrage bot</div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon">
                        <HeartIcon className="w-4 h-4" />
                        <span className="sr-only">Like</span>
                      </Button>
                      <span className="text-black">150 likes</span>
                    </div>
                    <Button variant="ghost" className="mt-4 shadow-lg shadow-black/50 bg-black text-white">
                      View Project
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardHeader />
          </Card>
        </div>
      </main>
    </div>
  )
}

interface HeartIconProps {
    [key: string]: any;
}

function HeartIcon(props: HeartIconProps) {
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