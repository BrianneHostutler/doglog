//allows us to call methods on the server from the client
Meteor.methods({
  addMessage(message){

    check(message, String)

    //don't let someone not loggedin insert a message
    if (!Meteor.userId()){
      throw new Meteor.Error('not-authorized')
    }

    Messages.insert({
      text: message,
      complete: false,
      createdAt: new Date(),
      username: Meteor.user().username,
      user: Meteor.userId()
    })
  },

  deleteMessage(message){

    check(message, Object)

    //must be owner of messages to delete them
    if (Meteor.userId() !== message.user){
      throw new Meteor.Error('not-authorized')
    }
    Messages.remove(message._id)
  },

  addPet(pet){

  check(pet, String)

    Pets.insert({
      name: pet,
      createdAt: new Date(),
      username: Meteor.user().username,
      user: Meteor.userId()
    });
  },

  addFriend(friend){

  check(friend, String)

    Friends.insert({
      name: friend,
      createdAt: new Date(),
      username: Meteor.user().username,
      user: Meteor.userId()
    });
  },


});
