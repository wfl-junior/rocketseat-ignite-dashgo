import { Avatar, Box, Flex, HStack, Icon, Input, Text } from "@chakra-ui/react";
import {
  RiNotificationLine,
  RiSearchLine,
  RiUserAddLine,
} from "react-icons/ri";

export const Header: React.FC = () => (
  <Flex
    as="header"
    w="100%"
    maxW={1480}
    h={20}
    mx="auto"
    mt={4}
    align="center"
    px={6}
  >
    <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w={64}>
      dashgo
      <Text as="span" ml={1} color="pink.500">
        .
      </Text>
    </Text>

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

    <Flex align="center" ml="auto">
      <HStack
        spacing={8}
        mx={8}
        pr={8}
        py={1}
        color="gray.300"
        borderRightWidth={1}
        borderColor="gray.700"
      >
        <Icon as={RiNotificationLine} fontSize={20} />
        <Icon as={RiUserAddLine} fontSize={20} />
      </HStack>

      <Flex align="center">
        <Box mr={4} textAlign="right">
          <Text>Wallace Júnior</Text>
          <Text color="gray.300" fontSize="small">
            wflj1997@gmail.com
          </Text>
        </Box>

        <Avatar
          size="md"
          name="Wallace Júnior"
          src="https://github.com/wfl-junior.png"
        />
      </Flex>
    </Flex>
  </Flex>
);
