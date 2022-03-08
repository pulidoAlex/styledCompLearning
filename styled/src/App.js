import BasicTitle from "./components/BasicTitle";
import {DefaultButton, HipsterButton} from "./components/Buttons"
import ComplexTitle from "./components/ComplexTitle";
import Card from "./components/Card";
import styled,{ThemeProvider} from "styled-components/macro";
import React,{useState} from "react";
import Loading from "./components/Load";
import Form from "./components/Form";
import List from "./components/List";
import Products from "./components/Products";

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
      <DefaultButton large>Click me</DefaultButton>
      <HipsterButton>Click me</HipsterButton>
      <HipsterButton as="a" href="https://www.google.com" target="_blank" >Click me 1</HipsterButton>
      <ComplexTitle subtitle={"ejemplo"} title={"more complex title"}>Complexe title</ComplexTitle>
      <Card/>
      <Loading/>
      <List/>
      <Products/>
      <Form/>
      <div css={`color:yellow`}>Hello</div> {/* importas macro en styled y puedes usar propiedad css para inline css y que se vea reflejado sino no funcionara  */} 
      <Container>
        <h1>Hello</h1>
        <button onClick={ themeHanlder}>Click</button>
      </Container>

    </ThemeProvider>
  );
}

export default App;
