import React from "react";
import { numberToCurrency } from "../../../../shared/util/functions";
import { IMainInvestmentCard } from "./interfaces";

import { Card, Title, Label, Data, LeftContainer, RightContainer, Conteudo } from "./styles";

const MainInvestmentCard: React.FC<IMainInvestmentCard> = props => {
  return (
    <>
      <Card>
        <Conteudo>
          <LeftContainer>
            <Label>{props.title}</Label>
            <Title>{props.investment.ticker}</Title>
            <Data>Quantidade: {props.investment.amount}</Data>
            <Data>Preço atual: {numberToCurrency(props.investment.currentPrice)}</Data>
            <Data>Custo médio: {numberToCurrency(props.investment.averageCost)}</Data>
          </LeftContainer>
          <RightContainer>
            <Title>{numberToCurrency(props.investment.result)}</Title>
          </RightContainer>
        </Conteudo>
      </Card>
    </>
  );
};

export default MainInvestmentCard;
