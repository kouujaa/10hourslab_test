import gql from "graphql-tag";

export const GET_ACCOUNT = gql`
  query Account($id: ID!) {
    Account(id: $id) {
      id
      first_name
      last_name
      country
      type
      created_at
      updated_at
      Transaction {
        id
        account_id
        type
        amount
        branch
        created_at
        updated_at
      }
    }
  }
`;

export const GET_ACCOUNTS = gql`
  query allAccounts(
    $filter: AccountFilter
    $page: Int
    $perPage: Int
    $sortOrder: String
    $sortField: String
  ) {
    allAccounts(
      filter: $filter
      page: $page
      perPage: $perPage
      sortField: $sortField
      sortOrder: $sortOrder
    ) {
      id
      first_name
      last_name
      country
      type
      created_at
      updated_at
      Transactions {
        id
        account_id
        type
        amount
        branch
        created_at
        updated_at
      }
    }
    _allAccountsMeta {
      count
    }
  }
`;
