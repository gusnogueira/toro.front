import React, { useState } from "react";

import {
  Container,
  Conteudo,
  LogoImg,
  ValueContainer,
  RigthContainer,
  LabelValue,
  Value,
  Icon,
  LinkButton
} from "./styles";

import imgLogo from "../../../assets/logoToroInvestimentos.svg";
import showIcon from "../../../assets/showIcon.svg";
import hideIcon from "../../../assets/hideIcon.svg";

const Header: React.FC = () => {
  const [showBalance, setShowBalance] = useState(true);
  const [showPatrimony, setShowPatrimony] = useState(true);

  return (
    <Container>
      <Conteudo>
        <LogoImg src={imgLogo} />
        <RigthContainer>
          <LinkButton onClick={() => setShowBalance(!showBalance)}>
            <Icon src={showBalance ? hideIcon : showIcon} />
          </LinkButton>
          <ValueContainer>
            <LabelValue>Saldo:</LabelValue>
            <Value>{showBalance ? "R$ 258.000,00" : "-"}</Value>
          </ValueContainer>
          <LinkButton onClick={() => setShowPatrimony(!showPatrimony)}>
            <Icon src={showPatrimony ? hideIcon : showIcon} />
          </LinkButton>
          <ValueContainer>
            <LabelValue>Patrimônio:</LabelValue>
            <Value>{showPatrimony ? "R$ 258.000,00" : "-"}</Value>
          </ValueContainer>
        </RigthContainer>
      </Conteudo>
    </Container>
  );
};

export default Header;
