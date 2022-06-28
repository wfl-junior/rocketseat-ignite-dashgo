import { ChakraProvider } from "@chakra-ui/react";
import { NextPage } from "next";
import { AppProps } from "next/app";
import Head from "next/head";
import { Fragment } from "react";
import { SidebarDrawerContextProvider } from "../contexts/SidebarDrawerContext";
import { makeServer } from "../services/mirage";
import { theme } from "../styles/theme";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
  <Fragment>
    <Head>
      <title>dashgo</title>
    </Head>

    <ChakraProvider theme={theme}>
      <SidebarDrawerContextProvider>
        <Component {...pageProps} />
      </SidebarDrawerContextProvider>
    </ChakraProvider>
  </Fragment>
);

export default App;
