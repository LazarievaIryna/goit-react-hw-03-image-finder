import { Component } from 'react';
// import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { getFetch } from './Api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    response: [],
    isLoading: false,
  };
  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ isLoading: true });
      const newFetch = await getFetch(query, page);
      console.log(newFetch);
      this.setState(prevState => {
        return {
          response: [...prevState.response, ...newFetch],
        };
      });
      this.setState({ isLoading: false });
    }
  }

  handleQueryForm = newValue => {
    if (this.state.query !== newValue) {
      this.setState({ response: [], query: newValue, page: 1 });
    }
    this.setState({ query: newValue });
    console.log(newValue);
    // getFetch(newValue);
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    console.log(this.state);
    const { response, isLoading } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleQueryForm} />
        <ImageGallery>
          {response &&
            response.map(({ id, webformatURL, largeImageURL, tags }) => {
              return (
                <ImageGalleryItem
                  key={id}
                  originalUrl={largeImageURL}
                  url={webformatURL}
                  alt={tags}
                />
              );
            })}
        </ImageGallery>
        {isLoading && <Loader />}
        {response.length > 0 && <Button onLoad={this.loadMore} />}
      </>
    );
  }
}
