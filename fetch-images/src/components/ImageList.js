import React from 'react';

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <img key={image.id} src={image.urls.regular} alt={image.description} />
  });
  return (
    <div>
      {images}
      <pre>{JSON.stringify(props.images, null, 2)}</pre>
    </div>
  )
}

export default ImageList;
