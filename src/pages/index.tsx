import { Button, Flex, Stack } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { NextPage } from "next";
import { useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { Input } from "../components/Form/Input";

interface FormValues {
  email: string;
  password: string;
}

const signInFormSchema = yup.object({
  email: yup
    .string()
    .required("${label} obrigatório")
    .email("${label} inválido")
    .label("E-mail"),
  password: yup.string().required("${label} obrigatória").label("Senha"),
});

const SignIn: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<FormValues>({ resolver: yupResolver(signInFormSchema) });

  const handleSignIn: SubmitHandler<FormValues> = useCallback(async values => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(values);
  }, []);

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxW={360}
        bg="gray.800"
        p={8}
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing={4}>
          <Input
            type="email"
            label="E-mail"
            error={errors.email}
            {...register("email")}
          />

          <Input
            type="password"
            label="Senha"
            error={errors.password}
            {...register("password")}
          />
        </Stack>

        <Button
          type="submit"
          mt={6}
          colorScheme="pink"
          size="lg"
          isLoading={isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
};

export default SignIn;
