import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, useContext, useEffect } from "react";

type SidebarDrawerContextData = UseDisclosureReturn;

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export const useSidebarDrawerContext = () => useContext(SidebarDrawerContext);

interface SidebarDrawerContextProviderProps {
  children: React.ReactNode;
}

export const SidebarDrawerContextProvider: React.FC<
  SidebarDrawerContextProviderProps
> = ({ children }) => {
  const disclosure = useDisclosure();
  const { asPath } = useRouter();

  useEffect(() => {
    disclosure.onClose();
  }, [asPath]);

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
};
