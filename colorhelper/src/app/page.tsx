"use client";

import Canvas from "./components/Canvas";
import { trainNeuralNet, getNeuralNetOutputs } from "./functions/brain";
import getRandomColor from "./functions/getRandomColor";
import TrainingForm from "./components/TrainingForm";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import ScoreContainer from "./components/ScoreContainer";
import * as brain from "brain.js";
import Loading from "./components/Loading";
import ButtonContainer from "./components/ButtonContainer";

const config = {
  binaryThresh: 0.5,
  hiddenLayers: [6, 5], // array of ints for the sizes of the hidden layers in the network
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
    if (isNetTrained) {
      let data = getNeuralNetOutputs(net, canvasProps.color);
      setAccessibilityScore(data.accessibilityScore);
      setBeautyScore(data.beautyScore);
      setTotalScore((data.accessibilityScore + data.beautyScore) / 2);
    }
  }, [isNetTrained, canvasProps]);

  useEffect(() => {
    setTimeout(() => {
      trainNeuralNet(setNet, net).then(() => {
        setIsNetTrained(true);
      });
    }, 100);
  }, []);

  return (
    <main className="flex justify-between min-h-screen flex-col items-center p-7">
      {!isNetTrained && <Loading />}
      <Header {...canvasProps} setCanvasProps={setCanvasProps} />
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

      <ScoreContainer
        accessibilityScore={accessibilityScore}
        beautyScore={beautyScore}
        totalScore={totalScore}
      />
    </main>
  );
}
