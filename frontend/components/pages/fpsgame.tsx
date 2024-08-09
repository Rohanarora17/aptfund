import FS from "@/components/images/FPSgame.jpg"; // Adjust the import path as needed
import { SVGProps, } from "react";
import { LogInWithAnonAadhaar, useAnonAadhaar } from "@anon-aadhaar/react";
import {
  packGroth16Proof,
} from "@anon-aadhaar/core";
import { useEffect, useState } from "react";
// import audio from "./background-music.mp3";
import { useWallet, InputTransactionData } from "@aptos-labs/wallet-adapter-react";
import { Aptos, AptosConfig } from "@aptos-labs/ts-sdk";
import { NETWORK } from "@/constants";

// Initialize the Aptos client and set module address
const aptosConfig = new AptosConfig({ network: NETWORK });
export const aptos = new Aptos(aptosConfig);
export const moduleAddress = "0x63b291491eaace03eaebc33dd4d06d42f05c6d1a3e495acd48fe917da3fbb945";



export default function Component() {
  const [anonAadhaar] = useAnonAadhaar();
  const [anonAadhaarCore, setAnonAadhaarCore] = useState();
  console.log("anonAadhaarCore", anonAadhaarCore);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [transactionInProgress, setTransactionInProgress] = useState(false);
  console.log("Anon Aadhaar : ", anonAadhaar);
  console.log(transactionInProgress);
  // State to track transaction progress
  // const audioRef = useRef<HTMLAudioElement>(null); // Ref for the audio element
  const { account, signAndSubmitTransaction } = useWallet();

  useEffect(() => {
    console.log("Anon Aadhaar : ", anonAadhaar);
    console.log("Anon Aadhaar status: ", anonAadhaar.status);
    if (anonAadhaar?.status === "logged-in") {
      setIsModalOpen(false);
      if (anonAadhaar?.anonAadhaarProofs) {
        console.log("Anon Aadhaar Proofs: ", anonAadhaar?.anonAadhaarProofs);
        console.log(
          "Anon Aadhaar Proofs: ",
          JSON.stringify(anonAadhaar?.anonAadhaarProofs)
        );
        const proofs = JSON.parse(anonAadhaar?.anonAadhaarProofs[0].pcd);
        console.log("proofs", proofs);
        console.log("proofs.proofs", proofs.proof);
        setAnonAadhaarCore(proofs.proof);
        handleModalUpload(proofs.proof);
        
        // Trigger the donation transaction after successful login
        donateToProject();  
      }
    }
  }, [anonAadhaar]);

  const donateToProject = async () => {
    if (!account) return;

    setTransactionInProgress(true);

    const amount = 1000;  // Example amount to donate
    const projectId = 7054722220004970881;  // Example project ID
    const roundId = 3305491644656545024;  // Example round ID

    const transaction: InputTransactionData = {
      data: {
        function: `${moduleAddress}::aptfunding::donate`,
        functionArguments: [
          amount,
          projectId,
          roundId
        ],
      },
    };

    try {
      const response = await signAndSubmitTransaction(transaction);
      await aptos.waitForTransaction({ transactionHash: response.hash });
      console.log("Donation transaction successful:", response);
    } catch (error) {
      console.error("Donation transaction failed:", error);
    } finally {
      setTransactionInProgress(false);
    }
  };

  const buyHandler = async () => {
    setIsModalOpen(true);
    // if (audioRef.current) {
    //   audioRef.current.currentTime = 0; // Reset the audio to the start
    //   audioRef.current.play(); // Play the audio
    // }
  };

  const handleModalUpload = async (proof: any) => {
    try {
      console.log("Minting process started");

      const nullifierSeed = proof.nullifierSeed;
      console.log("nullifierSeed", nullifierSeed);
      const nullifier = proof.nullifier;
      console.log("nullifier", nullifier);
      const signal = proof.signalHash;
      console.log("signal", signal);
      const timestamp = proof.timestamp;
      console.log("timestamp", timestamp);
      const revealArray = [
        proof.ageAbove18,
        proof.gender,
        proof.pincode,
        proof.state,
      ];
      console.log("revealArray", revealArray);
      const groth16Proof = packGroth16Proof(proof.groth16Proof);
      console.log("groth16Proof", groth16Proof);
    } catch (error) {
      console.error("Error during the minting process:", error);
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
            <h1 className="text-4xl font-bold">First On-Chain FPS Game</h1>
            <p className="text-white">
              Introducing the first-ever FPS game built on blockchain technology, revolutionizing the way we experience
              first-person shooters. This innovative game combines high-octane action with the transparency and security
              of the blockchain, offering players a truly unique and immersive experience. Dive into intense battles
              with blockchain-verified assets and characters, ensuring true ownership and rarity. Players can trade and
              upgrade their gear on a decentralized marketplace, adding a new layer of strategy and value to the
              gameplay. Join us at the forefront of gaming evolution, where adrenaline-pumping action meets the
              cutting-edge world of blockchain, creating a thrilling and unprecedented gaming adventure.
            </p>
            <div className="flex gap-4">
              <button
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                onClick={buyHandler}
              >
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
              src={FS}
              alt="FPS Game"
              width={450}
              height={300}
              className="object-cover w-full rounded-lg aspect-[3/4] group-hover:scale-105 transition-transform"
              style={{ aspectRatio: "450/300", objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="text-xl font-semibold text-white">First On-Chain FPS Game</h3>
              <p className="text-white/80 text-sm">Revolutionizing the way we experience first-person shooters.</p>
            </div>
          </div>
        </div>
      </main>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button
              className="close"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>
            <LogInWithAnonAadhaar
              nullifierSeed={1234}
              fieldsToReveal={["revealAgeAbove18"]}
              signal={"0xdD2FD4581271e230360230F9337D5c0430Bf44C0"}
            />
          </div>
        </div>
      )}
      <style>{`
        .modal {
          display: flex;
          align-items: center;
          justify-content: center;
          position: fixed;
          z-index: 1000;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          overflow: auto;
          background-color: rgba(0,0,0,0.5);
        }
        .modal-content {
          background-color: #333333;
          margin: auto;
          padding: 20px;
          border: 1px solid #888;
          width: 80%;
          max-width: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }
        .close {
          color: #aaa;
          float: right;
          font-size: 28px;
          font-weight: bold;
          align-self: flex-end;
        }
        .close:hover,
        .close:focus {
          color: black;
          text-decoration: none;
          cursor: pointer;
        }
      `}</style>
      {/* <audio ref={audioRef} src={audio} /> */}
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
