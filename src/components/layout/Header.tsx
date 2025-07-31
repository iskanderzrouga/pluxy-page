import React from 'react';
import { MobileMenu } from './MobileMenu';
import { Navigation } from './Navigation';
import { LocalizationForm } from './LocalizationForm';

export function Header() {
  return (
    <div className="box-border">
      <header role="banner" className="text-neutral-800 items-center backdrop-blur-lg bg-stone-100 box-border gap-x-4 flex h-12 justify-between leading-4 gap-y-4 w-full px-4 py-0 md:gap-x-8 md:h-24 md:gap-y-8 md:px-12 md:py-8">
        <div className="items-center box-border gap-x-1 flex basis-auto grow-0 gap-y-1 w-full md:basis-[0%] md:grow md:w-auto">
          <div className="items-center box-border flex justify-start min-h-[auto] min-w-[auto] w-max md:hidden md:min-h-0 md:min-w-0">
            <MobileMenu />
          </div>
          <a href="#" className="font-bold items-center self-stretch box-border flex grow justify-start leading-[48px] w-full md:block md:leading-4 md:w-auto">
            <img src="https://c.animaapp.com/mdqy9698UVjprT/assets/81.svg" alt="Pluxy" className="aspect-[auto_119_/_32] box-border h-6 leading-[48px] max-w-full min-h-[auto] min-w-[auto] md:h-8 md:leading-4 md:min-h-0 md:min-w-0" />
          </a>
          <Navigation />
        </div>
        <div className="items-center box-border gap-x-1 flex justify-end gap-y-1 w-full md:w-auto">
          <section className="box-border max-w-none ml-auto md:max-w-[335px]">
            <LocalizationForm />
          </section>
          <a href="/cart" role="button" className="relative items-center box-border flex h-8 justify-center w-8">
            <img src="https://c.animaapp.com/mdqy9698UVjprT/assets/icon-4.svg" alt="Icon" className="box-border h-[23px] w-6" />
          </a>
        </div>
      </header>
    </div>
  );
}
