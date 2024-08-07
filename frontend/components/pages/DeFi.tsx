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
    },
    {
      title: "Trading Bot",
      image: botimage,
    },
  ];

  return (
    <Project
      title="DeFi"
      image={DefiImage}
      description="A DeFi project description goes here."
      projects={projects}
    />
  );
}
