import Link from "next/link";

function NavTop() {
  return (
    <nav className="flex items-center justify-between px-8 py-6">
      <Link href="/" className="text-2xl font-bold">
        SpyTube
      </Link>
      {/* <div className="flex items-center space-x-6">
        <Link
          href="#"
          className="text-gray-300 hover:text-white transition-colors"
        >
          About
        </Link>
      </div> */}
      <div className="flex items-center space-x-6">
        <a
          href="/login"
          className="text-gray-300 hover:text-white transition-colors"
        >
          Login
        </a>
        <a
          href="/login"
          className="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-100 transition-colors font-medium"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
}

export default NavTop;
