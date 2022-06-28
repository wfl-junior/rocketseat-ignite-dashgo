import { Icon, Link, LinkProps, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface NavLinkProps extends LinkProps {
  icon: IconType;
  children: React.ReactNode;
}

export const NavLink: React.FC<NavLinkProps> = ({
  icon,
  children,
  ...props
}) => (
  <Link display="flex" alignItems="center" {...props}>
    <Icon as={icon} fontSize={20} />

    <Text as="span" ml={4} fontWeight="medium">
      {children}
    </Text>
  </Link>
);
