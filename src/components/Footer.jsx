import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
   
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
          <div className="flex flex-col items-start">
            <img 
              src="https://example.com/gelato-logo.png" 
              alt="Gelato Logo"
              className="w-32 h-auto mb-4"
            />
            <p className="text-base mb-4">
              Gelato has created the world's largest network for local production and distribution of customized products. Together we bring creativity to life - and into business.
            </p>
            <a href="https://appstore.com/gelato" className="bg-blue-600 text-white px-4 py-2 rounded inline-block mb-4">Get the App</a>
            <div className="flex gap-4">
              <a href="https://play.google.com/store/apps/details?id=gelato" className="w-24 h-auto">
                <img 
                  src="https://example.com/google-play.png" // Replace with the actual Google Play image URL
                  alt="Google Play"
                  className="w-full h-auto"
                />
              </a>
              <a href="https://apps.apple.com/us/app/gelato/idXXXXXXXXX" className="w-24 h-auto">
                <img 
                  src="https://example.com/app-store.png" // Replace with the actual App Store image URL
                  alt="App Store"
                  className="w-full h-auto"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row justify-between gap-6 mb-8">
          <div className="flex flex-col w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-3">Products</h4>
            <ul className="space-y-2">
              <li><a href="/print-on-demand" className="hover:underline">Print on Demand</a></li>
              <li><a href="/product-catalog" className="hover:underline">Product Catalog</a></li>
              <li><a href="/shipping" className="hover:underline">Shipping and Delivery</a></li>
              <li><a href="/dropshipping" className="hover:underline">Dropshipping Products</a></li>
              <li><a href="/pro-sellers" className="hover:underline">Pro Sellers</a></li>
              <li><a href="/white-label" className="hover:underline">White Label Products</a></li>
              <li><a href="/returns-policy" className="hover:underline">Returns Policy</a></li>
              <li><a href="/custom-products" className="hover:underline">Custom Products</a></li>
            </ul>
          </div>
          <div className="flex flex-col w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-3">Integrations</h4>
            <ul className="space-y-2">
              <li><a href="/shopify" className="hover:underline">Shopify</a></li>
              <li><a href="/etsy" className="hover:underline">Etsy</a></li>
              <li><a href="/woocommerce" className="hover:underline">WooCommerce</a></li>
              <li><a href="/wix" className="hover:underline">Wix</a></li>
              <li><a href="/squarespace" className="hover:underline">Squarespace</a></li>
              <li><a href="/bigcommerce" className="hover:underline">BigCommerce</a></li>
              <li><a href="/api" className="hover:underline">API</a></li>
            </ul>
          </div>
          <div className="flex flex-col w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-3">Regions</h4>
            <ul className="space-y-2">
              <li><a href="/print-on-demand-europe" className="hover:underline">Print on Demand Europe</a></li>
              <li><a href="/print-on-demand-uk" className="hover:underline">Print on Demand UK</a></li>
              <li><a href="/print-on-demand-france" className="hover:underline">Print on Demand France</a></li>
              <li><a href="/print-on-demand-canada" className="hover:underline">Print on Demand Canada</a></li>
            </ul>
          </div>
          <div className="flex flex-col w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-3">Company</h4>
            <ul className="space-y-2">
              <li><a href="/gelatoconnect" className="hover:underline">GelatoConnect</a></li>
              <li><a href="/about" className="hover:underline">About Gelato</a></li>
              <li><a href="/leadership" className="hover:underline">Leadership Team</a></li>
              <li><a href="/board-investors" className="hover:underline">Board & Investors</a></li>
              <li><a href="/newsroom" className="hover:underline">Newsroom</a></li>
              <li><a href="/blog" className="hover:underline">Blog</a></li>
              <li><a href="/customer-stories" className="hover:underline">Customer Stories</a></li>
              <li><a href="/partners" className="hover:underline">Partners</a></li>
              <li><a href="/careers" className="hover:underline">Careers</a></li>
              <li><a href="/affiliates-program" className="hover:underline">Affiliates Program</a></li>
              <li><a href="/contact-us" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-gray-600 pt-6 mt-6 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="space-y-2">
              <a href="/privacy-policy" className="hover:underline">Privacy Policy</a> |
              <a href="/cookie-policy" className="hover:underline">Cookie Policy</a> |
              <a href="/api-terms" className="hover:underline">API Terms</a> |
              <a href="/sitemap" className="hover:underline">Sitemap</a>
            </div>
            <div className="mt-4 md:mt-0">
              <span>Language: </span>
              <a href="/change-language/english-india" className="hover:underline">English (India)</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
