// import serverService from "@/lib/serverService";

import { cookies } from "next/headers";

type Service = any;
type Data = any;

async function getData(service: Service, data?: Data) {
  const nextCookies = cookies();
  const res = await fetch(`${process.env.URL}/api/eventbus`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: nextCookies.get("token")?.value
        ? `Bearer ${nextCookies.get("token")?.value}`
        : "",
    },
    body: JSON.stringify({ service, ...data }),
  });
  return res.json();
}

export default async function TestComponent() {
  // const data = await serverService("get user");
  const { data } = await getData("test");

  return <div>data: {data}</div>;
}
