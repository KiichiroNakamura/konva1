import React from "react";
import { Stage, Layer, Image, Circle, Rect } from "react-konva";
import useImage from "use-image";

export default function App() {
  const stageRef = React.useRef();
  const BackImage = () => {
    const [image] = useImage("https://konvajs.org/assets/yoda.jpg");
    return <Image image={image} x={0} y={0} width={500} height={500} />;
  };
  const Mizutama = () => {
    var WIDTH = 3000;
    var HEIGHT = 3000;
    var NUMBER = 200;

    return (
      <Layer>
        <Circle fill="red" x={0} y={0} width={40} height={40} />
        <Circle fill="red" x={10} y={100} width={40} height={40} />
        <Circle fill="blue" x={15} y={150} width={40} height={40} />
        <Circle fill="red" x={20} y={200} width={40} height={40} />
        <Circle fill="blue" x={25} y={250} width={40} height={40} />
        <Circle fill="red" x={30} y={300} width={40} height={40} />
        <Circle fill="blue" x={35} y={350} width={40} height={40} />
        <Circle fill="red" x={40} y={400} width={40} height={40} />
        <Circle fill="blue" x={45} y={450} width={40} height={40} />
      </Layer>
    );
  };

  return (
    <div>
      Try to trag and image into the stage:
      <Stage
        width={150}
        height={400}
        style={{ border: "10px double red" }}
        ref={stageRef}
      >
        <Layer width={10} height={50} />
        <Layer>
          <BackImage />
        </Layer>
        <Mizutama />
        {/* 何かをするとき、必ずLayerで括る必要がある */}
        <Layer>
          <Rect fill="red" x={100} y={100} width={300} height={200} />
        </Layer>
      </Stage>
    </div>
  );
}
