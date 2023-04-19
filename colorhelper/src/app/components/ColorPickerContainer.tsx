import React from "react";

interface CanvasProps {
  color: object | any;
  text: string;
}

export default function ColorPickerContainer({
  title,
  colors,
  setCanvasProps,
}: {
  title: string;
  colors: { red: number; green: number; blue: number };
  setCanvasProps: React.Dispatch<React.SetStateAction<CanvasProps>>;
}) {
  const handleRangeChange = (color: string, value: number) => {
    // Update the color value in the state based on which range is changed
    setCanvasProps((prevState) => ({
      ...prevState,
      color: {
        ...prevState.color,
        [title.toLowerCase()]: {
          ...prevState.color[title.toLowerCase()],
          [color]: value,
        },
      },
    }));
  };

  return (
    <div>
      <h4>{title}</h4>
      <label>
        Red
        <input
          type="range"
          value={colors.red}
          min={0}
          max={255}
          onChange={(e) => handleRangeChange("red", parseInt(e.target.value))}
        />
      </label>
      <label>
        Green
        <input
          type="range"
          value={colors.green}
          min={0}
          max={255}
          onChange={(e) => handleRangeChange("green", parseInt(e.target.value))}
        />
      </label>
      <label>
        Blue
        <input
          type="range"
          value={colors.blue}
          min={0}
          max={255}
          onChange={(e) => handleRangeChange("blue", parseInt(e.target.value))}
        />
      </label>
    </div>
  );
}
