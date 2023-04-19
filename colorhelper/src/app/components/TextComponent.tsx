export default function TextComponent(props: {
  text: string;
  textcolor: object | any;
}) {
  return (
    <p
      style={{
        color: `rgb(${props.textcolor.red}, ${props.textcolor.green}, ${props.textcolor.blue})`,
        fontSize: "36px",
      }}
      className="text"
    >
      {props.text}
    </p>
  );
}
