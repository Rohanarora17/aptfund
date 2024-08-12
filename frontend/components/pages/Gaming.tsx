// import React from "react";
// import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
import GamingImage from "@/components/images/GAMING1.png";
import NT from "@/components/images/NFTgame.jpeg";
import FS from "@/components/images/FPSgame.jpg";
import Project from "../comp/Project";
import { Aptos, AptosConfig ,MoveValue } from "@aptos-labs/ts-sdk";
import { NETWORK } from "@/constants";
import { useEffect, useState } from "react";


const aptosConfig = new AptosConfig({ network: NETWORK });
export const aptos = new Aptos(aptosConfig);

const id : Number = 3305491644656545024;
const moduleAddress = "0x63b291491eaace03eaebc33dd4d06d42f05c6d1a3e495acd48fe917da3fbb945";

// Function to fetch all projects for a specific round from the blockchain
async function getRoundProjects(roundId : any) {
  try {
    const response = await aptos.view({
      payload: {
        function: `${moduleAddress}::aptfunding::get_round_projects`,
        functionArguments: [roundId], // Pass the round ID as an argument
      },
    });

    console.log("Projects data:", response);
    return response;
  } catch (error : any) {
    console.error("Error fetching projects data:", error);
    if (error.response) {
      console.error("Response error:", error.response.data);
    }
  }
}


export default function Gaming() {
  const [project_data, setProjects] = useState<MoveValue[]>([]);
  console.log("Projects data before fetching:", project_data);
  useEffect(() => {
    const fetchProjects = async () => {
      const response = await getRoundProjects(id);
      if (response) {
        setProjects(response);
        console.log("Projects data after fetching:", response);
      }
    };

    fetchProjects();
  }, [id]);

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
