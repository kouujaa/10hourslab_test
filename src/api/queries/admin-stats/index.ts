import gql from 'graphql-tag'

export const GET_ADMIN_STATS = gql`
  query GetAdminStats($filter: AdminStatsFilter!) {
    adminStats(filter: $filter) {
      adminId
      ordinal
      avgDuration {
        prospect
        contact
        resident
      }
      outBoundCalls {
        prospect
        contact
        resident
      }
      inBoundCalls {
        prospect
        contact
        resident
      }
      voicemail {
        prospect
        contact
        resident
      }
      unanswered {
        prospect
        contact
        resident
      }
      sent {
        prospect
        contact
        resident
      }
      received {
        prospect
        contact
        resident
      }
      closed {
        prospect
        contact
        resident
      }
    }
  }
`
