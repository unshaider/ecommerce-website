import Link from "next/link";
const Header = () => {
  return (
    <header className="bg-black py-3 flex justify-center gap-[14.438rem]">
      <div className="flex gap-2">
        <p className="text-[#fafafa] text-sm ml-[8.438rem]">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <Link href="#" className="text-[#fafafa] text-sm font-semibold ml-2 hover:underline">ShopNow</Link>
      </div>
      <button className="text-sm text-[#fafafa]">English</button>
    </header>
  );
};
export default Header;
