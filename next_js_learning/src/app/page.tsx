import Link from "next/link";
import Heading from "./style.module.css";

export default function Home() {
  return (
    <>
      <h1>hello world</h1>
      {/* modular css */}
      <h1 className={Heading.h1}>Home Page</h1>
      <h1 className={Heading.h1}>moduler css</h1>


      {/* linking */}
      <div className="flex gap-2">

        <Link href='/about'>about</Link>
        <Link href='/contact'>contact</Link>
        <Link href='/testing'>testing</Link>
        <p style={{
          background: 'yellow',
          padding: '10px',
          textAlign: 'center'
        }}>hello world</p>
      </div>
    </>
  )
}