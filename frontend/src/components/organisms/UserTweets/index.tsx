import React from 'react'
import { Box, styled, Stack, Avatar } from '@mui/material'
import useUserTweet from './hook'
import { TWEETS } from '../../../utils/constants'

const TweetBox = styled(Box)({
  border: '1px solid grey',
  width: '100%',
  padding: '1rem',
  borderRadius: '0.5rem',
})

const UserTweets: React.FC = () => {
  const { loading, error, userTweets } = useUserTweet()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  const tweets = userTweets?.Tweets || []

  return (
    <Box>
      <h2>{TWEETS}</h2>
      <Stack direction={'row'} spacing={'1rem'}>
        {tweets.map((tweet) => (
          <TweetBox key={tweet.id}>
            <Stack direction={'row'} spacing={'0.5rem'} alignItems={'center'}>
              <Avatar src={tweet.author.avatar_url} />
              <p>
                {tweet.author.full_name} (@{tweet.author.username})
              </p>
            </Stack>
            <p>{tweet.body}</p>
            <p>Date: {tweet.date}</p>
          </TweetBox>
        ))}
      </Stack>
    </Box>
  )
}

export default UserTweets
