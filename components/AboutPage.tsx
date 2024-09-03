"use client";
import React, { useState } from "react";
import {
  Box,
  VStack,
  Button,
  Flex,
  Divider,
  chakra,
  Grid,
  GridItem,
  Container,
  Heading,
  Stack,
  Text,
  Image,
  SimpleGrid,
  useColorModeValue,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRightIcon } from "@chakra-ui/icons";

// Team Member interface and data (as before)
interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Keletso Rosenberg",
    role: "College Prep Specialist",
    image: "/myTeamImages/keletso.webp",
  },
  {
    name: "Dylan McClish",
    role: "Admissions Consultant",
    image: "/myTeamImages/dylan.webp",
  },
  {
    name: "Tomas Buccini",
    role: "Test Prep Coach",
    image: "/myTeamImages/tomas.webp",
  },
];

// Feature interface
interface FeatureProps {
  heading: string;
  points: string[];
}

const Feature = ({ heading, points }: FeatureProps) => {
  return (
    <GridItem>
      <VStack align="center" spacing={4} mb={6}>
        <chakra.h3
          fontSize="xl"
          fontWeight="600"
          textAlign="center"
          color="blue.600"
        >
          {heading}
        </chakra.h3>
      </VStack>
      <VStack align="stretch" spacing={4}>
        {points.map((point, index) => (
          <Flex key={index} align="flex-start">
            <Box flexShrink={0} mt={0.1} mr={2}>
              <ChevronRightIcon color="blue.700" boxSize={7} />
            </Box>
            <Text dangerouslySetInnerHTML={{ __html: point }} />
          </Flex>
        ))}
      </VStack>
    </GridItem>
  );
};

const MotionBox = motion(Box);

const TeamMemberCard: React.FC<TeamMember> = ({ name, role, image }) => (
  <MotionBox
    maxW={"300px"}
    w={"full"}
    bg={useColorModeValue("white", "gray.900")}
    boxShadow={"2xl"}
    rounded={"md"}
    p={6}
    overflow={"hidden"}
    textAlign={"center"}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.5 }}
  >
    <Box h={"340px"} bg={"gray.100"} mt={-6} mx={-6} mb={6} pos={"relative"}>
      <Image
        src={image}
        alt={`Picture of ${name}`}
        objectFit="cover"
        w="100%"
        h="100%"
      />
    </Box>
    <Heading fontSize={"2xl"} fontFamily={"body"}>
      {name}
    </Heading>
    <Text fontWeight={600} color={"gray.500"} mb={4}>
      {role}
    </Text>
  </MotionBox>
);

export default function CallToActionWithTeamAndFeatures() {
  const [showTeam, setShowTeam] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);

  return (
    <Container maxW={"7xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          About{" "}
          <Text as={"span"} color={"blue.400"}>
            <br />
            KOA Admissions
          </Text>
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"}>
          We are a student-led boutique college consulting service, dedicated to
          guiding ambitious high school students towards securing spots at their
          top-choice universities.
        </Text>
        <Stack spacing={6} direction={"row"}>
          <Button
            rounded={"full"}
            px={6}
            colorScheme={"orange"}
            bg={"orange.400"}
            _hover={{ bg: "orange.500" }}
          >
            Get started
          </Button>

          <Button
            rounded={"full"}
            px={6}
            onClick={() => setShowTeam(!showTeam)}
          >
            {showTeam ? "Hide Team" : "Our Team"}
          </Button>
          <Button
            rounded={"full"}
            px={6}
            onClick={() => setShowFeatures(!showFeatures)}
          >
            {showFeatures ? "Hide Details" : "Learn more"}
          </Button>
        </Stack>

        <AnimatePresence>
          {showTeam && (
            <MotionBox
              width="full"
              mt={10}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                {teamMembers.map((member, index) => (
                  <TeamMemberCard key={index} {...member} />
                ))}
              </SimpleGrid>
            </MotionBox>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showFeatures && (
            <MotionBox
              as={Container}
              maxW="7xl"
              mt={14}
              p={4}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <Grid
                templateColumns={{
                  base: "repeat(1, 1fr)",
                  sm: "repeat(2, 1fr)",
                  md: "repeat(2, 1fr)",
                }}
                gap={4}
              >
                <GridItem colSpan={2}>
                  <VStack alignItems="center" spacing="px">
                    <chakra.h2 fontSize="3xl" fontWeight="700" color="blue.400">
                      Our Approach Focuses on One on One Mentoring
                    </chakra.h2>
                  </VStack>
                </GridItem>
                <GridItem></GridItem>
              </Grid>
              <Divider mt={12} mb={12} />
              <Grid
                templateColumns={{
                  base: "repeat(1, 1fr)",
                  sm: "repeat(2, 1fr)",
                  md: "repeat(4, 1fr)",
                }}
                gap={{ base: "8", sm: "12", md: "16" }}
              >
                <Feature
                  heading={"Personalized Strategy"}
                  points={[
                    "Tailored approach for <strong>each student</strong>",
                    "Focus on <strong>individual strengths</strong> and weaknesses",
                  ]}
                />
                <Feature
                  heading={"Expert Guidance"}
                  points={[
                    "Learn from advisors with <strong>firsthand experience</strong>",
                    "Prepare for <strong>college interviews</strong>",
                  ]}
                />
                <Feature
                  heading={"Comprehensive Support"}
                  points={[
                    "<strong>Essay brainstorming</strong>, editing, and revision",
                    "<strong>Extracurricular activity</strong> planning",
                    "<strong>Test prep</strong> recommendations",
                  ]}
                />
                <Feature
                  heading={"Proven Results"}
                  points={[
                    "<strong>High acceptance rates</strong> to top universities",
                    "Increased <strong>scholarship opportunities</strong>",
                  ]}
                />
              </Grid>
            </MotionBox>
          )}
        </AnimatePresence>
      </Stack>
    </Container>
  );
}
