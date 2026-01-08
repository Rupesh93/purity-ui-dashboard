"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import Sidebar from "../components/purityUiComponents/sidebar";
import NavigationBar from "../components/purityUiComponents/navigationBar";
import Footer from "../components/purityUiComponents/footer";

export default function AuthLayout({ children }) {
  const pathname = usePathname();

  const pageTitle =
    pathname
      .split("/")[1] // get first segment
      ?.replace(/-/g, " ")
      ?.replace(/\b\w/g, (char) => char.toUpperCase()) || "Dashboard";

  return (
    <Flex>
      <Sidebar curretActiveTab={pathname.split("/")[1]} />

      <Box w="100%" pt={2}>
        <NavigationBar currentPage={pageTitle} />

        {/* Dynamic Page Title */}
        <Text
          fontWeight="bold"
          fontSize="lg"
          ml={8}
          display={{ base: "none", md: "block" }}
        >
          {pageTitle}
        </Text>

        {children}

        <Footer />
      </Box>
    </Flex>
  );
}
