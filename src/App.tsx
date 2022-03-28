import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import Theme from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";
import Router from "./routes/Router";
import Layout from "./shared/layout/Layout";
import { UserPositionProvider } from "./providers/userPositionProvider";

function App() {
  return (
    <BrowserRouter basename="/">
      <UserPositionProvider>
        <ThemeProvider theme={Theme}>
          <GlobalStyles />
          <Layout>
            <Router />
          </Layout>
        </ThemeProvider>
      </UserPositionProvider>
    </BrowserRouter>
  );
}

export default App;
