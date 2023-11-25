import styled from 'styled-components';
import Campus from '../../assets/img/ifpbmonteiro.png';

export const Main = styled.div`
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    min-height: calc(100vh - 200px);

    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.9)), url(${Campus});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    @media screen and (max-width: 600px) {
        padding: 15px;
    }
`;

export const LoginSpan = styled.span`
    color: white; /* cor verde */
    margin: 10px;
    font-size: 17px;
    cursor: pointer;

    :hover {
        transition: 0.3s all ease;
        color: #CF3034; /* cor vermelha */
    }

    &.user {
        font-size: 25px;
        color: white; /* cor verde */
        cursor: default;
        :hover {
            transition: none;
        }
    }
`;

export const Form = styled.form`
    max-width: 430px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    & > button {
        margin-top: 30px;
        background-color: #4CAF50; /* cor verde */
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 20px;
        cursor: pointer;

        :hover {
            transition: 1s all ease;
            background: linear-gradient(to right, #299920, #1E6F1E); /* Gradiente de verde para um tom mais escuro no hover */
            box-shadow: 0px 4px 20px rgba(255, 255, 255, 0.25), inset 0px 0px 10px rgba(255, 255, 255, 0.1); /* Sombra sutil no hover */
            color: greenyellow;
        }
    }
`;

export const Container = styled.div`
    background-color: rgba(100, 200, 100, 0.2); /* Cor com 90% de opacidade */
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 1); /* Adiciona uma leve sombra */

    border-radius: 80px; /* Reduz o raio do border-radius para uma aparência mais moderna */
    display: flex;
    flex-direction: column;
    width: 550px;
    height: 350px;
    justify-content: center;
    align-items: center;
`;
