import Link from "next/link";
export default function BlogComponent({
  image,
  title,
  content,
  author,
  job,
  date,
}) {
  return (
    <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0 w-5/6 mx-auto mb-3">
      <img
        className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
        src={image}
        alt=""
        width="384"
        height="512"
      />
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <Link href="/blog/single">
            <p className="text-xl font-bold cursor-pointer hover:text-blue-400">
              {title}
            </p>
          </Link>
          <p className="text-lg font-light">{content}</p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-cyan-600">{author}</div>
          <div className="text-gray-500">{job}</div>
          <div className="text-purple-500">{date}</div>
        </figcaption>
      </div>
    </figure>
  );
}
