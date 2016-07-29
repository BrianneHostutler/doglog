import React, {Component} from 'react'; //we can have access to it without having to say React.Component when we put the class word down


export default class PetsForm extends Component {
  addPet(event){
    event.preventDefault();
    //console.log(this); //this would console.log the entire component, you can see value which would be the value of the input
    // document.getElementById("petName").style.display = 'none';

    var text = this.refs.pet.value.trim();
    console.log(text);

    if (text){
      Meteor.call('addPet', text, (error, data)=>{
        console.log(error)
        if (error){
          Bert.alert( 'You must be logged in to add a pet', 'danger', 'fixed-top', 'fa-frown-o' );
        }else {
          console.log("yay");
          Bert.alert( "Pet added successfully!", 'success', 'fixed-top', 'fa-check');
          Meteor.call('addID', text);
          this.refs.pet.value = "";
        }
      })
    }else{
      Bert.alert( 'You must type some text in to add a pet', 'danger', 'fixed-top', 'fa-frown-o' );
    }
  };

  addExistingPet(event){
    event.preventDefault();
    //console.log(this); //this would console.log the entire component, you can see value which would be the value of the input
    // document.getElementById("petName").style.display = 'none';

    var petID = this.refs.petID.value.trim();
    console.log(petID);

    if (petID){
      Meteor.call('addExistingPet', petID, (error, data)=>{
        console.log(error)
        if (error){
          Bert.alert( 'You must be logged in to add a pet', 'danger', 'fixed-top', 'fa-frown-o' );
        }else {
          this.refs.pet.value = "";
          //clear the input after we submit
          console.log("yay");
          Meteor.call('addName', petID);
          Bert.alert( "Joined pet group!", 'success', 'fixed-top', 'fa-check');
          // Meteor.call('addExistingPetName', petID);
        }
      })
    }else{
      Bert.alert( 'You must type some text in to add a pet', 'danger', 'fixed-top', 'fa-frown-o' );
    }
  }



  render(){

    return (
      <div id= "petName">
        <h3> Add A Pet </h3>
              <div className="cardPetForm">
                  <p>Enter the name of your pet below!</p><br/>
                    <form className="new-pet" onSubmit={this.addPet.bind(this)}>
                        <input type="text" ref="pet" placeholder="Enter your pet name" />
                    </form>
              </div>

              <div className="cardPetForm">
                    <p>Join an existing pet group!</p><br/>
                    <form className="new-pet" onSubmit={this.addExistingPet.bind(this)}>
                          <input  ref="petID" placeholder="Enter the pet ID number" />
                    </form>
              </div>


      </div>
    )
  }
}
