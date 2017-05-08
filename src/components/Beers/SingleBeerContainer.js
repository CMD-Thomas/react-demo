import React, { Component, PropTypes } from 'react';
import SingleBeer from './SingleBeer';
import Nav from '../Nav/Nav';
import * as api from '../../api/api';

class SingleBeerContainer extends Component {
  constructor(props) {
    super(props);
    this.saveBeerInState = this.saveBeerInState.bind(this);
    this.state = {
      beers: undefined,
    }
  }

  componentWillMount() {
    const token = localStorage.token;
    api.get('http://localhost:3030/api/beers/'+this.props.params.id, token, this.saveBeerInState);
  }

  saveBeerInState(data) {
    this.setState({
      beer: data.data[0],
    });

  }

  render() {
    if (this.state.beer === undefined) {
      return (
        <div>The response it not here yet!</div>
      );
    }
    return (
      <div>
        <Nav title={this.state.beer.name} />
        <SingleBeer beer={this.state.beer} />
      </div>
    );
  }
}

export default SingleBeerContainer;
