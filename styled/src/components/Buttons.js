import styled,{css} from "styled-components"


export const DefaultButton = styled.button`
    background: coral;
    color: lightgray;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    text-transform: capitalize;
    display: block;
    margin: 1rem auto;

    ${({large})=> large ? css`
        padding: 1rem;
        font-size: 1.5rem;
        font-weight: 800;
    ` :css`
        padding: .5rem;
        font-size: 1rem;
        font-weight: 200;
    `}

    
`

// la funcion css se tiene que importar de styled components y no es lo mismo que la propiedad css ya que esta ultima
// hace clases para agregar el estilo 

export const HipsterButton = styled(DefaultButton)`
    width: 400px;
    background: transparent;
    color: #645cff;
    border: 1px solid lightgoldenrodyellow;
    padding: 1rem;
    display: inline-block;
    margin-right: 1rem;
    text-decoration: none;
    text-align: center;
    font-size: 1rem;

`