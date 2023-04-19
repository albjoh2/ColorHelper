import TextComponent from "./TextComponent";

interface CanvasProps {
  color: string;
  textcolor: string;
  text: string;
}

export default function Canvas(props: CanvasProps) {
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
          backgroundColor: props.color,
        }}
      >
        <TextComponent text={props.text} textcolor={props.textcolor} />
      </div>
    </>
  );
}
