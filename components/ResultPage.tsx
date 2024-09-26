"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  VStack,
  HStack,
  IconButton,
  useColorModeValue,
  Container,
  Icon,
  chakra,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { motion, AnimatePresence, isValidMotionProp } from "framer-motion";
import {
  FaStar,
  FaGraduationCap,
  FaBriefcase,
  FaPlay,
  FaPause,
} from "react-icons/fa";

const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});

interface Testimonial {
  name: string;
  role: string;
  content: string;
  statistic: string;
  statisticLabel: string;
  colleges: string[];
  videoUrl: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Aniket Mukherjee",
    role: "Princeton 2024 Graduate",
    content:
      "With KOA Admissions' guidance, I gained a deep understanding of the application process and was able to showcase my strengths effectively.",
    statistic: "98%",
    statisticLabel: "Acceptance rate to top-choice university",
    colleges: ["Harvard", "MIT", "Stanford"],
    videoUrl: "/Testimonials/AniketInterview.mp4",
  },
  {
    name: "Connor ",
    role: "Pre-Med Student",
    content:
      "KOA Admissions helped me craft a compelling narrative that set me apart in a highly competitive applicant pool.",
    statistic: "100%",
    statisticLabel: "Scholarship offers received",
    colleges: ["Johns Hopkins", "Duke", "Yale"],
    videoUrl: "/Testimonials/Connor Interview.mp4",
  },
  {
    name: "Dylan",
    role: "Engineering Student",
    content:
      "The personalized strategy KOA developed for me was crucial in securing admissions to my dream schools.",
    statistic: "5",
    statisticLabel: "Ivy League acceptances",
    colleges: ["Princeton", "Cornell", "UPenn"],
    videoUrl: "/Testimonials/Dylan Interview.mp4",
  },
  {
    name: "Emily Rodriguez",
    role: "Business Major",
    content:
      "KOA's expertise in essay writing and interview preparation gave me the confidence to excel in every aspect of my applications.",
    statistic: "90%",
    statisticLabel: "Increase in test scores",
    colleges: ["Wharton", "Berkeley", "NYU"],
    videoUrl: "/Testimonials/SamInterview.mp4",
  },
  {
    name: "David Kim",
    role: "Liberal Arts Student",
    content:
      "Thanks to KOA Admissions, I not only got into my top-choice school but also gained valuable insights about my academic and career goals.",
    statistic: "3",
    statisticLabel: "Leadership positions secured",
    colleges: ["Amherst", "Williams", "Swarthmore"],
    videoUrl: "/Testimonials/Yoel Interview.mp4",
  },
];

