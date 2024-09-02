import React from "react";
import Image from "next/image";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Spacer,
} from "@chakra-ui/react";
import LogoScroll from "./LogoScroll";

const HeroSection: React.FC = () => {
  const logoFiles = [
    "/universityLogos/Caltech_Logo.svg",
    "/universityLogos/Cornell_University_logo.svg",
    "/universityLogos/Harvard_University_logo.svg",
    "/universityLogos/MIT_logo.svg",
    "/universityLogos/Princeton_text_logo.svg",
    "/universityLogos/Yale_University_logo.svg",
    "/universityLogos/Stanford_wordmark_(2012).svg",
  ];

  const logos = logoFiles.map((file, index) => (
    <Image
      key={index}
      src={file}
      alt={`University logo ${index + 1}`}
      width={100}
      height={100}
      objectFit="contain"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.onerror = null;
        target.src = "/placeholder-logo.png";
      }}
    />
  ));

  return (
    <Container maxW="full" p={0}>
      <VStack spacing={24} py={32} px={8}>
        <VStack spacing={12} textAlign="center" maxW="5xl">
          <Heading
            fontWeight={600}
            fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
            lineHeight="110%"
          >
            Get Into Your <br />
            <Text as="span" color="blue.400">
              Top University Choices
            </Text>
          </Heading>
          {/*           <Text
            fontSize={{ base: "xl", md: "2xl" }}
            color="gray.500"
            maxW="4xl"
          >
            Using a proven set of systems, we help 8th - 12th graders get into
            their top choice universities. Through a specialized 1on1 approach
            to academic, extracurricular, and professional development,
            well-roundedness is the core of our work.
          </Text> */}
        </VStack>
        <Box width="full" overflow="hidden" py={4}>
          <LogoScroll logos={logos} direction="left" speed="normal" />
        </Box>
      </VStack>
    </Container>
  );
};

export default HeroSection;
