import React from 'react';
import Album from './Album';
import Artist from './Artist';

const AlbumList = (props) => {
  if (props.artists.length > 0) {
    const artists = props.artists.map((artist) =>
      <Artist key={artist.id} artist={artist} />);
    return (
      <div style={AlbumList.styles.div}>
        {artists}
      </div>
    );
  } else {
    const albums = props.albums.map((album) =>
      <Album key={album.id} album={album} />);
    return (
      <div style={AlbumList.styles.div}>
        {albums}
      </div>
    );
  }
};

AlbumList.styles = {
  div: {
    marginLeft: 100,
  },
};

export default AlbumList;