const TestimonialCard: React.FC<Testimonial & { isActive: boolean }> = ({
  name,
  role,
  content,
  statistic,
  statisticLabel,
  colleges,
  videoUrl,
  isActive,
}) => {
  const bgColor = useColorModeValue("blue.600", "blue.800");
  const textColor = useColorModeValue("white", "gray.100");
  const statisticBgColor = useColorModeValue("white", "gray.800");
  const statisticTextColor = useColorModeValue("blue.600", "blue.300");
  const videoRef = useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (isActive && videoRef.current) {
      videoRef.current.play();
    } else if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isActive]);

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      bg={bgColor}
      rounded="xl"
      overflow="hidden"
      shadow="2xl"
      h={{ base: "auto", md: "400px" }}
    >
      <Box
        w={{ base: "full", md: "50%" }}
        h={{ base: "300px", md: "full" }}
        position="relative"
      >
        <video
          ref={videoRef}
          src={videoUrl}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          muted
          loop
          playsInline
        />
      </Box>
      <VStack
        align="flex-start"
        justify="center"
        p={8}
        spacing={6}
        w={{ base: "full", md: "50%" }}
      >
        <Text fontSize="xl" fontWeight="medium" color={textColor}>
          "{content}"
        </Text>
        <Box>
          <Text fontWeight="bold" color={textColor}>
            {name}
          </Text>
          <Text color={textColor} opacity={0.8}>
            {role}
          </Text>
        </Box>
        <HStack spacing={4}>
          {colleges.map((college) => (
            <Box
              key={college}
              bg="gray.100"
              rounded="full"
              p={2}
              w="40px"
              h="40px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text fontSize="xs" fontWeight="bold" color="gray.800">
                {college.slice(0, 2)}
              </Text>
            </Box>
          ))}
        </HStack>
        <Box bg={statisticBgColor} p={4} rounded="md" w="full">
          <Text
            fontSize="4xl"
            fontWeight="bold"
            color={statisticTextColor}
            textAlign="center"
          >
            {statistic}
          </Text>
          <Text
            fontSize="sm"
            fontWeight="medium"
            color={statisticTextColor}
            textAlign="center"
          >
            {statisticLabel}
          </Text>
        </Box>
      </VStack>
    </Flex>
  );
};

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const headingColor = useColorModeValue("gray.800", "white");
  const subHeadingColor = useColorModeValue("blue.600", "blue.300");

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <Box bg={bgColor} minH="100vh" py={20}>
      <Container maxW="6xl">
        <VStack spacing={12} as="section" textAlign="center" mb={16}>
          <Icon
            as={FaStar}
            w={12}
            h={12}
            color={useColorModeValue("blue.500", "blue.300")}
          />
          <Heading
            as="h1"
            fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
            fontWeight="bold"
            color={headingColor}
            letterSpacing="tight"
          >
            Our Success Stories
          </Heading>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color={subHeadingColor}
            maxW="2xl"
          >
            Discover how KOA Admissions has helped students achieve their dreams
            and launch successful careers.
          </Text>
        </VStack>

        <Box position="relative" mb={16}>
          <AnimatePresence mode="wait">
            <MotionBox
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
            >
              <TestimonialCard
                {...testimonials[currentIndex]}
                isActive={true}
              />
            </MotionBox>
          </AnimatePresence>

          <IconButton
            aria-label="Previous testimonial"
            icon={<ChevronLeftIcon />}
            position="absolute"
            left="-16px"
            top="50%"
            transform="translateY(-50%)"
            onClick={prevTestimonial}
            colorScheme="blue"
            rounded="full"
            size="lg"
          />
          <IconButton
            aria-label="Next testimonial"
            icon={<ChevronRightIcon />}
            position="absolute"
            right="-16px"
            top="50%"
            transform="translateY(-50%)"
            onClick={nextTestimonial}
            colorScheme="blue"
            rounded="full"
            size="lg"
          />
        </Box>

        <HStack justify="center" mb={16} spacing={4}>
          {testimonials.map((_, index) => (
            <Box
              key={index}
              w={3}
              h={3}
              rounded="full"
              bg={index === currentIndex ? "blue.500" : "gray.300"}
            />
          ))}
        </HStack>

        <VStack spacing={8} as="section" textAlign="center">
          <Heading
            as="h2"
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="semibold"
            color={headingColor}
          >
            Join Our Community of Achievers
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color={useColorModeValue("gray.600", "gray.400")}
            maxW="2xl"
          >
            Our students have gone on to attend top universities and secure
            prestigious positions across various industries.
          </Text>
          <HStack spacing={8} justify="center" wrap="wrap">
            <VStack>
              <Icon
                as={FaGraduationCap}
                w={10}
                h={10}
                color={useColorModeValue("blue.500", "blue.300")}
              />
              <Text fontWeight="bold" fontSize="2xl">
                95%
              </Text>
              <Text fontSize="sm">Admission Rate</Text>
            </VStack>
            <VStack>
              <Icon
                as={FaBriefcase}
                w={10}
                h={10}
                color={useColorModeValue("blue.500", "blue.300")}
              />
              <Text fontWeight="bold" fontSize="2xl">
                80%
              </Text>
              <Text fontSize="sm">Employment Rate</Text>
            </VStack>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default TestimonialSlider;
