import { Component } from 'react';
export class ImageGalleryItem extends Component {
  render() {
    const { img, alt } = this.props;
    return (
      <li className="ImageGalleryItem">
        <img src={img} alt={alt} />
      </li>
    );
  }
}
