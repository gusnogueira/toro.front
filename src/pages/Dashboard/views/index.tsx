import React, { useState, useEffect, useContext } from "react";
import { IInvestment } from "../../../Interfaces/interfaces";
import InvestmentItem from "../components/InvestmentItem";
import MainInvestmentCard from "../components/MainInvestmentCard";

import { MainInvestmentsContainer, InvestmentsContainer } from "./styles";
import { UserProfileContext } from "../../../providers/userProfile";

const Dashboard: React.FC = () => {
  const userProfile = useContext(UserProfileContext);
  const [investments, setInvestments] = useState<IInvestment[]>([]);
  const [mainInvestment, setMainInvestment] = useState<IInvestment>();
  const [higherProfit, setHigherProfit] = useState<IInvestment>();
  const [greaterDamage, setGreaterDamage] = useState<IInvestment>();

  useEffect(() => {
    if (userProfile) {
      setInvestments(userProfile.positions);
      setMainInvestment(
        userProfile.positions.reduce(function (prev, current) {
          return prev.amount * prev.averageCost > current.amount * current.averageCost
            ? prev
            : current;
        })
      );
      setHigherProfit(
        userProfile.positions.reduce(function (prev, current) {
          return prev.result > current.result ? prev : current;
        })
      );
      setGreaterDamage(
        userProfile.positions.reduce(function (prev, current) {
          return prev.result < current.result ? prev : current;
        })
      );
    }
  }, [userProfile]);

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
