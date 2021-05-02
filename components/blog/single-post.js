export default function SinglePostComponent({
  author,
  date,
  title,
  content,
  image,
}) {
  return (
    <>
      {/* Card is full width. Use in 12 col grid for best view. */}
      {/* Card code block start */}
      <div className="flex flex-col-reverse w-full flex-col bg-white dark:bg-gray-800 shadow rounded">
        <div className="w-full lg:w-full">
          <div className="pt-4 lg:pt-6 pb-4 lg:pb-6 pl-4 lg:pl-6 pr-4 lg:pr-6">
            <div className="flex justify-between items-center lg:items-start flex-row-reverse lg:flex-col">
              <h4 className="lg:mt-3 text-pink-400 dark:text-gray-400 font-mono font-bold">
                {author}
              </h4>
              <h4 className="lg:mt-3 text-gray-600 dark:text-gray-400 text-base font-normal">
                {date}
              </h4>
            </div>
            <h2 className="text-gray-800 dark:text-gray-100 mt-4 mb-2 tracking-normal text-xl lg:text-2xl font-bold">
              {title}
            </h2>
            <p className="mb-6 font-normal text-gray-600 dark:text-gray-400 text-sm tracking-normal w-11/12 lg:w-9/12">
              {content}
            </p>
          </div>
        </div>
        <div className="flex w-full h-64 lg:h-auto w-full rounded-t lg:rounded-t-none lg:rounded-r ">
          <img
            className="w-full h-72  inset-0 object-cover rounded-t lg:rounded-r lg:rounded-t-none"
            src={image}
            alt="banner"
          />
        </div>
      </div>
      {/* Card code block end */}
    </>
  );
}
