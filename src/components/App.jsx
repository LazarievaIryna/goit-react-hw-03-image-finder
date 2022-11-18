import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { getFetch } from './Api';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    response: [],
  };
  // componentDidMount() {

  // }
  handleQueryForm = newValue => {
    if (this.state.query !== newValue) {
      this.setState({ response: [], query: newValue });
    }
    this.setState({ query: newValue });
    console.log(newValue);
    // getFetch(newValue);
  };

  render() {
    console.log(this.state);
    // const { query } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleQueryForm} />
        {/* <ImageGallery newQuery={query} /> */}
      </>
    );
  }
}
