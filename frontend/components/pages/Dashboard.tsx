/**
 * v0 by Vercel.
 * @see https://v0.dev/t/yNMyqzoyPx8
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import Gaming from "@/components/images/GAMING1.png"
import Social from "@/components/images/social.jpg"
import Defi from "@/components/images/DEFI.jpeg"
import Depin from "@/components/images/Depin.png"
import RWA from "@/components/images/Rwa.png"
import music from "@/components/images/Music.jpeg"
import { useLocation } from "wouter"

export default function Component() {
  const [location, setLocation] = useLocation();
  return (
    <div className="flex flex-col min-h-[100dvh] bg-gradient-to-br from-[rgb(108,0,162)] to-[rgb(0,17,82)]">
      <header className="flex items-center justify-between px-6 py-4 bg-primary text-primary-foreground">
        <div className="text-2xl font-bold">APT FUND</div>
        <Button variant="ghost">Create New Project</Button>
      </header>
      <main className="flex-1 px-6 py-8">
        <h2 className="text-2xl font-bold mb-6 text-primary-foreground">Current Openings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-primary-foreground text-primary">
            <CardHeader>
              <CardTitle>DeFi Track</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src={Defi}
                alt="DeFi Track"
                width={400}
                height={225}
                className="rounded-md mb-4"
                style={{ aspectRatio: "400/225", objectFit: "cover" }}
              />
              <p>Explore the latest decentralized finance projects and help shape the future of finance.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" onClick={()=>setLocation("/dashboard/Defi")}>View Projects</Button>
            </CardFooter>
          </Card>
          <Card className="bg-primary-foreground text-primary">
            <CardHeader>
              <CardTitle>Gaming</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src={Gaming}
                alt="Gaming"
                width={400}
                height={225}
                className="rounded-md mb-4"
                style={{ aspectRatio: "400/225", objectFit: "cover" }}
              />
              <p>
                Join the cutting-edge of blockchain gaming and help build the next generation of interactive
                experiences.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" onClick={()=>setLocation("/dashboard/Gaming")}>View Projects</Button>
            </CardFooter>
          </Card>
          <Card className="bg-primary-foreground text-primary">
            <CardHeader>
              <CardTitle>Social</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src={Social}
                alt="Social"
                width={400}
                height={225}
                className="rounded-md mb-4"
                style={{ aspectRatio: "400/225", objectFit: "cover" }}
              />
              <p>Contribute to decentralized social platforms and empower communities to connect and thrive.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" onClick={()=>setLocation("/dashboard/Social")} >View Projects</Button>
            </CardFooter>
          </Card>
        </div>
        <h2 className="text-2xl font-bold mb-6 mt-12 text-primary-foreground">Upcoming Tracks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-primary-foreground text-primary">
            <CardHeader>
              <CardTitle>DePin</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src={Depin}
                alt="Depin"
                width={400}
                height={225}
                className="rounded-md mb-4"
                style={{ aspectRatio: "400/225", objectFit: "cover" }}
              />
              <p>Explore the latest decentralized finance projects and help shape the future of finance.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" onClick={()=>setLocation("/dashboard/rwa")} >View Projects</Button>
            </CardFooter>
          </Card>
          <Card className="bg-primary-foreground text-primary">
            <CardHeader>
              <CardTitle>RWA</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src={RWA}
                alt="RWA"
                width={400}
                height={225}
                className="rounded-md mb-4"
                style={{ aspectRatio: "400/225", objectFit: "cover" }}
              />
              <p>
                Join the cutting-edge of blockchain gaming and help build the next generation of interactive
                experiences.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" onClick={()=>setLocation("/dashboard/DePin")}>View Projects</Button>
            </CardFooter>
          </Card>
          <Card className="bg-primary-foreground text-primary">
            <CardHeader>
              <CardTitle>Music</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src={music}
                alt="Music"
                width={400}
                height={225}
                className="rounded-md mb-4"
                style={{ aspectRatio: "400/225", objectFit: "cover" }}
              />
              <p>Contribute to decentralized social platforms and empower communities to connect and thrive.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" onClick={()=>setLocation("/dashboard/Music")} >View Projects</Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}