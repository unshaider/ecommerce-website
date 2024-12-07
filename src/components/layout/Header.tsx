import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Header = () => {
  return (
    <header className="bg-black flex justify-center h-12 gap-[231px] items-center text-[#fafafa] text-xs lg:text-sm">
      <div className="flex gap-2">
        <p className="ml-[8.438rem] hidden sm:block">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <Link href="#" className="font-semibold ml-2 hover:underline">
          ShopNow
        </Link>
      </div>
      {/* <button>English</button> */}

      <Select>
        <SelectTrigger className="w-[100px] border-none">
          <SelectValue placeholder="English" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="apple">English</SelectItem>
            <SelectItem value="banana">Urdu</SelectItem>
            <SelectItem value="blueberry">Spanish</SelectItem>
            <SelectItem value="grapes">German</SelectItem>
            <SelectItem value="pineapple">Arabic</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </header>
  );
};
export default Header;
