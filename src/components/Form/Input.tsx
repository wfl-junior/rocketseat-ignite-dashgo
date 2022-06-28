import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { forwardRef } from "react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, ...props }, ref) => (
    <FormControl>
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
    </FormControl>
  ),
);
