/**
 * v0 by Vercel.
 * @see https://v0.dev/t/rMj1o1HTxdZ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SVGProps } from "react"
import { JSX } from "react/jsx-runtime"
import Social from "@/components/images/social.jpg"
import SM from "@/components/images/SocialMedia.jpeg"
import bg from "@/components/images/Blog.png"
import { useLocation } from "wouter"

import Project from "../comp/Project";

export default function Component() {
  const projects = [
    {
      title: "sm Exchange",
      image: SM,
    },
    {
      title: "bg Bot",
      image: bg,
    },
  ];

  return (
    <Project
      title="DeFi"
      image={Social}
      description="A Social round description goes here."
      projects={projects}
    />
  );
}