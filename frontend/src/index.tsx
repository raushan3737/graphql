import ReactDOM from 'react-dom/client'
import { App } from './App'
import { Auth0Provider } from '@auth0/auth0-react'
import { ApolloProvider } from '@apollo/client'
import client from './services/apolloClientSetup'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <ApolloProvider client={client}>
    <Auth0Provider
      domain={process.env.REACT_AUTH_DOMAIN_ID as string}
      clientId={process.env.REACT_AUTH_CLIENT_ID as string}
      authorizationParams={{
        redirect_uri: 'http://localhost:8080/home',
      }}
    >
      <App />
    </Auth0Provider>
  </ApolloProvider>
)
