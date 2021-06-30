import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  console.log(props.images);

  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });
  return (
    <div className="image-list" style={{ margin: "10px 120px 10px 155px" }}>
      {images}
    </div>
  );
};

export default ImageList;
