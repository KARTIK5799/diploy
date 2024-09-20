import React from 'react'

const BusinessGrowth = () => {
  return (
   <div className='w-full bg-[#faf6ef]'>
    <section className=' lg:mx-auto w-screen px-2  flex-col md:flex-row lg:w-[65%] pt-5 md:mt-10 items-center h-full gap-5  justify-between flex '>
    <div className=" md:hidden block  mt-20 object-cover w-full">
        <img src="https://a.storyblok.com/f/165154/1200x1200/35ff04c4c9/cc-55_marketing-assets-for-personalization-studio.gif/m/" alt="" />
      </div>
      <div className="md:w-1/2 flex flex-col gap-3 w-[90%]">
      <p className="text-lg font-medium">For print on demand sellers

</p>
        <h1 className="text-4xl md:text-6xl font-semibold mb-2">Accelerate business growth with innovative design tools and apps</h1>
        <h3 className="text-2xl font-medium">See how our cutting-edge solutions can help you reach new customers and maximize your profits.

</h3>
       
        <div className="gap-5 flex items-center justify-start mt-5 md:mt-0">
            <button className="bg-black text-white px-3 text-sm py-2 md:px-7 md:py-3 rounded-full">Get started</button>
          
        </div>
        
      </div>
      <div className=" hidden md:block w-1/2 mt-20 object-cover">
        <img src="https://a.storyblok.com/f/165154/1200x1200/35ff04c4c9/cc-55_marketing-assets-for-personalization-studio.gif/m/" alt="" />
      </div>
    </section>
  
    </div>
  )
}

export default BusinessGrowth
