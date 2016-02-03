import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectType } from '../actions/index';
import { bindActionCreators } from 'redux';

class CertTypeList extends Component {

	renderList() {

		return this.props.keyTypes.map((keyType) => {
			return (
				<option 
					onClick={() => this.props.selectType(keyType)}
					key={keyType.type} 
				 	className="key-list-group-item"
					value={keyType.value}>
				    {keyType.type}
				</option>
			);
		});
	}

	render () {
		return (
			<select className="key-list-group col-sm-4">
				{this.renderList()}
			</select>
		)
	}
}

function mapStateToProps(state) {
	//props of cartTypeList
	return {
		keyTypes: state.keyTypes
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectType: selectType }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CertTypeList)