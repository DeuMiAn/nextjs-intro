import Layout from "../component/Layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps}></Component>
      <span>hello</span>
      {/* 킹치만 _App에서 선언한 글로벌이라면 말은 달라지겠지 */}
      <style global jsx>
        {`
          a {
            color: white;
          }
        `}
      </style>
    </Layout>
  );
}
