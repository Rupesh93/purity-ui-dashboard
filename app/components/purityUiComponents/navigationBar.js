"use client";

import { FiSearch, FiSettings, FiBell } from "react-icons/fi";
import { IoMdNotifications,IoMdSettings } from "react-icons/io";
import {  } from "react-icons/io";
import { MdPerson } from "react-icons/md";
import { HiMiniSlash } from "react-icons/hi2";
import Link from "next/link";
import {
  Avatar,
  Box,
  Breadcrumb,
  Flex,
  HStack,
  IconButton,
  Input,
  InputGroup,
  Menu,
  Spacer,
  Text,
  Tooltip,
} from "@chakra-ui/react";

export default function NavigationBar() {
  return (
    <Box px={8} pt={2} w="100%">
      <Flex align="center" w="100%" justifyContent="space-between" gap={6}>
        {/* Breadcrumb */}
        <Breadcrumb.Root>
          <Breadcrumb.List>
            <Breadcrumb.Item>
              <Breadcrumb.Link href="#">Pages</Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator>
              <HiMiniSlash />
            </Breadcrumb.Separator>

            <Breadcrumb.Item>
              <Breadcrumb.CurrentLink>Dashboard</Breadcrumb.CurrentLink>
            </Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb.Root>

        <Flex gap={3} align={"center"} pr={3}>
          {/* Search input */}
          <InputGroup flex="1" startElement={<FiSearch color="#000"/>} bg={"white"} px={3} borderRadius={"12px"} w={"200px"}>
            <Input placeholder="Type here..." border={"none"} />
          </InputGroup>

          {/* Icons */}
          <MdPerson style={{ fontSize: "16px" }} />
          <IoMdSettings />
          <IoMdNotifications />
        </Flex>
      </Flex>
    </Box>
  );
}
