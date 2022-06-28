import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { forwardRef } from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, ...props }, ref) => (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={props.name}>{label}</FormLabel>}

      <ChakraInput
        ref={ref}
        id={props.name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{ bgColor: "gray.900" }}
        size="lg"
        {...props}
      />

      {!!error?.message && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  ),
);
