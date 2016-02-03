import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectCard } from '../actions/index';
import { bindActionCreators } from 'redux';

class CardList extends Component {
	renderList() {
		return this.props.cards.map((card) => {
			return (
				<button 
				 onClick={() => this.props.selectCard(card)}
				 key={card.name} 
				 className="cardButtonsList">
				   {card.name}
				 </button>
			);
		});
	}


	render (){
		return (
			<ul className="cardList col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}

function mapStateToProps(state) {
	//props of CardList
	return {
		cards: state.cards
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectCard: selectCard }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CardList)