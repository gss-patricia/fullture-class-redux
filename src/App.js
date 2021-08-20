import React from "react";
import styled from "styled-components";
import theme from "styled-theming";
import { Provider as ReduxProvider } from "react-redux";
import store from "./Store";
import DarkThemeProvider from "./Components/DarkThemeProvider";
import DarkThemeToggle from "./Components/DarkToggle";
import Weather from "./Components/Weather";

export const backgroundColor = theme("theme", {
  light: "#fff",
  dark: "#2d2d2d",
});

export const textColor = theme("theme", {
  light: "#000",
  dark: "#fff",
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  background-color: ${backgroundColor};
  color: ${textColor};
`;

const App = () => (
  <ReduxProvider store={store}>
    <DarkThemeProvider>
      <Container>
        <DarkThemeToggle />
        <Weather />
      </Container>
    </DarkThemeProvider>
  </ReduxProvider>
);

export default App;
