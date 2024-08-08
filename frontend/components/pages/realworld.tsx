import React from "react";
import RWA from "@/components/images/Rwa.png";
import Project from "../comp/upcoming"; // Ensure this path is correct

export default function Component() {
  return (
    <Project
      title="RWA"
      image={RWA}
      description="Welcome to the Real World Assets (RWA) Round on APT Fund, 
      your gateway to bridging traditionalfinance with the power of Web3. 
      Ourplatform enables investors to participate in the tokenization 
      and crowdfunding of tangible assets, unlocking new opportunities for 
      growth and innovation.Join us in transforming real-world assets into 
      digital investments and paving the way for a decentralized 
      financial future."
      category="Real World"
    />
  );
}
