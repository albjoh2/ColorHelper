interface PocketbaseData {
  textColorRed: number;
  textColorGreen: number;
  textColorBlue: number;
  colorRed: number;
  colorGreen: number;
  colorBlue: number;
  easyToRead: number;
  beauty: number;
}

interface NeuralNetOutputs {
  accessibilityScore: number;
  beautyScore: number;
}

export async function trainNeuralNet(setNet: any, net: any): Promise<void> {
  // get training data from Pocketbase
  const response = await fetch(
    "http://127.0.0.1:8090/api/collections/dataPoint/records?perPage=1000"
  );
  const data = await response.json();

  // modify training data to include two outputs
  const trainingData = data.items.map((item: PocketbaseData) => ({
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
  setNet(net);
}

interface CanvasProps {
  color: object | any;
  text: string;
}

export function getNeuralNetOutputs(
  net: any,
  props: CanvasProps
): NeuralNetOutputs {
  const output = net.run([
    props.color.text.red / 255,
    props.color.text.green / 255,
    props.color.text.blue / 255,
    props.color.background.red / 255,
    props.color.background.green / 255,
    props.color.background.blue / 255,
  ]) as any;

  return {
    accessibilityScore: parseFloat(
      (output.accessibilityScore * 100).toFixed(2)
    ),
    beautyScore: parseFloat((output.beautyScore * 100).toFixed(2)),
  };
}
