import Link from "next/link";
export default function Unauthenticated({ children }) {
  return (
    <div>
      <main>
        <nav className="border-b-2 border-gray-100">
          <ul className="flex flex-row justify-between items-end py-5">
            <li>
              <Link href="/">
                <a>
                  <h1 className="font-logo text-4xl font-extrabold pl-5">
                    LectureShare
                  </h1>
                </a>
              </Link>
            </li>
            <li>
              <ul className="flex flex-row pr-8">
                <li>
                  <Link href="/account/register">
                    <a className="font-sans px-5 text-xl">Register</a>
                  </Link>
                </li>
                <li>
                  <Link href="/account/login">
                    <a className="font-sans px-5 text-xl">Login</a>
                  </Link>
                </li>
                <li>
                  <button className="font-sans px-5 text-xl">Logout</button>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        {children}
      </main>
      <footer></footer>
    </div>
  );
}
