import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { SVGProps } from "react"
import { JSX } from "react/jsx-runtime"

export function Component() {
  return (
    <div className="flex justify-center items-center h-screen bg-[#a72a9d]">
      <Card className="w-full max-w-md relative">
        <div className="absolute top-4 right-4">
          <Button variant="ghost" size="icon" className="text-white rounded-full">
            <XIcon className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
        <CardHeader>
          <CardTitle className="text-white">Create New Project</CardTitle>
          <CardDescription className="text-gray-400">Fill out the form to get started.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name" className="text-gray-400">
                Project Name
              </Label>
              <Input
                id="name"
                placeholder="Enter project name"
                className="bg-[#2c2c2c] text-white border-gray-600 focus:border-primary"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description" className="text-gray-400">
                Description
              </Label>
              <Textarea
                id="description"
                placeholder="Describe your project"
                rows={3}
                className="bg-[#2C2C2C] text-white border-gray-600 focus:border-primary"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="image" className="text-gray-400">
                Project Image
              </Label>
              <div className="flex items-center gap-2">
                <Button variant="outline" className="flex-1 bg-[#2C2C2C] text-white border-gray-600">
                  <UploadIcon className="mr-2 h-4 w-4" />
                  Upload Image
                </Button>
                <Input id="image" type="file" className="hidden" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="category" className="text-gray-400">
                Category
              </Label>
              <div id="category">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="defi" className="bg-[#2C2C2C] text-white">
                      DeFi
                    </SelectItem>
                    <SelectItem value="gaming" className="bg-[#2C2C2C] text-white">
                      Gaming
                    </SelectItem>
                    <SelectItem value="social" className="bg-[#2C2C2C] text-white">
                      Social
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button type="submit" className="w-full bg-primary text-primary-foreground">
              Create Project
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

function UploadIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  )
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
  )
}
export default Component