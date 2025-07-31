import React from 'react';
import { countries } from '../../data/countries';

export function LocalizationForm() {
  return (
    <div className="box-border">
      <form className="relative box-border">
        <input type="hidden" name="form_type" value="localization" className="bg-transparent box-border hidden p-0" />
        <input type="hidden" name="utf8" value="✓" className="bg-transparent box-border hidden p-0" />
        <input type="hidden" name="_method" value="put" className="bg-transparent box-border hidden p-0" />
        <input type="hidden" name="return_to" value="/pages/epil-pro-3" className="bg-transparent box-border hidden p-0" />
        <button type="button" className="items-center bg-transparent flex justify-center text-center w-full p-2 md:px-4 md:py-3">
          <span className="items-center box-border flex w-6 md:w-8">
            <img src="https://c.animaapp.com/mdqy9698UVjprT/assets/82.svg" alt="United States" className="aspect-[auto_32_/_24] box-border max-w-full w-8" />
          </span>
        </button>
        <ul role="list" className="absolute bg-white box-border hidden list-none max-h-48 w-max z-10 overflow-auto p-2 rounded-b-none rounded-tl rounded-tr border-t-white/30 border-b-white border-x-white border-b border-l border-r border-t border-solid right-0 bottom-0 md:rounded-t-none md:rounded-bl md:rounded-br md:border-t-0">
          {countries.map((country) => (
            <li key={country.id} className="box-border text-left">
              <a href="#" className="items-center bg-white box-border flex justify-start w-full p-2 rounded-bl rounded-br rounded-tl rounded-tr">
                <span className="items-center box-border gap-x-2 flex gap-y-2">
                  <img src={country.flagUrl} alt={country.name} className="aspect-[auto_32_/_24] box-border max-w-full w-8" />
                  <span className="box-border block">|</span>
                  {country.currency}
                </span>
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
    </div>
  );
}
