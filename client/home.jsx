import React, {Component} from 'react';
import AccountsUI from './accounts/AccountsUI.jsx';

export default class Home extends Component {


	render(){

	    return (

					<div id="homepage">
					<div className="homeImagesDiv">
						<img className="homeImage"src="https://bytebucket.org/briannehostutler/final-project/raw/fd93fdaa29fb3fd72cbc3a0ef9fa3cfc7696ed5a/public/images/dogs.jpg?token=5897cb7d75e2cebec2c54c865e98a91ed715b5e2" />
							</div>
					<h1 id="home">Welcome to Dog Log</h1>
					<h3>The handy app for pet owners!</h3>


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
