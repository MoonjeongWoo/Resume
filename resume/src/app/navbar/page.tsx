import Link from "next/link"
export default function Navbar(){
    return(
        <div>
            <Link href="/">Home</Link>
            <Link href="/">Intro</Link>
            <Link href="/About">About me</Link>
        </div>
    )
}