"use client";

import Canvas from "./components/Canvas";
import { trainNeuralNet, getNeuralNetOutputs } from "./functions/brain";
import getRandomColor from "./functions/getRandomColor";
import RandomButton from "./components/RandomButton";
import TrainingForm from "./components/TrainingForm";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import ScoreContainer from "./components/ScoreContainer";
import * as brain from "brain.js";

const config = {
  binaryThresh: 0.5,
  hiddenLayers: [6, 6], // array of ints for the sizes of the hidden layers in the network
  activation: "sigmoid", // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
  leakyReluAlpha: 0.01, // supported for activation type 'leaky-relu'
};

export default function Home() {
  const [beautyScore, setBeautyScore] = useState(0);
  const [accessibilityScore, setAccessibilityScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [net, setNet] = useState(new brain.NeuralNetwork(config));

  const [canvasProps, setCanvasProps] = useState({
    color: getRandomColor({
      background: { red: 0, green: 0, blue: 0 },
      text: { red: 0, green: 0, blue: 0 },
    }),
    text: "Min lilla byrå",
  });

  const [isNetTrained, setIsNetTrained] = useState(false);

  useEffect(() => {
    trainNeuralNet(setNet, net).then(() => {
      setIsNetTrained(true);
    });
  }, []);

  useEffect(() => {
    if (isNetTrained) {
      let data = getNeuralNetOutputs(net, canvasProps);
      setAccessibilityScore(data.accessibilityScore);
      setBeautyScore(data.beautyScore);
      setTotalScore((data.accessibilityScore + data.beautyScore) / 2);
    }
  }, [isNetTrained, canvasProps]);

  const handleRandomize = () => {
    setCanvasProps({
      color: getRandomColor({
        background: { red: 0, green: 0, blue: 0 },
        text: { red: 0, green: 0, blue: 0 },
      }),
      //dont change text
      text: canvasProps.text,
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header {...canvasProps} setCanvasProps={setCanvasProps} />
      <div className="relative flex place-items-center gap-10 m-5">
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Canvas {...canvasProps} />
          <RandomButton handleRandomize={handleRandomize} />
        </div>
        <TrainingForm {...canvasProps} />
      </div>

      <ScoreContainer
        accessibilityScore={accessibilityScore}
        beautyScore={beautyScore}
        totalScore={totalScore}
      />
    </main>
  );
}
