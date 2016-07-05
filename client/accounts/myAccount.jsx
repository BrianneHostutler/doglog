import React, {Component} from 'react'; 
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


export default class Account extends Component{
	render(){

	    return (
	      <div>
	        <h1>My Account</h1>

	        <h2>Hi! Welcome to your account page!</h2>

	        <p>Here you can add a new pet or join the group for an existing pet.</p>

	        <h3> Add a Pet </h3>
	        <p>To add your pet, click <a href='/addpet'>here!</a></p><br/>

	        <h3> Join an existing group</h3>
	        <p> To join an existing pet's group, please enter the unique ID for the pet below. 
	        Unique IDs are only given out to the person who created the pet group. 
	        Please contact the person in charge of your group to get the ID.</p>
	        <input></input>

	      
	      </div>
	    )
  	}

}