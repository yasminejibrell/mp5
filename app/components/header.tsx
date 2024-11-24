import Link from "next/link";

export default function Header() {
    const linkStyling = "p-1 m-2 text-x1 font-semibold hover:underline"

    return (
        <header className="flex justify-between items-center h-20 text-red-700 bg-red-200">
            <Link href="/" className="text-2xl font-semibold p-4 hover:underline">
                    Yasmine Jibrell's URL Shortener
            </Link>
            <nav className="p-2 m-4">
                <Link href="/" className={linkStyling}>
                    Home
                </Link>
                <Link href="/about" className={linkStyling}>
                    About
                </Link>
                <Link href="/links" className={linkStyling}>
                    Links
                </Link>
            </nav>
        </header>
    );

}