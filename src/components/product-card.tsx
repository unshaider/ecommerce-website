import { Product } from "@/types/interface";
import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <section className="mt-10">
      <Link href={"#"}>
        <div className="bg-[#f5f5f5] rounded p-[0.625rem] h-[15.625rem]">
          <p className="text-xs text-center bg-red-500 px-3 py-1 rounded w-14 text-white">
            {product.discount}
          </p>
          <div className="flex items-center justify-center h-full w-full">
            <Image src={product.image} alt={product.name} height={180} width={180} />
          </div>
        </div>
        <div className="pt-3 text-left">
          <p className="text-base font-medium mt-2">{product.name}</p>
          <div className="flex gap-3">
            <p className="text-red-500 font-medium text-base mt-2">{product.discountedPrice}</p>
            <p className="line-through font-medium text-base mt-2">{product.withoutDiscount}</p>
          </div>
          <div className="flex gap-2 mt-2">
            <div className="text-yellow-400 flex">
              {product.stars}
            </div>
            <p className="font-semibold text-sm">{product.rating}</p>
          </div>
        </div>
      </Link>
    </section>

  );
};

export default ProductCard;