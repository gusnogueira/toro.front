import styled from "styled-components";

export const MainInvestmentsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.spacing2};
  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

export const InvestmentsContainer = styled.div`
  margin-top: ${props => props.theme.spacing.spacing3};
  display: flex;
  flex-direction: column;
`;

export const TitleInvestments = styled.span`
  font-size: ${props => props.theme.fontSize.title1};
  color: ${props => props.theme.colors.primary.dark};
  font-weight: ${props => props.theme.fontWeight.extraBold};
`;
