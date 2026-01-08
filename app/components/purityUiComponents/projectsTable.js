import projectsTableMockData from "@/app/components/mockData/projectsData.json";
import {
  Avatar,
  AvatarGroup,
  Box,
  Flex,
  Progress,
  Span,
  Table,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { FiMoreVertical } from "react-icons/fi";
import { MdDone } from "react-icons/md";

export default function ProjectsTable({ callForm }) {
  return (
    <Box bg="white" p={6} borderRadius="lg">
      {/* Header */}
      <Flex justify="space-between" align="center" mb={6}>
        <Box>
          <Text fontSize="lg" fontWeight="bold">
            Projects
          </Text>
          <Flex justifyContent={"center"} alignItems={"center"}>
            <Box
              bg="green"
              color="white"
              borderRadius="full"
              h="14px"
              w="14px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <MdDone fontSize="6px" />
            </Box>

            <Text fontSize="sm" color="var(--secondaryColor)">
              <Span fontWeight={"bold"}>&nbsp;30 done</Span> this month
            </Text>
          </Flex>
        </Box>

        {callForm === "dashboard" && (
          <Box color="gray.500" cursor="pointer">
            <FiMoreVertical />
          </Box>
        )}
      </Flex>

      {/* Table */}
      <Table.Root variant="simple">
        {/* HEADER */}
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader fontSize="0.7rem" color="gray.400">
              COMPANIES
            </Table.ColumnHeader>

            {callForm === "dashboard" && (
              <Table.ColumnHeader fontSize="0.7rem" color="gray.400">
                MEMBERS
              </Table.ColumnHeader>
            )}

            <Table.ColumnHeader fontSize="0.7rem" color="gray.400">
              BUDGET
            </Table.ColumnHeader>

            <Table.ColumnHeader
              fontSize="0.7rem"
              color="gray.400"
              textAlign="center"
            >
              STATUS
            </Table.ColumnHeader>

            <Table.ColumnHeader fontSize="0.7rem" color="gray.400">
              COMPLETION
            </Table.ColumnHeader>

            <Table.ColumnHeader />
          </Table.Row>
        </Table.Header>

        {/* BODY */}
        <Table.Body>
          {projectsTableMockData.map((project, index) => (
            <Table.Row key={index} style={{ borderTop: "0.1px solid #E2E8F0" }}>
              {/* COMPANY */}
              <Table.Cell py={2}>
                <Flex align="center" gap={3}>
                  <Image
                    src={project.icon}
                    alt={`${project.name}-project Icons`}
                    height={20}
                    width={20}
                  />
                  <Text fontWeight="bold" color="gray.700">
                    {project.name}
                  </Text>
                </Flex>
              </Table.Cell>

              {/* MEMBERS */}
              {callForm === "dashboard" && (
                <Table.Cell py={2}>
                  <AvatarGroup size="sm">
                    {project.members.map((avatar, i) => (
                      <Avatar.Root
                        key={i}
                        size="sm"
                        ml={i === 0 ? 0 : "-10px"} 
                        border="2px solid white"
                        borderRadius="full"
                      >
                        <Avatar.Fallback name="User" />
                        <Avatar.Image
                          src={avatar}
                          h="28px"
                          w="28px"
                          objectFit="cover"
                        />
                      </Avatar.Root>
                    ))}
                  </AvatarGroup>
                </Table.Cell>
              )}

              {/* BUDGET */}
              <Table.Cell py={2}>
                <Text color="gray.700" fontWeight="bold">
                  {project.budget}
                </Text>
              </Table.Cell>

              {/* STATUS */}
              <Table.Cell textAlign="center" py={2}>
                <Text fontWeight="bold">{project.status}</Text>
              </Table.Cell>

              {/* COMPLETION */}
              <Table.Cell minW="160px" py={2}>
                <Box>
                  <Text
                    fontSize="14px"
                    fontWeight="bold"
                    color="teal.400"
                    mb={1}
                  >
                    {project.completion}%
                  </Text>

                  <Progress.Root value={project.completion}>
                    <Progress.Track
                      bg="gray.200"
                      h="4px"
                      w={"150px"}
                      borderRadius="full"
                    >
                      <Progress.Range bg="teal.400" />
                    </Progress.Track>
                  </Progress.Root>
                </Box>
              </Table.Cell>

              {/* MENU */}
              {callForm !== "dashboard" && (
                <Table.Cell textAlign="right" py={2}>
                  <Box color="gray.500" cursor="pointer">
                    <FiMoreVertical />
                  </Box>
                </Table.Cell>
              )}
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
}
