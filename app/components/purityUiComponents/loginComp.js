"use client";
import { Box, Button, Flex, Input, Span, Switch, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import Footer from "./footer";
import Navbar from "./navbar";

export default function LoginComp() {
  return (
    <Flex
      minH="100vh"
      direction="column"
      bg={"var(--websiteWhite)"}
      position={"relative"}
    >
      {/* Navbar */}
      <Navbar />

      {/* Main */}
      <Flex flex="1">
        {/* Left Form */}
        <Flex flex="1" position={"relative"}>
          <Box
            w="360px"
            position={"absolute"}
            top={"50%"}
            left={"50%"}
            transform={"translate(-20%,-40%)"}
          >
            <Text
              fontSize="24px"
              fontWeight="bold"
              color="var(--primaryColor)"
              mb={2}
            >
              Welcome Back
            </Text>

            <Text color="var(--secondaryColor)" fontSize="14px" mb={6}>
              Enter your email and password to sign in
            </Text>

            <Flex direction={"column"} gap={5}>
              <Box>
                <Text fontSize="sm" mb={1}>
                  Email
                </Text>
                <Input
                  placeholder="Your email address"
                  borderRadius={"12px"}
                  px={4}
                />
              </Box>

              <Box>
                <Text fontSize="sm" mb={1}>
                  Password
                </Text>
                <Input
                  type="password"
                  placeholder="Your password"
                  borderRadius={"12px"}
                  px={4}
                />
              </Box>

              <Switch.Root>
                <Switch.HiddenInput />
                <Switch.Control bg={"var(--primaryColor)"} />
                <Switch.Label>Remember me</Switch.Label>
              </Switch.Root>

              <Button
                bg="var(--primaryColor)"
                color="white"
                rounded="12px"
                _hover={{ bg: "teal.500" }}
                size="lg"
                w={"100%"}
              >
                SIGN IN
              </Button>

              <Text fontSize="sm" textAlign="center">
                Don&apos;t have an account?{" "}
                <Span color="var(--primaryColor)" fontWeight={"bold"}>
                  <Link href={"./signup"}>Sign up</Link>
                </Span>
              </Text>
            </Flex>
          </Box>
        </Flex>
        {/* Right Panel */}
        <Flex flex={1} align={"right"} justify={"end"}>
          <Box
            h={"90%"}
            align={"right"}
            justify={"end"}
            w={"75%"}
            position={"relative"}
          >
            <Image
              layout="fill"
              src={"/images/loginBanner.svg"}
              alt="Login Banner"
            />
          </Box>
        </Flex>
      </Flex>

      {/* Footer */}

      <Box w={"70%"} m={"auto"}>
        <Footer />
      </Box>
    </Flex>
  );
}
