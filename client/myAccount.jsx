import React, {Component} from 'react'; 
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


export default class Account extends Component{
	render(){

	    return (
	      <div>
	        <h1>My Account</h1>

	        <p>Hi</p>


	        <button onClick={this.triggerLogin}>Want to login?</button>

	      
	      </div>
	    )
  	}

}