import React from "react";
import MenuComponent from "../../components/menu";
export default function Contact() {
  return (
    <MenuComponent
      children={
        <>
          <div className="py-4 lg:py-8  relative">
            <div className="xl:mx-auto xl:container relative  ">
              <div className="flex flex-wrap xl:mx-auto xl:container ">
                <div className="w-full relative lg:w-1/2 xl:mt-10 mb-10 2xl:pr-24 2xl:pl-0 xl:pl-12 pl-0 bg-purple-300 p-12 rounded-lg">
                  <img
                    src="/code.png"
                    className="h-full w-full xl:w-1/2 absolute inset-0 bg-cover bg-center xl:hidden"
                    alt="map"
                  />
                  <div className="w-full flex flex-col items-start  xl:justify-start  relative z-20 xl:px-0 px-4 xl:py-0 py-4">
                    <div className="w-full 2xl:pl-48 xl:pt-1">
                      <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-gray-800">
                        We’re Here
                      </h1>
                      <div className="w-full md:w-10/12 mt-3">
                        <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider">
                          We believe digital innovation is at the heart of every
                          business success
                        </h2>
                        <div className="mt-4 md:mt-8">
                          <h2 className="text-sm md:text-base text-indigo-700 font-semibold">
                            Address
                          </h2>
                          <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">
                            Office #13, NSTP, NUST University H-12 Sector,
                            Islamabad
                          </h2>
                        </div>
                        <div className="mt-4 md:mt-8">
                          <h2 className="text-sm md:text-base text-indigo-700 font-semibold">
                            Contact
                          </h2>
                          <a href="#">
                            <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">
                              Github⏎
                            </h2>
                          </a>
                          <a href="#">
                            <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">
                              Linkedin⏎
                            </h2>
                          </a>
                        </div>
                        <div className="mt-4 md:mt-8">
                          <h2 className="text-sm md:text-base text-indigo-700 font-semibold">
                            Email
                          </h2>
                          <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">
                            ebu.bekir.3333@gmail.com
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2   xl:pt-10 lg:pl-24 ">
                  <div className="flex flex-col items-start xl:justify-start 2xl:justify-end xl:px-0 px-4 p-12">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-indigo-700">
                      Let’s Talk
                    </h1>
                    <div className="w-full 2xl:w-8/12 mt-3">
                      <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider">
                        For enquiries, please email us using the form below
                      </h2>
                      <div className="mt-4 md:mt-8">
                        <p className="text-gray-800 text-base font-medium">
                          Name
                        </p>
                        <input
                          className="mt-3 rounded-lg text-base border-2 w-11/12 lg:w-full xl:w-10/12 hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black py-5 pl-4 text-gray-800"
                          type="text"
                          placeholder="Justin Timberlake"
                        />
                      </div>
                      <div className="mt-4 md:mt-8">
                        <p className="text-gray-800 text-base font-medium">
                          Email Address
                        </p>
                        <input
                          className=" rounded-lg mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black py-5 pl-4 text-gray-800"
                          type="email"
                          placeholder="example@mail.com"
                        />
                      </div>
                      <div className="mt-4 md:mt-8">
                        <p className="text-gray-800 text-base font-medium">
                          Message
                        </p>
                        <textarea
                          className="rounded-lg mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 resize-none hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black xl:h-40 py-5 pl-4 text-gray-800"
                          type="text"
                          placeholder="Write us something..."
                          defaultValue={""}
                        />
                      </div>
                      <div className="py-5">
                        <button className=" rounded-lg py-3 md:py-5 px-5 md:px-10  text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ease-in duration-150 text-sm md:text-lg tracking-wider font-semibold">
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      }
    />
  );
}
