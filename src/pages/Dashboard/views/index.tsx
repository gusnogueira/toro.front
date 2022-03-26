import React from "react";
import { IInvestment } from "../../../Interfaces/interfaces";
import InvestmentItem from "../components/InvestmentItem";
import MainInvestmentCard from "../components/MainInvestmentCard";

import { MainInvestmentsContainer, InvestmentsContainer } from "./styles";

const Dashboard: React.FC = () => {
  const mainInvestments: IInvestment[] = [
    {
      ticker: "GOAU4F",
      amount: 1,
      currentPrice: 10,
      averageCost: 10,
      result: 10,
      totalCost: 10
    },
    {
      ticker: "GOAU4F",
      amount: 1,
      currentPrice: 10,
      averageCost: 10,
      result: 10,
      totalCost: 10
    },
    {
      ticker: "GOAU4F",
      amount: 1,
      currentPrice: 10,
      averageCost: 10,
      result: 10,
      totalCost: 10
    }
  ];
  return (
    <>
      <MainInvestmentsContainer>
        <MainInvestmentCard investment={mainInvestments[0]} title="Investimento Principal" />
        <MainInvestmentCard investment={mainInvestments[1]} title="Maior Lucro" />
        <MainInvestmentCard investment={mainInvestments[2]} title="Maior Prejuízo" />
      </MainInvestmentsContainer>
      <h3 style={{ marginTop: "20px" }}>Listagem de Ativos</h3>
      <InvestmentsContainer>
        <InvestmentItem />
        <InvestmentItem />
        <InvestmentItem />
        <InvestmentItem />
      </InvestmentsContainer>
    </>
  );
};

export default Dashboard;
