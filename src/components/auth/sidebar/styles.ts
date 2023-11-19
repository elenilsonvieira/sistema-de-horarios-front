import styled from 'styled-components';

export const Main = styled.div`
    width: 60px;
    height: 60px;
    padding:150px;
    background-color: #E0E0E0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    border-radius: 80px;
    position: fixed; /* Mantém o elemento fixo na tela */
    bottom: 240px; /* Ajusta a distância do elemento em relação à parte inferior da tela */
    left: 100px; /* Ajusta a distância do elemento em relação à esquerda da tela */
    @media screen and (max-width: 600px){
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        padding: 5px 15px;
    }
`;

export const UserData = styled.div`
    display: flex;
    flex-direction: flex-start;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 600px){
        align-items: start;
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;


export const Username = styled.span`
    text-align: center;
    font-size: 24px;
    padding-bottom: 20px;
    color: #4ca84e;

    @media screen and (max-width: 600px){
        font-size: 18px;
    }
`;

export const Button = styled.button`
    width: 120px;
    padding: 10px 0;
    
    color: white;
    font-size: 15px;
    background: #4ca84e;
    cursor: pointer;
    border: 0;
    border-radius:150px;
    margin-top: 10px;
    transition: background-color 0.3s, color 0.3s; /* Adiciona uma transição suave de 0.3 segundos */

    :hover {
        color: #006600;
        background-color: #66FF66; /* Altera a cor de fundo no hover */
    }

    @media screen and (max-width: 600px) {
        width: 130px;
        padding: 5px 0;
        margin-top: 0;
        margin-left: 10px;

        &:last-child {
            margin-top: 5px;
        }
    }
`;