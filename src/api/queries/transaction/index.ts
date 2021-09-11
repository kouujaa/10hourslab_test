import gql from "graphql-tag";

export const GET_TRANSACTION = gql`
  query Transaction($id: ID!) {
    Account(id: $id) {
      id
      first_name
      last_name
      country
      type
      created_at
      updated_at
    }
  }
`;

export const GET_TRANSACTIONS = gql`
  query GetTransactions(
    $filter: TransactionFilter
    $page: Int
    $perPage: Int
    $sortOrder: String
    $sortField: String
  ) {
    allTransactions(
      filter: $filter
      page: $page
      perPage: $perPage
      sortField: $sortField
      sortOrder: $sortOrder
    ) {
      id
      account_id
      type
      amount
      branch
      created_at
      updated_at
      Account {
        first_name
        last_name
        country
        type
        created_at
        updated_at
      }
    }
    _allTransactionsMeta {
      count
    }
  }
`;
