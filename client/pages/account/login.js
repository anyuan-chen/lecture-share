import React, { useState } from "react";
import Unauthenticated from "../../layouts/unauthenticated";

export default function Login() {
  const login = (event) => {
    event.preventDefault();
    console.log("hi! this function is running");
  };
  const [email, setEmail] = useState("name@example.com");
  const [password, setPassword] = useState("");
  const [confirm, setconfirm] = useState("");
  const emailChanged = (event) => {};
  const passwordChanged = (event) => {};
  const confirmChanged = (event) => {};
  return (
    <Unauthenticated>
      <h1>Login</h1>
      <form onSubmit={login}>
        <label>
          Email:
          <input type="text" value={email} onChange={emailChanged} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={passwordChanged} />
        </label>
        <label>
          Confirm Password:
          <input type="password" value={confirm} onChange={confirmChanged} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </Unauthenticated>
  );
}
