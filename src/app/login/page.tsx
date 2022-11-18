"use client";
import { useCallback, useState } from "react";
import cookie from "js-cookie";

import clientService from "@/lib/clientService";

export default function Page() {
  const [loading, setLoading] = useState(false);

  const login = useCallback(async () => {
    // setLoading(true);
    try {
      const res = await clientService("login");
      console.log(res);
      if (res.success) {
        cookie.set("token", res.token, { expires: 1 });
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      {loading ? (
        <>loading</>
      ) : (
        <>
          <div>Login</div>
          <button onClick={login}>Click Me</button>
        </>
      )}
    </>
  );
}
