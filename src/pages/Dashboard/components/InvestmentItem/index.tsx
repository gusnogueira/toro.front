import React from "react";
import { numberToCurrency } from "../../../../shared/util/functions";
import { IInvestmentItemProps } from "./interfaces";

import { Card, Ticker, Data } from "./styles";

const InvestmentItem: React.FC<IInvestmentItemProps> = props => {
  return (
    <>
      <Card>
        <Ticker>{props.investment.ticker}</Ticker>
        <Data>
          Quantidade: <b>{props.investment.amount}</b>
        </Data>
        <Data>
          Preço atual: <b>{numberToCurrency(props.investment.currentPrice)}</b>
        </Data>
        <Data>
          Custo médio: <b>{numberToCurrency(props.investment.averageCost)}</b>
        </Data>
        <Data>
          Lucro/Prejuízo: <b>{numberToCurrency(props.investment.result)}</b>
        </Data>
      </Card>
    </>
  );
};

export default InvestmentItem;
