import { Component } from 'react';
export class Searchbar extends Component {
  state = {
    query: '',
  };
  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = event => {
    const { query } = this.state;
    event.preventDefault();
    this.props.onSubmit(query.trim().toLowerCase());
    this.reset();
  };
  reset = () => {
    this.setState({ query: '' });
  };
  render() {
    const { query } = this.state;
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            name="query"
            value={query}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
