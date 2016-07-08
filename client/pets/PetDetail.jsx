import React, {Component} from 'react'; //we can have access to it without having to say React.Component when we put the class word down
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class PetDetail extends TrackerReact(Component) {
  constructor(){
    super();
    this.state = {
      //without TrackerReact, you can't do the following:
      //if we change what gets published in publish.js then what's available in the front end (see with ctrl + m) is limited to just that.
      subscription: {
        pets : Meteor.subscribe('userPets')

      }
    }
  }

  //when this component unmounts, we don't want to subscribe to this data
  componentWillUnmount() {
    this.state.subscription.pets.stop();
  }

  pet() {
    console.log(this.props.id);

    return Pets.findOne(this.props.id); //findOne doesn't return cursor - it returns an object
    //alternative:
    //return Pets.find({_id : this.props.id}).fetch(); //only .find() returns a cursor (meteor), .fetch returns us the object
  }


  render(){
    let res = this.pet();

    {/* we need to wait for it to load first before showing it */}
    if (!res){
      return (<div>Loading...</div>)
    }


    return (
      <div>
        <h1>{res.text}</h1>
        
      </div>
    )
  }
}
