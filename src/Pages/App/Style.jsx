
import styled from "styled-components";
import { background } from '../../Styles/colors.jsx'

const Page = styled.div`

    height: 100%;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

`;

const Container = styled.div`

    height: 100%;
    width: 25%;

    display: flex;
    flex-direction: column;
    justify-content: flex-top;
    align-items: center;
    
    /*border-radius: 3rem;*/

    box-shadow: 3px 9px 18px -4px rgba(0,0,0,0.85);

    background: ${ background };
`;

export { Container, Page }