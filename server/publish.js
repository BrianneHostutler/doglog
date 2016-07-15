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

Meteor.publish("friendsMessages", function(){
  return Messages.find({friend: this.friend});
});



Pets = new Mongo.Collection("pets");

Meteor.publish("allPets", function(){
  return Pets.find();
});

Meteor.publish("userPets", function(){
  return Pets.find({user: this.userId});
});


//add field to users collection "friends",
//take input from user &  insert that username into my friends list
// & show their messages in addition to mine

//when message is posted, also add friend field attached to message
