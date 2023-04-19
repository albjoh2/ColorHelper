import ColorPickerContainer from "./ColorPickerContainer";
import Logotype from "./Logotype";

interface CanvasProps {
  color: object | any;
  text: string;
}

interface HeaderProps {
  color: object | any;
  text: string;
  setCanvasProps: React.Dispatch<React.SetStateAction<CanvasProps>>;
}

export default function Header(props: HeaderProps) {
  return (
    <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <div className="fixed left-0 top-0 justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        <div>
          <h2>
            Get started by picking a color, text color and the text to display.{" "}
          </h2>
        </div>
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <ColorPickerContainer
              title={"Background"}
              colors={props.color.background}
              setCanvasProps={props.setCanvasProps}
            />
            <ColorPickerContainer
              title={"Text"}
              colors={props.color.text}
              setCanvasProps={props.setCanvasProps}
            />
            <input
              type="text"
              value={props.text}
              onChange={(event) =>
                props.setCanvasProps({ ...props, text: event.target.value })
              }
              placeholder="Min lilla byrå"
            />
          </div>
        </div>
      </div>
      <Logotype />
    </div>
  );
}
