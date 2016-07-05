import React, {Component} from 'react';

export default class AddPet extends Component {
	render(){

	    return (
	    	<div className="container">
	    		
			    	<h1>Add a Pet</h1>
				    	<h3>Pet's Name:</h3>
				    		<input type="text" name= "petName" placeholder="Your pets name"></input>
				    	<h3>Birthdate:</h3>
				    		<input type= "text" name="birthdate" placeholder= "MM/DD/YYYY"></input>
				    	<h3>Sex:</h3>
				    		<input type= "text" name="gender" placeholder= "Your pets gender"></input>
				    	<h3>Breed:</h3>
				    		<input type= "text" name="breed" placeholder="Chihuahua"></input>
				    		
				    	<input type="submit" value="Submit"></input>
				  	
	    	</div>
	    )
	}
}	