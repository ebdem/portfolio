export default function FirstScreen() {
  return (
    <div>
      <div className=" px-6">
        <div className="mt-8 relative rounded-lg bg-indigo-700 container mx-auto flex flex-col items-center pt-12 sm:pt-24 pb-24 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64">
          <div className="w-11/12 sm:w-2/3 mb-5 sm:mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-bold leading-tight">
              The Freedom to Create the Pages You Want
            </h1>
          </div>
          <div className="flex justify-center items-center mb-10 sm:mb-20">
            <button className="hover:text-white hover:bg-transparent hover:border-white border bg-white transition duration-150 ease-in-out focus:outline-none rounded text-indigo-700 px-4 sm:px-8 py-1 sm:py-3 text-sm">
              Get Started
            </button>
            <button className="hover:bg-white hover:text-indigo-600 hover:border-indigo-600 ml-3 sm:ml-6 bg-transparent transition duration-150 ease-in-out focus:outline-none hover:bg-indigo-700-800 rounded border border-white text-white px-4 sm:px-8 py-1 sm:py-3 text-sm">
              Learn More
            </button>
          </div>
        </div>
        <div className="container mx-auto flex justify-center md:-mt-56 -mt-20 sm:-mt-40">
          <div className="relative sm:w-2/3 w-11/12 flex">
            <img style={{ width: "35%" }} src="/1.svg" alt="" />
            <img style={{ width: "35%" }} src="/2.svg" alt="" />
            <img
              style={{ width: "35%", marginLeft: "40px" }}
              src="/3.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
