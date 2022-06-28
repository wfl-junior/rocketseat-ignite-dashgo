import { Icon, Link as ChakraLink, LinkProps, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends LinkProps {
  icon: IconType;
  children: React.ReactNode;
  href: string;
}

export const NavLink: React.FC<NavLinkProps> = ({
  icon,
  children,
  href,
  ...props
}) => (
  <ActiveLink href={href} passHref>
    <ChakraLink display="flex" alignItems="center" {...props}>
      <Icon as={icon} fontSize={20} />

      <Text as="span" ml={4} fontWeight="medium">
        {children}
      </Text>
    </ChakraLink>
  </ActiveLink>
);
