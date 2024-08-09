import NT from "@/components/images/NFTgame.jpeg" // Adjust the import path as needed
import { SVGProps } from "react";

import { useWallet, InputTransactionData } from "@aptos-labs/wallet-adapter-react";
import { Aptos, AptosConfig } from "@aptos-labs/ts-sdk";
import { NETWORK } from "@/constants";
import { useState, useEffect } from "react";

// Initialize the Aptos client and set module address
const aptosConfig = new AptosConfig({ network: NETWORK });
export const aptos = new Aptos(aptosConfig);
export const moduleAddress = "0x63b291491eaace03eaebc33dd4d06d42f05c6d1a3e495acd48fe917da3fbb945";



/**
 * v0 by Vercel.
 * @see https://v0.dev/t/JeZinC3pCrv
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {

  const [transactionInProgress, setTransactionInProgress] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { account, signAndSubmitTransaction } = useWallet();

  const amount = "1000";  // Example amount to donate
    const projectId = "7054722220004970881";  // Example project ID
    const roundId = "3305491644656545024";  // Example round ID
  const donate_funds = async (e :any) => {
    e.preventDefault();
    if (!account ) return;
  
    setTransactionInProgress(true);
  
    const transaction: InputTransactionData = {
      data: {
        function: `${moduleAddress}::aptfunding::donate`,
        functionArguments: [
          parseInt(amount),
          parseInt(projectId),
          parseInt(roundId)
        ],
      },
    };
  
    try {
      const response = await signAndSubmitTransaction(transaction);
      await aptos.waitForTransaction({ transactionHash: response.hash });
    } catch (error) {
      console.error("Transaction failed:", error);
    } finally {
      setTransactionInProgress(false);
      setShowModal(true);
    }
  };

  return (
    <div className="flex flex-col min-h-[100dvh] bg-gradient-to-br from-[rgb(108,0,162)] to-[rgb(0,17,82)]">
      <header className="flex items-center justify-between px-6 py-4 bg-primary text-primary-foreground">
        <div className="text-2xl font-bold">APT FUND</div>
      </header>
      <main className="flex-1 px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="order-2 md:order-1 space-y-6 ml-12">
            <h1 className="text-4xl font-bold">Revolutionary NFT game</h1>
            <p className="text-white">
            Introducing an innovative NFT game that is set to redefine the gaming landscape. This groundbreaking game
                merges cutting-edge blockchain technology with immersive gameplay to deliver an unparalleled gaming
                experience. Players can collect, trade, and enhance unique NFT characters, each with distinct abilities
                and traits, creating a dynamic and engaging world. The game's economy is driven by a robust marketplace
                where NFTs can be bought, sold, and traded, providing real-world value and opportunities for players to
                earn while they play. Join us in pioneering the future of gaming where creativity, strategy, and
                blockchain converge to create endless possibilities.
            </p>
            <div className="flex gap-4">
              <button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" onClick={donate_funds}>
                Fund Me
              </button>
              <button className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                <HeartIcon className="mr-2 h-5 w-5" />
                <span id="like-count">0</span>
              </button>
            </div>
          </div>
          <div className="order-1 md:order-2 relative group">
            <span className="absolute inset-0 z-10" />
            <img
              src={NT}
              alt="FPS Game"
              width={450}
              height={300}
              className="object-cover w-full rounded-lg aspect-[3/4] group-hover:scale-105 transition-transform"
              style={{ aspectRatio: "450/300", objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="text-xl font-semibold text-white">Revolutionary NFT game</h3>
              <p className="text-white/80 text-sm">Revolutionizing the way we experience NFT Gaming.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function HeartIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}
