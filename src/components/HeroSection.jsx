

const HeroSection = () => {
  return (
    <section className=' lg:mx-auto w-screen px-2 bg-[#faf6ef] md:bg-white flex-col md:flex-row lg:w-[65%] pt-5 md:mt-10 items-center h-full gap-5  justify-between flex '>
     <div className="md:hidden flex justify-center">
        <img src="https://a.storyblok.com/f/165154/1280x720/5ed0187b38/02_hp_top-banner_1280x720-white-version-1.jpg/m/800x0/" alt="" className="w-[90%]"/>
     </div>
      <div className="md:w-1/2 flex flex-col gap-3 w-[90%]">
        <h1 className="text-4xl md:text-6xl font-semibold mb-2">Print on demand for your ecommerce business</h1>
        <h3 className="text-2xl font-medium">Sign up for free and only pay for what you sell</h3>
        <p className="text-normal font-thin">Turn your passion into profit with the world &apos s largest <span className="underline">print on demand</span> network.</p>
        <div className="gap-5 flex items-center justify-start mt-5 md:mt-0">
            <button className="bg-black text-white px-3 text-sm py-2 md:px-7 md:py-3 rounded-full">Get started for free</button>
            <button className="border-2 bg-transparent text-black  px-4 text-sm py-2 md:px-7 md:py-3 rounded-full">see our product</button>
        </div>
        <div className="flex justify-center items-start flex-col mt-5 pb-5">
            <img src="https://a.storyblok.com/f/165154/300x86/7d28c66657/shopify_monotone_black.svg" alt="" className="h-14"/>
            <p className="text-lg  font-extralight">4.8/5</p>
            <p className="text-lg  font-extralight">based on 910 reviews</p>
        </div>
      </div>
      <div className="hidden md:block w-1/2 object-cover">
        <img src="https://a.storyblok.com/f/165154/1105x958/e9c9ddb8d6/01_hp_top-banner_white-version-1.png/m/1000x0/" alt="" />
      </div>
    </section>
  )
}

export default HeroSection
