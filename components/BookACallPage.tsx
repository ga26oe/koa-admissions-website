"use client";

import React, { useState } from "react";
import Link from "next/link";
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
  HStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import { Calendar, User, Mail, Check } from "lucide-react";
import CalendlyEmbed from "./CalendlyEmbed";
import { LucideIcon } from "lucide-react";

const MotionBox = motion(Box);

interface InputFieldProps {
  icon: LucideIcon;
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  icon: IconComponent,
  label,
  placeholder,
  type = "text",
  value,
  onChange,
}) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Flex align="center">
        <Circle
          size="40px"
          bg={useColorModeValue("gray.100", "gray.700")}
          mr={3}
        >
          <Icon
            as={IconComponent}
            color={useColorModeValue("blue.500", "blue.200")}
          />
        </Circle>
        <Input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </Flex>
    </FormControl>
  );
};

const BookACallPage: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const toast = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/book-call", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, date }),
      });

      if (response.ok) {
        setStep(2);
        toast({
          title: "Information Received",
          description: "Please select a time slot in the calendar below.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      } else {
        throw new Error("Failed to book call");
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "Failed to submit information. Please try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAppointmentConfirmation = () => {
    setStep(3);
    toast({
      title: "Appointment Scheduled",
      description: "We look forward to speaking with you!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="4xl" py={20}>
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <VStack spacing={8} align="stretch">
          <VStack spacing={3} textAlign="center">
            <Heading
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              fontWeight="bold"
              color={useColorModeValue("gray.800", "white")}
            >
              {step === 3 ? "Thank You!" : "Book a Call With Us"}
            </Heading>
            <Text
              fontSize="xl"
              color={useColorModeValue("gray.600", "gray.300")}
            >
              {step === 3
                ? "Your appointment has been scheduled."
                : "Take the first step towards your dream university."}
            </Text>
          </VStack>

          {step === 1 && (
            <Box
              as="form"
              onSubmit={handleSubmit}
              bg={useColorModeValue("white", "gray.800")}
              p={{ base: 6, md: 8 }}
              rounded="xl"
              shadow="lg"
              borderWidth="1px"
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <Stack spacing={6}>
                <InputField
                  icon={User}
                  label="Full Name"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <InputField
                  icon={Mail}
                  label="Email Address"
                  placeholder="Enter your email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <InputField
                  icon={Calendar}
                  label="Preferred Date"
                  placeholder="Select a date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />

                <Button
                  type="submit"
                  colorScheme="blue"
                  size="lg"
                  fontSize="md"
                  rightIcon={<ChevronRightIcon />}
                  isLoading={isSubmitting}
                  loadingText="Submitting..."
                >
                  Next: Choose Time Slot
                </Button>
              </Stack>
            </Box>
          )}

          {step === 2 && (
            <VStack spacing={6}>
              <Box
                bg={useColorModeValue("white", "gray.800")}
                p={{ base: 6, md: 8 }}
                rounded="xl"
                shadow="lg"
                borderWidth="1px"
                borderColor={useColorModeValue("gray.200", "gray.700")}
                w="100%"
              >
                <CalendlyEmbed url="https://calendly.com/gajai-avinash/15-min-admissions-consultation-1" />
              </Box>
              <HStack>
                <Button
                  onClick={() => setStep(1)}
                  leftIcon={<ChevronLeftIcon />}
                  variant="outline"
                >
                  Back
                </Button>
                <Button
                  colorScheme="blue"
                  rightIcon={<ChevronRightIcon />}
                  onClick={handleAppointmentConfirmation}
                >
                  Confirm Appointment
                </Button>
              </HStack>
            </VStack>
          )}

          {step === 3 && (
            <VStack spacing={6}>
              <Box
                bg={useColorModeValue("white", "gray.800")}
                p={{ base: 6, md: 8 }}
                rounded="xl"
                shadow="lg"
                borderWidth="1px"
                borderColor={useColorModeValue("gray.200", "gray.700")}
                w="100%"
                textAlign="center"
              >
                <Icon as={Check} w={20} h={20} color="green.500" mb={4} />
                <Heading size="lg" mb={4}>
                  Appointment Confirmed!
                </Heading>
                <Text fontSize="md" mb={6}>
                  We've sent you an email with all the details. We're excited to
                  speak with you and help you on your journey to your dream
                  university.
                </Text>
                <Link href="/" passHref>
                  <Button as="a" colorScheme="blue" size="lg">
                    Return to Home Page
                  </Button>
                </Link>
              </Box>
            </VStack>
          )}
        </VStack>
      </MotionBox>
    </Container>
  );
};

export default BookACallPage;
