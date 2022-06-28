import { Flex, Icon, Input, useBreakpointValue } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

export const SearchBox: React.FC = () => {
  const showSearchBox = useBreakpointValue({
    base: false,
    lg: true,
  });

  if (!showSearchBox) {
    return null;
  }

  return (
    <Flex
      as="label"
      flex={1}
      py={4}
      px={8}
      ml={6}
      maxW={400}
      alignSelf="center"
      color="gray.200"
      position="relative"
      bgColor="gray.800"
      borderRadius="full"
      align="center"
    >
      <Input
        color="gray.50"
        variant="unstyled"
        placeholder="Buscar na plataforma"
        // px={4}
        mr={4}
        _placeholder={{ color: "gray.400" }}
      />

      <Icon as={RiSearchLine} fontSize={20} />
    </Flex>
  );
};
