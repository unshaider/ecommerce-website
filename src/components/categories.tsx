import { CiMobile4 } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { CiHeadphones } from "react-icons/ci";
import { CiCamera } from "react-icons/ci";
import { LuGamepad } from "react-icons/lu";
import Link from "next/link";

export default function Categories() {
  return (
    <section className="mx-20 border-b-2 border-[#d9d9d9] pb-14">
      <div className="flex gap-4 items-center">
        <div className="bg-red-500 w-5 h-10 rounded-md"></div>
        <p className="text-red-500 font-semibold">Categories</p>
      </div>
      <h2 className="font-semibold text-4xl mt-6 mb-14">
        Best Selling Products
      </h2>
      <div className="grid lg:grid-cols-6 md:grid-col-3 sm:grid-cols-2 gap-7">
        <Link
          href={""}
          className="border-2 border-solid border-[#d9d9d9] rounded h-36 hover:bg-red-500 hover:text-white"
        >
          <div className="flex items-center justify-center h-[70%]">
            <CiMobile4 className="text-6xl" />
          </div>
          <p className="text-center text-base">Phones</p>
        </Link>
        <Link
          href={""}
          className="border-2 border-solid border-[#d9d9d9] rounded h-36 hover:bg-red-500 hover:text-white"
        >
          <div className="flex items-center justify-center h-[70%]">
            <HiOutlineComputerDesktop className="text-6xl" />
          </div>
          <p className="text-center text-base">Computers</p>
        </Link>
        <Link
          href={""}
          className="border-2 border-solid border-[#d9d9d9] rounded h-36 hover:bg-red-500 hover:text-white"
        >
          <div className="flex items-center justify-center h-[70%]">
            <BsSmartwatch className="text-6xl" />
          </div>
          <p className="text-center text-base">SmartWatch</p>
        </Link>
        <Link
          href={""}
          className="border-2 border-solid border-[#d9d9d9] rounded h-36 hover:bg-red-500 hover:text-white"
        >
          <div className="flex items-center justify-center h-[70%]">
            <CiCamera className="text-6xl" />
          </div>
          <p className="text-center text-base">Camera</p>
        </Link>
        <Link
          href={""}
          className="border-2 border-solid border-[#d9d9d9] rounded h-36 hover:bg-red-500 hover:text-white"
        >
          <div className="flex items-center justify-center h-[70%]">
            <CiHeadphones className="text-6xl" />
          </div>
          <p className="text-center text-base">HeadPhones</p>
        </Link>
        <Link
          href={""}
          className="border-2 border-solid border-[#d9d9d9] rounded h-36 hover:bg-red-500 hover:text-white"
        >
          <div className="flex items-center justify-center h-[70%]">
            <LuGamepad className="text-6xl" />
          </div>
          <p className="text-center text-base">Gaming</p>
        </Link>
      </div>
    </section>
  );
}
