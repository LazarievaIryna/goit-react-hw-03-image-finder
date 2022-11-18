import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
// import { FetchImage } from 'components/Api';

export class ImageGallery extends Component {
  state = {
    // query: '',
    images: [],
  };
  // componentDidUpdate(prevProps, prevState) {
  //   const { newQuery } = this.props;
  //   if (prevProps.newQuery !== newQuery) {
  //     fetch(
  //       `https://pixabay.com/api/?q=${newQuery}&page=1&key=29839947-203cd2765f14246beba1c6e54&image_type=photo&orientation=horizontal&per_page=12`
  //     )
  //       .then(response => response.json())
  //       .then(data => this.setState({ images: data.hits }));
  //   }
  // }

  render() {
    console.log(this.state);
    const { images } = this.state;
    return (
      <ul className="ImageGallery">
        {images.map(({ id, webformatURL, largeImageURL, tags }) => {
          return (
            <ImageGalleryItem
              key={id}
              img={webformatURL}
              alt={tags}
              largeImg={largeImageURL}
            />
          );
        })}
      </ul>
    );
  }
}
