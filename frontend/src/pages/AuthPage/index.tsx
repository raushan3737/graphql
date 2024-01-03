import React, { useEffect } from 'react'
import { Avatar, Button, Stack, Typography, styled } from '@mui/material'
import { useAuth0 } from '@auth0/auth0-react'
import { APP_GREETING, LOGIN_ERROR } from '../../utils/constants'

const Container = styled(Stack)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

const Logo = styled(Avatar)({
  width: '3%',
})

const AuthPage = () => {
  const {
    loginWithRedirect,
    logout,
    isAuthenticated,
    user,
    getAccessTokenSilently,
  } = useAuth0()

  useEffect(() => {
    const fetchAuthToken = async () => {
      const accessToken = await getAccessTokenSilently()
      localStorage.setItem('token', accessToken)
    }
    if (isAuthenticated) {
      fetchAuthToken()
    }
  }, [isAuthenticated, getAccessTokenSilently])

  const handleLogin = async () => {
    try {
      await loginWithRedirect()
    } catch (error) {
      console.error(LOGIN_ERROR, error)
    }
  }

  return (
    <Container spacing={'1rem'}>
      <Logo
        src={
          'https://e7.pngegg.com/pngimages/708/311/png-clipart-twitter-twitter-thumbnail.png'
        }
        alt="twitter-logo"
      />
      <Typography variant="h4">{APP_GREETING}</Typography>
      <Typography variant="h5">Login to the twitter</Typography>
      <Stack direction={'row'} spacing={'1rem'}>
        <Button variant="contained" onClick={handleLogin}>
          Login
        </Button>
        <Button variant="contained" color="warning" onClick={() => logout()}>
          Logout
        </Button>
      </Stack>
    </Container>
  )
}

export default AuthPage
