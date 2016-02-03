import React from 'react';
import { Component } from 'react';

import KeyTypes from '../containers/key_type_list';
import CertificateType from '../containers/certificate_type_list';
import GraphicType from '../containers/graphic_type_list';


export default class SelectorBar extends Component {
  render() {
    return (
	    <div>
		    <form className="selectionForm">
		      <KeyTypes />
		      <CertificateType />
		      <GraphicType />

		      <button className="clickButton">Click to see the results</button>
		    </form>
    	</div>
    );
  }
}