import Link from "next/link";
import { useRouter } from "next/router";
import ButtonComponent from "../button";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import FirstScreen from "../first-screen/first-screen";
export default function MenuComponent() {
  const router = useRouter();
  return (
    <div className="flex">
      <div className="fixed z-50 flex-none w-1/5 h-screen bg-gradient-to-r from-blue-400 to-purple-500  bg-opacity-100 ">
        <div className="text-center items-center ">
          <div>
            <h2
              onClick={() => router.push("/")}
              className="cursor-pointer p-7 bg-gradient-to-r from-gray-100  to-gray-500 text-white font-bold font-sans text-2xl"
            >
              EBDEM
            </h2>
          </div>
          <Link className="items-center text-center cursor-pointer" href="/">
            <img
              className=" mx-5 my-8 rounded-lg cursor-pointer"
              src="/support-center.svg"
              alt="image"
            />
          </Link>
          <div className="flex flex-col">
            <ButtonComponent name="Blog" />
            <ButtonComponent name="About" />
            <ButtonComponent name="Contact" />
          </div>
        </div>
        <div className="flex text-5xl mx-20 justify-between mt-36">
          <button
            onClick={() => router.push("https://github.com/ebdem")}
            className="transform hover:scale-150  transition ease-in
                duration-200 focus-within:outline-none"
          >
            <GithubOutlined className="bg-white rounded-full" />
          </button>
          <button
            onClick={() =>
              router.push(
                "https://www.linkedin.com/in/ebubekir-demiray-6170941a6/"
              )
            }
            className="transform hover:scale-150  transition ease-in
                duration-200 focus-within:outline-none"
          >
            <LinkedinOutlined className="text-blue-800 bg-white rounded" />
          </button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "80%",
          right: 0,
          position: "absolute",
        }}
      >
        <div
          style={{
            width: "80%",
          }}
          className="fixed mb-4 bg-gradient-to-r from-gray-500  to-gray-100 p-11 text-center z-50  text-white font-bold font-serif text-2xl"
        />
        <div className="z-20 ml-2 mt-24 overscroll-y-auto rounded">
          <FirstScreen />
        </div>
      </div>
    </div>
  );
}
