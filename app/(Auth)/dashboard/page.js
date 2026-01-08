"use client";
import DashboardGraphs from "@/app/components/purityUiComponents/dashboard/dashboardGraphs";
import ProjectsTable from "@/app/components/purityUiComponents/projectsTable";

import { Box, Flex, Heading, IconButton, Link, Text } from "@chakra-ui/react";
import Image from "next/image";

import {
  FaArrowRight,
  FaFileAlt,
  FaGlobe,
  FaShoppingCart,
  FaWallet,
} from "react-icons/fa";

export default function Dashboard() {
  // Colors from design for green/red text etc
  const greenColor = "#28a745";
  const redColor = "#dc3545";

  // Card data for the top row
  const cards = [
    {
      label: "Today’s Money",
      value: "$53,000",
      percent: "+55%",
      percentColor: greenColor,
      icon: <FaWallet />,
    },
    {
      label: "Today’s Users",
      value: "2,300",
      percent: "+5%",
      percentColor: greenColor,
      icon: <FaGlobe />,
    },
    {
      label: "New Clients",
      value: "+3,052",
      percent: "-14%",
      percentColor: redColor,
      icon: <FaFileAlt />,
    },
    {
      label: "Total Sales",
      value: "$173,000",
      percent: "+8%",
      percentColor: greenColor,
      icon: <FaShoppingCart />,
    },
  ];

  return (
    <Box p={6}>
      {/* Top info cards */}
      <Flex
        mb={6}
        justify="space-between"
        direction={{ base: "column", md: "row" }}
        gap={4}
      >
        {cards.map(({ label, value, percent, percentColor, icon }, i) => (
          <Flex
            key={i}
            bg="var(--websiteWhite)"
            p={4}
            borderRadius={"15px"}
            // boxShadow="0px 3.5px 5.5px 0 #00000005"
            align="center"
            justify="space-between"
            flex="1"
            minW="180px"
          >
            <Box>
              <Text
                fontSize="12px"
                color="var(--secondaryColor)"
                fontWeight="semibold"
                mb={1}
              >
                {label}
              </Text>
              <Flex align="center" gap={2}>
                <Heading fontSize="18px">{value}</Heading>
                <Text fontSize="14px" fontWeight="bold" color={percentColor}>
                  {percent}
                </Text>
              </Flex>
            </Box>
            <IconButton
              aria-label={label + " icon button"}
              bg="var(--primaryColor)"
              borderRadius={"12px"}
            >
              {icon}
            </IconButton>
          </Flex>
        ))}
      </Flex>

      {/* Bottom section */}
      <Flex gap={6} direction={{ base: "column", md: "row" }}>
        {/* Left card */}
        <Flex
          bg="white"
          flex="1"
          rounded="15px"
          p={4}
          justify="space-between"
          minH="250px"
        >
          
          <Box flex="1" mr={6} position={"relative"}>
            <Text
              fontSize="xs"
              fontWeight="semibold"
              color="var(--secondaryColor)"
              mb={1}
            >
              Built by developers
            </Text>
            <Heading size="md" mb={2} fontWeight="bold">
              Purity UI Dashboard
            </Heading>
            <Text fontSize="sm" color="var(--secondaryColor)" mb={4}>
              From colors, cards, typography to complex elements, you will find
              the full documentation.
            </Text>
            <Link
              href="#"
              color="gray.700"
              fontWeight="bold"
              fontSize="sm"
              display="inline-flex"
              alignItems="center"
              _hover={{
                textDecoration: "underline",
                color: "var(--primaryColor)",
              }}
              position={"absolute"}
              bottom={"20px"}
            >
              Read more <Box as={FaArrowRight} ml={2} />
            </Link>
          </Box>

          {/* Chakra logo block */}
          <Box
            w="280px"
            h="250px"
            rounded="md"
            display="flex"
            alignItems="center"
            justifyContent="center"
            position="relative"
          >
            chakra
            <Image layout="fill" src={"/images/dashboardChakraCard.png"} alt="Dashboard Banner"/>
          </Box>
        </Flex>

        {/* Right card */}
        <Box
          flex="1"
          rounded="15px"
          position="relative"
          overflow="hidden"
          minH="180px"
          bgImage="url('./images/teamMeeting.jpg')"
          bgSize="cover"
          bgPosition="center"
          color="white"
          display="flex"
          flexDirection="column"
        >
          <Box
            bg="rgba(0,0,0,0.45)"
            p={4}
            rounded="md"
            w="100%"
            h="100%"
          >
            <Text fontWeight="bold" fontSize="md" mb={2}>
              Work with the Rockets
            </Text>
            <Text fontSize="sm" mb={4} lineHeight="short">
              Wealth creation is an evolutionarily recent positive-sum game.
              <br />
              It is all about who take the opportunity first.
            </Text>
            <Link
              href="#"
              color="gray.200"
              fontWeight="bold"
              fontSize="sm"
              display="inline-flex"
              alignItems="center"
              _hover={{ textDecoration: "underline", color: "white" }}
              position={"absolute"}
              bottom={"20px"}
            >
              Read more <Box as={FaArrowRight} ml={2} />
            </Link>
          </Box>
        </Box>
      </Flex>
      <DashboardGraphs />
      <ProjectsTable callForm={"dashboard"}/>
    </Box>
  );
}
