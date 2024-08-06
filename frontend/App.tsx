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
import Dashboard from "@/components/pages/Dashboard";
import  DeFi  from "@/components/pages/DeFi";
import Social  from "@/components/pages/Social";
import Gaming from "@/components/pages/Gaming";
import DePin from "@/components/pages/DePin";
import realworld from "@/components/pages/realworld";
import Music from "@/components/pages/Music";
import { Switch } from "wouter" ;


function App() {
  const { connected } = useWallet();

  return (
    <main>

     <Switch>
       <Route path ="/" component={Homepage} />
       <Route path ="/dashboard" component  = {Dashboard} />
       <Route path ="/dashboard/defi" component = {DeFi} />
       <Route path ="/dashboard/social" component = {Social} />
       <Route path ="/dashboard/gaming" component = {Gaming} />
       <Route path ="/dashboard/Depin" component = {DePin} />
       <Route path ="/dashboard/rwa" component = {realworld} /> 
       <Route path = "/dashboard/Music" component = {Music} />
       

     </Switch>
      

    </main>
  );
}

export default App;
