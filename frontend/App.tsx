
// import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { Route, Switch } from "wouter";
// Internal Components
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Header } from "@/components/Header";
// import { WalletDetails } from "@/components/WalletDetails";
// import { NetworkInfo } from "@/components/NetworkInfo";
// import { AccountInfo } from "@/components/AcoountInfo";
import { Homepage } from "@/components/pages/Homepage";
import Dashboard from "@/components/pages/Dashboard";
import DeFi from "@/components/pages/DeFi";
import Social from "@/components/pages/Social";
import Gaming from "@/components/pages/Gaming";
import DePin from "@/components/pages/DePin";
import RealWorld from "@/components/pages/realworld";
import Music from "@/components/pages/Music";
import NFTGame from "@/components/pages/nftgame";
import FPSGame from "@/components/pages/fpsgame";
import Exchange from "@/components/pages/exchange";
import Arbitrage from "@/components/pages/arbitrage";
import SocialMedia from "@/components/pages/socialmedia";
import Blog from "@/components/pages/blog";
import form from "@/components/comp/form";
import round from "@/components/comp/round";
import GenAI from "@/components/pages/GenAI";
import text from "@/components/pages/Textai";
import image1 from "@/components/pages/image";

function App() {
  // const { connected } = useWallet();

  return (
    <main>
      <Switch>
        <Route path="/" component={Homepage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/dashboard/defi" component={DeFi} />
        <Route path="/dashboard/social" component={Social} />
        <Route path="/dashboard/gaming" component={Gaming} />
        <Route path="/dashboard/depin" component={DePin} />
        <Route path="/dashboard/rwa" component={RealWorld} />
        <Route path="/dashboard/music" component={Music} />
        <Route path="/dashboard/gaming/nftgame" component={NFTGame} />
        <Route path="/dashboard/gaming/fpsgame" component={FPSGame} />
        <Route path="/dashboard/defi/exchange" component={Exchange} />
        <Route path="/dashboard/defi/arbitrage" component={Arbitrage} />
        <Route path="/dashboard/social/socialmedia" component={SocialMedia} />
        <Route path="/dashboard/social/blog" component={Blog} />
        <Route path ="/dashboard/form" component={form} />
        <Route path ="/dashboard/roundform" component={round} />
        <Route path ="/dashboard/GenAi" component={GenAI} />
        <Route path="/dashboard/GenAI/textai" component={text} />
        <Route path="/dashboard/GenAI/imageai" component={image1} />
        
      </Switch>
    </main>
  );
}

export default App;
