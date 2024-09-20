const Whychoose = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 pt-10 text-center w-full">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold">Why Choose Gelato</h2>
      <section className="w-full px-4 md:px-6 lg:px-8 bg-white flex flex-col md:flex-row lg:w-[65%] items-start justify-center mx-auto gap-10 md:gap-12 lg:gap-16 py-10">
        <div className="md:w-1/2 lg:w-1/2">
          <img 
            src="https://a.storyblok.com/f/165154/1450x1450/97cf3c3c7e/0341_2024-brand-vi-rollout-dedicated-hero-1450x1450-1.png/m/" 
            alt="Gelato Overview" 
            className="w-full object-cover" 
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <div className="flex flex-col items-start">
            <h4 className="text-2xl font-semibold text-left">▻ World's Largest Print-on-Demand Network</h4>
            <p className="text-base md:text-lg font-light text-left">140+ print partners in 32 countries. Gelato is a truly global service.</p>
          </div>
          <div className="flex flex-col items-start">
            <h4 className="text-2xl font-semibold text-left">▻ Sell Globally, Produce Locally</h4>
            <p className="text-base md:text-lg font-light text-left">Your products are produced close to your customers, wherever they are.</p>
          </div>
          <div className="flex flex-col items-start">
            <h4 className="text-2xl font-semibold text-left">▻ 100% Free Editing Tools</h4>
            <p className="text-base md:text-lg font-light text-left">Create your custom products using our suite of free tools.</p>
          </div>
          <div className="flex flex-col items-start">
            <h4 className="text-2xl font-semibold text-left">▻ 60+ Logistics Partners</h4>
            <p className="text-base md:text-lg font-light text-left">Our global network of logistics partners ensures your products are delivered fast.</p>
          </div>
          <div className="flex flex-col items-start">
            <h4 className="text-2xl font-semibold text-left">▻ High-Quality Products</h4>
            <p className="text-base md:text-lg font-light text-left">We partner with the world's leading brands to ensure the best quality products.</p>
          </div>
          <div className="flex flex-col items-start">
            <h4 className="text-2xl font-semibold text-left">▻ Endless Creativity with Shutterstock Images</h4>
            <p className="text-base md:text-lg font-light text-left">Access millions of images and graphics to create unique products you can sell in your store.</p>
          </div>
          <div className="flex flex-col items-start">
            <h4 className="text-2xl font-semibold text-left">▻ 1-Click Integration to Leading E-Commerce Platforms</h4>
            <p className="text-base md:text-lg font-light text-left">Connect your store to Gelato using our integrations with Shopify, Etsy, and more.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Whychoose;
