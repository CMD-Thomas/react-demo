import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import AlbumList from './components/AlbumList';
import * as musicApi from './api/musicApi';

class App extends React.Component {
  constructor() {
    super();
    this.state = ({
      albums: [],
      artists: [],
    });
    this.currentPreview = null;
    this.getAlbums = this.getAlbums.bind(this);
    this.processAlbums = this.processAlbums.bind(this);
    this.getArtists = this.getArtists.bind(this);
    this.processArtists = this.processArtists.bind(this);
  }

  getAlbums(album) {
    musicApi.getAlbums(album, this.processAlbums);
  }

  getArtists(artist) {
    musicApi.getArtists(artist, this.processArtists);
  }

  processAlbums(payload) {
    this.setState({
      albums: payload.albums,
      artists: [],
    });
  }

  processArtists(payload) {
    this.setState({
      artists: payload.artists.items,
      albums: [],
    });
  }

  render() {
    return (
      <div>
        <SearchBar getArtists={this.getArtists} getAlbums={this.getAlbums} />
        <AlbumList artists={this.state.artists} albums={this.state.albums} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('container')
);
