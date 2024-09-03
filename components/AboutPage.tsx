"use client";
import React, { useState } from "react";
import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Box,
  Image,
  SimpleGrid,
  useColorModeValue,
  keyframes,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

// Define the type for a team member
interface TeamMember {
  name: string;
  role: string;
  image: string;
}

// Team member data (replace with your actual team data)
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

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

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
    <Box h={"350px"} bg={"gray.100"} mt={-6} mx={-6} mb={6} pos={"relative"}>
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

export default function CallToActionWithTeam() {
  const [showTeam, setShowTeam] = useState(false);

  return (
    <Container maxW={"5xl"}>
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
          <Button rounded={"full"} px={6}>
            Learn more
          </Button>
          <Button
            rounded={"full"}
            px={6}
            onClick={() => setShowTeam(!showTeam)}
          >
            {showTeam ? "Hide Team" : "Our Team"}
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
      </Stack>
    </Container>
  );
}
