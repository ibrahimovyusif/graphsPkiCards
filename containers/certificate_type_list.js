import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectType } from '../actions/index';
import { bindActionCreators } from 'redux';

class CertTypeList extends Component {

	renderList() {
		return this.props.certificateTypes.map((certificateType) => {
			return (
				<option 
				 onClick={() => this.props.selectType(certificateType)}
				 key={certificateType.type} 
				 value={certificateType.value}				 
				 className="cert-list-group-item">
				   {certificateType.type}
				 </option>
			);
		});
	}


	render () {
		return (
			<select className="cert-list-group col-sm-4">
				{this.renderList()}
			</select>
		)
	}
}

function mapStateToProps(state) {
	//props of cartTypeList
	return {
		certificateTypes: state.certificateTypes
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectType: selectType }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CertTypeList)