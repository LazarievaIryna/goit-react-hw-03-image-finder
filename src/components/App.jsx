import { Component } from 'react';
// import { BsSearch } from "react-icons/bs";
import { Searchbar } from './Searchbar/Searchbar';
import { getFetch } from './Api';
import { ImageGallery } from './ImageGallery/ImageGallery';
// import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import Modal from './Modal/Modal';


export class App extends Component {
  state = {
    query: '',
    page: 1,
    response: [],
    isLoading: false,
    showModal: false,
    url: '',
    tags: '',
    error: false,
    isEmpty: false,
    
    total:1,
    
  };
  

  handleQueryForm = newValue => {
    if (this.state.query !== newValue) {
      this.setState({ response: [], query: newValue, page: 1, loadMore: false});
    }
    this.setState({ query: newValue });
    // console.log(newValue);
  };
  componentDidUpdate(prevProps, prevState){
    const {query, page}=this.state
    if(prevState.query !== query || prevState.page !== page){
this.getRequest()
    }
  }
  getRequest=async()=>{
    const {query, page}=this.state
    this.setState({isLoading: true})
    try{
      const response = await getFetch(query, page)
      const newImages = response.hits;
      const totalHits = response.totalHits;
      if(totalHits === 0){
        this.setState({isEmpty:true})
        return
      }
      this.setState(state=>({
        response: [...state.response, ...newImages], isEmpty: false, total: totalHits
      }))
    }
    catch(error){
      this.setState({error: true})
    }
    finally{
      this.setState({isLoading:false})
    }
  }

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  closeModal = () => {
    this.setState({ showModal: false });
  };
  onClickModal = (url, alt) => {
    this.setState({ showModal: true, url: url, tags: alt });
  };

  render() {
    
    const { response, isLoading, showModal, url, tags, error, isEmpty, total, page } = this.state;
    console.log(response);

    
    
    return (
      <>
        <Searchbar onSubmit={this.handleQueryForm} />
        {!isLoading && isEmpty && <p className='No-image'>No image</p>}
        {error && <p className="Error-message">
No images for your request</p>}
        {response.length >0 && <ImageGallery images={response} onClick={this.onClickModal}/>}
        {isLoading && <Loader />}
        {!isLoading && total/12 > page && <Button onLoad={this.loadMore} />}
        {showModal && <Modal onClose={this.closeModal} url={url} alt={tags} />}
      </>
    );
  }
}
