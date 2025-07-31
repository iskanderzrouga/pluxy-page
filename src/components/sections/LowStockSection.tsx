import React from 'react';

export function LowStockSection() {
  return (
    <div className="box-border">
      <section className="bg-gray-300 box-border px-5 py-10">
        <div className="bg-white box-border max-w-[1000px] w-full mx-auto p-6 rounded-[20px] md:p-10">
          <div className="box-border gap-x-6 flex flex-col gap-y-6 md:gap-x-10 md:gap-y-10">
            <div className="items-center box-border gap-x-[15px] flex gap-y-[15px]">
              <img src="https://c.animaapp.com/mdqy9698UVjprT/assets/52.avif" alt="" className="aspect-[auto_50_/_50] box-border max-w-10 w-full md:max-w-[50px]" />
              <h2 className="text-black text-[26px] font-semibold box-border leading-[32.5px] md:text-4xl md:leading-[45px]">Low Stock</h2>
            </div>
            <p className="text-gray-950 text-lg box-border leading-[22.5px] md:text-[26px] md:leading-[32.5px]">This product has limited availability</p>
            <div className="items-center box-border gap-x-6 flex gap-y-6 md:gap-x-12 md:gap-y-12">
              <div className="bg-stone-300 box-border basis-[0%] grow h-[18px] rounded-[50px] md:h-[30px]">
                <div className="bg-indigo-500 box-border h-[18px] w-[95%] rounded-[50px] md:h-[30px]"></div>
              </div>
              <p className="text-gray-950 text-xl font-bold box-border leading-[25px] md:text-[32px] md:leading-10">
                <span className="text-xl box-border leading-[25px] md:text-[32px] md:leading-10">95</span>% Sold
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
