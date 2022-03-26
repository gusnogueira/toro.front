import React from "react";
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
            <Data>Preço atual: R${props.investment.currentPrice}</Data>
            <Data>Custo médio: R${props.investment.averageCost}</Data>
          </LeftContainer>
          <RightContainer>
            <Title>R${props.investment.result}</Title>
          </RightContainer>
        </Conteudo>
      </Card>
    </>
  );
};

export default MainInvestmentCard;
