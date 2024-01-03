import API from "./API.js";
import {
  TWEETS_ERROR,
  TWEET_METADATA_ERROR,
  USER_ERROR,
  NOTIFICATIONS_ERROR,
  NOTIFICATIONS_METADATA_ERROR,
  CREATE_TWEET_ERROR,
  DELETE_TWEET_ERROR,
  TWEET_READ_ERROR,
  TWEET_DELETED_SUCCESS,
} from "../utils/constants.js";

export const getTweets = async ({ limit, skip, sort_field, sort_order }) => {
  const url = buildUrl("/tweets", {
    _limit: limit,
    _page: skip,
    _sort: sort_field,
    _order: sort_order,
  });

  return await API.get(url);
};

function buildUrl(path, params) {
  const searchParams = new URLSearchParams(params);
  const queryString = searchParams.toString();
  return queryString ? `${path}?${queryString}` : path;
}

export const getTweetById = async (id) => {
  try {
    const tweetRes = await API.get(`/tweets/${id}`);
    return tweetRes.data;
  } catch (error) {
    console.error(TWEETS_ERROR, error.message);
  }
};

export const getTweetsMeta = async () => {
  try {
    const metaRes = await API.get("/meta");
    return metaRes.data;
  } catch (error) {
    console.error(TWEET_METADATA_ERROR, error.message);
    throw error;
  }
};

export const getUser = async (id) => {
  try {
    const userRes = await API.get(`/users/${id}`);
    return userRes.data;
  } catch (error) {
    console.error(USER_ERROR, error.message);
    throw error;
  }
};

export const getNotifications = async ({ limit }) => {
  try {
    const notificationsRes = await API.get("/notifications", {
      params: { _limit: limit },
    });
    return notificationsRes.data;
  } catch (error) {
    console.error(NOTIFICATIONS_ERROR, error.message);
    throw error;
  }
};

export const getNotificationsMeta = async () => {
  try {
    const notificationsMetaRes = await API.get("/meta");
    return notificationsMetaRes.data;
  } catch (error) {
    console.error(NOTIFICATIONS_METADATA_ERROR, error.message);
    throw error;
  }
};

export const createTweet = async (body) => {
  try {
    const createdTweetRes = await API.post("/tweets", body);
    return createdTweetRes.data;
  } catch (error) {
    console.error(CREATE_TWEET_ERROR, error.message);
    throw error;
  }
};

export const deleteTweet = async (id) => {
  try {
    const deletedTweetRes = await API.delete(`/tweets/${id}`);
    return TWEET_DELETED_SUCCESS;
  } catch (error) {
    console.error(DELETE_TWEET_ERROR, error.message);
    throw error;
  }
};

export const markTweetRead = async (id) => {
  try {
    const tweet = await API.get(`/tweets/${id}`);

    const newReadStatus = !tweet.data.read;

    const markedTweetReadRes = await API.patch(`/tweets/${id}`, {
      read: newReadStatus,
    });

    return markedTweetReadRes.data;
  } catch (error) {
    console.error(TWEET_READ_ERROR, error.message);
    throw error;
  }
};
