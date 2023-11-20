const faker = require('faker');

const generateRandomUser = () => ({
  id: faker.datatype.uuid(),
  username: faker.internet.userName(),
  first_name: faker.name.firstName(),
  last_name: faker.name.lastName(),
  full_name: faker.name.findName(),
  name: faker.name.findName(),
  avatar_url: faker.internet.avatar(),
});

const generateRandomStat = () => ({
  views: faker.datatype.number(),
  likes: faker.datatype.number(),
  retweets: faker.datatype.number(),
  responses: faker.datatype.number(),
});

const generateRandomNotification = () => ({
  id: faker.datatype.uuid(),
  date: faker.date.past(),
  type: faker.random.word(),
});

const generateRandomTweet = () => ({
  id: faker.datatype.uuid(),
  body: faker.lorem.sentences(),
  date: faker.date.past(),
  Author: generateRandomUser(),
  Stats: generateRandomStat(),
});

const generateDummyData = (numTweets = 10, numNotifications = 5) => {
  const tweets = Array.from({ length: numTweets }, generateRandomTweet);
  const notifications = Array.from({ length: numNotifications }, generateRandomNotification);

  return {
    Tweets: tweets,
    Notifications: notifications,
    TweetsMeta: { count: tweets.length },
    NotificationsMeta: { count: notifications.length },
  };
};

module.exports = generateDummyData;
