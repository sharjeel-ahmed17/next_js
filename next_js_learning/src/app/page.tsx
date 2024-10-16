import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* <h1>hello world</h1> */}
      <h1>Home Page</h1>


      {/* linking */}
      <div className="flex gap-3">

        <Link href='/about'>about</Link>
        <Link href='/contact'>contact</Link>
        <Link href='/testing'>testing</Link>
      </div>
    </>
  )
}