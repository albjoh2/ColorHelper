import Canvas from "./Canvas";
import ButtonContainer from "./ButtonContainer";
import TrainingForm from "./TrainingForm";

export default function Main({ net, canvasProps, setCanvasProps }: any) {
  return (
    <div className="w-full max-w-5xl relative lg:flex md:flex place-items-center mt-5 gap-20">
      <div
        className="h-120"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          width: "100%",
        }}
      >
        <Canvas {...canvasProps} />
        <ButtonContainer
          net={net}
          canvasProps={canvasProps}
          setCanvasProps={setCanvasProps}
        />
      </div>

      <TrainingForm {...canvasProps} />
    </div>
  );
}
