import { Box, Stack, Text } from "@chakra-ui/react";

interface NavSectionProps {
  title: string;
  children: React.ReactNode;
}

export const NavSection: React.FC<NavSectionProps> = ({ title, children }) => (
  <Box>
    <Text
      fontWeight="bold"
      color="gray.400"
      fontSize="small"
      textTransform="uppercase"
    >
      {title}
    </Text>

    <Stack spacing={4} mt={8} align="stretch">
      {children}
    </Stack>
  </Box>
);
