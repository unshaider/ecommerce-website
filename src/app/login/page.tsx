import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const LogIn = () => {
  return (
    <main className="flex mb-[140px] mt-[60px] gap-[129px] items-center">
      <Image src={"/cart.png"} alt="cart" width={805} height={781} />
      <div>
        <h1 className="font-medium text-4xl mb-6">Log in to Exclusive</h1>
        <p>Enter your details below</p>
        <Input
          type="email | number"
          placeholder="Email or Phone Number"
          className="mt-12 mb-10 border-0 rounded-none border-[#D9D9D9] border-b-2"
        />
        <Input
          type="password"
          placeholder="Password"
          className="mb-10 border-0 rounded-none border-[#D9D9D9] border-b-2"
        />
        <div className="flex justify-between items-center">
          <Button className="text-[#fafafa] bg-red-500 rounded py-4 px-6 hover:bg-red-400">
            Log In
          </Button>
          <Link
            className="font-medium hover:underline decoration-2 underline-offset-8"
            href={"/"}
          >
            Forget Password?
          </Link>
        </div>
      </div>
    </main>
  );
};

export default LogIn;
