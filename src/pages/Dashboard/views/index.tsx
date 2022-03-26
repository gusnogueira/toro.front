import React, { useState, useEffect } from "react";
import { IInvestment } from "../../../Interfaces/interfaces";
import InvestmentItem from "../components/InvestmentItem";
import MainInvestmentCard from "../components/MainInvestmentCard";
import { getUserPosition } from "../repositories/userPositionRepository";

import { MainInvestmentsContainer, InvestmentsContainer } from "./styles";

const Dashboard: React.FC = () => {
  const [investments, setInvestments] = useState<IInvestment[]>([]);
  const [mainInvestment, setMainInvestment] = useState<IInvestment>();
  const [higherProfit, setHigherProfit] = useState<IInvestment>();
  const [greaterDamage, setGreaterDamage] = useState<IInvestment>();

  useEffect(() => {
    const apiReturn = getUserPosition();
    if (apiReturn) {
      setInvestments(apiReturn.positions);
      setMainInvestment(
        apiReturn.positions.reduce(function (prev, current) {
          return prev.amount * prev.averageCost > current.amount * current.averageCost
            ? prev
            : current;
        })
      );
      setHigherProfit(
        apiReturn.positions.reduce(function (prev, current) {
          return prev.result > current.result ? prev : current;
        })
      );
      setGreaterDamage(
        apiReturn.positions.reduce(function (prev, current) {
          return prev.result < current.result ? prev : current;
        })
      );
    }
  }, []);

  return (
    <>
      <MainInvestmentsContainer>
        <MainInvestmentCard investment={mainInvestment} title="Investimento Principal" />
        <MainInvestmentCard investment={higherProfit} title="Maior Lucro" />
        <MainInvestmentCard investment={greaterDamage} title="Maior Prejuízo" />
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
