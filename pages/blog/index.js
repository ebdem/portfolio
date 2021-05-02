import MenuComponent from "../../components/menu";
import BlogComponent from "../../components/blog";

export default function Blog() {
  return (
    <MenuComponent
      children={
        <div className="mt-20">
          <BlogComponent
            image="/indir.png"
            content="Tailwind CSS is the only framework that I've seen scale
                     on large teams. It’s easy to customize, adapts to any design,
                     and the build size is tiny."
            title="Tailwind CSS"
            author="Ebubekir DEMİRAY"
            job="FRONTEND DEVELOPER"
          />
          <BlogComponent
            image="/indir.png"
            content="Tailwind CSS is the only framework that I've seen scale
                     on large teams. It’s easy to customize, adapts to any design,
                     and the build size is tiny."
            title="Tailwind CSS"
            author="Ebubekir DEMİRAY"
            job="FRONTEND DEVELOPER"
          />
          <BlogComponent
            image="/indir.png"
            content="Tailwind CSS is the only framework that I've seen scale
                     on large teams. It’s easy to customize, adapts to any design,
                     and the build size is tiny."
            title="Tailwind CSS"
            author="Ebubekir DEMİRAY"
            job="FRONTEND DEVELOPER"
          />
          <BlogComponent
            image="/indir.png"
            content="Tailwind CSS is the only framework that I've seen scale
                     on large teams. It’s easy to customize, adapts to any design,
                     and the build size is tiny."
            title="Tailwind CSS"
            author="Ebubekir DEMİRAY"
            job="FRONTEND DEVELOPER"
          />
          <BlogComponent
            image="/indir.png"
            content="Tailwind CSS is the only framework that I've seen scale
                     on large teams. It’s easy to customize, adapts to any design,
                     and the build size is tiny."
            title="Tailwind CSS"
            author="Ebubekir DEMİRAY"
            job="FRONTEND DEVELOPER"
          />
        </div>
      }
    />
  );
}
