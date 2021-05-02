import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/router";

export default function HeaderComponent() {
  const router = useRouter();
  return (
    <div className="bg-white border-b border-gray-300">
      {/* Code block starts */}
      <div className="pt-2 container px-6 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between pb-4 ">
        <div>
          <Link href="/">
            <h3 className="text-2xl font-bold leading-tight text-gray-800 dark:text-gray-100 cursor-pointer">
              EBDEM
            </h3>
          </Link>
        </div>
        <div className="mt-6 md:mt-0">
          <button
            onClick={() => router.push("https://github.com/ebdem")}
            className="mr-3  dark:bg-gray-700 focus:outline-none transition duration-150 ease-in-out rounded hover:bg-black hover:text-white text-black dark:hover:bg-gray-600 dark:text-black px-5 pt-2 pb-3 text-lg"
          >
            <GithubOutlined />
          </button>
          <button
            onClick={() =>
              router.push(
                "https://www.linkedin.com/in/ebubekir-demiray-6170941a6/"
              )
            }
            className="mr-3 dark:bg-gray-700 focus:outline-none transition duration-150 ease-in-out rounded hover:bg-blue-500 hover:text-white text-blue-500 dark:hover:bg-gray-600 dark:text-indigo-600 px-5 pt-2 pb-3 text-lg"
          >
            <LinkedinOutlined />
          </button>
        </div>
        {/* Code block ends */}
      </div>
    </div>
  );
}
