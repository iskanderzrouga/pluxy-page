import React from 'react';

export function GuaranteeSection() {
  return (
    <section className="box-border">
      <div className="box-border px-4 py-10 md:px-12 md:py-20">
        <div className="bg-orange-50 box-border max-w-screen-xl border-yellow-600/30 mx-auto rounded-3xl border-[5px] border-solid">
          <div className="box-border gap-x-6 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-6 px-6 py-12 md:grid-cols-[repeat(12,minmax(0px,1fr))]">
            <div className="box-border col-end-auto col-start-auto md:col-end-[span_5] md:col-start-[span_5]">
              <img src="https://c.animaapp.com/mdqy9698UVjprT/assets/77.webp" alt="" className="box-border max-w-full" />
            </div>
            <div className="self-center box-border col-end-auto col-start-auto text-center md:col-end-[span_7] md:col-start-[span_7] md:text-left">
              <h2 className="text-neutral-800 text-[32px] font-bold box-border leading-10 text-center mb-5 md:text-[40px]">Customer satisfaction is our #1 priority</h2>
              <p className="text-neutral-800/70 text-base box-border leading-6 text-center md:text-lg md:leading-[27px] md:text-left">
                We make sure you are happy with your new product, you will love it, but in case you don't, you can simply <b className="text-base font-bold box-border leading-6 text-center md:text-lg md:leading-[27px] md:text-left">return it within 90 days</b> and we will give you a <b className="text-base font-bold box-border leading-6 text-center md:text-lg md:leading-[27px] md:text-left">full refund</b> its that simple.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
