async function getData(service = "", data = {}) {
  const res = await fetch(`${process.env.URL}/api/eventbus`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ service, ...data }),
  });
  return res.json();
}

export default async function TestComponent() {
  await getData("test", { test: "test" });

  return <div>test</div>;
}
