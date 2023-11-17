import React from 'react'
import { useQuery, useLazyQuery } from '@apollo/client'
import { gql } from 'graphql-tag'

// Define a GraphQL query
const GET_USER = gql`
  query GetUser($userId: ID!) {
    user(id: $userId) {
      id
      username
      email
    }
  }
`

function UserProfile() {
  // Example 1: useQuery
  const {
    loading: userLoading,
    data: userData,
    error: userError,
  } = useQuery(GET_USER, {
    variables: { userId: '1' }, // Set the variables for the query
  })

  // Example 2: useLazyQuery
  const [
    fetchUser,
    { loading: lazyLoading, data: lazyData, error: lazyError },
  ] = useLazyQuery(GET_USER)

  const handleFetchUser = (userId) => {
    fetchUser({ variables: { userId } })
  }

  return (
    <div>
      <h1>User Profile</h1>

      {/* Example 1: useQuery */}
      {userLoading && <p>Loading user data...</p>}
      {userData && (
        <div>
          <p>User ID: {userData.user.id}</p>
          <p>Username: {userData.user.username}</p>
          <p>Email: {userData.user.email}</p>
        </div>
      )}
      {userError && <p>Error loading user data: {userError.message}</p>}

      {/* Example 2: useLazyQuery */}
      <button onClick={() => handleFetchUser('2')}>Fetch User 2</button>
      {lazyLoading && <p>Loading user data lazily...</p>}
      {lazyData && (
        <div>
          <p>User ID: {lazyData.user.id}</p>
          <p>Username: {lazyData.user.username}</p>
          <p>Email: {lazyData.user.email}</p>
        </div>
      )}
      {lazyError && <p>Error loading user data lazily: {lazyError.message}</p>}
    </div>
  )
}

export default UserProfile
