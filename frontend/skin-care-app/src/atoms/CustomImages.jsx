import React from "react";

const CustomImages = ({ src, alt, props }) => {
  return <img src={src} alt={alt} style={props.ImageStyles} />;
};

export default CustomImages;
