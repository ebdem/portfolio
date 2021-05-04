import Link from "next/link";
import { useRouter } from "next/router";
export default function BlogComponent({
  image,
  title,
  content,
  author,
  job,
  date,
  _id,
  ...rest
}) {
  const router = useRouter();
  return (
    <div {...rest}>
      <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0 w-5/6 mx-auto mb-3">
        <img
          style={{ objectFit: "contain" }}
          className="  w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src={image}
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-xl font-bold">{title}</p>
            <p className="text-lg font-light">{content}</p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-cyan-600">{author}</div>
            <div className="text-gray-500">{job}</div>
            <div className="text-purple-500">{date}</div>
          </figcaption>
          <button
            onClick={() => router.push(`/blog/${_id}`)}
            className="transition duration-1000 ease-in-out
             shadow-lg px-4 py-2 rounded-l-3xl  text-white font-mono   bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
          >
            See Detail
          </button>
        </div>
      </figure>
    </div>
  );
}
