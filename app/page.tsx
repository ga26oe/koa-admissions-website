"use client";
import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box minHeight="calc(100vh - 60px)">
      {" "}
      {/* Adjust 60px to match your navbar height */}
      <HeroSection />
      <Features />
    </Box>
  );
}
