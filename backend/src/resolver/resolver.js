import {
  getTweets,
  getTweetById,
  getTweetsMeta,
  getUser,
  getNotifications,
  getNotificationsMeta,
  createTweet as createTweetService,
  deleteTweet as deleteTweetService,
  markTweetRead as markTweetReadService,
} from "../service/index.js";
import {
  USER_TWEETS_ERROR,
  USER_ERROR,
  TWEETS_ERROR,
  TWEET_METADATA_ERROR,
  TWEET_BY_ID_ERROR,
  NOTIFICATIONS_ERROR,
  NOTIFICATIONS_METADATA_ERROR,
  CREATE_TWEET_ERROR,
  DELETE_TWEET_ERROR,
  TWEET_READ_ERROR,
} from "../utils/constants.js";

export const resolvers = {
  Query: {
    Tweets: async (_, { limit, skip, sort_field, sort_order }) => {
      try {
        const tweetsResponse = (
          await getTweets({ limit, skip, sort_field, sort_order })
        ).data;

        const tweetsWithAuthor = await Promise.all(
          tweetsResponse.map(async (tweet) => {
            try {
              const author = await getUser(tweet.authorId);
              return { ...tweet, author };
            } catch (error) {
              console.error(`${USER_TWEETS_ERROR} ${tweet.id}:`, error.message);
            }
          })
        );
        return tweetsWithAuthor;
      } catch (error) {
        console.error(TWEETS_ERROR, error.message);
      }
    },
    Tweet: async (_, { id }) => {
      try {
        const tweetsResponse = await getTweetById(id);
        const userRes = await getUser(tweetsResponse.authorId);
        const tweetResWithUser = {
          ...tweetsResponse,
          author: userRes,
        };
        return tweetResWithUser;
      } catch (error) {
        console.error(TWEET_BY_ID_ERROR, error.message);
      }
    },
    TweetsMeta: async () => {
      try {
        const tweetsMetaResponse = await getTweetsMeta();
        return tweetsMetaResponse;
      } catch (error) {
        console.error(TWEET_METADATA_ERROR, error.message);
      }
    },
    User: async (_, { id }) => {
      try {
        const userResponse = await getUser(id);
        return userResponse;
      } catch (error) {
        console.error(USER_ERROR, error.message);
      }
    },
    Notifications: async (_, { limit }) => {
      try {
        const notificationsResponse = await getNotifications({ limit });
        return notificationsResponse;
      } catch (error) {
        console.error(NOTIFICATIONS_ERROR, error.message);
      }
    },
    NotificationsMeta: async () => {
      try {
        const notificationsMetaResponse = await getNotificationsMeta();
        return notificationsMetaResponse;
      } catch (error) {
        console.error(NOTIFICATIONS_METADATA_ERROR, error.message);
      }
    },
  },

  Mutation: {
    createTweet: async (_, { body }) => {
      try {
        const tweetBody = {
          body: body,
          date: new Date().toISOString(),
          authorId: "102",
          stats: {
            views: 0,
            likes: 0,
            retweets: 0,
            responses: 0,
          },
        };

        const createdTweetResponse = await createTweetService(tweetBody);
        return createdTweetResponse;
      } catch (error) {
        console.error(CREATE_TWEET_ERROR, error.message);
      }
    },

    deleteTweet: async (_, { id }) => {
      try {
        const tweetData = await getTweetById(id);
        const deletedTweetResponse = await deleteTweetService(id);
        return tweetData;
      } catch (error) {
        console.error(`${DELETE_TWEET_ERROR} with ${id}`, error.message);
      }
    },
    markTweetRead: async (_, { id }) => {
      try {
        const markedReadResponse = await markTweetReadService(id);
        return true;
      } catch (error) {
        console.error(`${TWEET_READ_ERROR} with ${id}`, error.message);
      }
    },
  },
};
