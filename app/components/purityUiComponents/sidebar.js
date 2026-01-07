"use client";

import { Box, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import {
  FiBarChart2,
  FiCreditCard,
  FiHome,
  FiLogIn,
  FiTool,
  FiUser,
  FiUserPlus,
} from "react-icons/fi";

const NavItem = ({ icon, label, active = false }) => {
  return (
    <HStack
      spacing={4}
      px={3}
      py={3}
      borderRadius="xl"
      bg={active ? "var(--websiteWhite)" : "transparent"}
      cursor="pointer"
      _hover={{ bg: "var(--websiteWhite)" }}
      w="100%"
    >
      <Box
        bg={active ? "var(--primaryColor)" : "var(--websiteWhite)"}
        px={2}
        py={1.5}
        borderRadius="12px"
        color={active ? "var(--websiteWhite)" : "var(--primaryColor)"}
      >
        <Icon as={icon} boxSize={4} />
      </Box>
      <Text
        fontWeight={"semibold"}
        color={active ? "var(--primaryColor)" : "var(--secondaryColor)"}
      >
        {label}
      </Text>
    </HStack>
  );
};

export default function Sidebar() {
  return (
    <Box
      w="260px"
      h="100vh"
      //   bg="white"
      px={6}
      py={6}
      //   borderRight="1px solid"
      //   borderColor="gray.100"
    >
      {/* Logo */}
      <HStack mb={8} spacing={3}>
        <Box w="32px" h="32px" bg="var(--primaryColor)" borderRadius="md" />
        <Text fontWeight="bold">DASHBOARD</Text>
      </HStack>

      {/* Main Menu */}
      <VStack align="stretch" spacing={2}>
        <NavItem icon={FiHome} label="Dashboard" active />
        <NavItem icon={FiBarChart2} label="Tables" />
        <NavItem icon={FiCreditCard} label="Billing" />
        <NavItem icon={FiTool} label="RTL" />
      </VStack>

      {/* <  my={6} /> */}

      {/* Account Pages */}
      <Text fontSize="sm" fontWeight="bold" color="gray.500" mb={3}>
        ACCOUNT PAGES
      </Text>

      <VStack align="stretch" spacing={2}>
        <NavItem icon={FiUser} label="Profile" />
        <NavItem icon={FiLogIn} label="Sign In" />
        <NavItem icon={FiUserPlus} label="Sign Up" />
      </VStack>
    </Box>
  );
}
