"use client";

import { Chart, useChart } from "@chakra-ui/charts";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  IconButton,
  Progress,
  Span,
  Text,
} from "@chakra-ui/react";
import { FaWallet } from "react-icons/fa";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

export default function DashboardGraphs() {
  return (
    <Grid py={6} templateColumns={{ base: "1fr", lg: "1fr 2fr" }} gap={6}>
      {/* LEFT CARD */}
      <GridItem>
        <ActveUserGraph />
      </GridItem>

      {/* RIGHT CARD */}
      <GridItem>
        <Box bg="white" borderRadius="xl" p={5} boxShadow="sm">
          <Flex direction={"column"} justify="space-between" mb={2}>
            <Text fontWeight="semibold">Sales overview</Text>
            <Text fontSize="14px" color="var(--primaryColor)">
              (+5) more <Span color={"var(--secondaryColor)"}>in 2021</Span>
            </Text>
          </Flex>

          {/* Line chart placeholder */}
          <Box
            h="260px"
            position="relative"
          >
           <SalesOverview/>
          </Box>
        </Box>
      </GridItem>
    </Grid>
  );
}

const ActveUserGraph = () => {
  const chart = useChart({
    data: [
      { activeUsers: 350, month: "january" },
      { activeUsers: 220, month: "february" },
      { activeUsers: 130, month: "march" },
      { activeUsers: 300, month: "april" },
      { activeUsers: 500, month: "may" },
      { activeUsers: 400, month: "june" },
      { activeUsers: 300, month: "july" },
      { activeUsers: 150, month: "august" },
    ],
    series: [{ name: "activeUsers", color: "var(--websiteWhite)" }],
  });
  const stats = [
    {
      label: "Users",
      value: "32,984",
      progress: 65,
      icon: <FaWallet />,
    },
    {
      label: "Clicks",
      value: "2,42m",
      progress: 85,
      icon: <FaWallet />,
    },
    {
      label: "Sales",
      value: "2,400$",
      progress: 40,
      icon: <FaWallet />,
    },
    {
      label: "Items",
      value: "320",
      progress: 70,
      icon: <FaWallet />,
    },
  ];
  return (
    <Box
      bg="white"
      borderRadius="12px"
      p={3}
      w={"450px"}
      overflow="hidden"
      boxShadow="sm"
    >
      {/* Bar chart placeholder */}
      <Box
        h="200px"
        borderRadius="8px"
        bgGradient="linear(to-r, #2D325A, #0F1224)"
        position={"relative"}
      >
        <Chart.Root
          maxH="sm"
          py={4}
          px={0}
          chart={chart}
          h={"95%"}
          bg="linear-gradient(135deg, #2E335A, #0B0F1A)"
          borderRadius={"8px"}
        >
          <BarChart data={chart.data} barSize={10} border={"2px solid red"}>
            <CartesianGrid vertical={false} horizontal={false} />
            <XAxis
              axisLine={false}
              tickLine={false}
              dataKey={chart.key("month")}
              hide={true}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              ticks={[0, 100, 200, 300, 400, 500]}
              domain={[0, 500]}
              tick={{ fill: "#ffffff" }}
            />
            {chart.series.map((item) => (
              <Bar
                key={item.name}
                isAnimationActive={false}
                dataKey={chart.key(item.name)}
                fill={chart.color(item.color)}
                radius={15}
                border={"2px solid red"}
              />
            ))}
          </BarChart>
        </Chart.Root>
      </Box>

      {/* Active Users */}
      <Text fontWeight="bold" fontSize={"16px"}>
        Active Users
      </Text>
      <Text color="var(--primaryColor)" mb={4} fontSize={"14px"}>
        (+23) <Span color="var(--secondaryColor)">than last week</Span>
      </Text>

      <Flex gap={10} w="100%" justify="space-between" p={1}>
        {stats.map((stat) => (
          <Box key={stat.label} w="100%">
            {/* Header */}
            <Flex align="center" gap={3}>
              <Flex
                w="25px"
                h="25px"
                align="center"
                justify="center"
                bg="var(--primaryColor)"
                borderRadius="lg"
                color="white"
              >
                {/* <Icon as={stat.icon} boxSize={5} /> */}
                <IconButton
                  aria-label={stat.label + " icon button"}
                  bg="var(--primaryColor)"
                  borderRadius={"12px"}
                >
                  {stat.icon}
                </IconButton>
              </Flex>

              <Text
                color="var(--secondaryColor)"
                fontWeight="bold"
                fontSize={"12px"}
              >
                {stat.label}
              </Text>
            </Flex>

            {/* Value */}
            <Text mt={3} fontSize="18px" fontWeight="bold">
              {stat.value}
            </Text>

            {/* Progress */}

            <Progress.Root value={stat.progress}>
              <Progress.Track
                bg={"var(--secondaryColor)"}
                h={"4px"}
                borderRadius={"12px"}
              >
                <Progress.Range bg={"var(--primaryColor)"} />
              </Progress.Track>
            </Progress.Root>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};
const SalesOverview=()=> {
  const data = [
  { month: "Jan", dark: 500, light: 180 },
  { month: "Feb", dark: 160, light: 220 },
  { month: "Mar", dark: 190, light: 210 },
  { month: "Apr", dark: 280, light: 350 },
  { month: "May", dark: 210, light: 360 },
  { month: "Jun", dark: 240, light: 470 },
  { month: "Jul", dark: 260, light: 420 },
  { month: "Aug", dark: 210, light: 320 },
  { month: "Sep", dark: 120, light: 360 },
  { month: "Oct", dark: 150, light: 220 },
  { month: "Nov", dark: 180, light: 400 },
  { month: "Dec", dark: 130, light: 430 },
];

  return (
    <ResponsiveContainer width="100%" height={"100%"}>
      <AreaChart data={data}>
        {/* Gradients */}
        <defs>
          <linearGradient id="darkGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2E3440" stopOpacity={0.35} />
            <stop offset="100%" stopColor="#2E3440" stopOpacity={0} />
          </linearGradient>

          <linearGradient id="lightGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4FD1C5" stopOpacity={0.5} />
            <stop offset="100%" stopColor="#4FD1C5" stopOpacity={0} />
          </linearGradient>
        </defs>

        {/* Grid */}
        <CartesianGrid
          strokeDasharray="4 4"
          vertical={false}
          stroke="#E2E8F0"
        />

        {/* Axes */}
        <XAxis
          dataKey="month"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#A0AEC0", fontSize: 12 }}
        />

        <YAxis
          axisLine={false}
          tickLine={false}
          ticks={[0, 100, 200, 300, 400, 500]}
          tick={{ fill: "#A0AEC0", fontSize: 12 }}
        />

        {/* Dark Area */}
        <Area
          type="monotone"
          dataKey="dark"
          stroke="#2E3440"
          strokeWidth={2.5}
          fill="url(#darkGradient)"
        />

        {/* Light Area */}
        <Area
          type="monotone"
          dataKey="light"
          stroke="#4FD1C5"
          strokeWidth={2.5}
          fill="url(#lightGradient)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}