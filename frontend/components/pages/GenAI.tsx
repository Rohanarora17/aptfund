import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AI from "@/components/images/genai5.png";
import textai from "@/components/images/textai3.webp";
import imageai from "@/components/images/imageai.png";
import { useLocation } from "wouter";
import { JSX } from "react/jsx-runtime";
import Project from "../comp/Project";


export default function Component() {
  const projects = [
    {
      title: "TextAI Generator",
      image: textai,
      id: "textai"
    },
    {
      title: "ImageAI Generator",
      image: imageai,
      id: "imageai"
    },
  ];

  return (
    <Project
      title="GenAI"
      image={AI}
      description="Generative AI is a branch of artificial intelligence that creates new content, like text, images, or music,
      by learning from large datasets. It utilizes models like GPT and GANs to mimic human-like creativity
      transforming industries through automated content creation and personalized experiences. As it advances, generative AI is set
      to reshape the future of art, design, and communication."
      projects={projects}
      category="GenAI"
    />
  );
}
