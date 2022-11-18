import Cookies from "js-cookie";

type Service = any;
type Data = any;

const clientService = async (service: Service, data?: Data) => {
  const res = await fetch(`http://localhost:3000/api/eventbus`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: Cookies.get("token")
        ? `Bearer ${Cookies.get("token")}`
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

export default clientService;
