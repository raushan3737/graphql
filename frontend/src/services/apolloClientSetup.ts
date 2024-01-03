import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloLink,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { SERVICE_URLS } from './serviceUrls'
import { REQUEST, RESPONSE } from '../utils/constants'

const httpLink = createHttpLink({
  uri: SERVICE_URLS.GRAPHQL,
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const requestLink = new ApolloLink((operation, forward) => {
  console.info(REQUEST, operation)
  return forward(operation)
})

const responseLink = new ApolloLink((operation, forward) => {
  return forward(operation).map((response) => {
    console.info(RESPONSE, response)
    return response
  })
})

const link = ApolloLink.from([authLink, requestLink, responseLink, httpLink])

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
})

export default client
