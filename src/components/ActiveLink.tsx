import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  shouldMatchExactHref?: boolean;
}

export const ActiveLink: React.FC<ActiveLinkProps> = ({
  children,
  shouldMatchExactHref = false,
  ...props
}) => {
  const { asPath } = useRouter();
  const isActive = shouldMatchExactHref
    ? asPath === props.href.toString() || asPath === props.as?.toString()
    : asPath.startsWith(props.href.toString()) ||
      asPath.startsWith(String(props.as));

  return (
    <Link {...props}>
      {cloneElement(children, {
        color: isActive ? "pink.400" : "gray.50",
      })}
    </Link>
  );
};
