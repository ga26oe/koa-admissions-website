import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Icon,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaChartLine,
  FaHandshake,
  FaLightbulb,
} from "react-icons/fa";
import { IconType } from "react-icons";

const MotionBox = motion(Box);

interface FeatureProps {
  title: string;
  text: string;
  icon: React.ReactElement;
}

const Feature: React.FC<FeatureProps> = ({ title, text, icon }) => {
  const iconBgColor = useColorModeValue("blue.400", "blue.200");
  const iconColor = useColorModeValue("white", "gray.800");
  const titleColor = useColorModeValue("gray.800", "white");

  return (
    <VStack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={iconColor}
        rounded={"full"}
        bg={iconBgColor}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600} color={titleColor}>
        {title}
      </Text>
      <Text
        color={useColorModeValue("gray.600", "gray.300")}
        textAlign="center"
      >
        {text}
      </Text>
    </VStack>
  );
};

const AboutPage: React.FC = () => {
  const bgGradient = useColorModeValue(
    "linear(to-b, purple.50, pink.50)",
    "linear(to-b, gray.700, gray.600)"
  );
  const textColor = useColorModeValue("gray.600", "gray.300");
  const headingColor = useColorModeValue("gray.800", "white");
  const containerBgColor = useColorModeValue(
    "linear-gradient(rgba(255, 255, 255, 0.5), rgba(240, 240, 255, 0.5))",
    "linear-gradient(rgba(55, 65, 80, 0.35), rgba(75, 85, 100, 0.35))"
  );

  const features: FeatureProps[] = [
    {
      icon: <Icon as={FaGraduationCap} w={10} h={10} />,
      title: "Expert Guidance",
      text: "Our team consists of graduates from top universities who understand the intricacies of the admissions process.",
    },
    {
      icon: <Icon as={FaChartLine} w={10} h={10} />,
      title: "Proven Track Record",
      text: "We have successfully helped numerous students gain admission to their dream schools.",
    },
    {
      icon: <Icon as={FaHandshake} w={10} h={10} />,
      title: "Personalized Approach",
      text: "We tailor our strategies to each student's unique strengths, goals, and aspirations.",
    },
    {
      icon: <Icon as={FaLightbulb} w={10} h={10} />,
      title: "Holistic Development",
      text: "We focus on personal growth, not just application strategies, to ensure long-term success.",
    },
  ];

  return (
    <Box bgGradient={bgGradient} py={20}>
      <Container maxW={"7xl"}>
        <VStack spacing={16}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Box
              bgImage={containerBgColor}
              p={8}
              rounded={"xl"}
              backdropFilter="blur(10px)"
              borderWidth="1px"
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <Heading
                fontWeight={800}
                fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
                lineHeight={"110%"}
                textAlign="center"
                mb={6}
                color={headingColor}
              >
                About KOA Admissions
              </Heading>
              <Text
                color={textColor}
                fontSize={"xl"}
                textAlign="center"
                maxW={"3xl"}
                mx="auto"
              >
                Empowering dreams, shaping futures
              </Text>
            </Box>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
              {features.map((feature, index) => (
                <Feature key={index} {...feature} />
              ))}
            </SimpleGrid>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Box
              bgImage={containerBgColor}
              p={10}
              rounded={"xl"}
              shadow={"lg"}
              maxW={"4xl"}
              mx="auto"
              position="relative"
              backdropFilter="blur(10px)"
              borderWidth="1px"
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <Text
                fontSize={"lg"}
                mb={6}
                color={headingColor}
                lineHeight={1.8}
              >
                We are a team of dedicated professionals committed to helping
                students achieve their dreams of attending top universities. Our
                personalized approach, similar background, and deep
                understanding of the admissions process set us apart. We went
                through the process not so long ago!
              </Text>
              <Text fontSize={"lg"} color={headingColor} lineHeight={1.8}>
                Whether you're aiming for Ivy League schools or other top-tier
                universities, we're here to support you every step of the way.
                Let's work together to turn your dreams into reality.
              </Text>
            </Box>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  );
};

export default AboutPage;
