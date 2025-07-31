import React from 'react';

export function AnnouncementBar() {
  return (
    <div className="relative text-white text-sm items-center bg-neutral-800 box-border flex justify-center leading-5 min-h-[43px] text-center">
      <span className="text-xs box-border block">
        ✨ LIMITED TIME SALE - No coupon needed! <span className="box-border">|</span>
        <a href="/#products" className="font-bold box-border">
          <u className="box-border underline">Buy Now </u>
        </a>
      </span>
    </div>
  );
}
