import React from 'react';
import { navigationItems } from '../../data/navigation';

export function MobileMenu() {
  return (
    <div className="box-border block min-h-[auto] min-w-[auto] md:inline md:min-h-0 md:min-w-0">
      <details className="box-border">
        <summary aria-label="Menu" role="button" className="box-border list-item h-8 list-none w-8 before:accent-auto before:box-border before:text-neutral-800 before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-4 before:list-outside before:list-none before:text-start before:indent-[0px] before:normal-case before:visible before:mt-12 before:border-separate before:font-inter before:md:mt-24">
          <span className="items-center box-border flex h-full justify-center w-full">
            <div className="box-border min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
              <img src="https://c.animaapp.com/mdqy9698UVjprT/assets/icon-1.svg" alt="Icon" className="box-border h-5 w-5" />
            </div>
            <div className="box-border hidden">
              <img src="https://c.animaapp.com/mdqy9698UVjprT/assets/icon-2.svg" alt="Icon" className="box-border h-5 w-5" />
            </div>
          </span>
        </summary>
        <div role="dialog" aria-label="Menu" className="fixed bg-stone-100 box-border h-[1000px] max-w-[311px] translate-x-[-100.0%] z-20 overflow-auto mt-12 inset-0 md:max-w-lg md:transform-none md:mt-24">
          <nav className="box-border gap-x-4 grid leading-6 gap-y-4 p-6 md:gap-x-6 md:gap-y-6 md:px-12 md:py-8 after:accent-auto after:box-border after:text-neutral-800 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-12 after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:min-h-[auto] after:min-w-[auto] after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter after:md:h-24 after:md:min-h-0 after:md:min-w-0">
            {navigationItems.map((item) => (
              <a key={item.id} href={item.href} className="box-border block min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </details>
    </div>
  );
}
