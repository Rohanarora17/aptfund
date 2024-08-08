import React from "react";
import Depin from "@/components/images/Depin.png";
import Project from "../comp/upcoming"; // Ensure this path is correct

export default function Component() {
  return (
    <Project
      title="DePiN"
      image={Depin}
      description="Welcome to the DeFi Track on APT Fund, your premier destination for decentralized finance
      innovation! Our platform is dedicated to revolutionizing the financial landscape by providing a robust
      space for crowdfunding the next generation of DeFi projects."
      category="Depin"
    />
  );
}
