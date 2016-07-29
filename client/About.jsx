import React, {Component} from 'react'; //we can have access to it without having to say React.Component when we put the class word down
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class About extends Component {

  render(){

    return (
      <div className="about">
        <h1>Welcome to Dog Log!</h1>
        <br/>
        <div id="bothCards">
            <div id= "card1" className= "card">
                <p className="cardText">
                Add a pet or join an existing pet group at the <a href="/account">Account</a> page.<br/>
                </p>
                <div className="go">
                  <p><a href="/account">Go!</a></p>
                </div>
            </div>
            <div id= "card2" className="card">
                <p className="cardText">
                View messages at the <a href="/log">Log</a> page.<br/>
                </p>
                <div className="go">
                  <p><a href="/log">Go!</a></p>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
