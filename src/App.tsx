import React from 'react';
import { Header } from './components/layout/Header';
import { HeroSection } from './components/sections/HeroSection';
import { TrustBadges } from './components/sections/TrustBadges';
import { ReviewsSection } from './components/sections/ReviewsSection';
import { FeaturesSection } from './components/sections/FeaturesSection';
import { PromiseSection } from './components/sections/PromiseSection';
import { ComparisonSection } from './components/sections/ComparisonSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { LowStockSection } from './components/sections/LowStockSection';
import { ProductSection } from './components/sections/ProductSection';
import { EasyRemovalSection } from './components/sections/EasyRemovalSection';
import { ComparisonTableSection } from './components/sections/ComparisonTableSection';
import { SavingsSection } from './components/sections/SavingsSection';
import { CustomerReviewsSection } from './components/sections/CustomerReviewsSection';
import { GuaranteeSection } from './components/sections/GuaranteeSection';
import { FAQSection } from './components/sections/FAQSection';
import { DiscountSection } from './components/sections/DiscountSection';
import { Footer } from './components/layout/Footer';
import { AnnouncementBar } from './components/layout/AnnouncementBar';

function App() {
  return (
    <div className="text-neutral-800/90 text-base not-italic normal-nums font-normal accent-auto bg-white box-border flex flex-col tracking-[normal] leading-6 list-outside list-disc min-h-full text-start indent-[0px] normal-case visible border-separate font-inter">
      <iframe src="https://shopify-gtm-suite.getelevar.com/getelevar/3.28.10/dl-cookie-setter.html" className="box-border hidden"></iframe>
      <div className="box-border">
        <AnnouncementBar />
      </div>
      <div className="box-border z-10">
        <Header />
      </div>
      <main role="main" className="box-border basis-[0%] grow">
        <HeroSection />
        <TrustBadges />
        <ReviewsSection />
        <FeaturesSection />
        <PromiseSection />
        <ComparisonSection />
        <TestimonialsSection />
        <LowStockSection />
        <ProductSection />
        <EasyRemovalSection />
        <ComparisonTableSection />
        <SavingsSection />
        <CustomerReviewsSection />
        <GuaranteeSection />
        <FAQSection />
        <DiscountSection />
      </main>
      <Footer />
      <div className="box-border hidden list-none pl-0">
        <div className="box-border text-left">Opens in a new window.</div>
      </div>
      <div className="box-border"></div>
      <div className="box-border block font-suisseintl">
        <iframe src="https://shop.app/pay/hop?analytics_trace_id=4722e02d-5533-4050-b7be-c7ec14705eeb&target_origin=https%253A%252F%252Fpluxy.co&client_handle=pluxystore.myshopify.com" className="box-border hidden"></iframe>
      </div>
      <div className="box-border"></div>
      <div className="box-border"></div>
      <div className="box-border hidden">
        <div className="fixed box-border h-0 w-px overflow-hidden left-px top-px"></div>
        <div className="box-border">
          <div className="box-border"></div>
          <div className="box-border">
            <iframe title="Gorgias live chat campaigns" className="fixed box-border h-0 w-[385px] z-[2147483001] right-5 bottom-[90px] md:w-[415px]"></iframe>
          </div>
          <div className="box-border"></div>
          <iframe title="Gorgias Floating Chat" className="fixed box-border hidden h-16 max-h-[200px] max-w-[calc(100%_-_40px)] w-[400px] z-[2147483636] right-5 bottom-5 md:h-[74px]"></iframe>
          <div className="box-border">
            <iframe role="alert" title="Gorgias live chat messenger" className="fixed box-border h-0 w-0 z-[2147483636] right-5 bottom-5"></iframe>
          </div>
          <iframe title="gorgias-chat-storage-sync" src="https://pluxystore.shopify-checkout.config.gorgias.chat/shopify-checkout-chat-storage-sync" className="box-border hidden"></iframe>
        </div>
        <div className="fixed box-border h-0 w-px overflow-hidden left-px top-px"></div>
      </div>
      <div className="box-border">
        <div className="fixed box-border max-w-[421px] z-[100000] p-5 right-0 bottom-0">
          <div role="button" aria-label="Messenger Dummy Widget" className="items-center bg-sky-800 shadow-[rgba(0,0,0,0.16)_0px_5px_40px_0px] box-border flex h-[60px] justify-center max-w-[300px] w-[60px] rounded-[60px]">
            <div className="box-border hidden h-[17px] w-[17px]">
              <img src="https://c.animaapp.com/mdqy9698UVjprT/assets/icon-76.svg" alt="Icon" className="box-border h-[15px] w-[15px]" />
            </div>
            <div className="absolute text-white box-border h-11 w-[42.181px]">
              <img src="https://c.animaapp.com/mdqy9698UVjprT/assets/icon-77.svg" alt="Icon" className="box-border h-11 w-[44.181px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
