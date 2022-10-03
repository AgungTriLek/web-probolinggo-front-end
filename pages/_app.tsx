import "../styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import { SSRProvider } from "react-bootstrap";

function MyApp({ Component, pageProps }: AppProps) {
  <Head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>;
  return (
    <SSRProvider>
      {" "}
      <Component {...pageProps} />{" "}
    </SSRProvider>
  );
}

export default MyApp;
