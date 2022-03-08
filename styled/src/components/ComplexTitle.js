import React from 'react';
import styled from 'styled-components';
import { setBorder } from './utilis';

const Wrapper = styled.div`
    h1{
        text-transform: capitalize;
        text-align: center;
    }
    .example{
        font-size: 20px;
        text-align: center;
        color:hotpink;
        background: var(--primaryColor); //puedes usar variables globales para solo cambiar en un lugar en css
        border: ${setBorder({width: 5, type: 'solid', color: 'green'})}
    }
`


const ComplexTitle = ({title, subtitle}) => {
  return (
  <Wrapper>
      <h1>{title}</h1>
      <div className='example'>{subtitle}</div>
  </Wrapper>);
};

export default ComplexTitle;
