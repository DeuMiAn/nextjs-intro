import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "../component/Layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <Layout>
        <Component {...pageProps}></Component>
        <span>hello</span>
      </Layout>
    </QueryClientProvider>
  );
}
