import { WalletSelector } from "./WalletSelector";
import { useLocation } from "wouter";

import '@/index.css'; // Ensure this includes your necessary styles

export function Header() {
  const [, setLocation] = useLocation();

  const handleGoToApp = () => {
    setLocation("/dashboard");
  };

  return (
    <div className="header flex items-center justify-between px-4 py-2 w-full flex-wrap">
      {/* <h1 className="text-black font-bold text-xl md:text-2xl lg:text-3xl">
        Apt Fund
      </h1> */}
      <div className="wallet-selector flex gap-2 items-center flex-wrap">
        <button
          onClick={handleGoToApp}
          className="bg-primary text-primary-foreground font-bold py-2 px-4 rounded transition duration-200"
        >
          Go to App
        </button>
        <WalletSelector />
      </div>
    </div>
  );
}
