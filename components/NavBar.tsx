"use client";
import {
  Box,
  Flex,
  HStack,
  Text,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  useColorMode,
  useColorModeValue,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
  href: string;
}

const Links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Results", path: "/results" },
];

const NavLink = (props: Props) => {
  const { children, href } = props;
  return (
    <Link href={href} passHref>
      <Box
        as="a"
        px={2}
        py={1}
        rounded={"md"}
        _hover={{
          textDecoration: "none",
          bg: useColorModeValue("gray.200", "gray.700"),
        }}
      >
        {children}
      </Box>
    </Link>
  );
};

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box flexBasis="200px">
            <Text fontWeight="bold">KOA Admissions</Text>
          </Box>
          <Flex
            justify="center"
            flex={1}
            display={{ base: "none", md: "flex" }}
          >
            <HStack as={"nav"} spacing={8}>
              {Links.map((link) => (
                <NavLink key={link.name} href={link.path}>
                  {link.name}
                </NavLink>
              ))}
            </HStack>
          </Flex>
          <Flex
            alignItems={"center"}
            gap="0.5rem"
            flexBasis="200px"
            justify="flex-end"
          >
            <Button
              colorScheme="blue"
              size="sm"
              display={{ base: "none", md: "inline-flex" }}
            >
              Book a Call
            </Button>
            <IconButton
              size="sm"
              onClick={toggleColorMode}
              aria-label="Toggle color mode"
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            />
            <IconButton
              size={"md"}
              icon={<HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={onOpen}
            />
          </Flex>
        </Flex>
      </Box>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.name} href={link.path}>
                  {link.name}
                </NavLink>
              ))}
              <Button colorScheme="blue" size="sm">
                Book a Call
              </Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
