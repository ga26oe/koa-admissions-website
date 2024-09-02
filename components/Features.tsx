"use client";
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

const features = [
  {
    id: 1,
    title: "Personalized Guidance",
    text: "Tailored strategies that align with your unique strengths and aspirations, ensuring a standout application.",
  },
  {
    id: 2,
    title: "Insider Insights",
    text: "Benefit from our team's recent success in navigating the competitive admissions process at top universities.",
  },
  {
    id: 3,
    title: "Holistic Approach",
    text: "We focus on developing well-rounded profiles, balancing academics, extracurriculars, and personal growth.",
  },
  {
    id: 4,
    title: "Ongoing Support",
    text: "From initial planning to final decisions, we're with you every step of the way, providing consistent guidance and encouragement.",
  },
];

export default function FeatureSection() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"}>
          Unlock Your Potential: Expert College Consulting for Top-Choice
          Admissions
        </Heading>
      </Stack>
      <Container maxW={"6xl"} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={"top"}>
              <Box color={"green.400"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={"gray.600"}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
