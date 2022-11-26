async function getData() {
  const res = await fetch("http://jsonplaceholder.typicode.com/users");
  return res.json();
}

export default async function TestComponent() {
  const data = await getData();

  return <div>test</div>;
}
