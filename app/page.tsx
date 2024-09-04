"use client";
import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Button,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import AboutPage from "@/components/AboutPage";
import { ChevronDownIcon } from "@chakra-ui/icons";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

export default function Home() {
  const bgGradient1 = useColorModeValue(
    "linear(to-b, blue.50, teal.50)",
    "linear(to-b, blue.900, teal.900)"
  );
  const bgGradient2 = useColorModeValue(
    "linear(to-b, teal.50, purple.50)",
    "linear(to-b, teal.900, purple.900)"
  );
  const bgGradient3 = useColorModeValue(
    "linear(to-b, purple.50, pink.50)",
    "linear(to-b, purple.900, pink.900)"
  );
  const textColor = useColorModeValue("gray.800", "gray.100");

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box>
      <Box height="100vh" bgGradient={bgGradient1}>
        <HeroSection onLearnMore={() => scrollToSection("features")} />
      </Box>

      <Box bgGradient={bgGradient2} minHeight="100vh" py={20}>
        <Container maxW="container.xl">
          <VStack spacing={16} align="stretch">
            <MotionBox
              id="features"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Features />
            </MotionBox>

            <MotionFlex
              justify="center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Button
                rightIcon={<ChevronDownIcon />}
                colorScheme="blue"
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("about")}
              >
                Learn About Us
              </Button>
            </MotionFlex>
          </VStack>
        </Container>
      </Box>

      <Box bgGradient={bgGradient3} minHeight="100vh" py={20}>
        <Container maxW="container.xl">
          <VStack spacing={16} align="stretch">
            <MotionBox
              id="about"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <AboutPage />
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <VStack spacing={8} textAlign="center" py={16}>
                <Heading as="h2" size="2xl" color={textColor}>
                  Ready to Start Your Journey?
                </Heading>
                <Text fontSize="xl" color={textColor}>
                  Take the first step towards your dream university with
                  personalized guidance.
                </Text>
                <Button
                  as="a"
                  href="/bookaCall"
                  size="lg"
                  colorScheme="blue"
                  px={8}
                  fontWeight="bold"
                >
                  Book Your Free Consultation
                </Button>
              </VStack>
            </MotionBox>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
}
