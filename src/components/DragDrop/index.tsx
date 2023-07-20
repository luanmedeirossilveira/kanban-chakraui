import React, { useState } from "react";
import { Card } from "../Card";
import "./styles.css";

interface BoxProps {
  title: string;
  img: string;
}

const DragDrop = () => {
  const [box1, setBox1] = useState<BoxProps | undefined>({
    title: 'Card 1',
    img: 'https://picsum.photos/320/240',
  });
  const [box2, setBox2] = useState<BoxProps | undefined>(undefined);
  const [box3, setBox3] = useState<BoxProps | undefined>(undefined);

  const dropHandlerBox1 = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    console.log(data)
  };

  const allowDropBox1 = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const dropHandlerBox2 = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    console.log(data)
  };

  const allowDropBox2 = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const dropHandlerBox3 = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    console.log(data)
  };

  const allowDropBox3 = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div className="container">
      <div
        className="box1"
        onDragOver={allowDropBox1}
        onDrop={dropHandlerBox1}
        draggable={true}
      >
        <Card
          src={box1?.img}
          title={box1?.title}
        />
      </div>

      <div
        className="box2"
        onDragOver={allowDropBox2}
        onDrop={dropHandlerBox2}
        draggable={true}
      >
        <Card
          src={box2?.img}
          title={box2?.title}
        />
      </div>

      <div
        className="box3"
        onDragOver={allowDropBox3}
        onDrop={dropHandlerBox3}
        draggable={true}
      >
        <Card
          src={box3?.img}
          title={box3?.title}
        />
      </div>
    </div>
  );
};

export default DragDrop;
