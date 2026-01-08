"use client";

import { Box, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import {
  FiBarChart2,
  FiCreditCard,
  FiHome,
  FiLogIn,
  FiTool,
  FiUser,
  FiUserPlus,
} from "react-icons/fi";
import { useRouter } from "next/navigation";

const NavItem = ({
  icon,
  label,
  active = false,
  route = "/",
  curretActiveTab,
}) => {
  const router = useRouter();
  const isActive = `/${curretActiveTab}` === route;
  return (
    <HStack
      spacing={4}
      px={3}
      py={3}
      borderRadius="xl"
      bg={isActive ? "var(--websiteWhite)" : "transparent"}
      cursor="pointer"
      _hover={{ bg: "var(--websiteWhite)" }}
      w="100%"
      onClick={() => {
        router.push(route);
      }}
    >
      <Box
        bg={isActive ? "var(--primaryColor)" : "var(--websiteWhite)"}
        px={2}
        py={1.5}
        borderRadius="12px"
        color={isActive ? "var(--websiteWhite)" : "var(--primaryColor)"}
      >
        <Icon as={icon} boxSize={4} />
      </Box>
      <Text
        fontWeight={"semibold"}
        color={isActive ? "var(--primaryColor)" : "var(--secondaryColor)"}
      >
        {label}
      </Text>
    </HStack>
  );
};

export default function Sidebar({ curretActiveTab }) {
  const router = useRouter();
  return (
    <Box w="260px" h="100vh" px={6} py={6}>
      {/* Logo */}
      <HStack mb={8} spacing={3}>
        <Text
          fontWeight="bold"
          onClick={() => {
            router.push("/");
          }}
          cursor={"pointer"}
        >
          {" "}
          <Image
            src={"./images/orgBlackLogo.svg"}
            height={20}
            width={20}
            alt="Organisation Icon"
            style={{ display: "inline" }}
          />{" "}
          &nbsp; PURITY UI
        </Text>
      </HStack>

      {/* Main Menu */}
      <VStack align="stretch" spacing={2}>
        <NavItem
          icon={FiHome}
          label="Dashboard"
          route={"/dashboard"}
          curretActiveTab={curretActiveTab}
        />
        <NavItem
          icon={FiBarChart2}
          label="Tables"
          route={"/tables"}
          curretActiveTab={curretActiveTab}
        />
        <NavItem
          icon={FiCreditCard}
          label="Billing"
          route={"/billing"}
          curretActiveTab={curretActiveTab}
        />
        <NavItem icon={FiTool} label="RTL" route={"/rtl"} />
      </VStack>

      {/* <  my={6} /> */}

      {/* Account Pages */}
      <Text fontSize="sm" fontWeight="bold" color="gray.500" mb={3}>
        ACCOUNT PAGES
      </Text>

      <VStack align="stretch" spacing={2}>
        <NavItem
          icon={FiUser}
          label="Profile"
          route={"/profile"}
          curretActiveTab={curretActiveTab}
        />
        <NavItem
          icon={FiLogIn}
          label="Sign In"
          route={"/"}
          curretActiveTab={curretActiveTab}
        />
        <NavItem
          icon={FiUserPlus}
          label="Sign Up"
          route={"/signup"}
          curretActiveTab={curretActiveTab}
        />
      </VStack>
    </Box>
  );
}
