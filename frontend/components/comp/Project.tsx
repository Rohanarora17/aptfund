import React from "react";
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
  const [location, setLocation] = useLocation();

  const projectItems = projects.map((project) => ({
    title: project.title,
    description: "View Project",
    link: `/dashboard/${category}/${project.id}`,
    image: project.image,
  }));

  // Hardcoded end date for the round
  const endDate = new Date('2024-08-18T23:59:59Z');

  return (
    <div className="flex flex-col min-h-[100vh] bg-gradient-to-br from-gray-800 via-gray-900 to-gray-700">
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
        {/* Round Details Section */}
        <section className="mb-12">
          <h1 className="text-5xl font-bold text-white pl-20 mb-4">{title}</h1>
          <div className="flex justify-around items-start">
            <div className="max-w-3xl">
              <p className="text-white text-lg mb-6 leading-relaxed">
                {description}
              </p>
              <div className="flex flex-col items-start gap-2 mt-4">
                <div className="text-white font-bold text-2xl">Ends At:</div>
                <div className="relative w-full max-w-md bg-gray-900 text-white p-4 rounded-md shadow-md">
                  <div className="text-2xl font-semibold">
                    {endDate.toDateString()}
                  </div>
                </div>
              </div>
            </div>
            <img
              src={image}
              alt={title}
              width={450}
              height={300}
              className="rounded-lg ml-8 shadow-lg"
              style={{ aspectRatio: "450/300", objectFit: "cover" }}
            />
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-gray-600 my-8 mx-20"></div>

        {/* Actively Running Projects Section */}
        <section>
          <h2 className="text-3xl font-extrabold text-white mb-6 text-center">Current Running Projects</h2>
          <HoverEffect items={projectItems} />
        </section>
      </main>
    </div>
  );
};

export default Project;
