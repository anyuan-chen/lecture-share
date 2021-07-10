import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Unauthenticated from "../layouts/unauthenticated";

export default function Home() {
  return (
    <>
      <Unauthenticated title="Home">
        <div className="h-screen flex flex-col items-center relative">
          <h1 className="font-logo font-thin text-6xl py-10">
            Helping Students Store Files
          </h1>
          <Image
            src="/placeholderlandingscreen.png"
            layout="intrinsic"
            width="1066"
            height="600"
            alt="demo"
            className="py-10"
          ></Image>
          <div className="py-10">
            <Link href="/account/register">
              <a>
                <button className="bg-transparent bg-purple-500 hover:text-purple-700 hover:bg-white font-semibold text-white py-3 px-16 border hover:border-purple-500 border-transparent rounded">
                  Get Started
                </button>
              </a>
            </Link>
          </div>
        </div>
      </Unauthenticated>
    </>
  );
}
