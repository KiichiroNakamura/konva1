import React from "react";
import { Stage, Layer, Image, Circle, Rect } from "react-konva";
import useImage from "use-image";

export default function App() {
  const stageRef = React.useRef();
  const BackImage = () => {
    const [image] = useImage("https://konvajs.org/assets/yoda.jpg");
    return <Image image={image} x={0} y={0} width={500} height={500} />;
  };

  const PADDING = 5;
  const HEIGHT = 3000;
  var WIDTH = 3000;

  const verticalBar = (stage) => {
    console.log(stage.WIDTH);
    const dragBoundFuncA = (pos) => {
      pos.x = stage.width() - PADDING - 10;
      pos.y = Math.max(
        Math.min(pos.y, stage.height() - this.height() - PADDING),
        PADDING
      );
      return pos;
    };
    const onDragMoveFunc = () => {
      const availableHeight =
        stage.height() - PADDING * 2 - verticalBar.height();
      var delta = (verticalBar.y() - PADDING) / availableHeight;

      stage.Layer.y(-(HEIGHT - stage.height()) * delta);
    };

    return (
      <React
        width={10}
        height={100}
        fill={"grey"}
        opacity={0.8}
        x={stage.width() - PADDING - 10}
        y={PADDING}
        draggable={"true"}
        dragBoundFunc={dragBoundFuncA(event.target.pos)}
        onDragMove={onDragMoveFunc}
      />
    );
  };

  const horizontalBar = (stage, pos) => {
    const dragBoundFuncA = () => {
      pos.x = Math.max(
        Math.min(pos.x, stage.width() - this.width() - PADDING),
        PADDING
      );
      pos.y = stage.height() - PADDING - 10;

      return pos;
    };
    const dragmoveFunc = () => {
      const availableWidth =
        stage.width() - PADDING * 2 - horizontalBar.width();
      var delta = (horizontalBar.x() - PADDING) / availableWidth;

      stage.layer.x(-(WIDTH - stage.width()) * delta);
    };

    return (
      <React
        width={100}
        height={10}
        fill={"grey"}
        opacity={0.8}
        x={{ PADDING }}
        y={stage.height() - PADDING - 10}
        draggable={"true"}
        dragBoundFunc={dragBoundFuncA(pos)}
        dragmove={dragmoveFunc}
      />
    );
  };
  //scrollLayers.add(verticalBar);

  const Scrolllayer = () => {
    return (
      <Layer>
        <verticalBar />
        <horizontalBar />
      </Layer>
    );
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
        {/* <Layer>
          <BackImage />
        </Layer> */}
        <Mizutama />
        <Scrolllayer value={Stage} />
        {/* 何かをするとき、必ずLayerで括る必要がある */}
        <Layer>
          <Rect fill="red" x={100} y={100} width={300} height={200} />
        </Layer>
      </Stage>
    </div>
  );
}
