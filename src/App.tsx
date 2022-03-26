import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import Theme from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";
import Router from "./routes/Router";
import Layout from "./shared/layout/Layout";
import { UserProfileProvider } from "./providers/userProfile";

function App() {
  return (
    <BrowserRouter basename="/">
      <UserProfileProvider>
        <ThemeProvider theme={Theme}>
          <GlobalStyles />
          <Layout>
            <Router />
          </Layout>
        </ThemeProvider>
      </UserProfileProvider>
    </BrowserRouter>
  );
}

export default App;
