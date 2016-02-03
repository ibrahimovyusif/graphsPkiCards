import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectType } from '../actions/index';
import { bindActionCreators } from 'redux';

class CertTypeList extends Component {

	renderList() {
			return this.props.graphicTypes.map((graphicType) => {
			return (
				<option 
				 onClick={() => this.props.selectType(graphicType)}
				 key={graphicType.type} 
				 value={graphicType.value}
				 className="graphic-list-group-item">
				   {graphicType.type}
				 </option>
			);
		});
	}


	render () {
		return (
			<select className="graphic-list-group col-sm-4">
				{this.renderList()}
			</select>
		)
	}
}

function mapStateToProps(state) {
	//props of cartTypeList
	console.log(state)
	return {
		graphicTypes: state.graphicTypes
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectType: selectType }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CertTypeList)