async function getData() {
  const res = await fetch(`${process.env.URL}/api/eventbus`);
  return res.json();
}

export default async function TestComponent() {
  const data = await getData();

  return <div>test</div>;
}
