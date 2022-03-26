import React from "react";
import { IInvestment } from "../../../Interfaces/interfaces";
import InvestmentItem from "../components/InvestmentItem";
import MainInvestmentCard from "../components/MainInvestmentCard";

import { MainInvestmentsContainer, InvestmentsContainer } from "./styles";

const Dashboard: React.FC = () => {
  const investments: IInvestment[] = [
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
        <MainInvestmentCard investment={investments[0]} title="Investimento Principal" />
        <MainInvestmentCard investment={investments[1]} title="Maior Lucro" />
        <MainInvestmentCard investment={investments[2]} title="Maior Prejuízo" />
      </MainInvestmentsContainer>
      <h3 style={{ marginTop: "20px" }}>Listagem de Ativos</h3>
      <InvestmentsContainer>
        {investments.map(investment => (
          <InvestmentItem investment={investment} />
        ))}
      </InvestmentsContainer>
    </>
  );
};

export default Dashboard;
