import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import DisplayData from './components/organisms/DisplayData/DisplayData'

export const App = () => {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:4000/graphql',
  })

  return (
    <>
      <ApolloProvider client={client}>
        <h1>React with GraphQL</h1>
        <DisplayData />
      </ApolloProvider>
    </>
  )
}
