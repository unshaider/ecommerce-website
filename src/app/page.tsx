import Aside from "@/components/aside";
import Hero from "@/components/hero";
import Sales from "@/components/sales";
import Button from "@/components/button";
import Categories from "@/components/categories";
import ThisMonth from "@/components/this-month";
import Hero2 from "@/components/hero2";
import Explore from "@/components/explore";
import Featured from "@/components/featured";
import Last from "@/components/last";

const Home = () => {
  return (
    <>
      <div className="grid lg:grid-cols-8">
        <Aside />
        <Hero />
      </div>
      <Sales />
      <Button />
      <Categories />
      <ThisMonth />
      <Hero2 />
      <Explore />
      <Featured />
      <Last />
    </>
  );
};
export default Home;
