import React from "react";

import { Container, Conteudo } from "./styles";

const Content: React.FC = ({ children }) => (
  <Container>
    <Conteudo>{children}</Conteudo>
  </Container>
);

export default Content;
