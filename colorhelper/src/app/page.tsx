"use client";

import Canvas from "./components/Canvas";
import * as brain from "brain.js";
import RandomButton from "./components/RandomButton";
import TrainingForm from "./components/TrainingForm";
import ScoreComponent from "./components/ScoreComponent";
import { useState, useEffect } from "react";
import Header from "./components/Header";

let textColorRed: number = 0,
  textColorGreen: number = 0,
  textColorBlue: number = 0,
  colorRed: number = 0,
  colorGreen: number = 0,
  colorBlue: number = 0;

async function brainFunction(
  setAccessibilityScore: any,
  setBeautyScore: any,
  setTotalScore: any
) {
  // provide optional config object (or undefined). Defaults shown.
  const config = {
    binaryThresh: 0.5,
    hiddenLayers: [6, 6], // array of ints for the sizes of the hidden layers in the network
    activation: "sigmoid", // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
    leakyReluAlpha: 0.01, // supported for activation type 'leaky-relu'
  };

  // create a simple feed forward neural network with backpropagation
  const net = new brain.NeuralNetwork(config);

  // get training data from Pocketbase
  const response = await fetch(
    "http://127.0.0.1:8090/api/collections/dataPoint/records?perPage=1000"
  );
  const data = await response.json();

  console.log(data.items);

  // modify training data to include two outputs
  const trainingData = data.items.map((item: any) => ({
    input: [
      item.textColorRed / 255,
      item.textColorGreen / 255,
      item.textColorBlue / 255,
      item.colorRed / 255,
      item.colorGreen / 255,
      item.colorBlue / 255,
    ],
    output: {
      accessibilityScore: item.easyToRead,
      beautyScore: item.beauty,
    },
  }));

  // train the neural network
  net.train(trainingData);

  // use the trained network to make predictions on the test data
  const output = net.run([
    textColorRed,
    textColorGreen,
    textColorBlue,
    colorRed,
    colorGreen,
    colorBlue,
  ]) as any;

  setBeautyScore(output.beautyScore.toFixed(2) * 100);
  setAccessibilityScore(output.accessibilityScore.toFixed(2) * 100);
  setTotalScore(
    ((output.beautyScore * 100 + output.accessibilityScore * 100) / 2).toFixed(
      2
    )
  );
}

//generate random color
function getRandomColor(type: string) {
  if (type === "text") {
    textColorRed = Math.floor(Math.random() * 254) + 1;
    textColorGreen = Math.floor(Math.random() * 254) + 1;
    textColorBlue = Math.floor(Math.random() * 254) + 1;
    return `rgb(${textColorRed}, ${textColorGreen}, ${textColorBlue})`;
  } else {
    colorRed = Math.floor(Math.random() * 254) + 1;
    colorGreen = Math.floor(Math.random() * 254) + 1;
    colorBlue = Math.floor(Math.random() * 254) + 1;
    return `rgb(${colorRed}, ${colorGreen}, ${colorBlue})`;
  }
}

export default function Home() {
  const [beautyScore, setBeautyScore] = useState(0);
  const [accessibilityScore, setAccessibilityScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);

  useEffect(() => {
    brainFunction(setAccessibilityScore, setBeautyScore, setTotalScore);
  }, []);

  const [canvasProps, setCanvasProps] = useState({
    color: getRandomColor("background"),
    textcolor: getRandomColor("text"),
    text: "Min lilla byrå",
  });

  const handleRandomize = () => {
    setCanvasProps({
      color: getRandomColor("background"),
      textcolor: getRandomColor("text"),
      text: "Min lilla byrå",
    });
    brainFunction(setAccessibilityScore, setBeautyScore, setTotalScore);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <div className="relative flex place-items-center gap-10 m-5">
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Canvas {...canvasProps} />
          <RandomButton handleRandomize={handleRandomize} />
        </div>
        <div>
          <h3>What do you think?</h3>
          <TrainingForm {...canvasProps} />
        </div>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
        <ScoreComponent
          score={accessibilityScore}
          title="Accessibility Score"
          description="A score based on the AI-models score of color contrast between text and
          background."
        />

        <ScoreComponent
          score={beautyScore}
          title="Beauty Score"
          description="A score based on how well the model thinks the colors goes together."
        />

        <ScoreComponent
          score={totalScore}
          title="Total Score"
          description="This score tells you what the model thinks of the design as a whole."
        />
      </div>
    </main>
  );
}
