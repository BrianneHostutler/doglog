//import { Mongo } from 'meteor/mongo';

//export const

Messages = new Mongo.Collection("messages");

//giving all the Messages
Meteor.publish("allMessages", function(){
  return Messages.find();
});

// Meteor.publish("groupMessages", function(){
//   return Messages.find({user: this.userId});
// });

//everywhere but inside a publish function we can use Meteor.userId(), that's why we're doing this.userId
//returns Messages only for the current loggedin user
Meteor.publish("userMessages", function(){
  return Messages.find({user: this.userId});
});

Meteor.publish("otherUserMessages", function(){
  return Messages.find({username: "Brianne"});
});

Pets = new Mongo.Collection("pets");

Meteor.publish("allPets", function(){
  return Pets.find();
});

Meteor.publish("userPets", function(){
  return Pets.find({user: this.userId});
});


//add field to users collection "friends",
//take input from user & check that it is a valid username
// if valid, insert that username into my friends list
// & add my username into their friends list
