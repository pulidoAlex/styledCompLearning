import React from 'react';
import styled,{css} from 'styled-components';

const fruits = ["platano", "cereza", "mandarina", "pera"]
const ItemsList = styled.li`
    list-style-type: none;
    ${({odd}) => {
        return odd?css`
            color: white;
            background: red;
            font-size: 1.5rem;
            padding: 1.5rem;
        `:css`
            color: #222;
            padding: 1rem;
        `
    }}
`


const List = () => {

  return (
  <ul>
      {fruits.map((item, index) => {
          return (
            <ItemsList key={index} odd={(index + 1) % 2 !== 0}>{item}</ItemsList>
          )
      })}
  </ul>
  );
};

export default List;
