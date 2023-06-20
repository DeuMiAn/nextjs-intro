import Head from "next/head";
import Seo from "../component/Seo";

export default function Home() {
  return (
    <div>
      <Seo title={"Home"} />
      <h1>hello</h1>
      {/* global은 같은페이지 네에서만 적용되는것  */}
      <style global jsx>
        {`
          a {
            color: white;
          }
        `}
      </style>
    </div>
  );
}
