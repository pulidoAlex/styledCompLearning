import React from 'react';
import styled from 'styled-components';

const CardStyle = styled.article`
    width:90vw;
    max-width:300px;
    background: var(--white);
    border-radius:.25rem;
    img{
        width: 100%;
        border-radius: .25rem;

    }

    footer{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 2rem;

        h4{
            text-transform: capitalize;
            &::before{
                content: "Name : ";
                color: red;
            }
        }
        h4:hover{
            color: thistle;
        }
        p{
            color: lightslategrey;
            font-weight: 700;
        }

        &:hover{
            background: lightsteelblue;
        }
    }

    transition: all 0.5 ease-in-out;
    &:hover{
        box-shadow: 0 3px 3px #222;
        cursor: pointer;
    }


    @media (min-width:700px) {
        max-width: 600px;
    }


`

const Card = () => {
  return (
  <CardStyle>
      <img src='https://www.ikea.com/mx/en/images/products/malm-bed-frame-high-black-brown-luroey__0638608_pe699032_s5.jpg?f=s'/>
      <footer>
          <h4>product name</h4>
          <p>$15</p>
      </footer>

  </CardStyle>
  );
};

export default Card;
