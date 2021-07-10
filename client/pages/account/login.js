import React, { useState } from "react";
import Unauthenticated from "../../layouts/unauthenticated";

export default function Login() {
  const login = (event) => {
    event.preventDefault();
    console.log("hi! this function is running");
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailChanged = (event) => {
    setEmail(event.target.value);
  };
  const passwordChanged = (event) => {
    setPassword(event.target.value);
  };

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
