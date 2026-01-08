"use client";

import { Button, Flex, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { IoIosCube, IoMdPerson } from "react-icons/io";
import { IoKey, IoPersonCircle } from "react-icons/io5";

export default function Navbar({ callFrom }) {
  return (
    <Flex
      px={10}
      py={3}
      align="center"
      justify="space-between"
      position="absolute"
      w="70%"
      zIndex={10}
      bg={callFrom === "signupPage" ? "transparent" : "var(--websiteWhite)"}
      color={
        callFrom === "signupPage"
          ? "var(--websiteWhite)"
          : "var(--websiteBlack)"
      }
      top="20px"
      left="50%"
      transform="translateX(-50%)"
      borderRadius="14px"
      boxShadow={
        callFrom === "signupPage"
          ? "none"
          : "0px 7px 23px 0 rgba(0, 0, 0, 0.05)"
      }
    >
      <Text fontWeight="bold">
        <Image
          src={
            callFrom === "signupPage"
              ? "./images/orgWhiteLogo.svg"
              : "./images/orgBlackLogo.svg"
          }
          height={20}
          width={20}
          alt="Organisation Icon"
          style={{ display: "inline" }}
        />{" "}
        &nbsp; PURITY UI DASHBOARD
      </Text>

      <Stack direction="row" gap={4} fontSize="14px" fontWeight="bold">
        <Link href="/">
          <Stack
            direction="row"
            align="center"
            _hover={{
              color: `${
                callFrom === "signupPage"
                  ? "var(--websiteBlack)"
                  : "var(--primaryColor)"
              }`,
            }}
          >
            <IoIosCube /> Dashboard
          </Stack>
        </Link>
        <Link href="/">
          <Stack
            direction="row"
            align="center"
            _hover={{
              color: `${
                callFrom === "signupPage"
                  ? "var(--websiteBlack)"
                  : "var(--primaryColor)"
              }`,
            }}
          >
            <IoMdPerson /> Profile
          </Stack>
        </Link>
        <Link href="/signup">
          <Stack
            direction="row"
            align="center"
            _hover={{
              color: `${
                callFrom === "signupPage"
                  ? "var(--websiteBlack)"
                  : "var(--primaryColor)"
              }`,
            }}
          >
            <IoPersonCircle /> Sign Up
          </Stack>
        </Link>
        <Link href="/">
          <Stack
            direction="row"
            align="center"
            _hover={{
              color: `${
                callFrom === "signupPage"
                  ? "var(--websiteBlack)"
                  : "var(--primaryColor)"
              }`,
            }}
          >
            <IoKey /> Sign In
          </Stack>
        </Link>
      </Stack>

      <Button
        fontSize="10px"
        px={8}
        py={0}
        borderRadius="34px"
        bg={
          callFrom === "signupPage"
            ? "var(--websiteWhite)"
            : "var(--websiteBlack)"
        }
        color={
          callFrom === "signupPage"
            ? "var(--websiteBlack)"
            : "var(--websiteWhite)"
        }
      >
        Free Download
      </Button>
    </Flex>
  );
}
