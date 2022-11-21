// import React from 'react';
export const ImageGalleryItem = ({ url, alt }) => {
  return (
    <li className="ImageGalleryItem">
      <img src={url} alt={alt} className="ImageGalleryItem-image" />
    </li>
  );
};
