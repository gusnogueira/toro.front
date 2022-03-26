import styled from "styled-components";

export const Container = styled.div`
  grid-area: CT;
  background-color: ${props => props.theme.colors.background};
`;

export const Conteudo = styled.div`
  padding: ${props => props.theme.spacing.spacing5};
  @media (max-width: 425px) {
    padding-left: ${props => props.theme.spacing.spacing3};
    padding-right: ${props => props.theme.spacing.spacing3};
    padding-top: 0;
  }
`;
