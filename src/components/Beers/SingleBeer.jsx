import React from 'react';

const SingleBeer = (props) => {
  console.log(props)
  return (
    <ul className="list">
      <li className="list__item">     
        <span className="list__item--half">{props.beer.name}</span>
        <span>{props.beer.stars}</span>
        <span className="beers__style">{props.beer.style}</span>
        <span>{props.beer.brewer}</span>
      </li>
    </ul>
  )
};

SingleBeer.propTypes = {

};

export default SingleBeer;
