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
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "@chakra-ui/icons";
import LogoScroll from "./LogoScroll";

const MotionBox = motion(Box);

interface HeroSectionProps {
  onLearnMore: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onLearnMore }) => {
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
    <Box
      key={index}
      as="img"
      src={file}
      alt={`University logo ${index + 1}`}
      width="120px"
      height="120px"
      objectFit="contain"
      mx={4}
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
            transition={{ duration: 0.8 }}
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
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Box
              width="100vw"
              position="relative"
              left="50%"
              right="50%"
              marginLeft="-50vw"
              marginRight="-50vw"
              overflow="hidden"
              py={6}
            >
              <LogoScroll logos={logos} direction="left" speed="normal" />
            </Box>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
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
            transition={{ delay: 0.6, duration: 0.8 }}
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
