import { ThemeProvider } from "@material-ui/styles";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/Main';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { THEME } from "./Styles/theme";

ReactDOM.render(
    <ThemeProvider theme={THEME}>
      <App />
    </ThemeProvider>,
    document.getElementById("root")
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();