import React, {Component} from 'react';
import AccountsUI from './accounts/AccountsUI.jsx';

export default class Home extends Component {


	render(){

	    return (

					<div id="homepage">
					<img className= "homeImage" src="https://bytebucket.org/briannehostutler/final-project/raw/eb113cf2164b1327b813c62e458608991e1eb718/public/images/font1.png?token=2764877d168acb31c93537eb87dd788a45928dc7" />

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
