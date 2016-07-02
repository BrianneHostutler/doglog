
import React, {Component} from 'react'; //we can have access to it without having to say React.Component when we put the class word down

export default class MessageSingle extends Component {
  toggleChecked(){
    //console.log(this)
    Meteor.call('toggleMessage', this.props.message);
  }

  deleteMessage(){
    Meteor.call('deleteMessage', this.props.message);
  }



  render(){
    const messageClass = this.props.message.complete ? "checked" : "";
    //console.log('messageClass', messageClass); //works

    const status = this.props.message.complete ? <span className=
    "completed">Completed</span> : "";

    return (
      <li className={messageClass} id={this.props.message._id}>

        <button className="btn-cancel" onClick={this.deleteMessage.bind(this)}>
        x
        </button>

       {/* makes sure we're utilizing the correct this */}
        {/* ${this.props.message._id} is string interpolation*/}
        <a href={`/messages/${this.props.message._id}`}>{this.props.message.text}</a>
        <br /> {/* need the trailing / to make this work */}
        {/* uncomment this to see the status this.props.message.complete.toString() */}
        {status}

      </li>
    )
  }
}
