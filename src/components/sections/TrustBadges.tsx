import React from 'react';

export function TrustBadges() {
  const badges = [
    { id: 'digital-journal', src: "https://c.animaapp.com/mdqy9698UVjprT/assets/83.svg" },
    { id: 'fox', src: "https://c.animaapp.com/mdqy9698UVjprT/assets/84.svg" },
    { id: 'chronicle', src: "https://c.animaapp.com/mdqy9698UVjprT/assets/86.svg" },
    { id: 'nbc', src: "https://c.animaapp.com/mdqy9698UVjprT/assets/87.svg" }
  ];

  return (
    <section className="box-border">
      <div className="box-border mb-8 px-0 py-2 md:px-12 md:py-10">
        <div className="box-border max-w-screen-xl mx-auto">
          <div className="items-center box-border flex justify-center">
            {badges.map((badge) => (
              <img key={badge.id} src={badge.src} alt="" className="box-border grayscale-[1] h-5 max-w-full mx-[13px] md:h-12 md:mx-6" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
