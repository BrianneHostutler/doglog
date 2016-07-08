
import React, {Component} from 'react'; //we can have access to it without having to say React.Component when we put the class word down

export default class PetSingle extends Component {
  toggleChecked(){
    //console.log(this)
    Meteor.call('togglePet', this.props.pet);
  }

  deletePet(){
    Meteor.call('deletePet', this.props.pet);
  }



  render(){
    const petClass = this.props.pet.complete ? "checked" : "";
    //console.log('petClass', petClass); //works

    const status = this.props.pet.complete ? <span className=
    "completed">Completed</span> : "";

    return (
      <li className={petClass} id={this.props.pet._id}>



       {/* makes sure we're utilizing the correct this */}
        {/* ${this.props.pet._id} is string interpolation*/}
       <span className="username">{this.props.pet.username}:</span>
        <a href={`/pets/${this.props.pet._id}`}> {this.props.pet.text}</a>

        <button className="btn-cancel" onClick={this.deletePet.bind(this)}>
        x
        </button>
        <br /> {/* need the trailing / to make this work */}
        {/* uncomment this to see the status this.props.message.complete.toString() */}
        {status}

      </li>
    )
  }
}
