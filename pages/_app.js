import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Header } from "../components";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Header />
      <main style={{ minHeight: "calc(100vh - 6rem)" }}>
        <Component {...pageProps} />;
      </main>
    </ChakraProvider>
  );
}

export default MyApp;
