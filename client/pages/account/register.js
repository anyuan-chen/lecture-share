import React, { useState, useEffect } from "react";
import Unauthenticated from "../../layouts/unauthenticated";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../../actions/actions";
import router, { useRouter } from "next/router";

export default function Register() {
  const dispatch = useDispatch();
  const authStatus = useSelector((state) => state.authStatus);
  const router = useRouter();
  const register = async (event) => {
    event.preventDefault();
    console.log("kekw");
    try {
      const body = {
        name,
        email,
        password,
      };
      const response = await fetch("http://localhost:5000/account/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const parseResponse = await response.json();
      if (parseResponse.token) {
        localStorage.setItem("token", parseResponse.token);
        dispatch(login());
      } else {
        dispatch(logout());
      }
    } catch (err) {
      console.error(err);
    }
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const emailChanged = (event) => {
    setEmail(event.target.value);
  };
  const passwordChanged = (event) => {
    setPassword(event.target.value);
  };
  const confirmChanged = (event) => {
    setConfirm(event.target.value);
  };
  const nameChanged = (event) => {
    setName(event.target.value);
  };
  useEffect(() => {
    if (authStatus === true) {
      router.push("/user/youraccount");
    }
  }, [authStatus, router]);

  useEffect(() => {
    const req = async () => {
      const res = await fetch("http://localhost:5000/account/is-verify", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: localStorage.token,
        },
      });
      const parseRes = await res.json();
      if (parseRes.value) {
        return true;
      } else {
        localStorage.removeItem("token");
        return false;
      }
    };

    if (localStorage.token) {
      if (req()) {
        dispatch(login());
      }
    }
  }, [dispatch]);

  return (
    <Unauthenticated title="Register">
      <div className="flex flex-col items-center">
        <div>
          <h1 className="font-sans font-semibold text-5xl py-5">Register</h1>
          <form onSubmit={register} className="flex flex-col space-y-4">
            <label className="flex flex-col">
              Name
              <input
                type="text"
                value={name}
                onChange={nameChanged}
                className="border-gray-300 rounded w-96"
              />
            </label>
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
            <label className="flex flex-col">
              Confirm Password
              <input
                type="password"
                value={confirm}
                onChange={confirmChanged}
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
