import { ChakraProvider } from "@chakra-ui/react";
import { NextPage } from "next";
import { AppProps } from "next/app";
import Head from "next/head";
import { Fragment } from "react";
import { theme } from "../styles/theme";

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
  <Fragment>
    <Head>
      <title>dashgo</title>
    </Head>

    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  </Fragment>
);

export default App;
