import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  padding: ${props => props.theme.spacing.spacing2};
  height: 100%;
  width: 32%;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.03);
  @media (max-width: 425px) {
    width: 100%;
    & + & {
      margin-top: ${props => props.theme.spacing.spacing1};
    }
  }
`;

export const Conteudo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: end;
  justify-content: center;
`;

export const Label = styled.span`
  font-size: ${props => props.theme.fontSize.body3};
  color: ${props => props.theme.colors.gray.light};
  @media (max-width: 425px) {
    font-size: ${props => props.theme.fontSize.body4};
  }
`;

export const Title = styled.span`
  font-size: ${props => props.theme.fontSize.title1};
  color: ${props => props.theme.colors.primary.dark};
  font-weight: ${props => props.theme.fontWeight.extraBold};
  margin-top: ${props => props.theme.spacing.spacing1};
  @media (max-width: 425px) {
    font-size: ${props => props.theme.fontSize.title2};
  }
`;

export const Data = styled.span`
  font-size: ${props => props.theme.fontSize.body3};
  color: ${props => props.theme.colors.primary.dark};
  margin-top: ${props => props.theme.spacing.spacing1};
  @media (max-width: 425px) {
    font-size: ${props => props.theme.fontSize.body4};
  }
`;
