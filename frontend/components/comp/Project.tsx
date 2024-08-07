import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { JSX } from "react/jsx-runtime";

interface ProjectProps {
  title: string;
  description: string;
  projects: { title: string; image: string }[];
  image: string;
}

const Project: React.FC<ProjectProps> = ({ title, description, projects, image }) => {
  const [location, setLocation] = useLocation();
  const [timeLeft, setTimeLeft] = useState(60); // Set initial countdown time in seconds

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

  return (
    <div className="flex flex-col min-h-[100dvh] bg-gradient-to-br from-[rgb(108,0,162)] to-[rgb(0,17,82)]">
      <header className="flex items-center justify-between px-6 py-4 bg-primary text-primary-foreground">
        <div className="text-2xl font-bold">APT FUND</div>
      </header>
      <main className="flex-1 px-6 py-8">
        <h1 className="text-5xl font-bold pl-20">{title}</h1>
        <div className="flex justify-around items-center">
          <p className="text-white max-w-3xl">{description}</p>
          <img
            src={image}
            alt="Defi"
            width={450}
            height={300}
            className="rounded-lg justify-between ml-8"
            style={{ aspectRatio: "450/300", objectFit: "cover" }}
          />
        </div>
        <div className="flex items-center gap-4 mt-8">
          <div className="text-white font-bold text-2xl">Countdown:</div>
          <div className="relative w-full max-w-md">
            <div id="countdown-bar" className="h-4 bg-primary rounded-full" style={{ width: `${(timeLeft / 60) * 100}%` }} />
            <div id="countdown" className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl">
              {formatTime(timeLeft)}
            </div>
          </div>
        </div>
        <h2 className="text-2xl font-bold mt-8">Current Running Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          {projects.map((project, index) => (
            <Card className="flex flex-col" key={index}>
              <CardContent className="flex-1">
                <div className="flex flex-col items-start gap-4">
                  <div className="flex items-center justify-evenly w-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      width={150}
                      height={150}
                      className="rounded-lg"
                      style={{ aspectRatio: "150/150", objectFit: "cover" }}
                    />
                    <div className="space-y-2">
                      <div className="text-black font-bold">{project.title}</div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon">
                          <HeartIcon className="w-4 h-4" />
                          <span className="sr-only">Like</span>
                        </Button>
                        <span className="text-black">250 likes</span>
                      </div>
                      <Button
                        variant="ghost"
                        className="mt-4 shadow-lg shadow-black/50 bg-black text-white"
                        onClick={() => setLocation(`/dashboard/Defi/${project.title}/`)}
                      >
                        View Project
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardHeader />
            </Card>
          ))}
        </div>
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
