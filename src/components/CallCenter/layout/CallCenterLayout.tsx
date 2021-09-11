import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import { Typography } from "@material-ui/core";
import useStyles from "./CallCenterLayout.styles";
import Chart from "../components/Chart/Chart";
import ChartBar from "../components/ChartBar/ChartBar";
import { ACCOUNT, SESSIONS, TRANSACTION } from "../constants";

interface Props {
  menuOptions: any;
  onFilterChange: any;
  filter: any;
  pageTab: any;
  setPageTab: any;
  accountData: any;
  sessionData: any;
  transactionData: any;
}

const CallCenterLayout: React.FC<Props> = ({
  menuOptions,
  filter,
  onFilterChange,
  pageTab,
  setPageTab,
  accountData,
  sessionData,
  transactionData,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={10}>
          <Card className={classes.analyticsContainer}>
            <ChartBar
              filter={filter}
              onFilterChange={onFilterChange}
              menuOptions={menuOptions}
              pageTab={pageTab}
              setPageTab={setPageTab}
            />
            {pageTab === ACCOUNT && (
              <>
                <div style={{display:"flex",flexDirection:"column"}}>
                <Typography>Total Accounts : {accountData.accountsMeta?.count}</Typography>
                <Typography>Total checking : {accountData.allSavingsAccounts.length}</Typography>
                <Typography>Total Savings : {accountData.allChequingAccounts.length}</Typography> 
                </div>
                <Grid container className={classes.chartContainer}>
                  <Chart
                    chartLabel={"Accounts"}
                    data={accountData.graphReadyAccounts}
                    pageTab={pageTab}
                    filter={filter}
                  />
                </Grid>
              </>
            )}
            {pageTab === TRANSACTION && (
              <>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Typography>
                    Total Transactions :{" "}
                    {transactionData.transactionsMeta?.count}
                  </Typography>
                  <Typography>
                    Total Credits :{" "}
                    {transactionData.allCreditTransactions.length}
                  </Typography>
                  <Typography>
                    Total Debits : {transactionData.allDebitTransactions.length}
                  </Typography>
                </div>
                <Grid container className={classes.chartContainer}>
                  <Chart
                    chartLabel={"Transactions"}
                    data={transactionData.graphReadyTransactionsbyDate}
                    pageTab={pageTab}
                    filter={filter}
                  />
                  <Chart
                    chartLabel={"Transactions"}
                    data={transactionData.graphReadyTransactionsbyBranch}
                    pageTab={pageTab}
                    filter={filter}
                  />
                </Grid>
              </>
            )}
            {pageTab === SESSIONS && (
              <Grid container className={classes.chartContainer}>


                <Chart
                  chartLabel={"Sessions"}
                  data={sessionData.graphReadySessions}
                  pageTab={pageTab}
                  filter={filter}
                />
              </Grid>
            )}
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default CallCenterLayout;
