import React from "react";
import Image from "next/image";
import { Box, Container, Heading, Text, Stack } from "@chakra-ui/react";
import LogoScroll from "./LogoScroll";

const HeroSection: React.FC = () => {
  const logoFiles = [
    "/universityLogos/Caltech_Logo.svg",
    "/universityLogos/Cornell_University_logo.svg/",
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
    />
  ));

  return (
    <Container maxW="full" p={0}>
      <Stack
        textAlign="center"
        align="center"
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight="110%"
        >
          Get Into Your <br />
          <Text as="span" color="blue.400">
            Top University Choices
          </Text>
        </Heading>
        <Text color="gray.500" maxW="3xl">
          Using a proven set of systems, we help 8th - 12th graders get into
          their top choice universities. Through a specialized 1on1 approach to
          academic, extracurricular, and professional development,
          well-roundedness is the core of our work.
        </Text>
        <LogoScroll logos={logos} direction="left" speed="slow" />
      </Stack>
    </Container>
  );
};

export default HeroSection;
