import { Avatar, Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";

export const Profile: React.FC = () => {
  const showProfileData = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr={4} textAlign="right">
          <Text>Wallace Júnior</Text>
          <Text color="gray.300" fontSize="small">
            wflj1997@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Wallace Júnior"
        src="https://github.com/wfl-junior.png"
      />
    </Flex>
  );
};
