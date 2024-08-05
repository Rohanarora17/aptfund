import { useWallet } from "@aptos-labs/wallet-adapter-react";
// Internal Components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { WalletDetails } from "@/components/WalletDetails";
import { NetworkInfo } from "@/components/NetworkInfo";
import { AccountInfo } from "@/components/AcoountInfo";
import { BackgroundGradientAnimation } from "./components/ui/background-gradient-animation";
import { Route } from "wouter";
import { Homepage } from "@/components/pages/Homepage";
import { Switch } from "wouter" ;

function App() {
  const { connected } = useWallet();

  return (
    <main>
      
      

     <Switch>
       <Route path ="/" component={Homepage} />
       {/* <Route path ="/dashboard" component  = {Dashboard} /> */}
     </Switch>
      

    </main>
  );
}

export default App;
