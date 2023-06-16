import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link className="hello" href="/">
        Home
      </Link>
      <Link href="/about">About</Link>
      <style jsx>
        {`
          nav {
            background-color: tomato;
          }
          hello {
            text-decoration: none;
          }
        `}
      </style>
    </nav>
  );
}
