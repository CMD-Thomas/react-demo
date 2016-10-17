import React from 'react';

const Album = (props) => {
  return (
    <div>
      <img
        src={props.album.images[1].url}
        alt={props.album.name}
        className="album__image"
      />
      <p className="album__type">Album</p>
      <span className="album__name">{props.album.artists[0].name} - {props.album.name}</span>
      <div className="clear"></div>
    </div>
  );
};

Album.propTypes = {
  album: React.PropTypes.object.isRequired,
};

export default Album;
