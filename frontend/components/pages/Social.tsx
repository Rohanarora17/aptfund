import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Social from "@/components/images/social.jpg";
import SM from "@/components/images/SocialMedia.jpeg"
import Blog from "@/components/images/Blog.png"
import { useLocation } from "wouter";
import { JSX } from "react/jsx-runtime";
import Project from "../comp/Project";

export default function Component() {
  const projects = [
    {
      title: "Web 3 social media",
      image: SM,
      id: "socialmedia"
        
    },
    {
      title: "Blogging website",
      image: Blog,
      id: "blog"
    },
  ];

  return (
    <Project
      title="Gaming"
      image={Social}
      description="Welcome to the Social Media Track! Here, we empower creators and projects to harness the full
      potential of decentralized social media platforms. Dive into innovative crowdfunding campaigns that levarage web3
      technology to build vibrant communities and amplify their impact. Connect with passionate supporters, share your
      vision, and drive your project forward with the next generation of social media tools. Discover how blockchain can
       transform the way you engage and grow your audience!"
      projects={projects}
      category="social"
    />
  );
}
