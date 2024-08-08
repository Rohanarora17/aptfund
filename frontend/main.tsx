import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { AnonAadhaarProvider } from "@anon-aadhaar/react";
import App from "@/App.tsx";
// Internal components
import { Toaster } from "@/components/ui/toaster.tsx";
import { WalletProvider } from "@/components/WalletProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AnonAadhaarProvider _useTestAadhaar={true}>
  <React.StrictMode>
    <WalletProvider>
          <App />
          <Toaster />
    </WalletProvider>
  </React.StrictMode>
  </AnonAadhaarProvider>
);
