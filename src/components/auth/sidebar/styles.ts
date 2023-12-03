import styled from 'styled-components';

export const Main = styled.div`
    width: 60px;
    height: 60px;
    padding:150px;
    background-color: rgba(200, 200, 200, 0.8);
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
  font-size: 28px;
  border-radius: 50%;
  padding-bottom: 20px;
  color: #4ca84e;
  font-weight: bold;

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

    :hover {
        color: greenyellow;
        transition: 1s all ease;
        background: linear-gradient(to right, #299920, #1E6F1E); /* Gradiente de verde para um tom mais escuro no hover */
        box-shadow: 0px 4px 20px rgba(255, 255, 255, 0.25), inset 0px 0px 10px rgba(0, 0, 0, 0.1); /* Sombra sutil no hover */
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