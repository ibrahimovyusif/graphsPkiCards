import React from 'react';
import { Component } from 'react';

import CardList from '../containers/card_list';
import CardDetail from '../containers/card_detail';
import SelectionBar from './selector_bar_list';

export default class App extends Component {
  render() {
    return (
    	<div className="containerClass">
	      <CardList className="cardList"/>
	      <CardDetail />
	      <SelectionBar />
    	</div>
    );
  }
}