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
import { FaArrowRight } from "react-icons/fa";

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
  const buttonBgColor = useColorModeValue("blue.400", "blue.200");
  const buttonTextColor = useColorModeValue("white", "gray.800");
  const bgColor = useColorModeValue("blue.50", "blue.900");

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -25; // Adjust this value to fine-tune the scroll position
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <Box>
      <Box height="100vh" bgGradient={bgGradient1}>
        <HeroSection onLearnMore={() => scrollToSection("features")} />
      </Box>

      <Box
        id="features"
        bgGradient={bgGradient2}
        minHeight="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Container maxW="container.xl">
          <VStack spacing={16} align="stretch">
            <MotionBox
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

      <Box id="about" bgGradient={bgGradient3} minHeight="100vh" py={20}>
        <Container maxW="container.xl">
          <VStack spacing={16} align="stretch">
            <MotionBox
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
              bg={bgColor}
              py={20}
              px={4}
            >
              <Box
                maxW="4xl"
                mx="auto"
                bg={useColorModeValue("white", "gray.800")}
                rounded="2xl"
                shadow="xl"
                overflow="hidden"
              >
                <VStack spacing={8} textAlign="center" py={16} px={8}>
                  <Heading
                    as="h2"
                    fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                    fontWeight="bold"
                    color={textColor}
                    lineHeight="shorter"
                  >
                    Ready to Start Your
                    <Box
                      as="span"
                      bgGradient="linear(to-r, blue.400, purple.500)"
                      bgClip="text"
                    >
                      {" College Application "}
                    </Box>
                    With Us?
                  </Heading>
                  <Text
                    fontSize={{ base: "lg", md: "xl" }}
                    color={textColor}
                    maxW="2xl"
                  >
                    Take the first step towards attending your dream university
                    with our personalized guidance. Let's make your aspirations
                    a reality.
                  </Text>
                  <Button
                    as="a"
                    href="/bookaCall"
                    size="lg"
                    bg={buttonBgColor}
                    color={buttonTextColor}
                    px={8}
                    py={6}
                    fontWeight="bold"
                    rounded="full"
                    _hover={{
                      transform: "translateY(-2px)",
                      boxShadow: "lg",
                    }}
                    rightIcon={<FaArrowRight />}
                  >
                    Book an Initial Call
                  </Button>
                </VStack>
              </Box>
            </MotionBox>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
}
