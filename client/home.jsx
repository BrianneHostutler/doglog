import React, {Component} from 'react';
import AccountsUI from './accounts/AccountsUI.jsx';

export default class Home extends Component {


	render(){

	    return (

					<div id="homepage">

						<h1 id="home">Welcome to Dog Log</h1>

							<p id="homepageText">
							Dog Log helps to keep track of anything related to your beloved animal. From appointments, to medication, to feeding schedule,
							Dog Log can help to make sure your furry friend is well taken care of.
							<br /><br />
							Already a member? Click "Sign in" in the upper right corner! Want to sign up? Click "Sign in", then "Create an Account" in the bottom right corner!
							</p>

						</div>
	    )
	}
}
