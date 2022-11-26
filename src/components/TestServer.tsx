import serverService from "@/lib/serverService";

async function getData() {
  const data = await fetch(`${process.env.URL}/api/eventbus`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      service: "test",
    }),
  });
  return data.json();
}

export default async function TestComponent() {
  // const data = await serverService("get user");
  const { data } = await getData();

  return <div>data: {data}</div>;
}
