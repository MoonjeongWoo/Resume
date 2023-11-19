import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar">
      <div>
        <Link href="/">Home</Link>
      </div>
      <Link href="/aboutme">ABOUT</Link>
      <Link href="/session">Session</Link>
    </div>
  );
}
