import { Unauthorized } from "http-errors";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Authenticated from "../../layouts/authenticated";

export default function YourAccount() {
  const router = useRouter();
  const authStatus = useSelector((state) => state.authStatus);
  
  useEffect(() => {
    const getInfo = () => {
      
    }
  }, [])

  useEffect(() => {
    if (authStatus === false) {
      router.push("/account/login");
    }
  }, [authStatus, router]);

  return (
    <Authenticated>
      <div>
        <h1>Hi!</h1>
      </div>
    </Authenticated>
  );
}
