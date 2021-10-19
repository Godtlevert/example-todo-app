import Head from "next/head";
import Link from "next/link";

import Greeting from "../components/Greeting";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen p-8">
      <Head>
        <title>Example todo app</title>
      </Head>

      <main className="flex-grow">
        <Greeting name="Foo Bar" />

        <hr className="my-4" />

        <nav>
          <ul className="flex space-x-2 underline">
            <li>
              <Link href="/">My notes</Link>
            </li>
            <li>
              <Link href="/add">Add note</Link>
            </li>
          </ul>
        </nav>

        <hr className="my-4" />

        {children}
      </main>

      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
