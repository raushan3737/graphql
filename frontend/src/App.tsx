import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { Typography } from '@mui/material'
import UserFeedPage from './pages/UserFeed'
import AuthPage from './pages/AuthPage'
import { ROUTES } from './services/routes'
import {
  INCORRECT_PATH_TEXT,
  UNAUTHORIZED_ACCESS_TEXT,
} from './utils/constants'

export const App = () => {
  const { isAuthenticated } = useAuth0()

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route
          path={ROUTES.HOMEPAGE}
          element={
            isAuthenticated ? (
              <UserFeedPage />
            ) : (
              <Typography>{UNAUTHORIZED_ACCESS_TEXT}</Typography>
            )
          }
        />
        <Route
          path="*"
          element={<Typography>{INCORRECT_PATH_TEXT}</Typography>}
        />
      </Routes>
    </BrowserRouter>
  )
}
