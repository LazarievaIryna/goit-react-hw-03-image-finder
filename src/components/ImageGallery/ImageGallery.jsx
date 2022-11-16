import { Component } from 'react';
// import { FetchImage } from 'components/Api';

export class ImageGallery extends Component {
  state = {
    query: '',
    images: [],
  };
  galleryImages = () => {
    this.setState({ query: this.props.query });
    // const { query } = this.state;
    // FetchImage(query);
  };

  render() {
    console.log(this.state);
    return (
      <ul className="ImageGallery">
        <li>Card</li>
      </ul>
    );
  }
}
