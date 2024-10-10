export default function Featured() {
  return (
    <section className="mx-20 ">
      <div className="flex gap-4 items-center">
        <div className="bg-red-500 w-5 h-10 rounded-md"></div>
        <p className="text-red-500 font-semibold">Featured</p>
      </div>
      <h2 className="font-semibold text-4xl mt-6 mb-14">New Arrival</h2>

      <div className="grid lg:grid-cols-2 gap-8">
        <section className="h-[600px]">
          <div className="relative bg-black pt-7 rounded h-[37.5rem]">
            <div className="flex w-full h-full items-end justify-center">
              <img src={"/playstation.png"} alt="PlayStation 5" />
            </div>
            <div className="text-white absolute bottom-0 m-8 w-60">
              <h3 className="font-semibold text-2xl mb-4">PlayStation 5</h3>
              <p className="text-sm mb-4">
                Black and White version of the PS5 coming out on sale.
              </p>
              <p className="font-medium text-base underline">Shop Now</p>
            </div>
          </div>
        </section>

        <section>
          <div className="relative bg-black mb-8 rounded h-[17.75rem]">
            <div className="flex w-full h-full items-center justify-end">
              <img src={"/women.png"} alt="Women’s Collections" />
            </div>
            <div className="text-white absolute bottom-0 m-8 w-64">
              <h3 className="font-semibold text-2xl mb-4">
                Women’s Collections
              </h3>
              <p className="text-sm mb-4">
                Featured woman collections that give you another vibe.
              </p>
              <p className="font-medium text-base underline">Shop Now</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 rounded">
            <div className="relative bg-[#3a3838] mb-8 h-[17.75rem]">
              <div className="flex w-full h-full items-center justify-center">
                <img src={"/speakers.png"} alt="Speakers" />
              </div>
              <div className="text-white absolute bottom-0 m-8">
                <h3 className="font-semibold text-2xl mb-4">Speakers</h3>
                <p className="text-sm mb-4">Amazon wireless speakers</p>
                <p className="font-medium text-base underline">Shop Now</p>
              </div>
            </div>
            <div className="relative bg-[#3a3838] mb-8 rounded h-[17.75rem]">
              <div className="flex w-full h-full items-center justify-center">
                <img src={"/perfume.png"} alt="Perfume" />
              </div>
              <div className="text-white absolute bottom-0 m-8">
                <h3 className="font-semibold text-2xl mb-4">Perfume</h3>
                <p className="text-sm mb-4">GUCCI INTENSE OUD EDP</p>
                <p className="font-medium text-base underline">Shop Now</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
