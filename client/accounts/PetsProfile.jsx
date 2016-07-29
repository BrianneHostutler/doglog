import React, {Component} from 'react'; //we can have access to it without having to say React.Component when we put the class word down
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class PetsProfile extends TrackerReact(React.Component) {
  constructor(){
    super();
    this.state = {
      subscription: {
        users : Meteor.subscribe("users"),
      }
    }
  }

  getPetInfo(){
      if (this.state.subscription.users.ready()){
          return Meteor.users.findOne().petID;
      }
 }

  render(){



   var showID = this.getPetInfo();

    return (
        <div className="card">
        <h4>Pet ID</h4>
           <div id="displayID">
             {showID}
           </div>
        </div>
    )
  }
}
