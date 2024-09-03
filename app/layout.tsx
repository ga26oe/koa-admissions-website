"use client";
import { ChakraProvider, Flex, Box } from "@chakra-ui/react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <Flex flexDirection="column" minHeight="100vh">
            <NavBar />
            <Box flex="1">{children}</Box>
            <Footer />
          </Flex>
        </ChakraProvider>
      </body>
    </html>
  );
}
