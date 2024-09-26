"use client";
import { useColorModeValue } from "@chakra-ui/react";
import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import AboutPage from "@/components/AboutPage";
import { Box, Container, VStack, Button, Flex, chakra } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { FaArrowRight } from "react-icons/fa";

const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});

const MotionFlex = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
  baseStyle: {
    display: "flex",
  },
});

export default function Home() {
  const bgGradient1 = useColorModeValue(
    "linear(to-b, blue.50, teal.50)",
    "linear(to-b, gray.900, gray.800)"
  );
  const bgGradient2 = useColorModeValue(
    "linear(to-b, teal.50, purple.50)",
    "linear(to-b, gray.800, gray.700)"
  );
  const bgGradient3 = useColorModeValue(
    "linear(to-b, purple.50, pink.50)",
    "linear(to-b, gray.700, gray.600)"
  );
  const textColor = useColorModeValue("gray.800", "gray.200");
  const buttonBgColor = useColorModeValue("blue.500", "blue.400");
  const buttonTextColor = useColorModeValue("white", "gray.900");
  const bgColor = useColorModeValue("blue.50", "gray.900");
  const cardBgColor = useColorModeValue("white", "gray.800");
  const cardTextColor = useColorModeValue("gray.800", "gray.200");
  const containerBgColor = useColorModeValue(
    "linear-gradient(rgba(255, 255, 255, 0.5), rgba(240, 240, 255, 0.5))", // Updated light mode
    "linear-gradient(rgba(55, 65, 80, 0.35), rgba(75, 85, 100, 0.35))" // dark mode
  );

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -25;
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
            >
              <Features />
            </MotionBox>

            <MotionFlex initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
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
            >
              <AboutPage />
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              bgImage={bgColor}
              py={20}
              px={4}
              borderRadius="lg"
              backdropFilter="blur(10px)"
            >
              <Box
                maxW="4xl"
                mx="auto"
                bg={useColorModeValue(
                  "rgba(255, 255, 255, 0.2)",
                  "rgba(45, 55, 72, 0.8)"
                )}
                rounded="2xl"
                shadow="xl"
                overflow="hidden"
                borderWidth="1px"
                borderColor={useColorModeValue("gray.200", "gray.700")}
              >
                <VStack spacing={8} textAlign="center" py={16} px={8}>
                  <MotionBox
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <Box
                      as="h2"
                      fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                      fontWeight="bold"
                      color={cardTextColor}
                      lineHeight="shorter"
                    >
                      Ready to Start Your
                      <Box
                        as="span"
                        color={useColorModeValue("blue.500", "blue.300")}
                      >
                        {" College Application "}
                      </Box>
                      With Us?
                    </Box>
                  </MotionBox>
                  <MotionBox
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <Box
                      fontSize={{ base: "lg", md: "xl" }}
                      color={cardTextColor}
                      maxW="2xl"
                    >
                      Take the first step towards attending your dream
                      university with our personalized guidance. Let's make your
                      aspirations a reality.
                    </Box>
                  </MotionBox>
                  <MotionBox
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
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
                  </MotionBox>
                </VStack>
              </Box>
            </MotionBox>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
}
