import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export default class Account extends Component{

	triggerLogin() {
    Session.set('Meteor.loginButtons.dropdownVisible', true);
  }

	render(){

//if a document in Pets exists where user = current user, display that document info.
			return(
						<div id="myaccountPage">
			        <h1>My Account</h1>

			        <h3> Add My Pet </h3>
			        <p>To add your pet, click <a href='/addpet'>here!</a></p><br/>

			        <h3>Existing Pet </h3>


		      	</div>

	    	)
  	}

}
