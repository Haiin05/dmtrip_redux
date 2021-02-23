import React from "react";
import ReactDOM from "react-dom";
import Routes from "../src/Routes";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./modules/index";
import { composeWithDevTools } from "redux-devtools-extension";
import { ThemeProvider } from "styled-components";
import theme from "./Styles/theme";
import GlobalStyle from "./Styles/globalStyles";
import "../src/Pages/Airline/SlideCard/SlideCard";

const store = createStore(rootReducer, composeWithDevTools());
console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
