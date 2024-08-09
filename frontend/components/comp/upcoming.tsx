import React, { useState, useEffect } from "react";
// import { useLocation } from "wouter";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  category: string;
}

const Project: React.FC<ProjectProps> = ({ title, description, image }) => {
  // const [l, setLocation] = useLocation();
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

  return (
    <div className="flex flex-col min-h-[100vh] bg-gradient-to-br from-[rgb(108,0,162)] to-[rgb(0,17,82)]">
      <header className="flex items-center justify-between px-6 py-4 bg-primary text-primary-foreground">
        <div className="text-2xl font-bold">APT FUND</div>
      </header>
      <main className="flex-1 px-6 py-8">
        <h1 className="text-5xl font-bold pl-20">{title}</h1>
        <div className="flex justify-around items-center">
          <p className="text-white max-w-3xl">{description}</p>
          <div className="relative group">
            <img
              src={image}
              alt={title}
              width={300}
              height={200}
              className="object-cover w-full rounded-lg aspect-[3/4] group-hover:scale-105 transition-transform"
              style={{ aspectRatio: "300/200", objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="text-white/80 text-sm">Coming soon</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-4 mt-8 ml-11">
          <div className="text-white font-bold text-2xl">Coming soon:</div>
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
      </main>
    </div>
  );
};

export default Project;
