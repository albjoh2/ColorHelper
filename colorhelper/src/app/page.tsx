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
import Loading from "./components/Loading";

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

  const findAGoodOne = () => {
    let bestScore = 0;
    let bestColor = {
      background: { red: 0, green: 0, blue: 0 },
      text: { red: 0, green: 0, blue: 0 },
    };
    let bestText = "";
    for (let i = 0; i < 1000; i++) {
      let color = getRandomColor({
        background: { red: 0, green: 0, blue: 0 },
        text: { red: 0, green: 0, blue: 0 },
      });
      let data = getNeuralNetOutputs(net, {
        color: color,
        text: canvasProps.text,
      });
      let score = (data.accessibilityScore + data.beautyScore) / 2;
      if (score > bestScore) {
        bestScore = score;
        bestColor = color;
        bestText = canvasProps.text;
      }
    }
    setCanvasProps({
      color: bestColor,
      text: bestText,
    });
  };
  useEffect(() => {
    setTimeout(() => {
      trainNeuralNet(setNet, net).then(() => {
        setIsNetTrained(true);
      });
    }, 100);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-9">
      {!isNetTrained && <Loading />}
      <Header {...canvasProps} setCanvasProps={setCanvasProps} />
      <div className="relative lg:flex md:flex place-items-center gap-10 m-5">
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Canvas {...canvasProps} />
          <div className="flex justify-center gap-10">
            <button onClick={findAGoodOne}>Give me something nice</button>
            <RandomButton handleRandomize={handleRandomize} />
          </div>
        </div>
        <div className="w-full flex justify-center sm:mt-10">
          <TrainingForm {...canvasProps} />
        </div>
      </div>

      <ScoreContainer
        accessibilityScore={accessibilityScore}
        beautyScore={beautyScore}
        totalScore={totalScore}
      />
    </main>
  );
}
