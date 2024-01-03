import { useQuery } from '@apollo/client'
import { GET_TWEETS } from '../../../services/queries'
import { Tweet } from '../../../@types/types'

const useUserTweet = () => {
  const {
    loading,
    error,
    data: userTweets,
  } = useQuery<{ Tweets: Tweet[] }>(GET_TWEETS)

  return { loading, error, userTweets }
}

export default useUserTweet
