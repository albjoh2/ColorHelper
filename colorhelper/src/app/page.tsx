"use client";

import Main from "./components/Main";
import { trainNeuralNet, getNeuralNetOutputs } from "./functions/brain";
import getRandomColor from "./functions/getRandomColor";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import ScoreContainer from "./components/ScoreContainer";
import * as brain from "brain.js";
import Loading from "./components/Loading";
import { CONFIG } from "./constants";

export default function Home() {
  const [beautyScore, setBeautyScore] = useState(0);
  const [accessibilityScore, setAccessibilityScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [net, setNet] = useState(new brain.NeuralNetwork(CONFIG));

  const [canvasProps, setCanvasProps] = useState({
    color: getRandomColor({
      background: { red: 0, green: 0, blue: 0 },
      text: { red: 0, green: 0, blue: 0 },
    }),
    text: "Min lilla byrå",
  });

  const [isNetTrained, setIsNetTrained] = useState(false);

  useEffect(() => {
    if (isNetTrained) {
      let data = getNeuralNetOutputs(net, canvasProps.color);
      setAccessibilityScore(data.accessibilityScore);
      setBeautyScore(data.beautyScore);
      setTotalScore((data.accessibilityScore + data.beautyScore) / 2);
    }
  }, [isNetTrained, canvasProps]);

  useEffect(() => {
    trainNeuralNet(setNet, net).then(() => {
      setIsNetTrained(true);
    });
  }, []);

  return (
    <main className="flex justify-between min-h-screen flex-col items-center p-7">
      {!isNetTrained && <Loading />}
      <Header {...canvasProps} setCanvasProps={setCanvasProps} />
      <Main
        net={net}
        canvasProps={canvasProps}
        setCanvasProps={setCanvasProps}
      />

      <ScoreContainer
        accessibilityScore={accessibilityScore}
        beautyScore={beautyScore}
        totalScore={totalScore}
      />
    </main>
  );
}
