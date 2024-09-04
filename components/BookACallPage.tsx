"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  VStack,
  useToast,
  Container,
  Stack,
  useColorModeValue,
  Circle,
  Icon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Calendar, User, Mail } from "lucide-react";
import CalendlyEmbed from "./CalendlyEmbed";
import { IconType } from "react-icons";

const MotionBox = motion(Box);

const Form1 = () => (
  <VStack spacing={6} align="stretch">
    <FormControl>
      <FormLabel htmlFor="first-name">First name</FormLabel>
      <Input id="first-name" placeholder="Enter your first name" size="lg" />
    </FormControl>
    <FormControl>
      <FormLabel htmlFor="last-name">Last name</FormLabel>
      <Input id="last-name" placeholder="Enter your last name" size="lg" />
    </FormControl>
    <FormControl>
      <FormLabel htmlFor="email">Email address</FormLabel>
      <Input id="email" type="email" placeholder="you@example.com" size="lg" />
    </FormControl>
  </VStack>
);

const Form2 = () => (
  <VStack spacing={6} align="stretch">
    <Text fontSize="lg" fontWeight="medium">
      Choose a time that works best for you. We're excited to meet!
    </Text>
    <Box borderRadius="lg" overflow="hidden" boxShadow="md">
      <CalendlyEmbed url="https://calendly.com/gajai-avinash/15-min-admissions-consultation-1" />
    </Box>
  </VStack>
);

const Form3 = () => (
  <VStack spacing={6} align="center">
    <Icon as={Calendar} w={12} h={12} color="teal.500" />
    <Heading as="h2" size="xl" textAlign="center">
      Thank You!
    </Heading>
    <Text fontSize="lg" textAlign="center">
      We've received your information and will be in touch soon with more
      details about your consultation.
    </Text>
  </VStack>
);

interface StepIconProps {
  icon: IconType;
  isActive: boolean;
}

const StepIcon: React.FC<StepIconProps> = ({ icon, isActive }) => (
  <Circle
    size="40px"
    bg={isActive ? "teal.500" : "gray.200"}
    color={isActive ? "white" : "gray.500"}
  >
    <Icon as={icon} w={5} h={5} />
  </Circle>
);

export default function BookACallPage() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = () => {
    toast({
      title: "Consultation Scheduled",
      description: "We look forward to speaking with you soon!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box minHeight="100vh" bg={bgColor} py={16}>
      <Container maxW="3xl">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <VStack spacing={8} align="stretch">
            <Heading as="h1" size="2xl" textAlign="center" color={textColor}>
              Book Your Free Consultation
            </Heading>

            <Box
              bg={useColorModeValue("white", "gray.700")}
              p={8}
              borderRadius="lg"
              boxShadow="xl"
            >
              <MotionBox
                key={step}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
              </MotionBox>
            </Box>
            <Flex justify="space-between">
              {step > 1 && (
                <Button onClick={prevStep} variant="ghost" size="lg">
                  Back
                </Button>
              )}
              {step < 3 ? (
                <Button
                  onClick={nextStep}
                  colorScheme="teal"
                  rightIcon={<ChevronRightIcon />}
                  ml="auto"
                  size="lg"
                >
                  {step === 1 ? "Choose Time" : "Confirm"}
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  colorScheme="teal"
                  size="lg"
                  ml="auto"
                >
                  Finish
                </Button>
              )}
            </Flex>
          </VStack>
        </MotionBox>
      </Container>
    </Box>
  );
}
