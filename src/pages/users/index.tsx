import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";
import { NextPage } from "next";
import Link from "next/link";
import { Fragment } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { useQuery } from "react-query";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

const Users: NextPage = () => {
  const { isLoading, isError } = useQuery("users", async () => {
    const response = await fetch("/api/users");
    return response.json();
  });

  const isMediumBreakpoint = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Box>
      <Header />

      <Flex w="100%" my={6} maxW={1480} mx="auto" px={6}>
        <Sidebar />

        <Box flex={1} borderRadius={8} bgColor="gray.800" p={8}>
          <Flex mb={8} justify="space-between" align="center">
            <Heading size={["md", "lg"]} fontWeight="normal">
              Usuários
            </Heading>

            <Link href="/users/create" passHref>
              <Button
                as="a"
                href="#"
                size="sm"
                fontSize={["xs", "sm"]}
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize={[16, 20]} />}
              >
                Criar novo usuário
              </Button>
            </Link>
          </Flex>

          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : isError ? (
            <Flex justify="center">Falha ao obter dados dos usuários. 😰</Flex>
          ) : (
            <Fragment>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th px={[4, 6]} color="gray.300" w={8}>
                      <Checkbox colorScheme="pink" />
                    </Th>

                    <Th>Usuário</Th>
                    {isMediumBreakpoint && (
                      <Fragment>
                        <Th>Data de cadastro</Th>
                        <Th w={8}></Th>
                      </Fragment>
                    )}
                  </Tr>
                </Thead>

                <Tbody>
                  {Array.from({ length: 3 }, (_, i) => i).map(number => (
                    <Tr key={number}>
                      <Td px={[4, 6]}>
                        <Checkbox colorScheme="pink" />
                      </Td>

                      <Td>
                        <Box>
                          <Text fontWeight="bold">Wallace Júnior</Text>

                          <Text fontSize="sm" color="gray.300">
                            wflj1997@gmail.com
                          </Text>
                        </Box>
                      </Td>

                      {isMediumBreakpoint && <Td>28 de Junho, 2022</Td>}

                      {isMediumBreakpoint && (
                        <Td>
                          <Button
                            as="a"
                            href="#"
                            size="sm"
                            fontSize="sm"
                            colorScheme="purple"
                            leftIcon={<Icon as={RiPencilLine} fontSize={16} />}
                          >
                            Editar
                          </Button>
                        </Td>
                      )}
                    </Tr>
                  ))}
                </Tbody>
              </Table>

              <Pagination />
            </Fragment>
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default Users;
