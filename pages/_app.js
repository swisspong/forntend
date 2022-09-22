import { Hydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [queryClient] = React.useState(()=>new QueryClient({
    defaultOptions:{
      queries:{
        staleTime:60000
      }
    }
  }))

  return (
    <QueryClientProvider client={queryClient} >
      <Hydrate state={pageProps.dehydratedState}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
