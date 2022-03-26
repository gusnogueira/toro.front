import React from "react";
import { IInvestment } from "../../../Interfaces/interfaces";
import MainInvestmentCard from "../components/MainInvestmentCard";

import { MainInvestmentsContainer, InvestmentsContainer } from "./styles";

const Dashboard: React.FC = () => {
  const mainInvestments: IInvestment[] = [
    {
      ticker: "GOAU4F",
      amount: 1,
      currentPrice: 10,
      averageCost: 10,
      result: 10
    },
    {
      ticker: "GOAU4F",
      amount: 1,
      currentPrice: 10,
      averageCost: 10,
      result: 10
    },
    {
      ticker: "GOAU4F",
      amount: 1,
      currentPrice: 10,
      averageCost: 10,
      result: 10
    }
  ];
  return (
    <>
      <MainInvestmentsContainer>
        <MainInvestmentCard
          investment={mainInvestments[0]}
          title="Investimento Principal"
        ></MainInvestmentCard>
        <MainInvestmentCard
          investment={mainInvestments[1]}
          title="Maior Lucro"
        ></MainInvestmentCard>
        <MainInvestmentCard
          investment={mainInvestments[2]}
          title="Maior Prejuízo"
        ></MainInvestmentCard>
      </MainInvestmentsContainer>
      <InvestmentsContainer></InvestmentsContainer>
    </>
  );
};

export default Dashboard;
