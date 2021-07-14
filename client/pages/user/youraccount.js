import { Unauthorized } from "http-errors";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Authenticated from "../../layouts/authenticated";
import { ToastContainer, toast } from "react-toastify";

export default function YourAccount() {
  const router = useRouter();
  const authStatus = useSelector((state) => state.authStatus);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    console.log("returned");
    const getInfo = async () => {
      try {
        const response = await fetch("http://localhost:5000/user/public-info", {
          method: "GET",
          headers: { token: localStorage.token },
        });
        const parseRes = await response.json();
        setName(parseRes.user_name);
        setEmail(parseRes.user_email);
      } catch (err) {
        console.log(err);
      }
    };
    getInfo();
  }, []);

  useEffect(() => {
    if (authStatus === false) {
      router.push("/account/login");
    }
  }, [authStatus, router]);

  const changeInfo = async (event) => {
    event.preventDefault();
    const body = {
      user_name: name,
      user_email: email,
    };
    const response = await fetch("http://localhost:5000/user/public-info", {
      method: "POST",
      headers: {
        token: localStorage.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const parseResponse = await response.json();
    if (parseResponse.value === true) {
      toast("Info Changed");
    } else if (parseResponse.value === "invalid email") {
      toast("Enter a valid email!");
    } else {
      toast("It broke :(");
    }
  };

  return (
    <Authenticated>
      <div className="flex flex-col items-center">
        <h1 className="font-sans font-semibold text-5xl py-5">Your Info</h1>
        <form onSubmit={changeInfo} className="space-y-4">
          <div>
            <h3 className="font-sans text-lg pt-2">Name</h3>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="border-gray-100 rounded w-96"
            ></input>
          </div>
          <div className="flex flex-col">
            <h3 className="font-sans text-lg pt-2">Email</h3>
            <input
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="border-gray-100 pt-2 w-96 pb-5"
            ></input>
            <button
              type="submit"
              className="py-3 bg-purple-500 rounded text-white"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </Authenticated>
  );
}
