import React from 'react';

export function DiscountSection() {
  return (
    <section className="box-border">
      <div className="relative box-border">
        <img src="https://c.animaapp.com/mdqy9698UVjprT/assets/120.png" alt="" className="absolute box-border max-w-full mx-auto -top-1 inset-x-0" />
        <div className="bg-orange-500/10 box-border">
          <div className="relative box-border max-w-screen-xl mx-auto px-6 py-10">
            <div className="box-border gap-x-8 grid grid-cols-none justify-center gap-y-8 md:grid-cols-[repeat(5,minmax(0px,1fr))]">
              <div className="box-border col-end-auto col-start-auto md:col-end-[span_2] md:col-start-[span_2]">
                <img src="https://c.animaapp.com/mdqy9698UVjprT/assets/168.png" alt="" className="box-border max-w-full" />
              </div>
              <div className="self-center box-border col-end-auto col-start-auto md:col-end-[span_3] md:col-start-[span_3]">
                <h2 className="text-3xl font-bold box-border leading-9 md:text-[40px] md:leading-[48px]">Save 35% on Your Pluxy Epil Pro 3.0!</h2>
                <p className="box-border tracking-[0.8px] mt-5">No need for discount codes, just place your order and save 35% now!</p>
                <a href="#products" className="relative text-white text-sm font-bold items-center bg-orange-500 box-border gap-x-2 inline-flex justify-center tracking-[0.6px] leading-[22px] gap-y-2 uppercase w-full z-[1] border-orange-500 overflow-hidden mt-7 px-[15px] py-5 rounded-full border-2 border-solid md:text-xl md:leading-7 md:w-auto md:px-16">
                  BETTER SKIN, AT A DISCOUNT!
                  <img src="https://c.animaapp.com/mdqy9698UVjprT/assets/icon-8.svg" alt="Icon" className="text-sm box-border h-4 leading-[22px] md:text-xl md:h-[18px] md:leading-7" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="box-border clear-both"></div>
      </div>
    </section>
  );
}
