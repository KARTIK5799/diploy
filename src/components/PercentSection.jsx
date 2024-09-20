import React from 'react';

const PercentSection = () => {
  return (
    <div className="bg-[#faf6ef] p-6 hidden md:block  ">
      <div className='lg:mx-auto w-screen px-2  flex-row lg:w-[65%] pt-5  items-center h-full gap-5  justify-between  '>
      <div className="flex flex-col md:flex-row md:space-x-6 items-center justify-center">
        <div className="flex flex-col items-center w-1/3 px-10 text-center mb-6 md:mb-0">
          <p className="text-4xl font-semibold">90%</p>
          <p className="text-4xl font-semibold" >of all orders are produced locally</p>
        </div>
        <div className="flex flex-col items-center w-1/3 px-10 text-center mb-6 md:mb-0">
          <p className="text-4xl font-semibold">90%</p>
          <p className="text-4xl font-semibold">of orders arrive within 5 days of ordering</p>
        </div>
        <div className="flex flex-col items-center  w-1/3 px-10 text-center">
          <p className="text-4xl font-semibold ">140+</p>
          <p className="text-4xl font-semibold">print providers across 32 countries</p>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default PercentSection;
