import React from 'react';

const Artist = (props) => {
  if (typeof props.artist.images[0] !== 'undefined') {
    var imgSrc = props.artist.images[1].url;
  } else {
    // Serve random image if spotify has no image.
    var imgSrc = 'http://lorempixel.com/150/150';
  }
  return (
    <div>
      <img
        src={imgSrc}
        alt={props.artist.name}
        className="artist__image"
      />
      <p className="artist__type">Artist</p>
      <span className="artist__name">{props.artist.name}</span>
      <div className="clear"></div>
    </div>
  );
};

Artist.propTypes = {
  artist: React.PropTypes.object.isRequired,
};

export default Artist;
