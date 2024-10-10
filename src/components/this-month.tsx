import { Product } from "@/types/interface";
import ProductCard from "./product-card";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

export default function ThisMonth() {
  const products: Product[] = [
    {
      discount: "30%",
      image: "/jacket.png",
      name: "The north coat",
      discountedPrice: "$260",
      withoutDiscount: "$360",
      stars: [<FaStar key="star1" />, <FaStar key="star2" />, <FaStar key="star3" />, <FaStar key="star4" />, <FaStar key="star5" />],
      rating: "(65)",
    },
    {
      discount: "30%",
      image: "/purse.png",
      name: "Gucci duffle bag",
      discountedPrice: "$960",
      withoutDiscount: "$1160",
      stars: [
        <FaStar key="star1" />,
        <FaStar key="star2" />,
        <FaStar key="star3" />,
        <FaStar key="star4" />,
        <FaStarHalfAlt key="star5" />,
      ],
      rating: "(65)",
    },
    {
      discount: "30%",
      image: "/cooler.png",
      name: "RGB liquid CPU Cooler",
      discountedPrice: "$160",
      withoutDiscount: "$170",
      stars: [
        <FaStar key="star1" />,
        <FaStar key="star2" />,
        <FaStar key="star3" />,
        <FaStar key="star4" />,
        <FaStarHalfAlt key="star5" />,
      ],
      rating: "(65)",
    },
    {
      discount: "30%",
      image: "/shelf.png",
      name: "Small BookSelf",
      discountedPrice: "$360",
      withoutDiscount: "$370",
      stars: [<FaStar key="star1" />, <FaStar key="star2" />, <FaStar key="star3" />, <FaStar key="star4" />, <FaStar key="star5" />],
      rating: "(65)",
    },
  ];

  return (
    <section className="mt-16">
      <div className="ml-20 flex gap-4 items-center">
        <div className="bg-red-500 w-5 h-10 rounded-md"></div>
        <p className="text-red-500 font-semibold">This Month</p>
      </div>
      <h2 className="ml-20 font-semibold text-4xl mt-6">
        Best Selling Products
      </h2>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-7 mx-20">
        {products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </section>
  );
}