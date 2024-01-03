import {
  Avatar,
  Box,
  IconButton,
  Stack,
  Typography,
  styled,
} from '@mui/material'
import UserTweets from '../../components/organisms/UserTweets'
import UploadTweet from '../../components/organisms/UploadTweet'
import LogoutIcon from '@mui/icons-material/LogoutOutlined'
import { APP_GREETING } from '../../utils/constants'
import { useAuth0 } from '@auth0/auth0-react'

const Container = styled(Box)({
  margin: '1% 20% 1% 20%',
})

const HeaderStack = styled(Stack)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '1rem',
})

const Logo = styled(Avatar)({
  width: '3%',
})

const UploadTweetBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const UserFeedPage = () => {
  const { logout } = useAuth0()
  return (
    <Container>
      <HeaderStack direction={'row'}>
        <Logo
          src={
            'https://e7.pngegg.com/pngimages/708/311/png-clipart-twitter-twitter-thumbnail.png'
          }
          alt="twitter-logo"
        />
        <Typography variant="h4">{APP_GREETING}</Typography>
        <IconButton onClick={() => logout()}>
          <LogoutIcon />
        </IconButton>
      </HeaderStack>
      <UploadTweetBox>
        <UploadTweet />
      </UploadTweetBox>
      <UserTweets />
    </Container>
  )
}

export default UserFeedPage
