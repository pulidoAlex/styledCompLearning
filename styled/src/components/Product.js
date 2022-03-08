import React from 'react';
import styled,{css} from 'styled-components';

const Wrapper = styled.article`
    width: 300px;
    background: #fff;
    padding: 1rem;
    border-radius: .25rem;
    margin: 1rem;
    display:flex;
    justify-content: space-between;
    align-items: center;
    h4{
        text-transform: capitalize;
    }

    p{
        color:${({precio}) => {
            if(precio < 2 ) return "green" 
            if(precio > 9 ) return "orange" 
            return '#222'
        }};
    }
`

const Product = ({nombre, precio}) => {
  return (
  <Wrapper precio={precio}>
    <h4> {nombre}</h4>
    <p>$ {precio} </p>
  </Wrapper>);
};

export default Product;
