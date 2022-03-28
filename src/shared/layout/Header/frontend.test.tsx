import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import Header from ".";
import { IUserPosition } from "../../../Interfaces/interfaces";
import { UserPositionContext } from "../../../providers/userPositionProvider";
import Theme from "../../../styles/theme";

describe("Teste do componente <Header />", () => {
  beforeEach(async () => {
    cleanup();
  });

  afterEach(() => {
    jest.resetAllMocks();
    cleanup();
  });

  const mockUserProfile: IUserPosition = {
    checkingAccountAmount: 100,
    consolidated: 150,
    positions: []
  };

  test("Saldo deve estar na tela", async () => {
    render(
      <UserPositionContext.Provider value={mockUserProfile}>
        <ThemeProvider theme={Theme}>
          <Header />
        </ThemeProvider>
      </UserPositionContext.Provider>
    );

    expect(screen.getByText("Saldo:", { exact: true })).toBeInTheDocument();
    expect(
      screen.getByText(mockUserProfile.checkingAccountAmount, { exact: false })
    ).toBeInTheDocument();
  });

  test("Patrimonio deve estar na tela", async () => {
    render(
      <UserPositionContext.Provider value={mockUserProfile}>
        <ThemeProvider theme={Theme}>
          <Header />
        </ThemeProvider>
      </UserPositionContext.Provider>
    );

    expect(screen.getByText("Patrimônio:", { exact: true })).toBeInTheDocument();
    expect(screen.getByText(mockUserProfile.consolidated, { exact: false })).toBeInTheDocument();
  });

  test("Botões de ocultar devem estar na tela", async () => {
    render(
      <UserPositionContext.Provider value={mockUserProfile}>
        <ThemeProvider theme={Theme}>
          <Header />
        </ThemeProvider>
      </UserPositionContext.Provider>
    );

    const buttons = screen.queryAllByRole("button");
    expect(buttons).toHaveLength(2);
  });

  test("Saldo deve ser ocultado conforme clique no botao de ocultar", async () => {
    render(
      <UserPositionContext.Provider value={mockUserProfile}>
        <ThemeProvider theme={Theme}>
          <Header />
        </ThemeProvider>
      </UserPositionContext.Provider>
    );

    const buttons = screen.queryAllByRole("button");

    //saldo deve estar presente na tela
    expect(screen.getByText("Saldo:", { exact: true })).toBeInTheDocument();
    expect(
      screen.getByText(mockUserProfile.checkingAccountAmount, { exact: false })
    ).toBeInTheDocument();

    //clicando no botao
    userEvent.click(buttons[0]);

    //saldo não deve estar mais presente na tela após clique no botao
    expect(
      screen.queryByText(mockUserProfile.checkingAccountAmount, { exact: false })
    ).not.toBeInTheDocument();
  });

  test("Patrimônio deve ser ocultado conforme clique no botao de ocultar", async () => {
    render(
      <UserPositionContext.Provider value={mockUserProfile}>
        <ThemeProvider theme={Theme}>
          <Header />
        </ThemeProvider>
      </UserPositionContext.Provider>
    );

    const buttons = screen.queryAllByRole("button");

    //patrimonio deve estar presente na tela
    expect(screen.getByText("Patrimônio:", { exact: true })).toBeInTheDocument();
    expect(screen.getByText(mockUserProfile.consolidated, { exact: false })).toBeInTheDocument();

    //clicando no botao
    userEvent.click(buttons[1]);

    //patrimonio não deve estar mais presente na tela após clique no botao
    expect(
      screen.queryByText(mockUserProfile.consolidated, { exact: false })
    ).not.toBeInTheDocument();
  });
});
