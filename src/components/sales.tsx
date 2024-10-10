import ProductCard from "./product-card";
import { Product } from "../types/interface";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

export default function Sales() {
  const products: Product[] = [
    {
      discount: "-40%",
      image: "/joystick.png",
      name: "HAVIT HV-G92 Gamepad",
      discountedPrice: "$120",
      withoutDiscount: "$160",
      stars: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />],
      rating: "(88)",
    },
    {
      discount: "-35%",
      image: "/keyboard.png",
      name: "AK-900 Wired Keyboard",
      discountedPrice: "$960",
      withoutDiscount: "$1160",
      stars: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />],
      rating: "(75)",
    },
    {
      discount: "-30%",
      image: "/lcd.png",
      name: "IPS LCD Gaming Monitor",
      discountedPrice: "$370",
      withoutDiscount: "$400",
      stars: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />],
      rating: "(99)",
    },
    {
      discount: "-25%",
      image: "/chair.png",
      name: "S-Series Comfort Chair",
      discountedPrice: "$375",
      withoutDiscount: "$400",
      stars: [
        <FaStar />,
        <FaStar />,
        <FaStar />,
        <FaStar />,
        <FaStarHalfAlt />,
      ],
      rating: "(99)",
    },
  ];

  return (
    <section className="mt-36 mx-20">
      <div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3">
          <div>
            <div className="flex gap-4 items-center">
            <div className="bg-red-500 w-5 h-10 rounded-md"></div>
            <p className="text-red-500 font-semibold">Today’s</p>
            </div>
            <div className="flex gap-[5.438rem]">
              <div>
                <h2 className="font-semibold text-4xl mt-6">Flash Sales</h2>
              </div>
            </div>
          </div>

          <div className="flex items-end gap-4 mt-5">
            <div>
              <p className="text-xs">Days</p>
              <h3 className="font-bold text-3xl">03</h3>
            </div>
            <p className="text-red-500 font-bold text-2xl">:</p>
            <div>
              <p className="text-xs">Hours</p>
              <h3 className="font-bold text-3xl">23</h3>
            </div>
            <p className="text-red-500 font-bold text-2xl">:</p>
            <div>
              <p className="text-xs">Minutes</p>
              <h3 className="font-bold text-3xl">19</h3>
            </div>
            <p className="text-red-500 font-bold text-2xl">:</p>
            <div>
              <p className="text-xs">Seconds</p>
              <h3 className="font-bold text-3xl">56</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-7">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
}
