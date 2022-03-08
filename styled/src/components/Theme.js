import BasicTitle from "./components/BasicTitle";
import {DefaultButton, HipsterButton} from "./components/Buttons"
import ComplexTitle from "./components/ComplexTitle";
import Card from "./components/Card";
import styled,{ThemeProvider} from "styled-components";
import React,{useState} from "react";

const BaseTheme = {
  color: "black",
  background: 'red'
}
const DarkTheme = {
  color: 'white',
  background: 'blue',
}

const Container = styled.div`

color: ${(props) => props.theme.color};
background-color: ${(props) => props.theme.background};
`

function App() {
  
  const [theme, setTheme] = useState(true);

  const themeHanlder = () => {
    setTheme(!theme)
  }

  return (
    <ThemeProvider theme={theme ? BaseTheme : DarkTheme}>

      <BasicTitle special>styles</BasicTitle>
      <DefaultButton>Click me</DefaultButton>
      <HipsterButton>Click me</HipsterButton>
      <ComplexTitle title={"more complex title"}>Complexe title</ComplexTitle>
      <Card/>
      <Container>
        <h1>hello</h1>
        <button onClick={ themeHanlder}>click</button>
      </Container>

    </ThemeProvider>
  );
}

export default App;
