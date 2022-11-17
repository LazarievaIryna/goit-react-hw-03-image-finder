import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    query: '',
  };
  // componentDidMount() {

  // }
  handleQueryForm = newValue => {
    this.setState({ query: newValue });
  };

  render() {
    console.log(this.state.query);
    const { query } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleQueryForm} />
        <ImageGallery newQuery={query} />
      </>
    );
  }
}
