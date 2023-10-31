import React from 'react';

function ExampleCarouselImage({ imageUrl, text }) {
  return (
    <img
      className="d-block w-100"
      src={imageUrl}
      alt={text}
    />
  );
}

export default ExampleCarouselImage;