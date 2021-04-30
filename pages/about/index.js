import MenuComponent from "../../components/menu";

export default function About() {
  return (
    <MenuComponent
      children={
        <div className="mr-4 ">
          <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
            <img
              className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
              src="/1.svg"
              alt=""
              width="384"
              height="512"
            />
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
              <blockquote>
                <p className="text-lg font-semibold">
                  “Tailwind CSS is the only framework that I've seen scale on
                  large teams. It’s easy to customize, adapts to any design, and
                  the build size is tiny.”
                </p>
              </blockquote>
              <blockquote>
                <p className="text-lg font-semibold">
                  “Tailwind CSS is the only framework that I've seen scale on
                  large teams. It’s easy to customize, adapts to any design, and
                  the build size is tiny.”
                </p>
              </blockquote>
              <blockquote>
                <p className="text-lg font-semibold">
                  “Tailwind CSS is the only framework that I've seen scale on
                  large teams. It’s easy to customize, adapts to any design, and
                  the build size is tiny.”
                </p>
              </blockquote>{" "}
              <blockquote>
                <p className="text-lg font-semibold">
                  “Tailwind CSS is the only framework that I've seen scale on
                  large teams. It’s easy to customize, adapts to any design, and
                  the build size is tiny.”
                </p>
              </blockquote>{" "}
              <blockquote>
                <p className="text-lg font-semibold">
                  “Tailwind CSS is the only framework that I've seen scale on
                  large teams. It’s easy to customize, adapts to any design, and
                  the build size is tiny.”
                </p>
              </blockquote>{" "}
              <blockquote>
                <p className="text-lg font-semibold">
                  “Tailwind CSS is the only framework that I've seen scale on
                  large teams. It’s easy to customize, adapts to any design, and
                  the build size is tiny.”
                </p>
              </blockquote>{" "}
              <blockquote>
                <p className="text-lg font-semibold">
                  “Tailwind CSS is the only framework that I've seen scale on
                  large teams. It’s easy to customize, adapts to any design, and
                  the build size is tiny.”
                </p>
              </blockquote>
              <figcaption className="font-medium">
                <div className="text-cyan-600">Ebubekir DEMİRAY</div>
                <div className="text-gray-500">FRONTEND DEVELOPER</div>
              </figcaption>
            </div>
          </figure>
        </div>
      }
    />
  );
}
