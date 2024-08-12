import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { SVGProps } from "react";
import { useWallet, InputTransactionData } from "@aptos-labs/wallet-adapter-react";
import { Aptos, AptosConfig } from "@aptos-labs/ts-sdk";
import { NETWORK } from "@/constants";
import RoundCreatedModal from "./modal";

// Initialize the Aptos client and set module address
const aptosConfig = new AptosConfig({ network: NETWORK });
export const aptos = new Aptos(aptosConfig);
export const moduleAddress = "0x63b291491eaace03eaebc33dd4d06d42f05c6d1a3e495acd48fe917da3fbb945";

export function Component() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [transactionInProgress, setTransactionInProgress] = useState(false);
  const [showModal, setShowModal] = useState(false);  
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    start: "",
    end: "",
    image: "",
    size: "",
  });
  const { account, signAndSubmitTransaction } = useWallet();
  const navigate = useNavigate();

  const handleInputChange = (e : any) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleCategoryChange = (category : any) => {
    setSelectedCategory(category);
  };

  const addNewRound = async (e : any) => {
    e.preventDefault();
    if (!account) return;

    setTransactionInProgress(true);

    const transaction: InputTransactionData = {
      data: {
        function: `${moduleAddress}::aptfunding::create_round`,
        functionArguments: [
          formData.name,
          formData.description,
          selectedCategory,
          parseInt(formData.start),
          parseInt(formData.end),
          formData.image,
          parseInt(formData.size),
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

  const track = ["Defi", "Gaming", "Social", "NFT", "Other"];

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <Card className="w-full max-w-md relative bg-black text-white border border-gray-700">
        <div className="absolute top-4 right-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-white rounded-full"
            onClick={() => navigate("/dashboard")}
          >
            <XIcon className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
        <CardHeader>
          <CardTitle>Create New Round</CardTitle>
          <CardDescription className="text-gray-400">Fill out the form to get started.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4" onSubmit={addNewRound}>
            <div className="grid gap-2">
              <Label htmlFor="name" className="text-gray-400">Round Name</Label>
              <Input
                id="name"
                placeholder="Enter Round Name"
                className="bg-gray-800 text-white border-gray-600 focus:border-primary"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description" className="text-gray-400">Description</Label>
              <Textarea
                id="description"
                placeholder="Round Description"
                rows={3}
                className="bg-gray-800 text-white border-gray-600 focus:border-primary"
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="start" className="text-gray-400">Start Time</Label>
              <Input
                id="start"
                placeholder="Enter start time (timestamp)"
                className="bg-gray-800 text-white border-gray-600 focus:border-primary"
                value={formData.start}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="end" className="text-gray-400">End Time</Label>
              <Input
                id="end"
                placeholder="Enter end time (timestamp)"
                className="bg-gray-800 text-white border-gray-600 focus:border-primary"
                value={formData.end}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="image" className="text-gray-400">Round Image</Label>
              <Input
                id="image"
                placeholder="Enter image URL"
                className="bg-gray-800 text-white border-gray-600 focus:border-primary"
                value={formData.image}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="size" className="text-gray-400">Round Size</Label>
              <Input
                id="size"
                placeholder="Enter project size"
                className="bg-gray-800 text-white border-gray-600 focus:border-primary"
                value={formData.size}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="category" className="text-gray-400">Category</Label>
              <div id="category">
                <Select onValueChange={handleCategoryChange}>
                  <SelectTrigger>
                    <SelectValue>{selectedCategory || "Select a category"}</SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {track.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button type="submit" className="w-full bg-primary text-primary-foreground">
              {transactionInProgress ? "Creating..." : "Create Project"}
            </Button>
          </form>
        </CardContent>
      </Card>
      <RoundCreatedModal show={showModal} onClose={() => setShowModal(false)} content="Your round has been created successfully!" />
    </div>
  );
}

function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export default Component;
