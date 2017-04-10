import React from 'react';
import styles from './beers.styl';
import { Link } from 'react-router'



const BeerList = (props) => {
  const beers = props.beers.map((beer) =>
    <Link to={'/beer/' + beer.id} key={beer.id}>
      <li className="beers__item">
        <span className="beers__name"> {beer.name} </span>
        <span className="beers__stars"> {beer.stars} </span>
        <span className="beers__style"> {beer.style} </span>
      </li>
    </Link>
  );

  return (
    <div className="container">
      <ul className="beers">
        <li className="beers__item" >
          <span>Naam</span>
          <span>Sterren</span>
          <span className="beers__style">Stijl</span>
        </li>
        {beers}
      </ul>
    </div>
  );
};

BeerList.propTypes = {
  beers: React.PropTypes.array,
  map: React.PropTypes.func,
};

export default BeerList;
