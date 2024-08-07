import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import GamingImage from "@/components/images/GAMING1.png";
import NT from "@/components/images/NFTgame.jpeg";
import FS from "@/components/images/FPSgame.jpg";
import Project from "../comp/Project";

export default function Gaming() {
  const projects = [
    {
      title: "Revolutionary NFT GAME",
      image: NT,
      id:  "nftgame"
    },
    {
      title: "FPS GAME",
      image: FS,
      id: "fpsgame"

    },
  ];

  return (
    <Project
      title="Gaming"
      image={GamingImage}
      description="Welcome to the Gaming Track on APT Fund, where innovation and excitement collide! Our platform 
      is dedicated to empowering game developers and enthusiasts by providing a dynamic space for crowdfunding
      the next big thing in gaming."
      projects={projects}
      category="Gaming"
    />
  );
}
