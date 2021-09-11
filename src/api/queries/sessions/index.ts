import gql from 'graphql-tag'

export const GET_SESSION = gql`
  query Session(
    $id: ID!
  ) {
    Account(
      id: $id
    ) {
      id
      lat
      long
      created_at
      updated_at
    }
  }
`;

export const GET_SESSIONS = gql`
  query GetSessions(
    $filter: SessionFilter
    $page: Int
    $perPage: Int
    $sortOrder: String
    $sortField: String
  ) {
    allSessions(
      filter: $filter
      page: $page
      perPage: $perPage
      sortField: $sortField
      sortOrder: $sortOrder
    ) {
      id
      lat
      long
      created_at
      updated_at
    }
    _allSessionsMeta {
      count
    }
  }
`;