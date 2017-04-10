import React from 'react';
import BeersList from './BeersList';
import Nav from '../Nav/Nav';
import * as api from '../../api/api';



// Container to fetch data and render subcomponent
// Login dont handle errors for now
// Gettoken

class BeersContainer extends React.Component {
  constructor(props) {
    super(props);
    this.saveBeersInState = this.saveBeersInState.bind(this);
    this.state = {
      beers: undefined,
    };
  }

  componentWillMount() {
    const token = localStorage.token;
    api.get('http://localhost:3030/api/beers', token, this.saveBeersInState);
  }

  saveBeersInState(data) {
    this.setState({
      beers: data.data,
    });
  }

  render() {
    if (this.state.beers === undefined) {
      return (
        <div>The response it not here yet!</div>
      );
    }
    return (
      <div>
        <Nav title={"Beers"} />
        <BeersList beers={this.state.beers} />
      </div>
    );
  }
}

export default BeersContainer;
