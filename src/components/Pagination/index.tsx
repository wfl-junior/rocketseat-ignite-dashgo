import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCount: number;
  perPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
  return Array.from({ length: to + 1 - from }, (_, i) => from + i);
}

export const Pagination: React.FC<PaginationProps> = ({
  totalCount,
  perPage,
  currentPage,
  onPageChange,
}) => {
  const lastPage = Math.ceil(totalCount / perPage);

  let firstPageLink = currentPage - siblingsCount;
  let lastPageLink = currentPage + siblingsCount;

  if (firstPageLink < 1) {
    lastPageLink += Math.abs(firstPageLink) + 1;
    firstPageLink = 1;
  }

  if (lastPageLink > lastPage) {
    firstPageLink -= lastPageLink - lastPage;
    lastPageLink = lastPage;
  }

  const pagesArray = generatePagesArray(firstPageLink, lastPageLink);

  return (
    <Stack
      direction={["column", "row"]}
      spacing={6}
      mt={8}
      justify="space-between"
      align="center"
    >
      <Box>
        <Text as="strong">{(currentPage - 1) * perPage + 1}</Text> -{" "}
        <Text as="strong">{perPage * currentPage}</Text> de{" "}
        <Text as="strong">{totalCount}</Text>
      </Box>

      <HStack spacing={2}>
        {firstPageLink > 1 && (
          <PaginationItem pageNumber={1} onPageChange={onPageChange} />
        )}
        {firstPageLink > 2 && (
          <Text as="span" color="gray.300" w={8} textAlign="center">
            ...
          </Text>
        )}

        {pagesArray.map(page => (
          <PaginationItem
            key={page}
            pageNumber={page}
            isActive={page === currentPage}
            onPageChange={onPageChange}
          />
        ))}

        {lastPageLink < lastPage - 1 && (
          <Text as="span" color="gray.300" w={8} textAlign="center">
            ...
          </Text>
        )}
        {lastPageLink < lastPage && (
          <PaginationItem pageNumber={lastPage} onPageChange={onPageChange} />
        )}
      </HStack>
    </Stack>
  );
};
