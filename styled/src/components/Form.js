import React from 'react';
import styled,{css} from 'styled-components/macro';

const Button = styled.button.attrs((props) => {
    return {type: props.type || 'button'}
})`
    background: var(--white);
    border: none;
    color: moccasin;
    padding: .25rem;
    cursor: pointer;
    ${({type}) => {
        return type === 'submit' && css`
            display: block;
            width: 100%;
            margin: auto;
            border-radius: .25rem;
        `
    }}

`

const BasicInput = styled.input.attrs((props) =>{
    return {type: props.type || 'text', placeholder: props.placeholder || "enter value"}
})`
    box-sizing: border-box;
    padding: .5rem;
    border-radius: .25rem;
    border: 2px solid #f2f4f8;
    width: 100%;
    margin: 1rem;

`



const Form = () => {
  return (
  <div>
      <div>attrs method</div>
      <Button>click me</Button>
      <form css={`width:300px; background:#fff; padding:2rem; margin-top:1rem;`}>
        <h2>Form</h2>
        <BasicInput/>
        <Button type='submit'>submit here</Button>
      </form>
  </div>
  );
};

export default Form;
