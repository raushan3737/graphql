import React from 'react'
import { Stack, Avatar, IconButton, Checkbox, Box } from '@mui/material'
import DeleteIcon from '@mui/icons-material/DeleteOutlined'
import UnCheckedReadIcon from '@mui/icons-material/MarkChatUnreadOutlined'
import CheckedReadIcon from '@mui/icons-material/MarkChatReadOutlined'
import { Tweet } from '../../../@types/types'

interface TweetCardProps {
  tweet: Tweet
  handleDeleteTweet: (id: string) => void
  handleChangeReadStatus: (id: string) => void
}

const TweetCard: React.FC<TweetCardProps> = ({
  tweet,
  handleDeleteTweet,
  handleChangeReadStatus,
}) => {
  return (
    <div>
      <Stack direction={'row'} spacing={'0.5rem'} alignItems={'center'}>
        <Avatar src={tweet.author.avatar_url} />
        <p>
          {tweet.author.full_name} (@{tweet.author.username})
        </p>
        <Box>
          <IconButton onClick={() => handleDeleteTweet(tweet.id)}>
            <DeleteIcon />
          </IconButton>
          <Checkbox
            onChange={() => handleChangeReadStatus(tweet.id)}
            icon={<UnCheckedReadIcon />}
            checkedIcon={<CheckedReadIcon />}
          />
        </Box>
      </Stack>
      <p>{tweet.body}</p>
      <p>Date: {tweet.date}</p>
    </div>
  )
}

export default TweetCard
