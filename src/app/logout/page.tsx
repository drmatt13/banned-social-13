"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookie from "js-cookie";

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    Cookie.remove("token");
    router.replace("/login");
  });

  return <div>logging out</div>;
}
