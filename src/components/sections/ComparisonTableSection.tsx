import React from 'react';

export function ComparisonTableSection() {
  return (
    <section className="box-border">
      <div className="relative box-border px-0 py-12 md:px-12 md:py-24">
        <div className="box-border max-w-screen-xl mx-auto">
          <div className="box-border gap-x-6 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-6 md:gap-x-10 md:grid-cols-[repeat(2,minmax(0px,1fr))] md:gap-y-10">
            <div className="self-center box-border">
              <h2 className="text-white text-3xl font-bold box-border tracking-[0.75px] leading-10 break-words font-ui_sans_serif md:text-4xl md:tracking-[0.9px]">SAVE TIME.<br className="text-3xl box-border tracking-[0.75px] break-words md:text-4xl md:tracking-[0.9px]" />SAVE WATER. <br className="text-3xl box-border tracking-[0.75px] break-words md:text-4xl md:tracking-[0.9px]" />SAVE $$$</h2>
              <a href="#products" className="relative text-white text-sm font-bold items-center bg-orange-500 box-border gap-x-2 hidden justify-center tracking-[0.6px] leading-[22px] gap-y-2 uppercase w-full z-[1] border-orange-500 overflow-hidden mt-8 px-[15px] py-5 rounded-full border-2 border-solid md:text-xl md:inline-flex md:leading-7 md:w-auto md:px-16">
                I WANT BABY SMOOTH SKIN NOW
                <img src="https://c.animaapp.com/mdqy9698UVjprT/assets/icon-8.svg" alt="Icon" className="text-sm box-border h-4 leading-[22px] md:text-xl md:h-[18px] md:leading-7" />
              </a>
            </div>
            <div className="text-white items-center box-border justify-self-end w-full">
              <ul className="box-border gap-x-2 flex flex-col list-none max-w-none gap-y-2 ml-0 pl-0 md:max-w-[460px] md:ml-auto">
                <li className="text-lg items-baseline box-border flex justify-between tracking-[0.9px] leading-7 text-left">
                  <span className="box-border block">Shaving</span>
                  <span className="box-border block basis-[0%] grow border-gray-200 mx-2 border-b-2 border-dashed"></span>
                  <span className="box-border block">$720</span>
                </li>
                <li className="text-lg items-baseline box-border flex justify-between tracking-[0.9px] leading-7 text-left">
                  <span className="box-border block">Waxing</span>
                  <span className="box-border block basis-[0%] grow border-gray-200 mx-2 border-b-2 border-dashed"></span>
                  <span className="box-border block">$2,340</span>
                </li>
                <li className="text-lg items-baseline box-border flex justify-between tracking-[0.9px] leading-7 text-left">
                  <span className="box-border block">Laser</span>
                  <span className="box-border block basis-[0%] grow border-gray-200 mx-2 border-b-2 border-dashed"></span>
                  <span className="box-border block">$2,500</span>
                </li>
              </ul>
              <div className="text-black bg-white box-border max-w-none ml-0 mt-4 p-3 rounded-bl rounded-br rounded-tl rounded-tr md:max-w-[460px] md:ml-auto">
                <div className="text-orange-500 text-lg font-bold items-baseline box-border flex justify-between tracking-[0.9px] leading-7">
                  <span className="box-border block">Pluxy</span>
                  <span className="box-border block basis-[0%] grow border-gray-200 mx-2 border-b-2 border-dashed"></span>
                  <span className="box-border block">Just</span>
                  <span className="box-border block ml-2">$79.95</span>
                </div>
                <p className="text-lg box-border leading-7 text-center">Or Just 4 Payments of $19.98/month</p>
              </div>
              <p className="box-border max-w-none text-center ml-0 mt-3 md:max-w-[460px] md:ml-auto">*All costs evaluated over 3 year period.</p>
            </div>
            <a href="#products" className="relative text-white text-sm font-bold items-center bg-orange-500 box-border gap-x-2 flex justify-center tracking-[0.6px] leading-[22px] min-h-[auto] min-w-[auto] gap-y-2 uppercase w-full z-[1] border-orange-500 overflow-hidden px-[15px] py-5 rounded-full border-2 border-solid md:text-xl md:hidden md:leading-7 md:min-h-0 md:min-w-0 md:w-auto md:px-16">
              I WANT BABY SMOOTH SKIN NOW
              <img src="https://c.animaapp.com/mdqy9698UVjprT/assets/icon-8.svg" alt="Icon" className="text-sm box-border h-4 leading-[22px] md:text-xl md:h-[18px] md:leading-7" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}