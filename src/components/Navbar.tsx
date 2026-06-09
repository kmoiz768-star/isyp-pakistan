import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center h-24">

          <Image
            src="/images/isyp-logo.png"
            alt="ISYP Pakistan"
            width={260}
            height={80}
            priority
          />

          <div className="hidden lg:flex items-center gap-10 text-[#0e0524] font-medium">

            <Link href="/about">About</Link>
            <Link href="/research">Research</Link>
            <Link href="/publications">Publications</Link>
            <Link href="/events">Events</Link>
            <Link href="/experts">Experts</Link>
            <Link href="/contact">Contact</Link>

          </div>

        </div>

      </div>

    </nav>
  );
}