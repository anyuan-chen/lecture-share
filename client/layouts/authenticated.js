import Link from "next/link";
import Head from "next/head";
import { logout } from "../actions/actions";
import { useSelector, useDispatch } from "react-redux";
export default function Authenticated({ children, ...props }) {
  const authStatus = useSelector((state) => state.authStatus);
  const dispatch = useDispatch();
  const logout_user = () => {
    localStorage.removeItem("token");
    dispatch(logout());
  };
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <header>
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
                  <button
                    className="font-sans px-5 text-xl"
                    onClick={logout_user}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
      <main className="pb-10">{children}</main>
      <footer className="border-t-2 border-gray-100 pt-10"></footer>
    </div>
  );
}
