import Link from "next/link";
export default function Home() {
  return (
    <>
      <Link href={"/components/Login"}>
        <a>Login</a>
      </Link>
      <Link href={"/components/Test2"}>
        <a>HELLOOwwwwwww2</a>
      </Link>
      {" "}
      <Link href={"/components/ExampleDialog"}>
        <a>ExampleDialog</a>
      </Link>
    </>
  );
}
