import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Footer, Header } from "../components";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Header />
      <main style={{ minHeight: "calc(100vh - 6rem)" }}>
        <Component {...pageProps} />;
      </main>
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
