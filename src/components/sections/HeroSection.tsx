import React from 'react';
import { heroFeatures } from '../../data/features';

export function HeroSection() {
  return (
    <section className="box-border">
      <div className="box-border px-3 py-6 md:px-5 md:py-12">
        <div className="box-border max-w-screen-xl w-full mx-auto">
          <div className="box-border gap-x-6 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-6 md:grid-cols-[repeat(10,minmax(0px,1fr))]">
            <div className="box-border gap-x-4 flex flex-col col-end-[span_1] col-start-[span_1] justify-center gap-y-4 md:gap-x-6 md:col-end-[span_6] md:col-start-[span_6] md:gap-y-6">
              <div className="box-border gap-x-2 flex flex-col gap-y-2">
                <div className="items-center box-border gap-x-2 flex justify-center gap-y-2 md:justify-start">
                  <img src="https://c.animaapp.com/mdqy9698UVjprT/assets/121.png" alt="" sizes="(min-width: 1000px) 90px, 64px" className="aspect-[auto_100_/_18] box-border max-w-full w-16 md:w-[90px]" />
                  <div className="text-black text-xs font-medium box-border leading-[18px] md:text-sm md:leading-[21px]">
                    4.85 out of 5 based on 20,000+ Reviews
                  </div>
                </div>
                <h1 className="text-black text-3xl font-bold box-border leading-[37.5px] text-center md:text-[50px] md:leading-[62.5px] md:text-left">
                  Finally! Enjoy a Lasting <strong className="text-3xl font-black box-border leading-[37.5px] text-center text-nowrap md:text-[50px] md:leading-[62.5px] md:text-left">Hair-Free</strong>
                  and Smooth Face Without Damaging Your Skin
                </h1>
              </div>
              <div className="box-border block min-h-[auto] min-w-[auto] mx-auto md:hidden md:min-h-0 md:min-w-0">
                <img src="https://c.animaapp.com/mdqy9698UVjprT/assets/179.png" alt="" sizes="500px" className="aspect-[auto_600_/_612] box-border max-h-80 max-w-full object-contain w-full" />
              </div>
              <div className="text-black text-lg font-medium box-border leading-[22.5px] text-left md:text-2xl md:leading-[30px]">
                <p className="text-lg box-border leading-[22.5px] md:text-2xl md:leading-[30px]">
                  <strong className="text-lg font-bold box-border leading-[22.5px] md:text-2xl md:leading-[30px]">Pluxy™ Epil Pro 3.0's Advanced Precision Technology</strong>
                  Gently Removes Coarse, Fine, and Hard-To-See Facial Hair from the Root - Keeping Skin Smooth for up to 4 Weeks for Women 40+
                </p>
              </div>
              <div className="items-center box-border gap-x-10 flex justify-between gap-y-10">
                <div className="box-border gap-x-3 flex flex-col max-w-[420px] gap-y-3 mx-auto md:max-w-none md:mx-0">
                  {heroFeatures.map((feature) => (
                    <div key={feature.id} className="items-center box-border gap-x-2 flex justify-start gap-y-2">
                      <img src={feature.iconUrl} alt="" sizes="20px" className="aspect-[auto_20_/_20] box-border max-w-full w-5" />
                      <div className="text-black text-lg font-medium box-border leading-[27px] md:text-xl md:leading-[30px]">
                        {feature.text}
                      </div>
                    </div>
                  ))}
                </div>
                <img src="https://c.animaapp.com/mdqy9698UVjprT/assets/156.png" alt="" sizes="150px" className="aspect-[auto_150_/_134] box-border hidden max-w-full min-h-0 min-w-0 w-[150px] md:block md:min-h-[auto] md:min-w-[auto]" />
              </div>
              <div className="box-border max-w-[420px] w-full mx-auto md:mx-0">
                <a href="#products" className="relative text-white text-base font-bold items-center bg-[linear-gradient(0deg,rgb(122,94,197)_0%,rgb(144,111,232)_60%,rgb(178,149,254)_100%)] box-border gap-x-2 inline-flex justify-center tracking-[0.6px] leading-[22px] gap-y-2 uppercase w-full z-[1] overflow-hidden px-[15px] py-5 rounded-full md:text-xl md:leading-7 md:w-fit md:px-16">
                  GET SMOOTH SKIN NOW
                  <img src="https://c.animaapp.com/mdqy9698UVjprT/assets/icon-5.svg" alt="Icon" className="text-base box-border h-[18px] leading-[22px] w-[18px] md:text-xl md:leading-7" />
                </a>
              </div>
            </div>
            <div className="items-center box-border hidden flex-col col-end-[span_1] col-start-[span_1] justify-center min-h-0 min-w-0 md:flex md:col-end-[span_4] md:col-start-[span_4] md:min-h-[auto] md:min-w-[auto]">
              <img src="https://c.animaapp.com/mdqy9698UVjprT/assets/190.png" alt="" sizes="(min-width: 1000px) 700px, 100vw" className="aspect-[auto_900_/_1120] box-border max-h-[600px] max-w-full min-h-0 min-w-0 object-contain w-full md:min-h-[auto] md:min-w-[auto]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
