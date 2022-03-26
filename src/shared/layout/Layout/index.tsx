import React from "react";
import Header from "../Header";
import Content from "../Content";

import { Container } from "./styles";

const Layout: React.FC = ({ children }) => (
  <Container>
    <Header />
    <Content>{children}</Content>
  </Container>
);

export default Layout;
