const connection = require('../config/connection');
const { User, Thought } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  await User.deleteMany({});

  await Thought.deleteMany({});

  const userOneThoughts = [];
  const userTwoThoughts = [];

  const thoughtOne =
  {
    // "_id": "1",
    "thoughtText": "I ate a burrito for lunch",
    "userName": "userOne"

  };

  const thoughtTwo = 
  {
    // "_id": "2",
    "thoughtText": "Dogs and cats are both great",
    "userName": "userOne"
  };

  const thoughtThree =
  {
    // "_id": "3",
    "thoughtText": "I am always behind on homework!",
    "userName": "userTwo"
  };

  const thoughtFour =
  {
    // "_id": "4",
    "thoughtText": "Hopefully this new calendar I got will help",
    "userName": "userTwo"
  };

  userOneThoughts.push(thoughtOne, thoughtTwo);

  userTwoThoughts.push(thoughtThree, thoughtFour);

  console.log(userOneThoughts);
  console.log(userTwoThoughts);

  await Thought.collection.insertMany([thoughtOne, thoughtTwo, thoughtThree, thoughtFour]);

  await User.collection.insertMany([{
    username: 'userOne',
    email: 'userOne@email.com',
    thoughts: [...userOneThoughts]
  },
  {
    username: 'userTwo',
    email: 'userTwo@email.com',
    thoughts: [...userTwoThoughts]
  }
]);

  process.exit(0);

})