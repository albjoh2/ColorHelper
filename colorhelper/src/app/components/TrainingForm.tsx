"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface CanvasProps {
  color: object | any;
  text: string;
}

export default function TrainingForm(props: CanvasProps) {
  const [colorRed, setColorRed] = useState(props.color.background.red);
  const [colorGreen, setColorGreen] = useState(props.color.background.green);
  const [colorBlue, setColorBlue] = useState(props.color.background.blue);
  const [textColorRed, setTextColorRed] = useState(props.color.text.red);
  const [textColorGreen, setTextColorGreen] = useState(props.color.text.green);
  const [textColorBlue, setTextColorBlue] = useState(props.color.text.blue);

  const [easyToRead, setEasyToRead] = useState(0.5);
  const [beauty, setBeauty] = useState(0.5);
  const router = useRouter();

  useEffect(() => {
    setColorRed(props.color.background.red);
    setColorGreen(props.color.background.green);
    setColorBlue(props.color.background.blue);
    setTextColorRed(props.color.text.red);
    setTextColorGreen(props.color.text.green);
    setTextColorBlue(props.color.text.blue);
  }, [props.color]);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
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

    window.location.reload();
  };

  return (
    <div className="relative w-full h-120 left-0 top-0 justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 rounded-md lg:p-4 lg:dark:bg-zinc-800/30 p-20">
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
        <h3>What do you think?</h3>
        <div>
          <label>
            Easy to read?
            <input
              type="range"
              defaultValue={easyToRead}
              onChange={(e) => setEasyToRead(+e.target.value)}
              min={0}
              max={0.9999999}
              step={0.001}
              name="easyToRead"
            />
          </label>
          <p style={{ textAlign: "end", marginRight: "55px", color: "#aaa" }}>
            {(easyToRead * 100).toFixed(0)}%
          </p>
        </div>
        <div>
          <label>
            Beautiful?
            <input
              type="range"
              defaultValue={beauty}
              onChange={(e) => setBeauty(+e.target.value)}
              min={0}
              max={0.9999999}
              step={0.001}
              name="beauty"
            />
          </label>
          <p style={{ textAlign: "end", marginRight: "55px", color: "#aaa" }}>
            {(beauty * 100).toFixed(0)}%
          </p>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
