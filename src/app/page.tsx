import Aside from "@/components/layout/aside";
import Hero from "@/components/layout/hero";
import Sales from "@/components/layout/sales";
import Button from "@/components/layout/button";
import Categories from "@/components/layout/categories";
import ThisMonth from "@/components/layout/this-month";
import Hero2 from "@/components/layout/hero2";
import Explore from "@/components/layout/explore";
import Featured from "@/components/layout/featured";
import Last from "@/components/layout/last";

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
