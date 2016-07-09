import React, {Component} from 'react'; //we can have access to it without having to say React.Component when we put the class word down


export default class PetsForm extends Component {
  addPet(event){
    event.preventDefault();
    //console.log(this); //this would console.log the entire component, you can see value which would be the value of the input

    var text = this.refs.petName.value.trim();
    console.log(text);
    
    //by taking out insecure, you can't do this anymore
    // Messages.insert({
    //   text: text,
    //   complete: false,
    //   createdAt: new Date()
    // })

    //executing the method in methods.js from server.js
    //()=> let's us use the scope from above the anonymous function inside the anonymous function, so we can access this above the anonymous function

    if (text){
      Meteor.call('addPet', text, (error, data)=>{
        console.log(error)
        if (error){
          Bert.alert( 'You must be logged in to add a pet', 'danger', 'fixed-top', 'fa-frown-o' );
        }else {
          this.refs.petName.value = ""; 
          //clear the input after we submit
          console.log("yay");
          
        }
      })
    }else{
      Bert.alert( 'You must type some text in to add a pet', 'danger', 'fixed-top', 'fa-frown-o' );
    }

  }

  render(){

    return (
      <form className="new-pet" onSubmit={this.addPet.bind(this)}>
        <input type="text" ref="petName" placeholder="Enter your pet name" />  {/* this is a comment! ref is how we can refer to this input later */}

      </form>
    )
  }
}

