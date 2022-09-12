
import styled from "styled-components";
import { secundary, dark } from "../../Styles/colors";

const Header = styled.header`

    border-radius: 2rem;

    background: ${ secundary };

    box-shadow: 3px 5px 5px 1px rgba(0,0,0,0.69);

    padding: 2rem;
`;

const Titulo = styled.h1`

    font-size: 1.5rem;

`;

const CampoTexto = styled.input`

    width: 70%;

    padding: 2rem;

    border: none;
    border-radius: 1rem;

    ::placeholder{
        color: ${dark};
    }
`;

const Botao = styled.button`


`;

export { Header, Titulo, CampoTexto }