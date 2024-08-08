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
    <div className="flex flex-col min-h-[100vh] bg-gradient-to-br from-[rgb(108,0,162)] to-[rgb(0,17,82)]">
      <header className="flex items-center justify-between px-6 py-4 bg-primary text-primary-foreground">
        <div className="text-2xl font-bold">APT FUND</div>
        <Button variant="ghost" onClick={() => setLocation("/dashboard/form")}>
          Create New Project
        </Button>
      </header>
      <main className="flex-1 px-6 py-8">
        <h2 className="text-2xl font-bold mb-6 text-primary-foreground">Current Openings</h2>
        <HoverEffect items={currentOpenings} />
        <h2 className="text-2xl font-bold mb-6 mt-12 text-primary-foreground">Upcoming Tracks</h2>
        <HoverEffect items={upcomingTracks} />
      </main>
    </div>
  );
}
