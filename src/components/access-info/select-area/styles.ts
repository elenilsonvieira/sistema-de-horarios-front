import styled from 'styled-components';

export const Main = styled.select`
    background-color: rgba(100, 200, 100, 0.3); 
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); 
    border: none; /* Remove a borda */
    border: 2px solid #797979;
    box-shadow: 5px 5px 10px rgba(1, 1, 1, 0.5);
    border-radius: 15px;
    width:100%;
    min-width: 150px;
    padding: 8px;
    font-size: 16px;
    color: white;

    :focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.3); /* Adiciona um efeito de foco */
    }

    :hover {
        background-color: rgba(100, 200, 100, 0.7); 
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); ; /* Cor de fundo ao passar o mouse */
        color: white; /* Cor do texto ao passar o mouse */
    }

    /* Adiciona um estilo específico para um select com a id 'capacidade' */
    &#capacidade {
        max-width: 180px;
    }
`;
