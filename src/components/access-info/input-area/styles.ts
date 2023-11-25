import styled from 'styled-components';

export const Main = styled.input`
    border: none;
    background-color: transparent; /* Torna o fundo totalmente transparente */
    border-bottom: 2px solid #ddd; /* Cor da borda inferior */
    width: auto;
    padding: 10px;
    font-size: 16px;
    color: #ddd;
    display: inline-block;
    transition: border-color 0.3s ease-in-out, padding 0.3s ease-in-out;

    :focus {
        outline: 0;
        border-bottom: 2px solid greenyellow; /* Cor da borda inferior ao focar */
        padding: 20px; /* Ajuste o valor conforme necessário */
    }

    ::placeholder {
        color: #ddd;
    }

    :hover {
        border-bottom: 2px solid greenyellow; /* Cor da borda inferior ao passar o mouse */
    }

    :disabled {
        border-bottom: 2px solid greenyellow; /* Cor da borda inferior quando desativado */
        cursor: not-allowed;
    }
`;
