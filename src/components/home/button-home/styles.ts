import styled from 'styled-components';

export const Main = styled.button`
    max-width: 550px;
    opacity: 100%;
    width: 70%;
    margin: 0px;
    background: linear-gradient(to right, #3FA14C, #2B7B2A); /* Gradiente de verde para um tom mais escuro */
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25), inset 0px 0px 10px rgba(255, 255, 255, 0.1); /* Sombra sutil */
    border: 0;
    border-radius: 20px;
    font-size: 30px;
    text-transform: uppercase;
    height: 80px;
    cursor: pointer;
    
    & > a {
        color: white;
        font-size: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        text-decoration: none;
        height: 100%;
        width: 100%;

        :hover {
            transition: 1s all ease;
            color: greenyellow;
        }
    }

    @media screen and (max-width: 600px){
        font-size: 22px;
    }

    :hover {
        transition: 1s all ease;
        background: linear-gradient(to right, #299920, #1E6F1E); /* Gradiente de verde para um tom mais escuro no hover */
        box-shadow: 0px 4px 20px rgba(255, 255, 255, 0.25), inset 0px 0px 10px rgba(255, 255, 255, 0.1); /* Sombra sutil no hover */
    }
`;
