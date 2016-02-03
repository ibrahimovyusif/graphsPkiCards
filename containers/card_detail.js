import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import { Line } from "react-chartjs";
import Chart from 'chart';
// import Graph from 'react-graph-vis';


// React.render(<Graph graph={data}/>, document.body);

class CardDetail extends Component {
	render() {
		if(!this.props.card){
			return <h2>Select a card type!</h2>
		}
		return (
			<div>
				<h3>Details for:</h3>
				<div>{this.props.card.name}</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		card: state.activeCard
	}
}

export default connect(mapStateToProps)(CardDetail);
