import React, {Component} from 'react';
import AccountsUI from './accounts/AccountsUI.jsx';

export default class Home extends Component {
	render(){



	    return (
		    <div className="container">
		        <h1>HOME</h1>

							<p>From medicine to appointments, there are so many different things
							to keep track of when it comes to your best furry or hairy friend.
							Dog Log helps to keep track of anything related to your beloved animal.
							<br /><br />
							Have other people who help raise and watch your pet? Dog Log keeps all the information
							about your pet in one convenient place to make sure you are always up to date on what's happening with your pet.
							</p><br /><br />

							<div className="homeImagesDiv">
									<img className="homeImage" id="homePic3" src=""/>
									<img className="homeImage" id="homePic2" src="https://bytebucket.org/briannehostutler/final-project/raw/f48cd82e0e34aa344085931ab1e1dc14e028e441/public/images/dogFace.jpg?token=1b0f7420597c78814ccaf84b29474ccc662e664d"/>
									<img className="homeImage" id="homePic1" src="https://bytebucket.org/briannehostutler/final-project/raw/f48cd82e0e34aa344085931ab1e1dc14e028e441/public/images/dog.jpeg?token=7164e064b9e3f6f3de7b201643402b2ef22c86c7"/>
							</div>

	      	</div>
	    )
	}
}
