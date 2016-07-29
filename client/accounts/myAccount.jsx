import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import AccountsForm from './AccountsForm';
import {render} from "react-dom";
import PetsForm from './PetsForm';
import PetsProfile from './PetsProfile';


export default class Account extends Component{


	render(){

			return(
						<div className="container">
			        <h1>My Account</h1>
							<div>
								<PetsForm />

								<PetsProfile />
							</div>

		      	</div>
	    	)
  	}
}
