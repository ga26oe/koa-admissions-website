"use client";

import {
  Box,
  Flex,
  HStack,
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
import KoaLogo from "@/public/koaLogo";

interface Props {
  children: React.ReactNode;
  href: string;
}

const Links = [
  { name: "Home", path: "/" },
  { name: "Our Team", path: "/myTeam" },
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
          <Box
            flexBasis="200px"
            display="flex"
            alignItems="center"
            height="100%"
          >
            <Link href="/" passHref>
              <Box as="a" display="flex" alignItems="center" height="100%">
                <KoaLogo />
              </Box>
            </Link>
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
            <Link href="/bookaCall" passHref>
              <Button
                as="a"
                display={{ base: "none", md: "inline-flex" }}
                fontSize={"sm"}
                fontWeight={600}
                color={"white"}
                bg={"blue.400"}
                _hover={{
                  bg: "blue.300",
                }}
              >
                Book a Call
              </Button>
            </Link>
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
              <Link href="/bookaCall" passHref>
                <Button colorScheme="blue" size="sm" width="100%">
                  Book a Call
                </Button>
              </Link>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
