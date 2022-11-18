import serverService from "@/lib/serverService";

export default async function TestComponent() {
  const data = await serverService("get user");

  return <div>user: {data.user}</div>;
}
