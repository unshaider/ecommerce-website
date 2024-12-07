import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerServiceLine } from "react-icons/ri";
import { BiCheckShield } from "react-icons/bi";

export default function Last() {
  return (
    <section className="grid lg:grid-cols-3 gap-[5.5rem] mx-44 my-36">
      <div className="text-center">
        <div className="bg-black rounded-full h-20 w-20 flex items-center justify-center border-8 border-gray-300 mx-[5.313rem] mb-6">
          <TbTruckDelivery className="mb-6 text-white text-4xl mt-5" />
        </div>
        <p className="font-semibold text-xl">FREE AND FAST DELIVERY</p>
        <p className="text-sm">Free delivery for all orders over $140</p>
      </div>
      <div className="text-center">
        <div className="bg-black rounded-full h-20 w-20 flex items-center justify-center border-8 border-gray-300 mx-[5.313rem] mb-6">
          <RiCustomerServiceLine className="mb-6 text-white text-4xl mt-5" />
        </div>
        <p className="font-semibold text-xl">24/7 CUSTOMER SERVICE</p>
        <p className="text-sm">Friendly 24/7 customer support</p>
      </div>
      <div className="text-center">
        <div className="bg-black rounded-full h-20 w-20 flex items-center justify-center border-8 border-gray-300 mx-[5.313rem] mb-6">
          <BiCheckShield className="mb-6 text-white text-4xl mt-5" />
        </div>
        <p className="font-semibold text-xl">MONEY BACK GUARANTEE</p>
        <p className="text-sm">We reurn money within 30 days</p>
      </div>
    </section>
  );
}
