import React, { useState, useRef, useEffect } from 'react';

const ImageCard = ({ image }) => {

  const [span, setSpan] = useState(0);

  const imageRef = useRef();

  useEffect(() => {
    imageRef.current.addEventListener('load', setSpans);
  }, []);

  const setSpans = () => {
    const height = imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    setSpan( spans );
  }

  return (
    <div style={{ gridRowEnd: `span ${span}` }}>
      <img ref={imageRef} key={image.id} src={image.urls.regular} alt={image.description} />
    </div>
  )
}

export default ImageCard;
