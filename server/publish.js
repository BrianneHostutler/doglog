//import { Mongo } from 'meteor/mongo';

//export const

Messages = new Mongo.Collection("messages");

//giving all the Messages
Meteor.publish("allMessages", function(){
  return Messages.find();
});

Meteor.publish("users", function(){
 return Meteor.users.find({_id: this.userId})
});

//everywhere but inside a publish function we can use Meteor.userId(), that's why we're doing this.userId
//returns Messages only for the current loggedin user
Meteor.publish("userMessages", function(){
  let currentUser = Meteor.users.findOne(this.userId);
  return Messages.find({petID: currentUser.petID});
});


Pets = new Mongo.Collection("pets");

Meteor.publish("allPets", function(){
  return Pets.find();
});

Meteor.publish("userPets", function(){
  return Pets.find({user: this.userId});
});



TasksCollection = new Mongo.Collection("tasks");
