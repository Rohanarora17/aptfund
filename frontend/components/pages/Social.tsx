/**
 * v0 by Vercel.
 * @see https://v0.dev/t/rMj1o1HTxdZ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SVGProps } from "react"
import { JSX } from "react/jsx-runtime"
import Social from "@/components/images/social.jpg"
import SM from "@/components/images/SocialMedia.jpeg"
import bg from "@/components/images/Blog.png"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-gradient-to-br from-[rgb(108,0,162)] to-[rgb(0,17,82)]">
      <header className="flex items-center justify-between px-6 py-4 bg-primary text-primary-foreground">
        <div className="text-2xl font-bold">APT FUND</div>
      </header>
      <main className="flex-1 px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="order-2 md:order-1 space-y-6 ml-12">
            <h1 className="text-4xl font-bold">Social</h1>
            <p className="text-white">
              At APT FUND, we believe in the power of community and the impact we can make together. Our Social Impact
              Track is dedicated to projects that aim to create positive change in society. Whether you're passionate
              about environmental conservation, social justice, education, or healthcare, this is the place where your
              innovative ideas can find the support they need.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img
              src={Social}
              alt="Social"
              width={450}
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
                    src={SM}
                    alt="Social Media Platform"
                    width={150}
                    height={150}
                    className="rounded-lg"
                    style={{ aspectRatio: "150/150", objectFit: "cover" }}
                  />
                  <div className="flex flex-col items-end gap-2">
                    <div className="text-black font-bold">Social Media Platform</div>
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
                    src={bg}
                    alt="Blogging Website"
                    width={150}
                    height={150}
                    className="rounded-lg"
                    style={{ aspectRatio: "150/150", objectFit: "cover" }}
                  />
                  <div className="flex flex-col items-end gap-2">
                    <div className="text-black font-bold">Blogging Website</div>
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