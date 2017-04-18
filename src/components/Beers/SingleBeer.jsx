import React, { PropTypes } from 'react';

const SingleBeer = (props) => {
  return (
    <ul className="list">
      <li className="list__item">
        <span className="list__item--half">{props.beer.name}</span>
        <span>Average rating: {props.beer.stars}</span>
        <span className="beers__style">{props.beer.style}</span>
        <span>{props.beer.brewer}</span>
      </li>
    </ul>
  );
};

SingleBeer.propTypes = {
  beer: PropTypes.object.isRequired,
};


export default SingleBeer;
