import Link from "next/link";

// componenta
import TestClient from "@/components/TestClient";
import TestServer from "@/components/TestServer";

export default function Home() {
  return (
    <>
      <div>home</div>
      {/* @ts-expect-error Server Component */}
      <TestServer />
      {/* @ts-expect-error Server Component */}
      <TestServer />
      {/* @ts-expect-error Server Component */}
      <TestServer />
      {/* @ts-expect-error Server Component */}
      <TestServer />
      {/* @ts-expect-error Server Component */}
      <TestServer />
      {/* @ts-expect-error Server Component */}
      <TestServer />
      {/* <TestClient /> */}
      <Link href="/logout" replace={true}>
        Logout
      </Link>
    </>
  );
}