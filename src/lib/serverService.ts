import "server-only";

import { cookies } from "next/headers";

type Service = any;
type Data = any;

const serverService = async (service: Service, data?: Data) => {
  const nextCookies = cookies();
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/eventbus`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: nextCookies.get("token")?.value
        ? `Bearer ${nextCookies.get("token")?.value}`
        : "",
    },
    body: JSON.stringify({ service, ...data }),
  });
  data = await res.json();
  if (!data.success || data.error) {
    if (data.error === "Invalad Token") {
      window.location.replace("/logout");
    } else {
      throw new Error(data.error || "Something went wrong");
    }
  }
  return data;
};

export default serverService;
