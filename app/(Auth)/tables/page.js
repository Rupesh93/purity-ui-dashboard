"use client";

import { Avatar, Badge, Box, Flex, Table, Text, Link } from "@chakra-ui/react";
import authorsTableData from "@/app/components/mockData/authorsTableData.json";
import ProjectsTable from "@/app/components/purityUiComponents/projectsTable";

export default function Tables() {
  console.log(authorsTableData);
  return (
    <Box p={6}>
      {/* Authors Table */}
      <Box bg="white" p={6} borderRadius="lg">
        <Text fontSize="lg" fontWeight="bold" mb={4}>
          Authors Table
        </Text>

        <Table.Root variant="simple">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader
                fontSize={"0.7rem"}
                color={"var(--secondaryColor)"}
              >
                AUTHOR
              </Table.ColumnHeader>
              <Table.ColumnHeader
                fontSize={"0.7rem"}
                color={"var(--secondaryColor)"}
              >
                FUNCTION
              </Table.ColumnHeader>
              <Table.ColumnHeader
                fontSize={"0.7rem"}
                color={"var(--secondaryColor)"}
              >
                STATUS
              </Table.ColumnHeader>
              <Table.ColumnHeader
                fontSize={"0.7rem"}
                color={"var(--secondaryColor)"}
              >
                EMPLOYED
              </Table.ColumnHeader>
              <Table.ColumnHeader
                fontSize={"0.7rem"}
                color={"var(--secondaryColor)"}
              ></Table.ColumnHeader>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {authorsTableData.map((author, index) => (
              <Table.Row
                key={index}
                style={{ borderTop: "0.1px solid #E2E8F0" }}
              >
                <Table.Cell py={2}>
                  <Flex align="center" gap={3}>
                    <Avatar.Root shape="rounded" h="40px" w="40px">
                      <Avatar.Fallback name={author.name} />
                      <Avatar.Image src={author.avatar} />
                    </Avatar.Root>

                    <Box>
                      <Text fontWeight="medium">{author.name}</Text>
                      <Text fontSize="sm" color="var(--secondaryColor)">
                        {author.email}
                      </Text>
                    </Box>
                  </Flex>
                </Table.Cell>

                <Table.Cell py={2}>
                  <Text fontWeight="medium">{author.role}</Text>
                  <Text fontSize="sm" color="var(--secondaryColor)">
                    {author.department}
                  </Text>
                </Table.Cell>

                <Table.Cell py={2}>
                  <Badge
                    bg={
                      author.status === "Online"
                        ? "var(--primaryColor)"
                        : "var(--secondaryColor)"
                    }
                    px={3}
                    py={1}
                    borderRadius="8px"
                  >
                    {author.status}
                  </Badge>
                </Table.Cell>

                <Table.Cell py={2}>
                  <Text>{author.employed}</Text>
                </Table.Cell>

                <Table.Cell py={2}>
                  <Link color="gray.500" fontSize="sm" fontWeight={"bold"}>
                    Edit
                  </Link>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Box>
      {/* Projects Table */}
      <Box mt={4}>
        <ProjectsTable />
      </Box>
    </Box>
  );
}
