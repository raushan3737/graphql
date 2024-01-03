import { Box, styled } from '@mui/material'
import UserTweets from '../../components/organisms/UserTweets'

const Container = styled(Box)({
  padding: '2%',
})

const UserFeedPage = () => {
  return (
    <Container>
      <UserTweets />
    </Container>
  )
}

export default UserFeedPage
