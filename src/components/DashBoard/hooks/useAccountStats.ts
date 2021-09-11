import { useQuery } from '@apollo/client'
import { GET_ACCOUNTS } from 'src/api/queries/accounts'
import { changeDate } from 'src/utils/helperFunctions'
import { transformDataForGraph } from 'src/utils/helperFunctions'

const useAccounts = () => {
  const { data, loading } = useQuery(GET_ACCOUNTS, {
    fetchPolicy: 'cache-and-network',
  }) 
  const allSavingsAccounts = changeDate(data?.allAccounts.filter((e)=>e.type==='savings'),"MMM")
  const allChequingAccounts = changeDate(data?.allAccounts.filter((e)=>e.type==='cheque'),'MMM')
  const allAccounts = changeDate(data?.allAccounts,'MMM')
  const graphReadyAccounts = transformDataForGraph(allAccounts)
  return { allAccounts, graphReadyAccounts, accountsMeta: data?._allAccountsMeta, allSavingsAccounts, allChequingAccounts, loading }
}

export default useAccounts
 