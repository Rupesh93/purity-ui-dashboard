import { Box, Flex, Text } from "@chakra-ui/react";
import Sidebar from "../components/purityUiComponents/sidebar";
import NavigationBar from "../components/purityUiComponents/navigationBar";
import Footer from "../components/purityUiComponents/footer";

export default function AuthLayout({ children }) {
  return (
    <Flex>
      <Sidebar />
      <Box w={"100%"} pt={2}>
        <NavigationBar />
        {/* Current Page Title */}
        <Text
          fontWeight="bold"
          fontSize="lg"
          ml={8}
          display={{ base: "none", md: "block" }}
        >
          Dashboard
        </Text>
        {children}
        <Footer/>
      </Box>
    </Flex>
  );
}
