import React, { useState } from "react";
import Unauthenticated from "../../layouts/unauthenticated";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAppContext } from "../../context/state";

export default function Login() {
  const authStatus = store.getState();
  const router = useRouter();
  const appContext = useAppContext();
  const login = async (event) => {
    event.preventDefault();
    const body = { email, password };
    try {
      const response = await fetch("http://localhost:5000/account/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const parseRes = await response.json();
      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);
        
      } else {
        
      }
    } catch (err) {
      console.error(err.message);
    }
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailChanged = (event) => {
    setEmail(event.target.value);
  };
  const passwordChanged = (event) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    if (store.getState() == true) {
      router.push("/");
    }
  }, [authStatus, router]);

  return (
    <Unauthenticated title="Log In">
      <div className="flex flex-col items-center">
        <div>
          <h1 className="font-sans font-semibold text-5xl py-5">Login</h1>
          <form onSubmit={login} className="flex flex-col space-y-4">
            <div className="flex flex-col">
              <label>Email Address</label>
              <input
                type="text"
                value={email}
                onChange={emailChanged}
                className="border-gray-300 rounded w-96"
              />
            </div>
            <label className="flex flex-col">
              Password
              <input
                type="password"
                value={password}
                onChange={passwordChanged}
                className="border-gray-300 rounded w-96"
              />
            </label>
            <button
              type="submit"
              className="py-3 bg-purple-500 rounded text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </Unauthenticated>
  );
}
