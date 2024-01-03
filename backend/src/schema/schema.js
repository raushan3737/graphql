import { gql } from "apollo-server";

export const typeDefs = gql`
  type Tweet {
    id: ID!
    body: String
    date: Date
    author: User
    stats: Stat
  }

  type User {
    id: ID!
    username: String
    first_name: String
    last_name: String
    full_name: String
    name: String
    avatar_url: Url
  }

  type Stat {
    views: Int
    likes: Int
    retweets: Int
    responses: Int
  }

  type Notification {
    id: ID
    date: Date
    type: String
  }

  type Meta {
    count: Int
  }

  scalar Url
  scalar Date

  type Query {
    Tweet(id: ID!): Tweet

    Tweets(
      limit: Int
      skip: Int
      sort_field: String
      sort_order: String
    ): [Tweet]

    TweetsMeta: Meta
    User(id: ID!): User
    Notifications(limit: Int): [Notification]
    NotificationsMeta: Meta
  }

  type Mutation {
    createTweet(body: String): Tweet
    deleteTweet(id: ID!): Tweet
    markTweetRead(id: ID!): Boolean
  }
`;
