import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SignUp() {
  return (
    <main className="flex mb-[140px] mt-[60px] gap-[129px] items-center">
      <Image src={"/cart.png"} alt="cart" width={805} height={781} />
      <div>
        <h1 className="font-medium text-4xl mb-6">Create an account</h1>
        <p>Enter your details below</p>
        <Input
          type="text"
          placeholder="Name"
          className="mt-12 mb-10 border-0 rounded-none border-[#D9D9D9] border-b-2"
        />
        <Input
          type="email | number"
          placeholder="Email or Phone Number"
          className="mb-10 border-0 rounded-none border-[#D9D9D9] border-b-2"
        />
        <Input
          type="password"
          placeholder="Password"
          className="mb-10 border-0 rounded-none border-[#D9D9D9] border-b-2"
        />
        <Button className="text-[#fafafa] bg-red-500 rounded w-full py-4 px-6 hover:bg-red-400">
          Create Account
        </Button>
        <Button className="rounded w-full py-4 px-6 bg-white text-black mt-4 border-black border hover:bg-white">
          <Image src={"/google.png"} alt="Google Logo" width={24} height={24} /> Sign up with
          Google
        </Button>
        <div className="flex gap-4 mt-8 justify-center">
            <p>Already have account?</p>
            <Link className="font-medium hover:underline decoration-2 underline-offset-8" href={"/login"}>Log in</Link>
        </div>
      </div>
    </main>
  );
}
