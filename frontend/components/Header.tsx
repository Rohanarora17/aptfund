import { WalletSelector } from "./WalletSelector";
import '@/index.css'; // Ensure this includes your necessary styles

export function Header() {
  return (
    <div className="header flex items-center justify-between px-4 py-2 w-full flex-wrap">
      <h1 className="text-white font-bold text-xl md:text-2xl lg:text-3xl">
      </h1>

      <div className="wallet-selector flex gap-2 items-center flex-wrap">
        <WalletSelector />
      </div>
    </div>
  );
}
