import React from 'react';

const SingleBeer = (props) => {
  console.log(props)
  return (
    <ul className="beers">
      <li className="beers__item">     
        <span className="beers__name">{props.beer.name}</span>
        <span className="beers__stars">{props.beer.stars}</span>
        <span className="beers__style">{props.beer.style}</span>
        <span className="beers__brewer">{props.beer.brewer}</span>
      </li>
    </ul>
  )
};

SingleBeer.propTypes = {

};

export default SingleBeer;
