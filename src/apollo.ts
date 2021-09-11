import {
  InMemoryCache,
  HttpLink,
  ApolloClient,
  ApolloLink,
  from,
} from 'apollo-boost'
import { onError } from 'apollo-link-error'
import { setContext } from 'apollo-link-context'


const cache = new InMemoryCache()

const { url } = {
  url: 'http://localhost:3000/?',
}

const omitTypename = (key: string, value: any) => {
  return key === '__typename' ? undefined : value
}

const omitTypenameLink = new ApolloLink((operation, forward) => {
  if (operation.variables) {
    operation.variables = JSON.parse(
      JSON.stringify(operation.variables),
      omitTypename,
    )
  }
  return forward(operation)
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    console.log('graphQLErrors', JSON.stringify(graphQLErrors))
  }
  if (networkError) {
    console.log('networkError', networkError.message)
  }
})
const authLink = setContext(async (_, { headers }) => {
  return {
    headers: {
      ...headers,
    },
  }
})
const httpLink = new HttpLink({
  uri: url,
})

export const apollo = new ApolloClient({
  cache,
  link: from([errorLink, authLink, omitTypenameLink, httpLink]),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
    },
    mutate: {
      errorPolicy: 'all',
    },
  },
})


export default apollo
