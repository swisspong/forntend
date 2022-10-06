import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import { Provider } from "react-redux";
import Layout from "../components/Layout";
import "../styles/globals.css";
import { store } from "../app/store"
function MyApp({ Component, pageProps }) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60000,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ReactQueryDevtools />
        <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        </Provider>
        
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
