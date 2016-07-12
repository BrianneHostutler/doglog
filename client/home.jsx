import React, {Component} from 'react';
import AccountsUI from './accounts/AccountsUI.jsx';

export default class Home extends Component {

	render(){

	    return (

					<div id="homepage">
		        <h1 id="home">Welcome to Dog Log</h1>
						<h3>The handy app for pet owners!</h3>

							<p id="homepageText">


							Dog Log helps to keep track of anything related to your beloved animal. From appointments, to medication, to feeding schedule,
							Dog Log can help to make sure your furry friend is well taken care of.
							<br /><br />
							Have other people who help raise and watch your pet? Dog Log keeps all the information
							about your pet in one convenient place to make sure you are always up to date on what's happening with your pet.
							<br /><br />
							Already a member? Click sign in below! Want to sign up? Click sign in below, then create an account in the bottom right corner!
							</p>

							<div className="homeImagesDiv">
									<img className="homeImage" id="homePic1" src="https://bytebucket.org/briannehostutler/final-project/raw/3746e26ea84391e4f139b3c35ccb8e7e793b08e9/public/images/dogWithHose.jpg?token=bd54285bf4890d7b6688d8ef29c0e9b6eb1c6fea"/>
									<img className="homeImage" id="homePic2" src="https://bytebucket.org/briannehostutler/final-project/raw/f48cd82e0e34aa344085931ab1e1dc14e028e441/public/images/dogFace.jpg?token=1b0f7420597c78814ccaf84b29474ccc662e664d"/>
									<img className="homeImage" id="homePic3" src="https://bytebucket.org/briannehostutler/final-project/raw/f48cd82e0e34aa344085931ab1e1dc14e028e441/public/images/dog.jpeg?token=7164e064b9e3f6f3de7b201643402b2ef22c86c7"/>
							</div>
						</div>

	    )
	}
}
