import { cleanup, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import MainInvestmentCard from ".";
import Theme from "../../../../styles/theme";

describe("Teste do componente <MainInvestmentCard />", () => {
  beforeEach(async () => {
    cleanup();
  });

  afterEach(() => {
    jest.resetAllMocks();
    cleanup();
  });

  const mockInvestment = {
    title: "Investimento Principal",
    investment: {
      ticker: "JHSF3",
      amount: 3,
      currentPrice: 10,
      averageCost: 11,
      result: 12,
      totalCost: 13
    }
  };

  test("Ticker deve estar na tela", async () => {
    render(
      <ThemeProvider theme={Theme}>
        <MainInvestmentCard investment={mockInvestment.investment} title={mockInvestment.title} />
      </ThemeProvider>
    );

    expect(
      screen.getByText(mockInvestment.investment?.ticker, { exact: true })
    ).toBeInTheDocument();
  });

  test("Quantidade deve estar na tela", async () => {
    render(
      <ThemeProvider theme={Theme}>
        <MainInvestmentCard investment={mockInvestment.investment} title={mockInvestment.title} />
      </ThemeProvider>
    );

    expect(screen.getByText("Quantidade:", { exact: true })).toBeInTheDocument();
    expect(screen.getByText(mockInvestment.investment.amount, { exact: true })).toBeInTheDocument();
  });

  test("Preço atual deve estar na tela", async () => {
    render(
      <ThemeProvider theme={Theme}>
        <MainInvestmentCard investment={mockInvestment.investment} title={mockInvestment.title} />
      </ThemeProvider>
    );

    expect(screen.getByText("Preço atual:", { exact: true })).toBeInTheDocument();
    expect(
      screen.getByText(mockInvestment.investment.currentPrice, { exact: false })
    ).toBeInTheDocument();
  });

  test("Custo médio deve estar na tela", async () => {
    render(
      <ThemeProvider theme={Theme}>
        <MainInvestmentCard investment={mockInvestment.investment} title={mockInvestment.title} />
      </ThemeProvider>
    );

    expect(screen.getByText("Custo médio:", { exact: true })).toBeInTheDocument();
    expect(
      screen.getByText(mockInvestment.investment.averageCost, { exact: false })
    ).toBeInTheDocument();
  });

  test("Resultado deve estar na tela", async () => {
    render(
      <ThemeProvider theme={Theme}>
        <MainInvestmentCard investment={mockInvestment.investment} title={mockInvestment.title} />
      </ThemeProvider>
    );

    expect(
      screen.getByText(mockInvestment.investment.result, { exact: false })
    ).toBeInTheDocument();
  });
});
