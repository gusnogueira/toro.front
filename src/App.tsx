import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import Theme from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";
import Router from "./routes/Router";

function App() {
  return (
    <BrowserRouter basename="/">
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
