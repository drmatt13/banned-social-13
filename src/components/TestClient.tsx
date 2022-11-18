"use client";
import { use } from "react";
import clientService from "@/lib/clientService";

const dataPromise = clientService("get user");

export default function TestComponent() {
  const data = use(dataPromise);

  return <div>user: {data.user}</div>;
}
