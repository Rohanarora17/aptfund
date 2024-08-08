import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import Gaming from "@/components/images/GAMING1.png";
import Social from "@/components/images/social.jpg";
import Defi from "@/components/images/DEFI.jpeg";
import Depin from "@/components/images/Depin.png";
import RWA from "@/components/images/Rwa.png";
import music from "@/components/images/Music.jpeg";
import { Aptos, AptosConfig } from "@aptos-labs/ts-sdk";
import { NETWORK } from "@/constants";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { useEffect, useState } from "react";

const aptosConfig = new AptosConfig({ network: NETWORK });
export const aptos = new Aptos(aptosConfig);
export const moduleAddress = "0x2debc4b6b5c8273cbb4ca0742c54e79b41793834e287c67263f2701b40318e3f";

async function getAllRounds() {
  try {
    const response = await aptos.view({
      payload: {
        function: `${moduleAddress}::aptfund::get_all_rounds`,
        functionArguments: [], // No arguments needed for this function
      },
    });

    console.log("Rounds data:", response);
    return response;
  } catch (error) {
    console.error("Error fetching rounds data:", error);
  }
}

export default function Component() {
  const [location, setLocation] = useLocation();
  const { account } = useWallet();
  const [rounds, setRounds] = useState<any[]>([]);

  useEffect(() => {
    const fetchRounds = async () => {
      const response = await getAllRounds();
      if (response) {
        setRounds(response);
        console.log("Rounds data after function call is:", response);
      }
    };

    fetchRounds();
  }, []);

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
        <h2 className="text-2xl font-bold mb-6 mt-12 text-primary-foreground">Rounds Data</h2>
        <ul>
          {rounds.map((round, index) => (
            <li key={index}>
              {/* Render round details here */}
              {JSON.stringify(round)}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
