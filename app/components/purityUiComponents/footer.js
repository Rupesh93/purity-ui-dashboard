// components/Footer.js
import { Box, Flex, Link, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      as="footer"
      py={4}
      px={{ base: 4, md: 11 }}
      fontSize="sm"
      color="var(--secondaryColor)"
    >
      <Flex
        justify="space-between"
        align="center"
        maxW="7xl"
        mx="auto"
        wrap="wrap"
      >
        {/* Left side */}
        <Text>
          © {new Date().getFullYear()}, Made with{" "}
          <Box as="span" role="img" aria-label="heart" color="red.500">
            ❤️
          </Box>{" "}
          by{" "}
          <Link
            href="/team"
            color="var(--primaryColor)"
            fontWeight="bold"
            isExternal
          >
            Rupesh Kumar
          </Link>{" "}
          &amp;{" "}
          <Link
            href="/team"
            color="var(--primaryColor)"
            fontWeight="bold"
            isExternal
          >
            Simmmple
          </Link>{" "}
          for a better web
        </Text>

        {/* Right side */}
        <Flex gap={6} mt={{ base: 3, md: 0 }}>
          <Link
            href="/team"
            color="var(--secondaryColor)"
            _hover={{ color: "var(--primaryColor)" }}
            fontWeight="normal"
            isExternal
          >
            Creative Tim
          </Link>
          <Link
            href="/simmple"
            color="var(--secondaryColor)"
            _hover={{ color: "var(--primaryColor)" }}
            fontWeight="normal"
            isExternal
          >
            Simmple
          </Link>
          <Link
            href="/blog"
            color="var(--secondaryColor)"
            _hover={{ color: "var(--primaryColor)" }}
            fontWeight="normal"
            isExternal
          >
            Blog
          </Link>
          <Link
            href="/license"
            color="var(--secondaryColor)"
            _hover={{ color: "var(--primaryColor)" }}
            fontWeight="normal"
            isExternal
          >
            License
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}
