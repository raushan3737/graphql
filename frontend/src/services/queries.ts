import { gql } from '@apollo/client'

export const GET_TWEETS = gql`
  query GetTweets {
    Tweets(limit: 10, skip: 0, sort_field: "date", sort_order: "desc") {
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
