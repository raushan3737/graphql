import React from 'react'
import {
  styled,
  Stack,
  CircularProgress,
  IconButton,
  Grid,
} from '@mui/material'
import useUserTweet from './hook'
import RefreshIcon from '@mui/icons-material/LoopTwoTone'
import { TWEETS } from '../../../utils/constants'
import TweetCard from '../../molecules/TweetCard'

const TweetGrid = styled(Grid)({
  border: '1px solid grey',
  padding: '1rem',
  margin: '0.5rem',
  borderRadius: '0.5rem',
})

const UserTweets: React.FC = () => {
  const {
    loading,
    error,
    userTweets,
    handleRefetchTweets,
    handleDeleteTweet,
    handleChangeReadStatus,
  } = useUserTweet()

  if (loading) return <CircularProgress />
  if (error) return <p>Error: {error.message}</p>

  const tweets = userTweets?.Tweets || []

  return (
    <Stack padding={'2%'} spacing={'0.5rem'}>
      <Stack direction={'row'} spacing={'0.5rem'} alignItems={'center'}>
        <h2>{TWEETS}</h2>
        <IconButton onClick={handleRefetchTweets}>
          <RefreshIcon />
        </IconButton>
      </Stack>
      <Grid container direction={'row'}>
        {tweets.map((tweet) => (
          <TweetGrid item key={tweet.id}>
            <TweetCard
              tweet={tweet}
              handleDeleteTweet={handleDeleteTweet}
              handleChangeReadStatus={handleChangeReadStatus}
            />
          </TweetGrid>
        ))}
      </Grid>
    </Stack>
  )
}

export default UserTweets
