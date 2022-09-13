
import styled from "styled-components";
import { secundary, dark } from "../../Styles/colors";

const Header = styled.header`

    display: flex;
    align-items: center;
    
    justify-content: space-between;

    margin-top: 5rem;

    width: 100%;

    border-radius: 2rem;

    background: ${ secundary };

    box-shadow: 3px 5px 5px 1px rgba(0,0,0,0.69);

    padding: 2rem;
`;

const Titulo = styled.h1`

    font-size: 2.5rem;
    color: white;

`;

const Divisinha = styled.div`

    display: flex;
    align-items: center;
    justify-content: end;

`;

const CampoTexto = styled.input`

    width: 50%;

    margin-right: 5%;

    padding: 2rem;

    border: none;
    border-radius: 1rem;

    ::placeholder{
        color: ${dark};
    }
`;

const Botao = styled.button`
    
    display: flex;
    align-items: center;
    border: none;
    border-radius: 50%;

`;

export { Header, Titulo, CampoTexto, Botao, Divisinha}