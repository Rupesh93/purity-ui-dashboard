"use client";

import {
    Box,
    Button,
    Container,
    Flex,
    IconButton,
    Input,
    Span,
    Stack,
    Switch,
    Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import {
    IoLogoApple,
    IoLogoFacebook,
    IoLogoGoogle
} from "react-icons/io5";
import Footer from "../components/purityUiComponents/footer";
import Navbar from "../components/purityUiComponents/navbar";

export default function Signup() {
  return (
    <Box bg="var(--websiteWhite)">
      <Flex minH="100vh" w="100%" direction="column">
        {/* Navbar */}
        <Navbar callFrom={"signupPage"} />

        {/* Hero Section */}
        <Box position="relative" minH="120vh" p={3}>
          <Container
            w="100vw"
            minH="50vh"
            position="relative"
            p={3}
            maxW="100%"
            borderRadius={"12px"}
            overflow={"hidden"}
          >
            <Image
              src="/images/signupBanner.svg"
              alt="Signup Banner"
              fill
              style={{ objectFit: "cover" }}
            />
          </Container>

          {/* Absolute Centered Form */}
          <Box
            position="absolute"
            top="45%"
            left="50%"
            transform="translate(-50%, -35%)"
            w="100%"
            px={4}
          >
            <Flex justify="center">
              <Stack textAlign="center" width="450px" maxW="90vw">
                <Box px={8}>
                  <Text
                    fontSize="32px"
                    fontWeight="bold"
                    color="var(--websiteWhite)"
                    mb={2}
                  >
                    Welcome!
                  </Text>
                  <Text color="var(--websiteWhite)" fontSize="14px" mb={6}>
                    Use these awesome forms to login or create new account in
                    your project for free.
                  </Text>
                </Box>

                <Box
                  bg="var(--websiteWhite)"
                  p={10}
                  borderRadius="15px"
                  boxShadow={"0px 7px 23px 0 rgba(0, 0, 0, 0.05)"}
                >
                  <Text fontSize="18px" fontWeight="bold">
                    Register with
                  </Text>

                  <Flex gap={3} justify="center" my={5}>
                    <IconButton
                      aria-label="facebook"
                      bg="var(--websiteWhite)"
                      borderRadius="12px"
                      border="1px solid var(--secondaryColor)"
                      h={"50px"}
                      w={"50px"}
                    >
                      <IoLogoFacebook color="var(--websiteBlack)" />
                    </IconButton>
                    <IconButton
                      aria-label="apple"
                      bg="var(--websiteWhite)"
                      borderRadius="12px"
                      border="1px solid var(--secondaryColor)"
                      h={"50px"}
                      w={"50px"}
                    >
                      <IoLogoApple color="var(--websiteBlack)" />
                    </IconButton>
                    <IconButton
                      aria-label="google"
                      bg="var(--websiteWhite)"
                      borderRadius="12px"
                      border="1px solid var(--secondaryColor)"
                      h={"50px"}
                      w={"50px"}
                    >
                      <IoLogoGoogle color="var(--websiteBlack)" />
                    </IconButton>
                  </Flex>

                  <Text
                    fontSize="18px"
                    fontWeight="bold"
                    color="var(--secondaryColor)"
                    my={3}
                  >
                    Or
                  </Text>

                  <Flex direction="column" gap={5} textAlign="left">
                    <Box>
                      <Text fontSize="sm" mb={1}>
                        Name
                      </Text>
                      <Input
                        placeholder="Your full name"
                        borderRadius="12px"
                        px={4}
                      />
                    </Box>

                    <Box>
                      <Text fontSize="sm" mb={1}>
                        Email
                      </Text>
                      <Input
                        placeholder="Your email address"
                        borderRadius="12px"
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
                        borderRadius="12px"
                        px={4}
                      />
                    </Box>

                    <Switch.Root>
                      <Switch.HiddenInput />
                      <Switch.Control bg="var(--primaryColor)" />
                      <Switch.Label>Remember me</Switch.Label>
                    </Switch.Root>

                    <Button
                      bg="var(--primaryColor)"
                      color="white"
                      rounded="12px"
                      _hover={{ bg: "teal.500" }}
                      size="lg"
                      w="100%"
                      mt={3}
                    >
                      SIGN UP
                    </Button>

                    <Text
                      fontSize="sm"
                      textAlign="center"
                      color={"var(--secondaryColor)"}
                    >
                      Already have an account?
                      <Span color="var(--primaryColor)" fontWeight="bold">
                        <Link href="/"> Sign in</Link>
                      </Span>
                    </Text>
                  </Flex>
                </Box>
              </Stack>
            </Flex>
          </Box>
        </Box>

        {/* Footer */}
        <Box w="70%" m="auto" mt={14}>
          <Footer />
        </Box>
      </Flex>
    </Box>
  );
}
