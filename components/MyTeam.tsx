import React from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  VStack,
  Container,
  SimpleGrid,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { User, Briefcase, Award } from "lucide-react";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Keletso Rosenberg",
    role: "College Prep Specialist",
    description:
      "Jane brings over 15 years of experience in education and technology. Her vision drives our mission to revolutionize college admissions counseling.",
    image: "/myTeamImages/keletso.webp",
  },
  {
    name: "Dylan McCLish",
    role: "Admissions Consultant",
    description:
      "John's background in AI and data science helps us deliver personalized, data-driven admissions strategies for each student.",
    image: "/myTeamImages/dylan.webp",
  },
  {
    name: "Tomas Buccini",
    role: "Test Prep Coach",
    description:
      "Emily's expertise in operations and her own journey through the Ivy League admissions process inform our practical, results-oriented approach.",
    image: "/myTeamImages/tomas.webp",
  },
];

const TeamMemberCard: React.FC<TeamMember> = ({
  name,
  role,
  description,
  image,
}) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      rounded={"xl"}
      overflow={"hidden"}
      position="relative"
    >
      <Box h="200px" overflow="hidden">
        <Image
          src={image}
          alt={name}
          objectFit="cover"
          w="100%"
          h="100%"
          transition="0.3s ease-in-out"
          _hover={{ transform: "scale(1.05)" }}
        />
      </Box>
      <VStack spacing={4} align={"start"} p={6}>
        <Heading fontSize={"xl"} fontWeight={500}>
          {name}
        </Heading>
        <Flex align="center">
          <Briefcase
            size={16}
            color={useColorModeValue("blue.500", "blue.300")}
          />
          <Text
            ml={2}
            color={useColorModeValue("blue.500", "blue.300")}
            fontWeight={600}
            fontSize={"sm"}
          >
            {role}
          </Text>
        </Flex>
        <Text
          color={useColorModeValue("gray.600", "gray.400")}
          fontSize="sm"
          noOfLines={3}
        >
          {description}
        </Text>
      </VStack>
    </MotionBox>
  );
};

const MyTeamPage: React.FC = () => {
  return (
    <Box bg={useColorModeValue("gray.50", "gray.900")} minH={"100vh"} py={20}>
      <Container maxW={"5xl"}>
        <MotionFlex
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          direction={"column"}
          align={"center"}
          mb={16}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
            lineHeight={"110%"}
            textAlign={"center"}
          >
            Meet Our{" "}
            <Text as={"span"} color={"blue.400"}>
              Visionary Team
            </Text>
          </Heading>
          <Text
            color={useColorModeValue("gray.600", "gray.400")}
            maxW={"2xl"}
            fontSize={"lg"}
            textAlign={"center"}
            mt={4}
          >
            United by a shared vision, we're committed to revolutionizing the
            college admissions process.
          </Text>
        </MotionFlex>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </SimpleGrid>

        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          mt={20}
          textAlign={"center"}
        >
          <Flex justify="center" align="center" mb={4}>
            <Award
              size={24}
              color={useColorModeValue("blue.500", "blue.300")}
            />
            <Text fontSize={"2xl"} fontWeight={"bold"} ml={2}>
              Join Us in Shaping the Future
            </Text>
          </Flex>
          <Text color={useColorModeValue("gray.600", "gray.400")}>
            Together, we're empowering the next generation of leaders.
          </Text>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default MyTeamPage;
