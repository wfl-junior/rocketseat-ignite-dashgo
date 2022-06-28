import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { NextPage } from "next";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

const CreateUser: NextPage = () => (
  <Box>
    <Header />

    <Flex w="100%" my={6} maxW={1480} mx="auto" px={6}>
      <Sidebar />

      <Box flex={1} borderRadius={8} bgColor="gray.800" p={8}>
        <Heading size="lg" fontWeight="normal">
          Criar usuário
        </Heading>

        <Divider my={6} borderColor="gray.700" />

        <VStack spacing={8}>
          <SimpleGrid spacing={8} minChildWidth="240px" w="100%">
            <Input type="text" name="name" label="Nome completo" />
            <Input type="email" name="email" label="E-mail" />
          </SimpleGrid>

          <SimpleGrid spacing={8} minChildWidth="240px" w="100%">
            <Input type="password" name="password" label="Senha" />
            <Input
              type="password"
              name="password_confirmation"
              label="Confirmação da senha"
            />
          </SimpleGrid>
        </VStack>

        <Flex mt={8} justify="flex-end">
          <HStack spacing={4}>
            <Button type="button" colorScheme="whiteAlpha">
              Cancelar
            </Button>

            <Button type="submit" colorScheme="pink">
              Salvar
            </Button>
          </HStack>
        </Flex>
      </Box>
    </Flex>
  </Box>
);

export default CreateUser;
