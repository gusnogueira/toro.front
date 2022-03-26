import styled from "styled-components";

export const Container = styled.div`
  grid-area: HD;
  background-color: ${props => props.theme.colors.background};
`;

export const Conteudo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: ${props => props.theme.spacing.spacing5};
  padding-right: ${props => props.theme.spacing.spacing5};
  padding-top: ${props => props.theme.spacing.spacing3};
`;

export const LogoImg = styled.img`
  width: 180px;
  @media (max-width: 425px) {
    width: 80px;
  }
`;

export const Icon = styled.img`
  width: 18px;
  margin-right: ${props => props.theme.spacing.spacing2};
  margin-top: ${props => props.theme.spacing.spacing2};
  @media (max-width: 425px) {
    width: 12px;
    margin-top: ${props => props.theme.spacing.spacing1};
    margin-right: ${props => props.theme.spacing.spacing1};
  }
`;

export const ValueContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const LabelValue = styled.span`
  font-size: ${props => props.theme.fontSize.body2};
  color: ${props => props.theme.colors.primary.dark};
  @media (max-width: 425px) {
    font-size: ${props => props.theme.fontSize.body4};
  }
`;

export const Value = styled.span`
  font-size: ${props => props.theme.fontSize.body2};
  color: ${props => props.theme.colors.primary.dark};
  font-weight: ${props => props.theme.fontWeight.extraBold};
  @media (max-width: 425px) {
    font-size: ${props => props.theme.fontSize.body4};
  }
`;

export const RigthContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;
  @media (max-width: 425px) {
    width: 65%;
  }
`;

export const LinkButton = styled.button`
  background-color: transparent;
`;
