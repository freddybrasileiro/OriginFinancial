import * as React from 'react';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

import theme from "../src/theme";
import { SavingGoal } from './pages/SavingGoal';

const App: React.FunctionComponent = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <SavingGoal />
    </MuiThemeProvider>
  )
};

export default App;
