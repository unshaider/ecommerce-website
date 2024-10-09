import Image from "next/image";
import speaker from "../../public/speaker.png";

export default function Hero2() {
  return (
    <section className="m-20 bg-black text-white grid lg:grid-cols-2 p-16">
      <div>
        <h3 className="text-base font-semibold text-green-500 mb-8">Categories</h3>
        <h1 className="font-semibold text-5xl mb-8">
          Enhance Your <p> Music Experience</p>
        </h1>

        <div className="flex gap-6 mb-10">
          <div className="w-16 h-16 rounded-[50%] bg-white text-black">
            <p className="text-center font-semibold text-base mt-2">23</p>
            <p className="text-center text-xs">Hours</p>
          </div>
          <div className="w-16 h-16 rounded-[50%] bg-white text-black">
            <p className="text-center font-semibold text-base mt-2">05</p>
            <p className="text-center text-xs">Days</p>
          </div>
          <div className="w-16 h-16 rounded-[50%] bg-white text-black">
            <p className="text-center font-semibold text-base mt-2">59</p>
            <p className="text-center text-xs">Minutes</p>
          </div>
          <div className="w-16 h-16 rounded-[50%] bg-white text-black">
            <p className="text-center font-semibold text-base mt-2">35</p>
            <p className="text-center text-xs">Seconds</p>
          </div>
        </div>
        <button className="bg-green-500 hover:bg-red-400 px-12 py-4 rounded">Buy Now!</button>
      </div>
        <Image src={speaker} alt="speaker" height={330} width={568} className="mt-10" />
    </section>
  );
}
