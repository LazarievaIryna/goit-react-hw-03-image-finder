import  {ImageGalleryItem}  from "components/ImageGalleryItem/ImageGalleryItem";
export const ImageGallery = ({ images, onClick }) => {
  console.log(images)
  return (
  <ul className="ImageGallery">
    {images.map(({ id, webformatURL, largeImageURL, tags }) => 
               (
                <ImageGalleryItem
                  key={id}
                  originalUrl={largeImageURL}
                  url={webformatURL}
                  alt={tags}
                  onClick={onClick}
                />
              )
            )}
  </ul>);
};
