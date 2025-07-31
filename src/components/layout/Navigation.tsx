import React from 'react';
import { navigationItems } from '../../data/navigation';

export function Navigation() {
  return (
    <nav className="box-border hidden min-h-0 min-w-0 ml-0 md:flex md:min-h-[auto] md:min-w-[auto] md:ml-auto">
      {navigationItems.map((item, index) => (
        <a 
          key={item.id} 
          href={item.href} 
          className={index === 0 ? "text-neutral-800 font-medium box-border inline tracking-[0.8px] min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]" : "text-neutral-800 font-medium box-border inline tracking-[0.8px] min-h-0 min-w-0 ml-8 md:block md:min-h-[auto] md:min-w-[auto]"}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
