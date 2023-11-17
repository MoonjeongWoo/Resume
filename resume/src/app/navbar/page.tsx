
import Link from "next/link"

export default function Navbar() {
  return (
    <div className="navbar">
      <Link href="/">Home</Link>
      <Link href="/aboutme">ABOUT</Link>
      <Link href="/session">Session</Link>
    </div>
  )
}
