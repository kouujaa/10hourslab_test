import React,{useEffect} from "react";
import { VerticalBarSeries, XYPlot, XAxis, YAxis ,LineSeries} from "react-vis";
import AutoSize from "react-virtualized-auto-sizer";
import Grid from "@material-ui/core/Grid";
import useStyles from "./Chart.styles";
import Typography from "@material-ui/core/Typography";
// import {getGroupedData } from "src/utils/helperFunctions";
import {
  SESSIONS,
} from "../../constants";

const legend = [
  {
    name: "Accounts",
    color: "#645BE8",
    key: "accounts",
  },
  {
    name: "Transactions",
    color: "#F9D22A",
    key: "transactions",
  },
  {
    name: "Sessions",
    color: "#FF153C",
    key: "sessions",
  },
];
interface Props {
  chartLabel: string;
  data: any;
  pageTab?: string;
  filter?: string;
}

const Chart: React.FC<Props> = ({
  chartLabel,
  data,
  pageTab,
  filter,
}) => {
  const classes = useStyles();

  const renderChart = () => {
    if (pageTab === SESSIONS) {
        return (
          <VerticalBarSeries
            data={data || null}
            barWidth={0.2}
          />
        )
      
    } else {
      return (
        <VerticalBarSeries data={data || null} color="#645BE8" barWidth={0.2}/>
      )
    }
  }

  return (
    <Grid item xs={12} md={6}>
      <div className={classes.container}>
        <Typography className={classes.chartLabel}>{chartLabel}</Typography>
        <AutoSize>
          {({ width, height }) => (
            <XYPlot
              height={height}
              width={width}
              xType="ordinal"
              stackBy={"y"}
              margin={{
                left: 40,
                right: 10,
                top: 55,
                bottom: 40,
              }}
            >
              <XAxis
                hideLine
                tickSize={0}
                hideTicks={false}
                style={{ text: { fill: "#979797" } }}
              />
              <YAxis
                hideLine
                tickSize={1}
                style={{
                  text: {
                    stroke: "none",
                    fill: "#979797",
                    fontWeight: 700,
                    paddingLeft: 4,
                  },
                }}
              />
              {renderChart()}
            </XYPlot>
          )}
        </AutoSize>
      </div>
    </Grid>
  );
};

export default Chart;
