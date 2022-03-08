import styled,{keyframes} from "styled-components";
import { setBorder } from "./utilis";

const spinner = keyframes`
    to{transform: rotate(360deg)}
`


const Loading = styled.div`
    width: 6rem;
    height: 6rem;
    border: ${setBorder({width: 5, type: "solid", color:"rebeccapurple"})};
    border-radius: 50%;
    border-top-color:var(--white);
    animation: ${spinner} 0.6s linear infinite;

`

export default Loading;