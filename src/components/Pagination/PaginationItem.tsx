import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  isActive?: boolean;
  pageNumber: number;
  onPageChange: (page: number) => void;
}

export const PaginationItem: React.FC<PaginationItemProps> = ({
  isActive = false,
  pageNumber,
  onPageChange,
}) => {
  if (isActive) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        w={4}
        colorScheme="pink"
        disabled
        _disabled={{ bgColor: "pink.500", cursor: "default" }}
      >
        {pageNumber}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      w={4}
      bgColor="gray.700"
      _hover={{ bgColor: "gray.500" }}
      onClick={() => onPageChange(pageNumber)}
    >
      {pageNumber}
    </Button>
  );
};
