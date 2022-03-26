import styled from "styled-components";

export const MainInvestmentsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

export const InvestmentsContainer = styled.div`
  margin-top: ${props => props.theme.spacing.spacing3};
  display: flex;
  flex-direction: column;
`;
