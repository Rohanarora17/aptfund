import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DefiImage from "@/components/images/DEFI.jpeg";
import cryptoimage from "@/components/images/cryptocurrencyex.jpeg";
import botimage from "@/components/images/bot.jpeg";
import { useLocation } from "wouter";
import { JSX } from "react/jsx-runtime";
import Project from "../comp/Project";

export default function Component() {
  const projects = [
    {
      title: "Crypto Exchange",
      image: cryptoimage,
      id: "exchange"
    },
    {
      title: "Trading Bot",
      image: botimage,
      id: "arbitrage"
    },
  ];

  return (
    <Project
      title="DeFi"
      image={DefiImage}
      description="Welcome to the DeFi Track on APT Fund, your premier destination for decentralized finance
      innovation! Our platform is dedicated to revolutionizing the financial landscape by providing a robust
      space for crowdfunding the next generation of DeFi projects."
      projects={projects}
      category="Defi"
    />
  );
}
