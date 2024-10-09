import Image from "next/image";
import iphone from "../../public/iphone.png";
import apple from "../../public/apple.png";

const Hero = () => {
  return (
    <section className="col-span-6 grid lg:grid-cols-2 md:grid-cols-1 bg-black mt-10 mx-20">
      <div className="mx-20 my-14">
        <div className="flex items-center gap-6">
          <Image src={apple} alt="apple-logo" />
          <p className="text-[#fafafa] text-base">iPhone 14 Series</p>
        </div>
        <h1 className="text-[#fafafa] font-semibold text-5xl leading-[3.75rem] mt-5">
          Up to 10% off Voucher
        </h1>
        <p className="text-[#fafafa] text-base mt-9 font-medium">Shop Now</p>
      </div>
      <Image src={iphone} alt="iphone" width={320} height={250} className="mx-20 my-14" />
    </section>
  );
};

export default Hero;
