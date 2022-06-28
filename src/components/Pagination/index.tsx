import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export const Pagination: React.FC = () => (
  <Stack
    direction={["column", "row"]}
    spacing={6}
    mt={8}
    justify="space-between"
    align="center"
  >
    <Box>
      <Text as="strong">0</Text> - <Text as="strong">10</Text> de{" "}
      <Text as="strong">100</Text>
    </Box>

    <HStack spacing={2}>
      <PaginationItem isActive pageNumber={1} />
      <PaginationItem pageNumber={2} />
      <PaginationItem pageNumber={3} />
      <PaginationItem pageNumber={4} />
      <PaginationItem pageNumber={5} />
      <PaginationItem pageNumber={6} />
    </HStack>
  </Stack>
);
