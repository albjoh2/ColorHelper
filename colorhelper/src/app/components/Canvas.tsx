import TextComponent from "./TextComponent";

interface CanvasProps {
  color: object | any;
  text: string;
}

export default function Canvas(props: CanvasProps) {
  const text = props.text;
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "500px",
          height: "300px",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: `rgb(${props.color.background.red}, ${props.color.background.green}, ${props.color.background.blue})`,
        }}
      >
        <TextComponent text={text} textcolor={props.color.text} />
      </div>
    </>
  );
}
