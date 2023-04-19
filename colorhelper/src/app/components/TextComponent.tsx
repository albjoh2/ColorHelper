export default function TextComponent(props: {
  text: string;
  textcolor: string;
}) {
  return (
    <p
      style={{
        color: props.textcolor,
        fontSize: "36px",
      }}
      className="text"
    >
      {props.text}
    </p>
  );
}
