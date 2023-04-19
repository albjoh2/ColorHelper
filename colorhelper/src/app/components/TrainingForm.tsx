"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface CanvasProps {
  color: string;
  textcolor: string;
  text: string;
}

export default function TrainingForm(props: CanvasProps) {
  const colorRed = props.color.split("(")[1].split(",")[0].trim();
  const colorGreen = props.color.split("(")[1].split(",")[1].trim();
  const colorBlue = props.color
    .split("(")[1]
    .split(",")[2]
    .split(")")[0]
    .trim();
  const textColorRed = props.textcolor.split("(")[1].split(",")[0].trim();
  const textColorGreen = props.textcolor.split("(")[1].split(",")[1].trim();
  const textColorBlue = props.textcolor
    .split("(")[1]
    .split(",")[2]
    .split(")")[0]
    .trim();
  const [easyToRead, setEasyToRead] = useState(0.5);
  const [beauty, setBeauty] = useState(0.5);
  const router = useRouter();
  console.log(
    colorRed,
    colorGreen,
    colorBlue,
    textColorRed,
    textColorGreen,
    textColorBlue
  );

  const handleSubmit = async () => {
    await fetch("http://127.0.0.1:8090/api/collections/dataPoint/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        easyToRead,
        beauty,
        colorRed,
        colorGreen,
        colorBlue,
        textColorRed,
        textColorGreen,
        textColorBlue,
      }),
    });
    setBeauty(0.5);
    setEasyToRead(0.5);

    router.refresh();
  };

  return (
    <>
      <form
        style={{
          width: "300px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
        onSubmit={handleSubmit}
      >
        <label>
          Easy to read?
          <input
            type="range"
            defaultValue={easyToRead}
            onChange={(e) => setEasyToRead(+e.target.value)}
            min={0}
            max={0.9999999}
            step={0.01}
            name="easyToRead"
          />
        </label>
        <label>
          Beautiful?
          <input
            type="range"
            defaultValue={beauty}
            onChange={(e) => setBeauty(+e.target.value)}
            min={0}
            max={0.9999999}
            step={0.01}
            name="beauty"
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
