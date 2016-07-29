//allows us to call methods on the server from the client
Meteor.methods({
  addMessage(message){

    check(message, String);

    //don't let someone not loggedin insert a message
    if (!Meteor.userId()){
      throw new Meteor.Error('not-authorized')
    }

let name = Meteor.user().pet;
let currentPet =  Pets.findOne({text: {$eq: name}});

console.log(currentPet);
    Messages.insert({
      text: message,
      complete: false,
      createdAt: new Date(),
      username: Meteor.user().username,
      user: Meteor.userId(),
      pet: Meteor.user().pet,
      petID: currentPet._id,
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
//inserts a new pet
  Pets.insert({
    text:pet,
    createdAt: new Date(),
    username: Meteor.user().username,
    user: Meteor.userId(),
  })

  Meteor.users.update(
      {_id: Meteor.userId()},
        {$set :
          {
            "pet": pet,
            "count": 1,
          }
        }
    )
},

addExistingPet(petID){

  Meteor.users.update(
      {_id: Meteor.userId()},
        {$set :
          {
            "petID": petID,
            "count": 1,
          }
        }
    )
},



addName(petID){

  let numID = Meteor.user().pet;
  let currentPet =  Pets.findOne({petID: {$eq: numID}});

  Meteor.users.update(
      {_id: Meteor.userId()},
        {$set :
          {
            "pet": currentPet.text,
          }
        }
    )
},


addID(){

  let name = Meteor.user().pet;
  let currentPet =  Pets.findOne({text: {$eq: name}});

    Meteor.users.update(
      {_id: Meteor.userId()},
        {$set :
          {
            "petID":currentPet._id,
          }
        }
    )
},
//
//
// addPetProfile(breed){
//
//     Pets.update(
//       {user: Meteor.userId()},
//         {$set :
//           {
//             "breed": breed
//           }
//         }
//     )
// },
//
// addFriend(friend) {
//
//     check(friend, String)
//
//     Meteor.users.update(
//       {_id: Meteor.userId()},
//         {$set :
//           {
//             "friend": friend
//           }
//         }
//     )
// },



});
