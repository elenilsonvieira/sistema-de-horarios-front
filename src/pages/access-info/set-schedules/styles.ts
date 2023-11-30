import styled from 'styled-components';
import Campus from '../../../assets/img/ifpbmonteiro.png';

export const Main = styled.div`
    min-height: calc(100vh - 20px);

    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9)), url(${Campus}); //problema = parece que a tela nao é inteira
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    display: group;
    flex-direction: column;
    justify-content: overflow;
    width: 100%;
    overflow: styled;

    & > .list-items {
        width: 100%;
        max-width: 1200px;
    }

    .p {
        text-align: center;
    }
`;

export const Filters = styled.div`
    background-color: #4ca84e;
    position: absolute;
    top: 5px;
    left: 600px;
    display: flex;
    flex-direction: direction;
    justify-content: center;
    align-items: center;
    padding: 0em;

    div {
        
        display: flex-start;
        justify-content: center;
        margin: 0em;
        width: 10em;
        padding: 1em;
        color: red;
        background-color: #4ca84e;

    }

    select {
        display: flex;
        padding: 0.5em;
        justify-self: center;
        width: 9em;
        border-radius: 30px; /* Adiciona bordas arredondadas */
        outline: none; /* Remove a borda padrão do select */
        transition: background-color 0.3s ease; /* Adiciona animação de cor */

        &:hover {
            background-color: #98FB98; /* Cor de fundo ao passar o mouse */
        }

        &:focus {
            background-color: #98FB98; /* Cor de fundo ao focar no select */
        }
    }
}

    p {
        font-weight: Arial, Helvetica, sans-serif;
        text-align: center;
        margin-bottom: 0.2em;
        color: white;
    }

    .filters-group {
        display: flex;
        width: fit-content;
        margin: 0;
        padding: 0;
        background-color: white;
    }

    img {
        position: absolute;
        top: 30px;
        left: -40px;
        padding: 0.5em;
        border-radius: 0.5em 0.5em 0 0;
        width: 50px;
        height: 50px;
    }
    
    h2 {
        font-size: 0;
        padding: 0.5em;
        border-radius: 0.5em 0.5em 0 0;
        background-color: #4ca84e;
        color: #4ca84e;
    }

    
`;

