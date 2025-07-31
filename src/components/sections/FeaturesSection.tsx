import React from 'react';
import { productFeatures } from '../../data/features';
import { paymentIcons } from '../../data/paymentIcons';

export function FeaturesSection() {
  return (
    <div className="box-border">
      <div className="relative box-border px-4 py-12 md:px-12 md:py-28">
        <img alt="background image" src="https://c.animaapp.com/mdqy9698UVjprT/assets/188.png" className="absolute box-border h-full max-w-full w-full inset-0" />
        <div className="relative text-zinc-600 box-border tracking-[0.4px] leading-4 max-w-screen-xl mx-auto">
          <h2 className="text-orange-500 text-[26px] font-bold box-border leading-10 text-center mb-[30px] md:text-[40px] md:mb-[60px]">
            6 Reason Why Pluxy Is Perfect For You
          </h2>
          <div role="region" className="relative box-border pb-12 md:pb-0">
            <div className="relative box-border z-0 overflow-hidden">
              <div className="box-border gap-x-[normal] flex grid-cols-none h-full md:gap-x-10 md:grid md:grid-cols-[repeat(3,minmax(0px,1fr))]">
                {productFeatures.map((feature, index) => (
                  <div key={feature.id} className="relative box-border shrink-0 list-none w-full mr-[15px] p-2 md:w-auto md:mr-0 md:pt-10">
                    <div className="bg-white shadow-[rgb(122,94,197)_7px_4px_4px_0px] box-border flex flex-col h-full rounded-[20px]">
                      <div className="relative bg-orange-500 box-border h-auto p-2.5 rounded-t-[20px] md:h-[50px]">
                        <div className="absolute box-border hidden transform-none left-2/4 bottom-0 md:block md:translate-x-[-50.0%]">
                          <div className="relative box-border">
                            <img src="https://c.animaapp.com/mdqy9698UVjprT/assets/27.webp" alt="" className="box-border max-w-full align-bottom w-[100px]" />
                            <span className="absolute text-white text-[50px] font-black box-border block leading-[50px] transform-none left-2/4 bottom-2 md:translate-x-[-50.0%]">{index + 1}</span>
                          </div>
                        </div>
                        <div className="items-center box-border gap-x-2.5 flex gap-y-2.5 md:hidden">
                          <div className="items-center bg-white box-border flex h-[38px] justify-center min-h-[auto] min-w-[38px] w-[38px] rounded-[50px] md:min-h-0">
                            <span className="text-orange-500 text-3xl font-black box-border block leading-[30px] min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">{index + 1}</span>
                          </div>
                          <h3 className="text-white text-xl font-bold box-border leading-[30px] min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
                            {feature.title}
                          </h3>
                        </div>
                      </div>
                      <div className="items-center box-border flex h-full">
                        <div className="items-center box-border gap-x-5 flex h-full gap-y-5 px-5 py-4">
                          <img src={feature.imageUrl} alt="" className="aspect-[auto_80_/_80] box-border hidden h-20 max-w-full min-h-0 min-w-0 align-bottom w-20 md:block md:min-h-[auto] md:min-w-[auto]" />
                          <div className="box-border gap-x-2.5 flex flex-col h-full justify-start gap-y-2.5">
                            <h3 className="text-zinc-800 text-xl font-semibold box-border hidden leading-[25px] min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
                              {feature.title}
                            </h3>
                            <p className="text-black text-base box-border leading-5 md:text-zinc-800 md:text-lg md:leading-[22.5px]">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="box-border text-center mt-8 md:mt-12">
            <a href="#products" className="relative text-white text-sm font-bold items-center bg-orange-500 box-border gap-x-2 inline-flex justify-center tracking-[0.6px] leading-[22px] gap-y-2 uppercase w-full z-[1] border-orange-500 overflow-hidden px-[15px] py-5 rounded-full border-2 border-solid md:text-xl md:leading-7 md:w-auto md:px-16">
              I WANT EASY SMOOTH SKIN NOW
              <img src="https://c.animaapp.com/mdqy9698UVjprT/assets/icon-8.svg" alt="Icon" className="text-sm box-border h-4 leading-[22px] md:text-xl md:h-[18px] md:leading-7" />
            </a>
            <ul className="items-center box-border gap-x-2 flex flex-wrap justify-center list-none gap-y-2 mt-5 pl-0">
              {paymentIcons.map((icon) => (
                <li key={icon.id} className="box-border">
                  <img src={icon.src} alt="Icon" className="box-border h-6 w-[38px]" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
