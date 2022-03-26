import { cleanup, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Header from ".";
import Theme from "../../../styles/theme";

describe("Teste do componente <Header />", () => {
  beforeEach(async () => {
    cleanup();
  });

  afterEach(() => {
    jest.resetAllMocks();
    cleanup();
  });

  test("Saldo deve estar na tela", async () => {
    render(
      <ThemeProvider theme={Theme}>
        <Header />
      </ThemeProvider>
    );

    expect(screen.getByText("Saldo:", { exact: true })).toBeInTheDocument();
  });

  test("Patrimonio deve estar na tela", async () => {
    render(
      <ThemeProvider theme={Theme}>
        <Header />
      </ThemeProvider>
    );

    expect(screen.getByText("Patrimônio:", { exact: true })).toBeInTheDocument();
  });
});
