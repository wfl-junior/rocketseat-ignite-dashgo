import { Button, Flex, Stack } from "@chakra-ui/react";
import { NextPage } from "next";
import { useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../components/Form/Input";

interface FormValues {
  email: string;
  password: string;
}

const SignIn: NextPage = () => {
  const { register, handleSubmit, formState } = useForm<FormValues>();

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
          <Input type="email" label="E-mail" {...register("email")} />
          <Input type="password" label="Senha" {...register("password")} />
        </Stack>

        <Button
          type="submit"
          mt={6}
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
};

export default SignIn;
