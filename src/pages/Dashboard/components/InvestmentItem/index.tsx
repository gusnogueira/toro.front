import React from "react";

import { Card, Ticker, Data } from "./styles";

const InvestmentItem: React.FC = () => {
  return (
    <>
      <Card>
        <Ticker>GOAU4F</Ticker>
        <Data>
          Quantidade: <b>01</b>
        </Data>
        <Data>
          Preço atual: <b>R$10,00</b>
        </Data>
        <Data>
          Custo médio: <b>R$10,00</b>
        </Data>
        <Data>
          Lucro/Prejuízo: <b>R$10,00</b>
        </Data>
      </Card>
    </>
  );
};

export default InvestmentItem;
