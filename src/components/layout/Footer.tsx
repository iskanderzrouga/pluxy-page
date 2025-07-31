import React from 'react';
import { countries } from '../../data/countries';

export function Footer() {
  return (
    <section className="box-border">
      <div className="relative text-white bg-neutral-800 box-border px-6 py-16">
        <div className="relative box-border max-w-screen-xl mx-auto">
          <button aria-label="BackToTop" className="absolute items-center bg-indigo-500 flex h-12 justify-center text-center translate-y-[-50.0%] w-12 p-0 rounded-full right-0 -top-16 md:h-20 md:w-20">
            <img src="https://c.animaapp.com/mdqy9698UVjprT/assets/icon-57.svg" alt="Icon" className="box-border h-6 w-6 md:h-10 md:w-10" />
          </button>
          <div className="box-border gap-x-6 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-6 md:grid-cols-[repeat(4,minmax(0px,1fr))]">
            <div className="box-border">
              <img src="https://c.animaapp.com/mdqy9698UVjprT/assets/78.png" alt="pluxy" className="box-border h-10 max-w-full" />
              <p className="text-sm box-border tracking-[0.35px] leading-4 opacity-60 mt-3">
                The Most Effective At-Home Facial Hair Remover Backed by Our 90-Day 100% Money-Back Guarantee
              </p>
              <ul role="list" className="box-border gap-x-4 flex list-none gap-y-4 mt-3 pl-0">
                <li className="box-border text-left">
                  <a href="https://www.facebook.com/pluxyofficial/" className="box-border">
                    <img src="https://c.animaapp.com/mdqy9698UVjprT/assets/icon-58.svg" alt="Icon" className="box-border h-5 w-5" />
                  </a>
                </li>
                <li className="box-border text-left">
                  <a href="https://www.pinterest.com/pluxyco/" className="box-border">
                    <img src="https://c.animaapp.com/mdqy9698UVjprT/assets/icon-59.svg" alt="Icon" className="box-border h-5 w-5" />
                  </a>
                </li>
                <li className="box-border text-left">
                  <a href="https://www.instagram.com/pluxy.co/" className="box-border">
                    <img src="https://c.animaapp.com/mdqy9698UVjprT/assets/icon-60.svg" alt="Icon" className="box-border h-5 w-5" />
                  </a>
                </li>
                <li className="box-border text-left">
                  <a href="https://www.tiktok.com/@pluxy.co?lang=en" className="box-border">
                    <img src="https://c.animaapp.com/mdqy9698UVjprT/assets/icon-61.svg" alt="Icon" className="box-border h-5 w-5" />
                  </a>
                </li>
                <li className="box-border text-left">
                  <a href="https://www.youtube.com/channel/UCWbMmhBfxXKqSowsNZeLBCA" className="box-border">
                    <img src="https://c.animaapp.com/mdqy9698UVjprT/assets/icon-62.svg" alt="Icon" className="box-border h-5 w-5" />
                  </a>
                </li>
              </ul>
              <p className="text-xs box-border leading-4 opacity-70 mt-4">
                © 2025
                <a href="/" className="box-border">Pluxy.</a>
                <span className="text-sm font-bold box-border leading-5"> All rights reserved</span>
              </p>
              <img src="https://c.animaapp.com/mdqy9698UVjprT/assets/80.png" alt="DMCA.com Protection Status" className="box-border max-w-full mt-2" />
            </div>
            <div className="box-border">
              <h2 className="text-lg font-bold box-border tracking-[0.9px] leading-7 md:text-xl md:tracking-[1px]">Policies & Help</h2>
              <ul className="box-border list-none mt-3 pl-0">
                <li className="box-border text-left mt-1">
                  <a href="/policies/terms-of-service" className="text-sm box-border leading-[17px] opacity-70">Terms of Service</a>
                </li>
                <li className="box-border text-left mt-1">
                  <a href="/policies/privacy-policy" className="text-sm box-border leading-[17px] opacity-70">Privacy Policy</a>
                </li>
                <li className="box-border text-left mt-1">
                  <a href="/policies/shipping-policy" className="text-sm box-border leading-[17px] opacity-70">Shipping Policy</a>
                </li>
                <li className="box-border text-left mt-1">
                  <a href="/policies/refund-policy" className="text-sm box-border leading-[17px] opacity-70">Refund Policy</a>
                </li>
                <li className="box-border text-left mt-1">
                  <a href="/pages/contact-us" className="text-sm box-border leading-[17px] opacity-70">Contact Us</a>
                </li>
                <li className="box-border text-left mt-1">
                  <a href="/pages/help-center" className="text-sm box-border leading-[17px] opacity-70">Help Center</a>
                </li>
                <li className="box-border text-left mt-1">
                  <a href="https://pluxy.co/pages/help" className="text-sm box-border leading-[17px] opacity-70">Track Order</a>
                </li>
              </ul>
            </div>
            <div className="box-border">
              <h2 className="text-lg font-bold box-border tracking-[0.9px] leading-7 md:text-xl md:tracking-[1px]">Main Menu</h2>
              <ul className="box-border list-none mt-3 pl-0">
                <li className="box-border text-left mt-1">
                  <a href="/" className="text-sm box-border leading-[17px] opacity-70">Home</a>
                </li>
                <li className="box-border text-left mt-1">
                  <a href="#benefits" className="text-sm box-border leading-[17px] opacity-70">Benefits</a>
                </li>
                <li className="box-border text-left mt-1">
                  <a href="#reviews" className="text-sm box-border leading-[17px] opacity-70">Reviews</a>
                </li>
                <li className="box-border text-left mt-1">
                  <a href="/pages/help-center" className="text-sm box-border leading-[17px] opacity-70">FAQ</a>
                </li>
                <li className="box-border text-left mt-1">
                  <a href="#products" className="text-sm box-border leading-[17px] opacity-70">Order</a>
                </li>
                <li className="box-border text-left mt-1">
                  <a href="/pages/help-center" className="text-sm box-border leading-[17px] opacity-70">Need Help?</a>
                </li>
              </ul>
            </div>
            <div className="box-border">
              <h2 className="text-lg font-bold box-border tracking-[0.9px] leading-7 md:text-xl md:tracking-[1px]">Country</h2>
              <form className="relative box-border">
                <input type="hidden" name="form_type" value="localization" className="bg-transparent box-border hidden p-0" />
                <input type="hidden" name="utf8" value="✓" className="bg-transparent box-border hidden p-0" />
                <input type="hidden" name="_method" value="put" className="bg-transparent box-border hidden p-0" />
                <input type="hidden" name="return_to" value="/pages/epil-pro-3" className="bg-transparent box-border hidden p-0" />
                <button type="button" className="items-center bg-transparent gap-x-2 flex justify-between gap-y-2 text-center border mt-4 mb-6 px-3 py-2 rounded-lg border-solid border-white/50">
                  <img src="https://c.animaapp.com/mdqy9698UVjprT/assets/79.svg" alt="United States" className="aspect-[auto_32_/_24] box-border max-w-full w-8" />
                  USD
                  <img src="https://c.animaapp.com/mdqy9698UVjprT/assets/icon-63.svg" alt="Icon" className="box-border h-5 w-5" />
                </button>
                <ul role="list" className="absolute bg-white box-border hidden list-none max-h-48 w-full z-10 overflow-auto p-2 rounded-b-none rounded-tl rounded-tr border-t-white/30 border-b-white border-x-white border-b border-l border-r border-t border-solid bottom-12 md:rounded-t-none md:rounded-bl md:rounded-br md:border-t-0 md:bottom-auto">
                  {countries.map((country) => (
                    <li key={country.id} className="box-border text-left">
                      <a href="#" className="text-neutral-800 items-center bg-white box-border flex justify-start w-full p-2 rounded-bl rounded-br rounded-tl rounded-tr">
                        {country.name} ({country.currency}
                        {country.currency === 'USD' ? '$' : country.currency === 'EUR' ? '€' : ''})
                        {country.isSelected && (
                          <span className="box-border block ml-2">
                            <img src="https://c.animaapp.com/mdqy9698UVjprT/assets/icon-3.svg" alt="Icon" className="box-border h-5 w-5" />
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
                <input type="hidden" name="country_code" value="US" className="bg-transparent box-border hidden p-0" />
              </form>
              <h2 className="text-lg font-bold items-center box-border gap-x-2 inline-flex tracking-[0.9px] leading-7 gap-y-2 md:text-xl md:tracking-[1px]">
                <span className="text-lg box-border block tracking-[0.9px] md:text-xl md:tracking-[1px]">
                  <img src="https://c.animaapp.com/mdqy9698UVjprT/assets/icon-64.svg" alt="Icon" className="text-lg box-border h-6 tracking-[0.9px] w-6 md:text-xl md:tracking-[1px]" />
                </span>
                Secured payment with
              </h2>
              <ul className="items-center box-border gap-x-2 flex flex-wrap justify-start list-none gap-y-2 mt-4 pl-0">
                <li className="box-border text-left">
                  <img src="https://c.animaapp.com/mdqy9698UVjprT/assets/icon-65.svg" alt="Icon" className="box-border h-6 w-[38px]" />
                </li>
                <li className="box-border text-left">
                  <img src="https://c.animaapp.com/mdqy9698UVjprT/assets/icon-66.svg" alt="Icon" className="box-border h-6 w-[38px]" />
                </li>
                <li className="box-border text-left">
                  <img src="https://c.animaapp.com/mdqy9698UVjprT/assets/icon-67.svg" alt="Icon" className="box-border h-6 w-[38px]" />
                </li>
                <li className="box-border text-left">
                  <img src="https://c.animaapp.com/mdqy9698UVjprT/assets/icon-68.svg" alt="Icon" className="box-border h-6 w-[38px]" />
                </li>
                <li className="box-border text-left">
                  <img src="https://c.animaapp.com/mdqy9698UVjprT/assets/icon-69.svg" alt="Icon" className="box-border h-6 w-[38px]" />
                </li>
                <li className="box-border text-left">
                  <img src="https://c.animaapp.com/mdqy9698UVjprT/assets/icon-70.svg" alt="Icon" className="box-border h-6 w-[38px]" />
                </li>
                <li className="box-border text-left">
                  <img src="https://c.animaapp.com/mdqy9698UVjprT/assets/icon-71.svg" alt="Icon" className="box-border h-6 w-[38px]" />
                </li>
                <li className="box-border text-left">
                  <img src="https://c.animaapp.com/mdqy9698UVjprT/assets/icon-72.svg" alt="Icon" className="box-border h-6 w-[38px]" />
                </li>
                <li className="box-border text-left">
                  <img src="https://c.animaapp.com/mdqy9698UVjprT/assets/icon-73.svg" alt="Icon" className="box-border h-6 w-[38px]" />
                </li>
                <li className="box-border text-left">
                  <img src="https://c.animaapp.com/mdqy9698UVjprT/assets/icon-74.svg" alt="Icon" className="box-border h-6 w-[38px]" />
                </li>
                <li className="box-border text-left">
                  <img src="https://c.animaapp.com/mdqy9698UVjprT/assets/icon-75.svg" alt="Icon" className="box-border h-6 w-[38px]" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
