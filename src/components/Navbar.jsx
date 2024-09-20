import { useState } from "react";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsNavOpen(!isNavOpen);
  };
  const menuClose = () => {
    setIsNavOpen(false);
  };
  return (
    <div className="relative">
      <div className=" w-screen h-16 border flex justify-between px-1 md:px-8 items-center ">
        <section className="lg:mx-auto w-screen px-2  lg:w-[65%] items-center h-full  justify-between flex ">
          <button
            onClick={handleMenuOpen}
            className="md:hidden bg-transparent border-none"
          >
            {" "}
            <span className=" material-symbols-outlined">menu</span>
          </button>
          <img
            src="https://a.storyblok.com/f/165154/261x55/ecf04f407f/gelato_logo_black.svg"
            alt="gelato"
            className="h-[1.5rem]"
          />
          <div className="flex justify-center items-center gap-5 ">
            <ul className="hidden md:flex gap-10 ">
              <li className="flex text-sm text-bold items-center justify-center gap-2">
                {" "}
                <span className="material-symbols-outlined">headset_mic</span>
                Contact Us
              </li>
              <li className="flex text-sm text-bold items-center justify-center gap-2">
                <span className="material-symbols-outlined">language</span>{" "}
                IN/INR{" "}
                <span className="material-symbols-outlined">
                  keyboard_arrow_down
                </span>
              </li>
              <li className="flex text-sm text-bold items-center justify-center gap-2">
                {" "}
                <span className="material-symbols-outlined">shopping_cart</span>
                Cart
              </li>
              <li className="flex text-sm text-bold items-center justify-center gap-2">
                {" "}
                <span className="material-symbols-outlined">person</span> Sign
                In
              </li>
            </ul>
            <button className="bg-black text-white px-5 py-2 rounded-full">
              Sign up for free
            </button>
          </div>
        </section>
      </div>

      <div className=" hidden w-screen h-16 shadow-lg md:flex justify-between flex-col px-3 md:px-8 items-center">
        <section className="mx-auto   lg:w-[65%] items-center h-full  justify-between flex ">
          <ul className="hidden md:flex gap-10 h-full">
            <li className="flex text-sm text-bold items-center justify-center gap-2 h-full hover:bg-slate-100 cursor-pointer px-1">
              {" "}
              Products{" "}
              <span className="material-symbols-outlined">
                keyboard_arrow_down
              </span>{" "}
            </li>
            <li className="flex text-sm text-bold items-center justify-center gap-2 h-full hover:bg-slate-100 cursor-pointer px-1">
              {" "}
              Start selling{" "}
              <span className="material-symbols-outlined">
                keyboard_arrow_down
              </span>{" "}
            </li>
            <li className="flex text-sm text-bold items-center justify-center gap-2 h-full hover:bg-slate-100 cursor-pointer px-1">
              {" "}
              Tools and apps{" "}
              <span className="material-symbols-outlined">
                keyboard_arrow_down
              </span>{" "}
            </li>
            <li className="flex text-sm text-bold items-center justify-center gap-2 h-full hover:bg-slate-100 cursor-pointer px-1">
              {" "}
              Pricing{" "}
              <span className="material-symbols-outlined">
                keyboard_arrow_down
              </span>{" "}
            </li>
            <li className="flex text-sm text-bold items-center justify-center gap-2 h-full hover:bg-slate-100 cursor-pointer px-1">
              {" "}
              Resources{" "}
              <span className="material-symbols-outlined">
                keyboard_arrow_down
              </span>{" "}
            </li>
            <li className="flex text-sm text-bold items-center justify-center gap-2 h-full hover:bg-slate-100 cursor-pointer px-1">
              Pro seller
            </li>
            <li className="flex text-sm text-bold items-center justify-center gap-2 h-full hover:bg-slate-100 cursor-pointer px-1">
              {" "}
              GelatoConnect{" "}
              <span className="material-symbols-outlined">
                keyboard_arrow_down
              </span>{" "}
            </li>
          </ul>
        </section>
      </div>



      <div 
        className={`fixed top-0 left-0 h-screen bg-white z-10 transition-transform transform ${
          isNavOpen ? "translate-x-0" : "-translate-x-full"
        } shadow-lg w-[85%] md:hidden`}
      >
        <div className="flex border-b py-5 gap-5 px-4 items-center">
          <button onClick={menuClose}>
            <span className="material-symbols-outlined">close</span>
          </button>
          <div className="flex text-sm font-bold border-r px-4 items-center justify-center">
            <span className="material-symbols-outlined">language</span> IN/INR{" "}
            <span className="material-symbols-outlined">keyboard_arrow_down</span>
          </div>
          <div className="flex text-sm font-bold items-center justify-center gap-2">
            <span className="material-symbols-outlined">shopping_cart</span>
            Cart
          </div>
        </div>

        <div className="flex border-b py-5 gap-2 px-4">
          <button className="bg-black text-white  px-5 py-2 rounded-full">
            Sign up for free
          </button>
          <div className="flex text-sm font-bold items-center border-l px-4 justify-center gap-2">
            <span className="material-symbols-outlined">person</span>
            Sign in
          </div>
        </div>

        <div className="mt-6">
          <ul className="w-full flex flex-col gap-3 px-3">
            <li className="flex items-center justify-between gap-2 hover:bg-slate-100 cursor-pointer py-2">
              Products
              <span className="material-symbols-outlined">arrow_forward_ios</span>
            </li>
            <li className="flex items-center justify-between gap-2 hover:bg-slate-100 cursor-pointer py-2">
              Start selling
              <span className="material-symbols-outlined">arrow_forward_ios</span>
            </li>
            <li className="flex items-center justify-between gap-2 hover:bg-slate-100 cursor-pointer py-2">
              Tools and apps
              <span className="material-symbols-outlined">arrow_forward_ios</span>
            </li>
            <li className="flex items-center justify-between gap-2 hover:bg-slate-100 cursor-pointer py-2">
              Pricing
              <span className="material-symbols-outlined">arrow_forward_ios</span>
            </li>
            <li className="flex items-center justify-between gap-2 hover:bg-slate-100 cursor-pointer py-2">
              Resources
              <span className="material-symbols-outlined">arrow_forward_ios</span>
            </li>
            <li className="flex items-center justify-between gap-2 hover:bg-slate-100 cursor-pointer py-2">
              Pro seller
              <span className="material-symbols-outlined">arrow_forward_ios</span>
            </li>
            <li className="flex items-center justify-between gap-2 hover:bg-slate-100 cursor-pointer py-2">
              GelatoConnect
              <span className="material-symbols-outlined">arrow_forward_ios</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

  );
};

export default Navbar;
