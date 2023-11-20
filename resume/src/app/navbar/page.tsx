import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="m-3">
        <Link href="/">Home</Link>
      </div>
      <div className="m-3">
        <Link href="/aboutme">ABOUT</Link>
      </div>
      <div className="m-3">
        <Link href="/session">Session</Link>
      </div>
    </div>
  );
}
