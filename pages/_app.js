import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <main style={{ minHeight: "calc(100vh - 6rem)" }}>
        <Component {...pageProps} />;
      </main>
    </ChakraProvider>
  );
}

export default MyApp;
