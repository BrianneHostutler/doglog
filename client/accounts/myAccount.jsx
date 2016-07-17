import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import AccountsForm from './AccountsForm';
import {render} from "react-dom";
import PetsForm from './PetsForm';


export default class Account extends Component{

	render(){

			return(
						<div className="container">
			        <h1>My Account</h1>

							<AccountsForm />

			        <h3> Add My Pet </h3>
			        <p>Enter the name of your pet below!</p><br/>
							<PetsForm />

		      	</div>
	    	)
  	}
}
