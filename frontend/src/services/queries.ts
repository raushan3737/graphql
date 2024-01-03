import { gql } from '@apollo/client'

export const GET_TWEETS = gql`
  query GetTweets {
    Tweets(limit: 20, skip: 0, sort_field: "date", sort_order: "desc") {
      id
      body
      date
      author {
        full_name
        username
        avatar_url
      }
    }
  }
`

export const CREATE_TWEET = gql`
  mutation CreateTweet($body: String!) {
    createTweet(body: $body) {
      id
      body
      date
      author {
        full_name
        username
        avatar_url
      }
      stats {
        views
        likes
        retweets
        responses
      }
    }
  }
`

export const DELETE_TWEET = gql`
  mutation DeleteTweet($id: ID!) {
    deleteTweet(id: $id) {
      id
    }
  }
`

export const MARK_TWEET_READ = gql`
  mutation MarkTweetRead($id: ID!) {
    markTweetRead(id: $id) {
      id
    }
  }
`
