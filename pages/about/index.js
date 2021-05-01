import MenuComponent from "../../components/menu";

export default function About() {
  return (
    <MenuComponent
      children={
        <div className="mr-4 mt-0">
          <div className="container mx-auto pt-16">
            <div className="xl:w-full w-11/12 mx-auto">
              <h1 className="text-gray-800 font-extrabold xl:text-5xl text-3xl mb-4 text-center xl:text-left md:text-left lg:text-left">
                Hello It is Magic
              </h1>
              <p className="text-xl xl:text-left md:text-left lg:text-left md:w-full text-center xl:w-2/3 lg:w-2/3 w-11/12 mx-auto xl:mx-0 lg:mx-0 text-gray-600">
                You made it so simple. My new site is so much faster and easier
                to work with than my old site. I just choose the page, make the
                change and click save.
              </p>
            </div>
            <div className="flex flex-wrap mt-10 justify-between w-full md:w-11/12 md:mx-auto xl:mx-0 xl:w-full">
              <div className="xl:w-3/4 lg:w-3/4 md:w-8/12 w-11/12 mx-auto xl:mx-0 lg:mx-0 md:ml-0 shadow-md border border-gray-200 p-8 rounded">
                <p className="pb-8 text-base text-gray-800">
                  I just wanted to share a quick note and let you know that you
                  guys do a really good job. I’m glad I decided to work with
                  you. It’s really great how easy your websites are to update
                  and manage. I never have any problem at all.
                </p>
                <p className="text-base text-gray-800">
                  My new site is so much faster and easier to work with than my
                  old site. It used to take me an hour or more to update a page
                  and I would still sometimes screw things up.
                </p>
                <div className="mt-8">
                  <p className="text-base text-gray-800 font-bold pb-1">
                    - Ebubekir Demiray
                  </p>
                  <p className="text-sm text-gray-600 pl-2">
                    VP, Talent Management
                  </p>
                </div>
              </div>
              <div className="xl:w-1/4 lg:w-1/4 md:w-1/4 flex items-end xl:justify-end lg:justify-end md:justify-end sm:justify-center justify-center xl:pl-8 lg:pl-8 w-11/12 mx-auto xl:mx-0 lg:mx-0 mt-2">
                <div className="h-64 w-64">
                  <img
                    src="/ebu.jpeg"
                    alt
                    className="rounded h-full w-full object-cover shadow"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap mt-10 xl:justify-between lg:justify-around md:justify-center justify-around xl:w-full lg:w-11/12 w-11/12 mx-auto xl:mx-0 lg:mx-auto">
              <button className="bg-white shadow mb-2 xl:mb-0 lg:mb-0 rounded flex items-center justify-center h-36 w-52 cursor-pointer border border-transparent focus:border-gray-300 focus:shadow-md focus:outline-none">
                <img src="/indir.png" alt />
              </button>
              <button className="bg-white shadow mb-2 xl:mb-0 rounded flex items-center justify-center h-36 w-52 cursor-pointer border border-transparent focus:border-gray-300 focus:shadow-md focus:outline-none">
                <img src="/indir-1.png" alt />
              </button>
              <button className="bg-white shadow mb-2 xl:mb-0 rounded flex items-center justify-center h-36 w-52 cursor-pointer border border-transparent focus:border-gray-300 focus:shadow-md focus:outline-none">
                <img src="/html-basic.png" alt />
              </button>
              <button className="bg-white shadow mb-2 xl:mb-0 rounded flex items-center justify-center h-36 w-52 cursor-pointer border border-transparent focus:border-gray-300 focus:shadow-md focus:outline-none">
                <img src="/css.png" alt />
              </button>
            </div>
          </div>
        </div>
      }
    />
  );
}
