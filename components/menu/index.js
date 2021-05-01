import Link from "next/link";
import { useRouter } from "next/router";
import ButtonComponent from "../button";
import HeaderComponent from "../header";
import FooterComponent from "../footer";
export default function MenuComponent({ children }) {
  const router = useRouter();
  return (
    <>
      <div className="flex">
        <div className="bg-white w-full" />
        <div className="w-full fixed top-0 z-50 mt-0">
          <HeaderComponent />
        </div>
        <div
          style={{ marginTop: "88px", borderRadius: "0 7px 0 0 " }}
          className=" fixed z-50 flex-none w-1/5 h-screen bg-gradient-to-r from-blue-400 to-purple-500  bg-opacity-100 "
        >
          <div className="text-center items-center ">
            <Link className="items-center text-center cursor-pointer" href="/">
              <img
                className=" mx-5 my-8 rounded-lg cursor-pointer"
                src="/support-center.svg"
                alt="true"
              />
            </Link>
            <div className="flex flex-col">
              <ButtonComponent name="Blog" />
              <Link href="/about">
                <ButtonComponent name="About" />
              </Link>
              <Link href="/contact">
                <ButtonComponent name="Contact" />
              </Link>
            </div>
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
          <div className="z-20 ml-4 mt-4  overscroll-y-auto rounded">
            {children}
          </div>
          <div className="absolute bottom-0  w-full ">
            <FooterComponent />
          </div>
        </div>
      </div>
    </>
  );
}
