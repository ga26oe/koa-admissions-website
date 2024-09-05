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
  Icon,
  Circle,
  Divider,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { User, Briefcase, Award, Star, Zap, Target } from "lucide-react";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  icon: React.ElementType;
}

const teamMembers: TeamMember[] = [
  {
    name: "Keletso Rosenberg",
    role: "College Prep Specialist",
    description:
      "Keletso brings over 15 years of experience in education and technology. Her vision drives our mission to revolutionize college admissions counseling.",
    image: "/myTeamImages/keletso.webp",
    icon: Star,
  },
  {
    name: "Dylan McCLish",
    role: "Admissions Consultant",
    description:
      "Dylan's background in AI and data science helps us deliver personalized, data-driven admissions strategies for each student.",
    image: "/myTeamImages/dylan.webp",
    icon: Zap,
  },
  {
    name: "Tomas Buccini",
    role: "Test Prep Coach",
    description:
      "Tomas's expertise in operations and his own journey through the Ivy League admissions process inform our practical, results-oriented approach.",
    image: "/myTeamImages/tomas.webp",
    icon: Target,
  },
];

const TeamMemberCard: React.FC<TeamMember> = ({
  name,
  role,
  description,
  image,
  icon,
}) => {
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.600", "gray.400");
  const iconBgColor = useColorModeValue("blue.50", "blue.900");
  const iconColor = useColorModeValue("blue.500", "blue.200");

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      bg={bgColor}
      boxShadow="xl"
      rounded="2xl"
      overflow="hidden"
      position="relative"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "4px",
        bgGradient: "linear(to-r, blue.400, teal.500)",
      }}
    >
      <Box h="250px" overflow="hidden">
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
      <VStack spacing={4} align="start" p={6}>
        <Flex justify="space-between" align="center" width="100%">
          <Heading fontSize="2xl" fontWeight={600}>
            {name}
          </Heading>
          <Circle size="40px" bg={iconBgColor}>
            <Icon as={icon} boxSize={5} color={iconColor} />
          </Circle>
        </Flex>
        <Flex align="center">
          <Briefcase size={16} color={iconColor} />
          <Text ml={2} color={iconColor} fontWeight={600} fontSize="sm">
            {role}
          </Text>
        </Flex>
        <Divider />
        <Text color={textColor} fontSize="sm" noOfLines={4}>
          {description}
        </Text>
      </VStack>
    </MotionBox>
  );
};

const MyTeamPage: React.FC = () => {
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const textColor = useColorModeValue("gray.600", "gray.400");

  return (
    <Box bg={bgColor} minH="100vh" py={20}>
      <Container maxW="6xl">
        <MotionFlex
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          direction="column"
          align="center"
          mb={16}
        >
          <Heading
            fontWeight={800}
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
            lineHeight="110%"
            textAlign="center"
            bgGradient="linear(to-r, blue.400, teal.500)"
            bgClip="text"
          >
            Meet Our Visionary Team
          </Heading>
          <Text
            color={textColor}
            maxW="2xl"
            fontSize="xl"
            textAlign="center"
            mt={4}
          >
            United by a shared vision, we're committed to revolutionizing the
            college admissions process and empowering the next generation of
            leaders.
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
          textAlign="center"
        >
          <Flex justify="center" align="center" mb={4}>
            <Circle
              size="60px"
              bg={useColorModeValue("blue.50", "blue.900")}
              mb={4}
            >
              <Icon
                as={Award}
                boxSize={8}
                color={useColorModeValue("blue.500", "blue.200")}
              />
            </Circle>
          </Flex>
          <Heading fontSize="3xl" fontWeight="bold" mb={4}>
            Let us Help Shape Your Future
          </Heading>
          <Text color={textColor} fontSize="lg" maxW="2xl" mx="auto">
            Together, we're not just helping students get into college; we're
            nurturing the leaders, innovators, and changemakers of tomorrow. Be
            part of our mission to transform education and unlock potential.
          </Text>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default MyTeamPage;
