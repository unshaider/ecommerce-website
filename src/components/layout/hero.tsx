import Image from "next/image";

const Hero = () => {
  return (
    <section className="col-span-6 grid lg:grid-cols-2 grid-cols-1 bg-black mt-10 mx-20">
      <div className="mx-20 my-14">
        <div className="flex items-center gap-6">
          <Image src={"/apple.png"} width={40} height={49} alt="apple-logo" className="object-cover" />
          <p className="text-[#fafafa] text-base">iPhone 14 Series</p>
        </div>
        <h1 className="text-[#fafafa] font-semibold text-5xl leading-[3.75rem] mt-5">
          Up to 10% off Voucher
        </h1>
        <p className="text-[#fafafa] text-base mt-9 font-medium">Shop Now</p>
      </div>
      <Image src={"/iphone.png"} width={496} height={352} alt="iphone" className="max-w-80 mx-20 my-14 object-cover" />
    </section>
  );
};

export default Hero;
