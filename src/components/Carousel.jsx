import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

export default function ControlledCarousel(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  function handleImages() {
    var mapped = props.image.map((images) => {
      return (
        <Carousel.Item key = {props.key}>
          <img key = {props.key} style = {{borderRadius: "4px", height: "500px", margin: "0 auto"}} className="d-block" src={images} alt={props.title} />

        </Carousel.Item>
      )
    });
    return mapped;
  }

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="carousel" key = {props.key}>
      {handleImages()}
    </Carousel>
  );
}
