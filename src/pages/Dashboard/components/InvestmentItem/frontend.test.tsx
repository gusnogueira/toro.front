import { cleanup, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import InvestmentItem from ".";
import Theme from "../../../../styles/theme";

describe("Teste do componente <InvestmentItem />", () => {
  beforeEach(async () => {
    cleanup();
  });

  afterEach(() => {
    jest.resetAllMocks();
    cleanup();
  });

  const mockInvestment = {
    ticker: "JHSF3",
    amount: 3,
    currentPrice: 10,
    averageCost: 11,
    result: 12,
    totalCost: 13
  };

  test("Ticker deve estar na tela", async () => {
    render(
      <ThemeProvider theme={Theme}>
        <InvestmentItem investment={mockInvestment} />
      </ThemeProvider>
    );

    expect(screen.getByText(mockInvestment.ticker, { exact: true })).toBeInTheDocument();
  });

  test("Quantidade deve estar na tela", async () => {
    render(
      <ThemeProvider theme={Theme}>
        <InvestmentItem investment={mockInvestment} />
      </ThemeProvider>
    );

    expect(screen.getByText("Quantidade:", { exact: true })).toBeInTheDocument();
    expect(screen.getByText(mockInvestment.amount, { exact: true })).toBeInTheDocument();
  });

  test("Preço atual deve estar na tela", async () => {
    render(
      <ThemeProvider theme={Theme}>
        <InvestmentItem investment={mockInvestment} />
      </ThemeProvider>
    );

    expect(screen.getByText("Preço atual:", { exact: true })).toBeInTheDocument();
    expect(screen.getByText(mockInvestment.currentPrice, { exact: false })).toBeInTheDocument();
  });

  test("Custo médio deve estar na tela", async () => {
    render(
      <ThemeProvider theme={Theme}>
        <InvestmentItem investment={mockInvestment} />
      </ThemeProvider>
    );

    expect(screen.getByText("Custo médio:", { exact: true })).toBeInTheDocument();
    expect(screen.getByText(mockInvestment.averageCost, { exact: false })).toBeInTheDocument();
  });

  test("Lucro/Prejuízo deve estar na tela", async () => {
    render(
      <ThemeProvider theme={Theme}>
        <InvestmentItem investment={mockInvestment} />
      </ThemeProvider>
    );

    expect(screen.getByText("Lucro/Prejuízo:", { exact: true })).toBeInTheDocument();
    expect(screen.getByText(mockInvestment.result, { exact: false })).toBeInTheDocument();
  });
});
