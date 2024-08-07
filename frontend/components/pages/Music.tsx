/**
 * v0 by Vercel.
 * @see https://v0.dev/t/VqUgJ12VS7y
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Ms from "@/components/images/Music.jpeg"
export default function Component() {
    return (
      <div className="flex flex-col min-h-[100dvh] bg-gradient-to-br from-[rgb(108,0,162)] to-[rgb(0,17,82)]">
        <header className="flex items-center justify-between px-6 py-4 bg-primary text-primary-foreground">
          <div className="text-2xl font-bold">APT FUND</div>
        </header>
        <main className="flex-1 px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="order-2 md:order-1 space-y-6 ml-12">
              <h1 className="text-4xl font-bold">Music</h1>
              <p className="text-white">
                We're thrilled to unveil our Music on Web3 Track at APT FUND, where the future of music meets the power of
                blockchain technology. This track is dedicated to innovative projects that harness Web3 to revolutionize
                the music industry, offering new ways for artists and fans to connect, create, and collaborate.
              </p>
            </div>
            <div className="order-1 md:order-2 relative">
              <img
                src={Ms}
                alt="Music"
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