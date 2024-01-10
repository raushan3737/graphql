import { useEffect } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import {
  DELETE_TWEET,
  GET_TWEETS,
  MARK_TWEET_READ,
} from '../../../services/queries'
import { Tweet } from '../../../@types/types'

const useUserTweet = () => {
  const {
    loading,
    error,
    data: userTweets,
    refetch: refetchUserTweets,
  } = useQuery<{ Tweets: Tweet[] }>(GET_TWEETS)

  const [deleteTweet] = useMutation(DELETE_TWEET)
  const [markTweetRead] = useMutation(MARK_TWEET_READ)

  const handleRefetchTweets = () => {
    refetchUserTweets()
  }

  useEffect(() => {
    setInterval(() => {
      refetchUserTweets()
    }, 4000)
  })

  const handleDeleteTweet = async (tweetId: string) => {
    try {
      await deleteTweet({
        variables: {
          id: tweetId,
        },
      })
    } catch (error) {
      console.error('Error deleting tweet:', error.message)
    }
  }

  const handleChangeReadStatus = async (tweetId: string) => {
    try {
      await markTweetRead({
        variables: {
          id: tweetId,
        },
      })
    } catch (error) {
      console.error('Error reading/unreading tweet:', error.message)
    }
  }

  return {
    loading,
    error,
    userTweets,
    handleRefetchTweets,
    handleDeleteTweet,
    handleChangeReadStatus,
  }
}

export default useUserTweet
