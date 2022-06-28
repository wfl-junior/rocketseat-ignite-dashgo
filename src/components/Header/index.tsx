import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawerContext } from "../../contexts/SidebarDrawerContext";
import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export const Header: React.FC = () => {
  const { onOpen } = useSidebarDrawerContext();
  const isLargeBreakpoint = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h={20}
      mx="auto"
      mt={4}
      px={6}
      align="center"
    >
      {!isLargeBreakpoint && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} fontSize={24} />}
          fontSize={24}
          variant="unstyled"
          onClick={onOpen}
          mr={2}
          display="flex"
          alignItems="center"
          justifyContent="center"
        />
      )}

      <Logo />
      {isLargeBreakpoint && <SearchBox />}

      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileData={isLargeBreakpoint} />
      </Flex>
    </Flex>
  );
};
