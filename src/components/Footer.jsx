import React from 'react';

const Footer = () => {
  return (
    <div className="bg-black text-white py-10">
      <section className="lg:mx-auto w-screen px-4 lg:w-[65%]">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5">
   
          <div className="flex flex-col lg:flex-row justify-between w-full lg:w-auto items-center gap-5 lg:gap-10">
            <img
              src="https://a.storyblok.com/f/165154/x/b69011fb22/_logo.svg"
              alt="Gelato logo"
              className="w-32"
            />
            <div className="flex items-center gap-3">
              <p>Find Gelato on:</p>
              <img src="" alt="social-icon" className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 py-10">

          <div>
            <p className="text-sm mb-4">
              Gelato has created the world's largest network for local production and distribution of customized products. Together we bring creativity to life - and into business.
            </p>
            <button className="bg-white text-black py-2 px-4 rounded-full">
              Get Started
            </button>
            <div className="mt-6">
              <h2 className="font-semibold mb-2">Get the app</h2>
              <div className="flex gap-3">
                <img
                  src="https://a.storyblok.com/f/165154/x/de4bf52166/badge-1.svg"
                  alt="App Store"
                  className="w-28"
                />
                <img
                  src="https://a.storyblok.com/f/165154/x/61c51d3d38/badge.svg"
                  alt="Google Play"
                  className="w-28"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-semibold mb-4">Print on demand</h2>
            <ul className="text-xs space-y-2">
              <li>What is print on demand?</li>
              <li>Product catalog</li>
              <li>Shipping and delivery</li>
              <li>Dropshipping products</li>
              <li>Pro sellers</li>
              <li>White label products</li>
              <li>Returns policy</li>
              <li>Global, yet local</li>
              <li>Sustainability</li>
              <li>Support</li>
            </ul>
          </div>

        
          <div>
            <h2 className="font-semibold mb-4">Integrations</h2>
            <ul className="text-xs space-y-2">
              <li>Shopify</li>
              <li>Etsy</li>
              <li>WooCommerce</li>
              <li>Wix</li>
              <li>Squarespace</li>
              <li>BigCommerce</li>
              <li>API</li>
            </ul>
          </div>

       
          <div>
            <h2 className="font-semibold mb-4">Start Selling</h2>
            <ul className="text-xs space-y-2">
              <li>Embroidery</li>
              <li>Print on demand t-shirts</li>
              <li>Print on demand hoodies</li>
              <li>Print on demand posters</li>
              <li>Print on demand canvas</li>
              <li>Print on demand calendars</li>
              <li>Print on demand mugs</li>
              <li>Custom products</li>
              <li>Custom clothing</li>
              <li>Custom merchandise</li>
              <li>Custom phone cases</li>
              <li>Print on demand Europe</li>
              <li>Print on demand UK</li>
              <li>Print on demand France</li>
              <li>Print on demand Canada</li>
              <li>Merch maker</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold mb-4">Company</h2>
            <ul className="text-xs space-y-2">
              <li>GelatoConnect</li>
              <li>About Gelato</li>
              <li>Leadership team</li>
              <li>Board & investors</li>
              <li>Newsroom</li>
              <li>Blog</li>
              <li>Customer Stories</li>
              <li>Partners</li>
              <li>Careers</li>
              <li>Affiliates program</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center border-t border-gray-700 pt-5 mt-5">
          <div className="text-sm text-gray-400 space-y-1 text-center items-center lg:text-left flex">
            <p className='mx-2'>Contact us</p> {" | "}
            <p className='mx-2'>Legal</p>{" | "}
            <p className='mx-2'>Privacy policy</p>{" | "}
            <p className='mx-2'>Cookie policy</p>{" | "}
            <p className='mx-2'>API terms</p>{" | "}
            <p className='mx-2'>Sitemap</p>{" | "}
          </div>
          <div className="mt-4 lg:mt-0">
            <select className="bg-black text-white border border-gray-600 px-3 py-2 rounded-md">
              <option>English (India)</option>
            </select>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
