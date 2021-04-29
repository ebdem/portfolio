export default function MenuComponent() {
  return (
    <div className="flex">
      <div className=" flex-none w-1/5 h-screen	 bg-gradient-to-r from-blue-400 to-purple-500  bg-opacity-100 h-full">
        <div className="text-center items-center">
          <img
            className=" mx-5 my-8 rounded-lg"
            src="/support-center.svg"
            alt="image"
          />
          <div className="bg-purple-500 bg-opacity-50 w-4/5 rounded-lg  mx-5 shadow-lg p-3">
            <a className="items-center text-center" href="#">
              <p className="text-5xl text-red-50 font-mono"> EBDEM</p>
            </a>
          </div>
        </div>
      </div>
      <div className="flex-grow h-16">7</div>
    </div>
  );
}
