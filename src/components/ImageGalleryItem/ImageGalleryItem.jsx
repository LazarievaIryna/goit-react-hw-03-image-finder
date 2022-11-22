// import React from 'react';
export const ImageGalleryItem = ({ url, alt, onClick, originalUrl }) => {
  function onClickHandlerModal() {
    onClick(originalUrl, alt);
  }
  return (
    <li className="ImageGalleryItem" onClick={onClickHandlerModal}>
      <img src={url} alt={alt} className="ImageGalleryItem-image" />
    </li>
  );
};
