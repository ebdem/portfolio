export default function TextComponent({ text, ...rest }) {
  return (
    <p {...rest} className="font-mono text-lg italic">
      {text}
    </p>
  );
}
