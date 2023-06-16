import { useState } from "react";

export default function Home() {
  const [cnt, setCnt] = useState(0);
  return (
    <div>
      <h1>hello {cnt}</h1>
      <button onClick={() => setCnt((pre) => pre + 1)}>+</button>
    </div>
  );
}
