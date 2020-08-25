import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Containers/Home";
import Sura from "./Containers/Sura";
import SettingProvider from "./Context/SettingsContext";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

const teal = createMuiTheme({
  palette: {
    common: { black: "#000", white: "#fff" },
    background: {
      paper: "rgba(236, 239, 241, 1)",
      default: "rgba(250, 250, 250, 1)",
    },
    primary: {
      light: "rgba(82, 199, 184, 1)",
      main: "rgba(0, 150, 136, 1)",
      dark: "rgba(0, 103, 91, 1)",
      contrastText: "#fff",
    },
    secondary: {
      light: "rgba(129, 156, 169, 1)",
      main: "rgba(84, 110, 122, 1)",
      dark: "rgba(41, 67, 78, 1)",
      contrastText: "#fff",
    },
    error: {
      light: "rgba(255, 89, 131, 1)",
      main: "rgba(245, 0, 87, 1)",
      dark: "rgba(187, 0, 47, 1)",
      contrastText: "#fff",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={teal}>
      <div className="App">
        <Router>
          <SettingProvider>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>

              <Route path="/sura/:suraId" exact>
                <Sura />
              </Route>

              {/* <Route path="/sura:suraId" exact>
              <SuraContext />
            </Route> */}
            </Switch>
          </SettingProvider>
        </Router>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
