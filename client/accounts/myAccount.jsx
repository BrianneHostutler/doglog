import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import AccountsForm from './AccountsForm';
import {render} from "react-dom";


export default class Account extends Component{

	render(){

			return(
						<div id="myaccountPage">
			        <h1>My Account</h1>

							<AccountsForm />

			        <h3> Add My Pet </h3>
			        <p>To add your pet, click <a href='/addpet'>here!</a></p><br/>

			        <h3>Existing Pet </h3>

		      	</div>
	    	)
  	}
}
