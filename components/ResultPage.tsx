"use client";

import React from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  Avatar,
  VStack,
  HStack,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaQuoteLeft,
  FaGraduationCap,
  FaBriefcase,
  FaStar,
} from "react-icons/fa";

const MotionBox = motion(Box);

interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Dylan McLish",
    role: "Software Engineer at Lasagna Capital",
    content:
      "KOA Admissions was instrumental in helping me secure my dream job. Their guidance throughout the college application process was invaluable.",
    avatar:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  },
  {
    name: "Aniket Mukherji",
    role: "Analyst at Committee for Responsible Federal Budget",
    content:
      "The personalized approach from KOA Admissions made all the difference. They helped me showcase my strengths and stand out in a competitive applicant pool.",
    avatar:
      "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  },
  {
    name: "Alaa Omer",
    role: "Founder of Marais Market",
    content:
      "Thanks to KOA Admissions, I not only got into my top-choice school but also gained the confidence to pursue my entrepreneurial dreams.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80",
  },
  {
    name: "Yoel Yacob",
    role: "Investment Banking Analyst at Centerview Partners",
    content:
      "The strategies and insights I gained from KOA Admissions continue to benefit me in my professional career. They truly set me up for long-term success.",
    avatar:
      "https://images.unsplash.com/photo-1606513542745-97629752a13b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  },
];

const TestimonialCard: React.FC<Testimonial> = ({
  name,
  role,
  content,
  avatar,
}) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      borderWidth="1px"
      borderRadius="lg"
      p={6}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow="xl"
      position="relative"
      zIndex={1}
    >
      <Icon
        as={FaQuoteLeft}
        w={8}
        h={8}
        color={useColorModeValue("blue.400", "blue.300")}
        position="absolute"
        top={4}
        left={4}
        zIndex={0}
        opacity={0.1}
      />
      <VStack spacing={4} align="stretch">
        <Text fontSize="md" fontStyle="italic">
          {content}
        </Text>
        <HStack spacing={4}>
          <Avatar src={avatar} size="md" />
          <Box>
            <Text fontWeight="bold" fontSize="sm">
              {name}
            </Text>
            <Text
              fontSize="xs"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              {role}
            </Text>
          </Box>
        </HStack>
      </VStack>
    </MotionBox>
  );
};

const ResultsPage: React.FC = () => {
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const headingColor = useColorModeValue("gray.800", "white");
  const subHeadingColor = useColorModeValue("blue.600", "blue.300");

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

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </SimpleGrid>

        <VStack spacing={8} as="section" textAlign="center" mt={20}>
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

export default ResultsPage;
