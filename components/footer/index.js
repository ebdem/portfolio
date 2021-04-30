import Link from "next/link";
import { useState } from "react";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
export default function FooterComponent() {
  const [mode, setMode] = useState("auto");
  return (
    <div className="pt-12">
      <footer
        id="footer"
        className="absolute w-full z-50 dark:bg-gray-900 pt-8"
      >
        <div className="py-8 flex flex-col justify-center items-center">
          <p className="mt-6 text-xs lg:text-lg leading-none text-gray-900 dark:text-gray-50 font-mono">
            2021 Demiray Software
          </p>
        </div>
      </footer>
    </div>
  );
}
