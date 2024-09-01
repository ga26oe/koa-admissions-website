import React, { useState, useEffect } from "react";
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

interface School {
  name: string;
  image: string;
}

const schools: School[] = [
  {
    name: "Harvard University",
    image:
      "https://images.unsplash.com/photo-1579902932390-67ffddfee64a?q=80&w=1846&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Yale University",
    image:
      "https://images.unsplash.com/20/cambridge.JPG?q=80&w=1694&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Princeton University",
    image:
      "https://images.unsplash.com/photo-1623631484725-fef26b75b402?q=80&w=1702&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Massachusetts Institute of Technology",
    image:
      "https://images.unsplash.com/photo-1658604520420-7569f9685b69?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Stanford University",
    image:
      "https://images.unsplash.com/photo-1681782421891-5088f13466ec?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "California Institute of Technology",
    image:
      "https://images.unsplash.com/photo-1698248476242-bfde13928633?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const HeroSection: React.FC = () => {
  const [currentSchool, setCurrentSchool] = useState(0);

  const nextSchool = () => {
    setCurrentSchool((prev) => (prev + 1) % schools.length);
  };

  const prevSchool = () => {
    setCurrentSchool((prev) => (prev - 1 + schools.length) % schools.length);
  };

  const getNextSchool = () => (currentSchool + 1) % schools.length;

  return (
    <Container maxW={"7xl"} overflow="hidden">
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "blue.400",
                zIndex: -1,
              }}
            >
              Get Into Your
            </Text>
            <br />
            <Text as={"span"} color={"blue.400"}>
              Top University Choices
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            Using a proven set of systems, we help 8th - 12th graders get into
            their top choice universities. Through a specialized 1-on-1 approach
            to academic, extracurricular, and professional development,
            well-roundedness is the core of our work.
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <Button
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              colorScheme={"blue"}
              bg={"blue.400"}
              _hover={{ bg: "blue.500" }}
            >
              Get Started
            </Button>
            <Button rounded={"full"} size={"lg"} fontWeight={"normal"} px={6}>
              Learn More
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Box
            position={"relative"}
            height={"350px"}
            width={"full"}
            overflow={"hidden"}
          >
            <IconButton
              aria-label={"Previous School"}
              variant={"ghost"}
              position={"absolute"}
              left={2}
              top={"40%"}
              transform={"translateY(-50%)"}
              zIndex={2}
              icon={<ChevronLeftIcon />}
              onClick={prevSchool}
            />
            <IconButton
              aria-label={"Next School"}
              variant={"ghost"}
              position={"absolute"}
              right={2}
              top={"40%"}
              transform={"translateY(-50%)"}
              zIndex={2}
              icon={<ChevronRightIcon />}
              onClick={nextSchool}
            />
            <Flex alignItems="center" width="110%" ml="-5%">
              <Box width="90%" px={2}>
                <Image
                  alt={`${schools[currentSchool].name} Image`}
                  fit={"cover"}
                  align={"center"}
                  w={"100%"}
                  h={"300px"}
                  src={schools[currentSchool].image}
                  borderRadius="md"
                />
                <Text mt={2} fontWeight="bold" textAlign="center">
                  {schools[currentSchool].name}
                </Text>
              </Box>
              <Box width="20%" onClick={nextSchool} cursor="pointer">
                <Image
                  alt={`${schools[getNextSchool()].name} Image`}
                  fit={"cover"}
                  align={"center"}
                  w={"100%"}
                  h={"200px"}
                  src={schools[getNextSchool()].image}
                  borderRadius="md"
                  opacity={0.5}
                  transition="opacity 0.2s"
                  _hover={{ opacity: 0.8 }}
                />
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
};

export default HeroSection;
