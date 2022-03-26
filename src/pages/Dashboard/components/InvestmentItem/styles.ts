import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  align-items: center;
  border-radius: 4px;
  padding: ${props => props.theme.spacing.spacing2};
  width: 100%;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.03);
  & + & {
    margin-top: ${props => props.theme.spacing.spacing2};
  }
`;

export const Ticker = styled.span`
  font-size: ${props => props.theme.fontSize.body1};
  color: ${props => props.theme.colors.primary.dark};
  font-weight: ${props => props.theme.fontWeight.extraBold};
`;

export const Data = styled.span`
  font-size: ${props => props.theme.fontSize.body3};
  color: ${props => props.theme.colors.primary.dark};
  margin-left: ${props => props.theme.spacing.spacing9};
  & + & {
    margin-left: ${props => props.theme.spacing.spacing9};
  }
  @media (max-width: 425px) {
    font-size: ${props => props.theme.fontSize.body4};
    margin-left: ${props => props.theme.spacing.spacing4};
    & + & {
      margin-left: ${props => props.theme.spacing.spacing4};
    }
  }
`;
