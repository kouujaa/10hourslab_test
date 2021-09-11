import React, { useState, useCallback } from 'react'
import moment from 'moment'
import CallCenterLayout from './layout/CallCenterLayout'
import useAccounts from './hooks/useAccountStats'
import useSessions from './hooks/useSessionStats'
import useTransactions from './hooks/useTransactionStats'
import {  PAST_7_DAYS, CUSTOM, ACCOUNT } from './constants'

const menuOptions = [
  { label: `Past 7 Days`, value: PAST_7_DAYS },
  { label: `CUSTOM`, value: CUSTOM },
]

interface Props {}

const CallCenterController: React.FC<Props> = () => {
  const [filter, setFilter] = useState(PAST_7_DAYS)
  const [pageTab, setPageTab] = useState(ACCOUNT)

  const onFilterChange = (tab) => {
    setFilter(tab)
  }

  const { allAccounts: allAccountsData, graphReadyAccounts, accountsMeta, allSavingsAccounts, allChequingAccounts, loading: loadingAccounts} = useAccounts()
  const { data: sessionData, graphReadySessions, loading: loadingSessions } = useSessions()
  const { allTransactions, graphReadyTransactionsbyDate, graphReadyTransactionsbyBranch, transactionsMeta , allCreditTransactions, allDebitTransactions, loading: loadingTransactions } = useTransactions()

const accountChartData = {
 allAccountsData, graphReadyAccounts, accountsMeta, allSavingsAccounts, allChequingAccounts, loadingAccounts
}
const transactionChartData = {
  allTransactions, graphReadyTransactionsbyDate,graphReadyTransactionsbyBranch, transactionsMeta , allCreditTransactions, allDebitTransactions, loadingTransactions
 }
 const sessionChartData = {
  sessionData, graphReadySessions, loadingSessions
 }

  return (
    <CallCenterLayout
      menuOptions={menuOptions}
      onFilterChange={onFilterChange}
      filter={filter}
      pageTab={pageTab}
      setPageTab={setPageTab}
      accountData={accountChartData}
      sessionData={sessionChartData}
      transactionData={transactionChartData}
    />
  )
}

export default CallCenterController
