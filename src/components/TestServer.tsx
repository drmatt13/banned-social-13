async function getData() {
  const res = await fetch(`${process.env.URL}/api/eventbus`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ service: "test" }),
  });
  return res.json();
}

export default async function TestComponent() {
  await getData();

  return <div>test</div>;
}
