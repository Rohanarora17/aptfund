import React, { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { HoverEffect } from "@/components/ui/card-hover-effect"; // Adjust the import path as needed
import { Button } from "@/components/ui/button";
interface ProjectProps {
  title: string;
  description: string;
  projects: { id: string; title: string; image: string }[];
  image: string;
  category: string;
}

const Project: React.FC<ProjectProps> = ({ title, description, projects, image, category }) => {
  const [, setLocation] = useLocation();
  const [timeLeft, setTimeLeft] = useState(300); // Set initial countdown time in seconds (5 minutes)

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timerId);
    }
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const projectItems = projects.map((project) => ({
    title: project.title,
    description: "View Project",
    link: `/dashboard/${category}/${project.id}`,
    image: project.image,
  }));

  return (
    <div className="flex flex-col min-h-[100vh] bg-gradient-to-br from-[rgb(108,0,162)] to-[rgb(0,17,82)]">
      <header className="w-full bg-black shadow-lg">
        <div className="flex items-center justify-between px-6 py-4">
          <div
            className="text-3xl font-extrabold text-white cursor-pointer"
            onClick={() => setLocation("/dashboard")}
          >
            APT FUND
          </div>
          <Button
            variant="outline"
            className="text-black border-white hover:bg-black hover:text-white"
            onClick={() => setLocation("/dashboard/roundform")}
          >
            Apply for Funding
          </Button>
        </div>
      </header>
      <main className="flex-1 px-6 py-8 mr-4">
        <h1 className="text-5xl font-bold pl-20">{title}</h1>
        <div className="flex justify-around items-center">
          <p className="text-white max-w-3xl">{description}</p>
          <img
            src={image}
            alt={title}
            width={450}
            height={300}
            className="rounded-lg justify-between ml-8"
            style={{ aspectRatio: "450/300", objectFit: "cover" }}
          />
        </div>
        <div className="flex items-center gap-4 mt-4 ml-11">
          <div className="text-white font-bold text-2xl">Time to start:</div>
          <div className="relative w-full max-w-md">
            <div id="countdown-bar" className="h-4 bg-primary rounded-full" style={{ width: `${(timeLeft / 300) * 100}%` }} />
            <div
              id="countdown"
              className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl"
            >
              {formatTime(timeLeft)}
            </div>
          </div>
        </div>
        <h2 className="text-2xl font-bold mt-4">Current Running Projects</h2>
        <HoverEffect items={projectItems} />
      </main>
    </div>
  );
};

function HeartIcon(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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

export default Project;
