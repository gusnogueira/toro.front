import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import Theme from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";
import Router from "./routes/Router";
import Layout from "./shared/layout/Layout";

function App() {
  return (
    <BrowserRouter basename="/">
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Layout>
          <Router />
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
