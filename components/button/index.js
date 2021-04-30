import TextComponent from "../text";

export default function ButtonComponent({ name, ...rest }) {
  return (
    <button
      {...rest}
      className="
                p-4 bg-white rounded-lg
                w-3/4 mb-4 mx-8 z-50
                transform hover:scale-110
                hover:bg-purple-300
                hover:text-blue-50
                motion-reduce:transform-none
                transition ease-in
                duration-200 text-2xl font-mono	"
    >
      <TextComponent text={name} />
    </button>
  );
}
