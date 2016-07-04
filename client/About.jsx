import React, {Component} from 'react'; //we can have access to it without having to say React.Component when we put the class word down
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class About extends Component {


  //you can set session variables across different pages and components with meteor
  //hit control + m to see the session variables
  triggerLogin() {
    Session.set('Meteor.loginButtons.dropdownVisible', true);
  }

  render(){

    return (
      <div>
        <h1>About Us</h1>

        <p>Build good habits. Organize your life. Productive has all the tools you need to build a routine of positive, life changing habits. Productive gives you:</p>


        <button onClick={this.triggerLogin}>Want to login?</button>

      
      </div>
    )
  }
}
