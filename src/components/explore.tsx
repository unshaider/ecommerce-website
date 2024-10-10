import { Product } from "@/types/interface";
import ProductCard from "./product-card";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import Button from "./button";

export default function Explore() {
  const products: Product[] = [
    {
      discount: "30%",
      image: "/dog-food.png",
      name: "Breed Dry Dog Food",
      discountedPrice: "$100",
      withoutDiscount: "$120",
      stars: [
        <FaStar key="star1" />,
        <FaStar key="star2" />,
        <FaStar key="star3" />,
        <FaStarHalfAlt key="star4" />,
        <FaStarHalfAlt key="star5" />,
      ],
      rating: "(35)",
    },
    {
      discount: "30%",
      image: "/camera.png",
      name: "CANON EOS DSLR Camera",
      discountedPrice: "$360",
      withoutDiscount: "$400",
      stars: [
        <FaStar key="star1" />,
        <FaStar key="star2" />,
        <FaStar key="star3" />,
        <FaStar key="star4" />,
        <FaStarHalfAlt key="star5" />,
      ],
      rating: "(95)",
    },
    {
      discount: "30%",
      image: "/laptop.png",
      name: "ASUS FHD Gaming Laptop",
      discountedPrice: "$700",
      withoutDiscount: "$1000",
      stars: [
        <FaStar key="star1" />,
        <FaStar key="star2" />,
        <FaStar key="star3" />,
        <FaStar key="star4" />,
        <FaStar key="star5" />,
      ],
      rating: "(65)",
    },
    {
      discount: "30%",
      image: "/facewash.png",
      name: "Curology Product Set",
      discountedPrice: "$500",
      withoutDiscount: "$550",
      stars: [
        <FaStar key="star1" />,
        <FaStar key="star2" />,
        <FaStar key="star3" />,
        <FaStar key="star4" />,
        <FaStarHalfAlt key="star5" />,
      ],
      rating: "(145)",
    },
    {
      discount: "30%",
      image: "/car.png",
      name: "Kids Electric Car",
      discountedPrice: "$960",
      withoutDiscount: "$1100",
      stars: [
        <FaStar key="star1" />,
        <FaStar key="star2" />,
        <FaStar key="star3" />,
        <FaStar key="star4" />,
        <FaStar key="star5" />,
      ],
      rating: "(65)",
    },
    {
      discount: "30%",
      image: "/shoes.png",
      name: "Jr. Zoom Soccer Cleats",
      discountedPrice: "$1160",
      withoutDiscount: "$1200",
      stars: [
        <FaStar key="star1" />,
        <FaStar key="star2" />,
        <FaStar key="star3" />,
        <FaStar key="star4" />,
        <FaStar key="star5" />,
      ],
      rating: "(35)",
    },
    {
      discount: "30%",
      image: "/game.png",
      name: "GP11 Shooter USB Gamepad",
      discountedPrice: "$660",
      withoutDiscount: "$700",
      stars: [
        <FaStar key="star1" />,
        <FaStar key="star2" />,
        <FaStar key="star3" />,
        <FaStar key="star4" />,
        <FaStar key="star5" />,
      ],
      rating: "(55)",
    },
    {
      discount: "30%",
      image: "/upper.png",
      name: "Quilted Satin Jacket",
      discountedPrice: "$660",
      withoutDiscount: "$700",
      stars: [
        <FaStar key="star1" />,
        <FaStar key="star2" />,
        <FaStar key="star3" />,
        <FaStar key="star4" />,
        <FaStar key="star5" />,
      ],
      rating: "(55)",
    },
  ];

  return (
    <section className="my-16">
      <div className="ml-20 flex gap-4 items-center">
        <div className="bg-red-500 w-5 h-10 rounded-md"></div>
        <p className="text-red-500 font-semibold">This Month</p>
      </div>
      <h2 className="ml-20 font-semibold text-4xl mt-6">
        Best Selling Products
      </h2>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-7 mx-20">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      <Button />
    </section>
  );
}
