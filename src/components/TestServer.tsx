async function getData() {
  const res = await fetch(`${process.env.URL}/api/test`);
  return res.json();
}

export default async function TestComponent() {
  const data = await getData();

  // console.log(data);

  return <div>{data.success}</div>;
}
