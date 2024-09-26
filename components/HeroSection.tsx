import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Button,
  Flex,
  useColorModeValue,
  chakra,
} from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import { ChevronDownIcon } from "@chakra-ui/icons";
import LogoScroll from "./LogoScroll";

const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});

interface HeroSectionProps {
  onLearnMore: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onLearnMore }) => {
  const logoFiles = [
    "/universityLogos/Caltech_Logo.svg",
    "/universityLogos/Harvard_University_logo.svg",
    "/universityLogos/MIT_logo.svg",
    "/universityLogos/Princeton_text_logo.svg",
    "/universityLogos/Yale_University_logo.svg",
    "/universityLogos/Stanford_wordmark_(2012).svg",
  ];

  const logoShadow = useColorModeValue(
    "none",
    "0 0 8px rgba(255, 255, 255, 0.5)"
  );

  const logos = logoFiles.map((file, index) => (
    <Box
      key={index}
      as="img"
      src={file}
      alt={`University logo ${index + 1}`}
      width="100px"
      height="100px"
      objectFit="contain"
      filter={`drop-shadow(${logoShadow})`}
      transition="filter 0.3s ease"
      onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        const target = e.target as HTMLImageElement;
        target.onerror = null;
        target.src = "/placeholder-logo.png";
      }}
    />
  ));

  return (
    <Flex direction="column" minHeight="100vh" justify="center">
      <Container maxW="container.xl" py={16}>
        <VStack spacing={12} align="stretch" width="100%">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Heading
              fontWeight={700}
              fontSize={{ base: "5xl", sm: "6xl", md: "7xl" }}
              lineHeight="110%"
            >
              Get Into Your <br />
              <Text as="span" color="blue.400" mt={4} display="inline-block">
                Top University Choices
              </Text>
            </Heading>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <LogoScroll logos={logos} direction="left" speed="normal" />
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Text
              fontSize="2xl"
              color={useColorModeValue("gray.600", "gray.300")}
              maxWidth="80%"
            >
              Expert guidance to navigate the competitive admissions process and
              secure your place at prestigious institutions.
            </Text>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Button
              rightIcon={<ChevronDownIcon />}
              colorScheme="blue"
              size="lg"
              onClick={onLearnMore}
              px={8}
              py={6}
              fontSize="xl"
            >
              Learn More
            </Button>
          </MotionBox>
        </VStack>
      </Container>
    </Flex>
  );
};

export default HeroSection;
