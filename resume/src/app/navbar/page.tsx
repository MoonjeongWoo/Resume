import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-neutral-50 shadow-md">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <div className="flex items-center">
                    <Link href="/">
                        <span className="text-gray-800 text-xl font-semibold hover:text-gray-600 cursor-pointer">Home</span>
                    </Link>
                </div>
                <div className="flex items-center space-x-4">
                    <Link href="/">
                        <span className="text-gray-800 hover:text-gray-600 cursor-pointer">Intro</span>
                    </Link>
                    <Link href="/About">
                        <span className="text-gray-800 hover:text-gray-600 cursor-pointer">About me</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
