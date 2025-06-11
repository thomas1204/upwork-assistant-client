import { ApolloClient, createHttpLink, InMemoryCache, ApolloProvider } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { getAuthToken } from './utils'

import AppRoutes from './appRoutes'

const httpLink = createHttpLink({
  uri: `${import.meta.env.VITE_BACKEND_BASE_URL}/graphql`,
})

const authLink = setContext((_, { headers }) => {
  const authToken = getAuthToken()
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${authToken}`,
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

export default function App() {
  return (
    <ApolloProvider client={client}>
      <AppRoutes />
    </ApolloProvider>
  )
}
