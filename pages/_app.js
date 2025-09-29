import App from "next/app";
import Head from "next/head";
import "../assets/css/style.css";
import "../app/globals.css";
import { createContext } from "react";
import { fetchAPI } from "../lib/api";
import { getStrapiMedia } from "../lib/media";

// Store Strapi Global object in context
export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps;

  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href={getStrapiMedia(pageProps.globalData?.favicon) || "/favicon.ico"}
        />
      </Head>
      <GlobalContext.Provider value={pageProps.globalData}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  );
};

export async function getStaticProps() {
  // Fetch global site settings from Strapi
  const globalRes = await fetchAPI("/global");
  console.log("Global Res:", globalRes);
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global: globalRes.data } };
}

export default MyApp;
