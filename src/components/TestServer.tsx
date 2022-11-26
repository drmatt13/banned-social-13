import serverService from "@/lib/serverService";

async function getData() {
  const data = await fetch("http://jsonplaceholder.typicode.com/todos/1");
  return data.json();
}

export default async function TestComponent() {
  // const data = await serverService("get user");
  const data = await getData();

  console.log(data);

  return <div>user: test</div>;
}
