import { Box, Button, HStack, Text } from "@chakra-ui/react";

interface PaginationProps {}

export const Pagination: React.FC<PaginationProps> = () => (
  <HStack spacing={6} mt={8} justify="space-between" align="center">
    <Box>
      <Text as="strong">0</Text> - <Text as="strong">10</Text> de{" "}
      <Text as="strong">100</Text>
    </Box>

    <HStack spacing={2}>
      <Button
        size="sm"
        fontSize="xs"
        w={4}
        colorScheme="pink"
        disabled
        _disabled={{ bgColor: "pink.500", cursor: "default" }}
      >
        1
      </Button>

      <Button
        size="sm"
        fontSize="xs"
        w={4}
        bgColor="gray.700"
        _hover={{ bgColor: "gray.500" }}
      >
        2
      </Button>

      <Button
        size="sm"
        fontSize="xs"
        w={4}
        bgColor="gray.700"
        _hover={{ bgColor: "gray.500" }}
      >
        3
      </Button>

      <Button
        size="sm"
        fontSize="xs"
        w={4}
        bgColor="gray.700"
        _hover={{ bgColor: "gray.500" }}
      >
        4
      </Button>
    </HStack>
  </HStack>
);
