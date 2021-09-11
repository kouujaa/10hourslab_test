import { useQuery } from "@apollo/client";
import { GET_TRANSACTIONS } from "src/api/queries/transaction";
import { changeDate } from "src/utils/helperFunctions";
import { transformTransactionDataForGraph } from "src/utils/helperFunctions";

const useTransactions = () => {
  const { data, loading } = useQuery(GET_TRANSACTIONS, {
    fetchPolicy: "cache-and-network",
  });
  const allCreditTransactions = changeDate(
    data?.allTransactions.filter((e) => e.type === "credit"),
    "MMM"
  );
  const allDebitTransactions = changeDate(
    data?.allTransactions.filter((e) => e.type === "debit"),
    "MMM"
  );
  const allTransactions = changeDate(data?.allTransactions, "MMM");
  const graphReadyTransactions =
    transformTransactionDataForGraph(allTransactions);
  return {
    allTransactions,
    graphReadyTransactionsbyDate: graphReadyTransactions.byDate,
    graphReadyTransactionsbyBranch: graphReadyTransactions.byBranch,
    transactionsMeta: data?._allTransactionsMeta,
    allCreditTransactions,
    allDebitTransactions,
    loading,
  };
};

export default useTransactions;
