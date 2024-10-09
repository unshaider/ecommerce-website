import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";


const Navbar = () => {
  return (
    <nav className="flex justify-around border-b border-[#d9d9d9] pt-10 pb-4 items-end">
      <div>
        <h2 className="font-bold text-2xl">Exclusive</h2>
      </div>
      <ul className="flex gap-12">
        <li>
          <Link
            href={""}
            className="hover:underline decoration-gray-800 decoration-2 underline-offset-8"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href={""}
            className="hover:underline decoration-gray-800 decoration-2 underline-offset-8"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            href={""}
            className="hover:underline decoration-gray-800 decoration-2 underline-offset-8"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href={""}
            className="hover:underline decoration-gray-800 decoration-2 underline-offset-8"
          >
            Sign Up
          </Link>
        </li>
      </ul>
      <div className="flex gap-6 items-center">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="bg-[#f5f5f5] pl-5 pr-12 py-[0.438rem] rounded-[0.25rem] text-sm" />
          <CiHeart className="text-3xl" />
          <CiShoppingCart className="text-3xl" />
      </div>
    </nav>
  );
};
export default Navbar;
