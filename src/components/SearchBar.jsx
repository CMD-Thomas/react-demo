import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    // if you declare a con you have to use super to get this defined
    super(props);
    this.state = {
      searchTerm: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.filter = this.filter.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      searchTerm: event.target.value,
    });
  }

  handleKeyPress(event) {
    if (event.key === 'Enter' || event.type === 'click') {
      document.querySelector('.artists').classList.add('filter--active');
      document.querySelector('.albums').classList.remove('filter--active');
      if (document.querySelector('.hidden')) {
        document.querySelector('.hidden').classList.remove('hidden');
        document.querySelector('.albums').classList.remove('hidden');
      }
      this.props.getArtists(this.state.searchTerm);
    }
  }

  filter(type) {
    document.querySelector('.albums').classList.toggle('filter--active');
    document.querySelector('.artists').classList.toggle('filter--active');
    if (type === 'albums') {
      this.props.getAlbums(this.state.searchTerm);
    } else {
      this.props.getArtists(this.state.searchTerm);
    }
  }

  render() {
    return (
      <div>
        <div className="search">
          <i className="icon-search search__icon"></i>
          <input
            onChange={this.handleInputChange}
            onKeyPress={this.handleKeyPress}
            placeholder="Search artists and albums"
            className="search__input"
          />
          <a className="search__btn" onClick={this.handleKeyPress}>Search</a>
        </div>
        <div className="search__filter hidden artists" onClick={() => this.filter('artists')}>Artists</div>
        <div className="search__filter albums hidden" onClick={() => this.filter('albums')}>Albums</div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  getArtists: React.PropTypes.func.isRequired,
  getAlbums: React.PropTypes.func.isRequired,
};


export default SearchBar;
