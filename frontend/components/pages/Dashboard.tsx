import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import Gaming from "@/components/images/GAMING1.png";
import Social from "@/components/images/social.jpg";
import Defi from "@/components/images/DEFI.jpeg";
import Depin from "@/components/images/Depin.png";
import RWA from "@/components/images/Rwa.png";
import music from "@/components/images/Music.jpeg";

export default function Component() {
  const [location, setLocation] = useLocation();

  const currentOpenings = [
    {
      title: "DeFi Track",
      description: "Explore the latest decentralized finance projects and help shape the future of finance.",
      link: "/dashboard/Defi",
      image: Defi,
    },
    {
      title: "Gaming",
      description: "Join the cutting-edge of blockchain gaming and help build the next generation of interactive experiences.",
      link: "/dashboard/Gaming",
      image: Gaming,
    },
    {
      title: "Social",
      description: "Contribute to decentralized social platforms and empower communities to connect and thrive.",
      link: "/dashboard/Social",
      image: Social,
    },
  ];

  const upcomingTracks = [
    {
      title: "DePin",
      description: "Explore the future of decentralized infrastructure with DePin, revolutionizing connectivity and services on Web3.",
      link: "/dashboard/Depin",
      image: Depin,
    },
    {
      title: "RWA",
      description: "Transform real-world assets into digital investments with RWA on Web3.",
      link: "/dashboard/Rwa",
      image: RWA,
    },
    {
      title: "Music",
      description: "Empower artists and fans with decentralized music on Web3.",
      link: "/dashboard/Music",
      image: music,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black">
      <header className="w-full bg-black shadow-lg">
        <div className="flex items-center justify-between px-6 py-4">
          <div
            className="text-3xl font-extrabold text-white cursor-pointer"
            onClick={() => setLocation("/dashboard")}
          >
            APT FUND
          </div>
          <Button
            variant="outline"
            className="text-black border-white hover:bg-black hover:text-white"
            onClick={() => setLocation("/dashboard/form")}
          >
            Create new Round
          </Button>
        </div>
      </header>
      <main className="flex-1 px-6 py-8">
        <section>
          <h2 className="text-3xl font-extrabold text-white mb-6 relative">
            Current Openings
            <span className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full"></span>
          </h2>
          <HoverEffect items={currentOpenings} />
        </section>
        <section className="mt-12">
          <h2 className="text-3xl font-extrabold text-white mb-6 relative">
            Upcoming Tracks
            <span className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></span>
          </h2>
          <HoverEffect items={upcomingTracks} />
        </section>
      </main>
    </div>
  );
}
