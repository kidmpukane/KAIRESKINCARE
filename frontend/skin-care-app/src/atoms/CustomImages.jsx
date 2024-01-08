import React from "react";

const CustomImages = ({ src, alt, props }) => {
  return <img className="square-image" src={src} alt={alt} />;
};

export default CustomImages;
