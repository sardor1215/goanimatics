import "../css/index.css";
import Head from "next/head";
import Layout from "@components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head></Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
