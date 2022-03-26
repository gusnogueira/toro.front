import React from "react";
import { numberToCurrency } from "../../../../shared/util/functions";
import { IMainInvestmentCardProps } from "./interfaces";

import { Card, Title, Label, Data, LeftContainer, RightContainer, Conteudo } from "./styles";

const MainInvestmentCard: React.FC<IMainInvestmentCardProps> = props => {
  return (
    <>
      <Card>
        <Conteudo>
          <LeftContainer>
            <Label>{props.title}</Label>
            <Title>{props.investment.ticker}</Title>
            <Data>
              Quantidade: <b>{props.investment.amount}</b>
            </Data>
            <Data>
              Preço atual: <b>{numberToCurrency(props.investment.currentPrice)}</b>
            </Data>
            <Data>
              Custo médio: <b>{numberToCurrency(props.investment.averageCost)}</b>
            </Data>
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
