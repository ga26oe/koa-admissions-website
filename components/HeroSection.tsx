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
      width="100px"
      height="100px"
      objectFit="contain"
      onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        const target = e.target as HTMLImageElement;
        target.onerror = null;
        target.src = "/placeholder-logo.png";
      }}
    />
  ));

  return (
    <Flex direction="column" height="100%" justify="space-around">
      <Container
        maxW="container.xl"
        flex="1"
        display="flex"
        alignItems="center"
      >
        <VStack spacing={8} align="flex-start" width="100%">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Heading
              fontWeight={700}
              fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
              lineHeight="110%"
            >
              Get Into Your <br />
              <Text as="span" color="blue.400">
                Top University Choices
              </Text>
            </Heading>
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Text
              fontSize="xl"
              color={useColorModeValue("gray.600", "gray.300")}
            >
              Expert guidance to navigate the competitive admissions process and
              secure your place at prestigious institutions.
            </Text>
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Button
              rightIcon={<ChevronDownIcon />}
              colorScheme="blue"
              size="lg"
              onClick={onLearnMore}
            >
              Learn More
            </Button>
          </MotionBox>
        </VStack>
      </Container>
      <Box width="full" overflow="hidden" py={12}>
        <LogoScroll logos={logos} direction="left" speed="normal" />
      </Box>
    </Flex>
  );
};

export default HeroSection;
