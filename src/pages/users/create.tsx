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
import { yupResolver } from "@hookform/resolvers/yup";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import * as yup from "yup";
import { User } from "../../@types/api";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { api } from "../../services/api";
import { queryClient } from "../../services/queryClient";

interface CreateUserFormData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const createUserFormSchema = yup.object({
  name: yup.string().required("${label} obrigatório").label("Nome"),
  email: yup
    .string()
    .required("${label} obrigatório")
    .email("${label} inválido")
    .label("E-mail"),
  password: yup
    .string()
    .required("${label} obrigatória")
    .min(6, "No mínimo 6 caracteres")
    .label("Senha"),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas precisam ser iguais")
    .label("Confirmação da senha"),
});

const CreateUser: NextPage = () => {
  const router = useRouter();

  const createUser = useMutation(
    async (user: CreateUserFormData) => {
      const response = await api.post<{ user: User }>("users", {
        user,
      });

      return response.data.user;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("users");
        router.push("/users");
      },
    },
  );

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<CreateUserFormData>({
    resolver: yupResolver(createUserFormSchema),
  });

  const handleCreateUser: SubmitHandler<CreateUserFormData> = useCallback(
    async values => {
      await createUser.mutateAsync(values);
    },
    [],
  );

  return (
    <Box>
      <Header />

      <Flex w="100%" my={6} maxW={1480} mx="auto" px={6}>
        <Sidebar />

        <Box
          as="form"
          flex={1}
          borderRadius={8}
          bgColor="gray.800"
          p={[6, 8]}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">
            Criar usuário
          </Heading>

          <Divider my={[4, 6]} borderColor="gray.700" />

          <VStack spacing={[6, 8]}>
            <SimpleGrid spacing={[6, 8]} minChildWidth="240px" w="100%">
              <Input
                type="text"
                label="Nome completo"
                error={errors.name}
                {...register("name")}
              />

              <Input
                type="email"
                label="E-mail"
                error={errors.email}
                {...register("email")}
              />
            </SimpleGrid>

            <SimpleGrid spacing={[6, 8]} minChildWidth="240px" w="100%">
              <Input
                type="password"
                label="Senha"
                error={errors.password}
                {...register("password")}
              />

              <Input
                type="password"
                label="Confirmação da senha"
                error={errors.password_confirmation}
                {...register("password_confirmation")}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt={[6, 8]} justify="flex-end">
            <HStack spacing={4}>
              <Link href="/users" passHref>
                <Button type="button" colorScheme="whiteAlpha">
                  Cancelar
                </Button>
              </Link>

              <Button type="submit" colorScheme="pink" isLoading={isSubmitting}>
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default CreateUser;
