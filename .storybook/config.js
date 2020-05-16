import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import theme from "../src/theme";

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.stories\.(mdx|jsx|tsx)$/);

const muiThemeDecorator = story => (
    <MuiThemeProvider theme={theme}>{story()}</MuiThemeProvider>
  );

addDecorator(muiThemeDecorator);

configure(req, module);
