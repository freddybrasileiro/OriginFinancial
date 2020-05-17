import * as React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

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
