import React, { ChangeEvent, useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, styled } from '@mui/material'
import { useAuth0 } from '@auth0/auth0-react'
import { useMutation, useQuery } from '@apollo/client'
import { CREATE_TWEET, GET_TWEETS } from '../../../services/queries'
import {
  TWEET_CONTENT_PLACEHOLDER,
  UPLOAD_BUTTON_LABEL,
} from '../../../utils/constants'

const UploadButtonBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
})

const UploadTweet = () => {
  const { user } = useAuth0()
  const [tweetContent, setTweetContent] = useState<string>('')
  const [createTweet, { data: createdTweetRes, loading, error }] =
    useMutation(CREATE_TWEET)

  const { refetch: refetchTweets } = useQuery(GET_TWEETS)

  const handleChangeTweetContent = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTweetContent(e.target.value)
  }

  const handleUploadTweet = async () => {
    try {
      if (tweetContent.trim()) {
        await createTweet({
          variables: {
            body: tweetContent,
          },
        })
        setTweetContent('')
        refetchTweets()
      }
    } catch (error) {
      console.error('Error creating tweet:', error.message)
    }
  }

  return (
    <Stack spacing={'1rem'}>
      <TextField
        value={tweetContent}
        onChange={handleChangeTweetContent}
        placeholder={TWEET_CONTENT_PLACEHOLDER}
        autoComplete="off"
      />
      <UploadButtonBox>
        <Button onClick={handleUploadTweet} variant="contained">
          {UPLOAD_BUTTON_LABEL}
        </Button>
      </UploadButtonBox>
    </Stack>
  )
}

export default UploadTweet
