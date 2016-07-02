//import { Mongo } from 'meteor/mongo';

//export const

Messages = new Mongo.Collection("messages");

//giving all the Messages
Meteor.publish("allMessages", function(){
  return Messages.find();
});

//everywhere but inside a publish function we can use Meteor.userId(), that's why we're doing this.userId
//returns Messages only for the current loggedin user
Meteor.publish("userMessages", function(){
  return Messages.find({user: this.userId});
});
