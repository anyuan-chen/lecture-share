import Head from "next/head";
import Link from "next/link";

export default function Authenticated({ children, ...props }) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <header>
        <nav>
          <ul>
            <li>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}
