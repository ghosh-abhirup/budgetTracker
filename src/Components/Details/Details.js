import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import { Chart, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import useStyles from "./styles";
import useTransactions from "../../useTransactions";
Chart.register(ArcElement);

const Details = ({ title }) => {
  const { totalAmount, chartData } = useTransactions(title);
  const classes = useStyles();

  return (
    <Card className={title === "Income" ? classes.income : classes.expense}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h5">${totalAmount}</Typography>
        <Doughnut data={chartData} />
      </CardContent>
    </Card>
  );
};

export default Details;
