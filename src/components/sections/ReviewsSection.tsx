import React from 'react';
import { customerReviews } from '../../data/reviews';

export function ReviewsSection() {
  return (
    <div className="box-border">
      <div className="box-border pt-4 pb-8 px-3 md:pt-10 md:px-20">
        <div className="box-border max-w-[1140px] mx-auto">
          <h2 className="text-neutral-800 text-[26px] font-bold box-border leading-[32.5px] text-center md:text-[50px] md:leading-[62.5px]">
            Loved by Thousands!
          </h2>
          <div aria-label="Review slider" role="region" className="relative box-border mt-6 mb-16 md:mt-10 md:mb-8">
            <div className="box-content md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <button type="button" aria-label="Go to last slide" className="static [align-items:normal] bg-zinc-100 inline-block h-auto justify-normal text-center transform-none w-auto z-auto rounded-none left-auto top-auto md:absolute md:items-center md:aspect-auto md:bg-indigo-500 md:flex md:h-12 md:justify-center md:left-[-68px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-y-[-50.0%] md:w-12 md:z-[1] md:[mask-position:0%] md:bg-left-top md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50%] md:top-2/4">
                <img src="https://c.animaapp.com/mdqy9698UVjprT/assets/icon-6.svg" alt="Icon" className="box-content h-auto transform-none w-auto md:aspect-auto md:box-border md:h-6 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:scale-x-[-1px] md:w-6 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]" />
              </button>
              <button type="button" aria-label="Next slide" className="static [align-items:normal] bg-zinc-100 inline-block h-auto justify-normal text-center transform-none w-auto z-auto rounded-none right-auto top-auto md:absolute md:items-center md:aspect-auto md:bg-indigo-500 md:flex md:h-12 md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:right-[-68px] md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-y-[-50.0%] md:w-12 md:z-[1] md:[mask-position:0%] md:bg-left-top md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50%] md:top-2/4">
                <img src="https://c.animaapp.com/mdqy9698UVjprT/assets/icon-7.svg" alt="Icon" className="box-content h-auto w-auto md:aspect-auto md:box-border md:h-6 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-6 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]" />
              </button>
            </div>
            <div className="relative box-border z-0 overflow-hidden pb-2">
              <ul role="presentation" className="box-border flex h-full list-none pl-0">
                {customerReviews.map((review, index) => (
                  <div key={review.id} role="tabpanel" aria-label={`${index + 1} of 4`} className="relative box-border shrink-0 w-full mr-[30px] pt-[60px] px-2 md:w-[calc(33.3333%_-_20px)] md:pt-[75px]">
                    <div className="relative bg-white shadow-[rgb(96,78,194)_4px_4px_4px_0px] box-border h-full text-center border-indigo-700 px-4 py-6 rounded-[30px] border-2 border-solid">
                      <img src={review.avatarUrl} alt="" className="absolute box-border max-w-full top-[-60px] align-bottom w-[120px] border-indigo-500 mx-auto rounded-[200px] border-2 border-solid inset-x-0 md:top-[-75px] md:w-[150px]" />
                      <div className="box-border gap-x-4 flex flex-col h-full justify-between gap-y-4 pt-[60px] md:pt-[75px]">
                        <div className="box-border gap-x-4 flex flex-col gap-y-4">
                          <img src="https://c.animaapp.com/mdqy9698UVjprT/assets/118.png" alt="" className="box-border max-w-full align-bottom w-24 mx-auto" />
                          <h3 className="text-black text-lg font-semibold box-border leading-[22.5px] md:text-xl md:leading-7">
                            {review.title}
                          </h3>
                          <p className="text-black italic box-border leading-5">
                            {review.content}
                          </p>
                        </div>
                        <div className="items-center box-border gap-x-2 flex flex-col justify-between gap-y-2 md:flex-row">
                          <p className="text-black text-sm font-semibold box-border leading-[17.5px]">
                            {review.author}
                          </p>
                          <div className="text-black text-sm box-border leading-[17.5px]">
                            <div className="items-center box-border gap-x-2 flex gap-y-2">
                              <img src="https://c.animaapp.com/mdqy9698UVjprT/assets/133.png" alt="" className="box-border max-w-full align-bottom w-3.5" />
                              <span className="box-border block">Verified Buyer</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </ul>
            </div>
            <ul role="tablist" aria-label="Select a slide to show" className="static [align-items:normal] box-content gap-x-[normal] block flex-nowrap justify-normal list-disc gap-y-[normal] z-auto pl-10 pr-0 bottom-auto inset-x-auto md:absolute md:items-center md:aspect-auto md:bottom-[-60px] md:box-border md:gap-x-[18px] md:flex md:flex-wrap md:justify-center md:list-none md:overscroll-x-auto md:overscroll-y-auto md:gap-y-[18px] md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:z-[1] md:[mask-position:0%] md:bg-left-top md:px-4 md:scroll-m-0 md:scroll-p-[auto] md:inset-x-0">
              <li role="presentation" className="box-content list-item leading-[normal] min-h-0 min-w-0 text-left md:aspect-auto md:box-border md:block md:leading-4 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <button type="button" role="tab" aria-label="Go to page 1" className="static bg-zinc-100 h-auto opacity-100 text-center w-auto z-auto rounded-none md:relative md:aspect-auto md:bg-indigo-500 md:h-2.5 md:opacity-70 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-2.5 md:z-[1] md:[mask-position:0%] md:bg-left-top md:m-[3px] md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50%]"></button>
              </li>
              <li role="presentation" className="box-content list-item leading-[normal] min-h-0 min-w-0 text-left md:aspect-auto md:box-border md:block md:leading-4 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <button type="button" role="tab" aria-label="Go to page 2" className="static bg-zinc-100 h-auto opacity-100 text-center w-auto rounded-none md:relative md:aspect-auto md:bg-zinc-400 md:h-2.5 md:opacity-70 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-2.5 md:[mask-position:0%] md:bg-left-top md:m-[3px] md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50%]"></button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
