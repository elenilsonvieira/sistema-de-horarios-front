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

    background-image: url(${Campus});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    @media screen and (max-width: 600px){
        padding: 15px;
    }
`;

export const LoginSpan = styled.span`
    color: green; //cor karol e sair
    margin: 30px;
    font-size: 20px;
    cursor: pointer;

    :hover{
        transition: 0.3s all ease;
        color: #CF3034;
    }

    &.user {
        font-size: 25px;
        color: green;
        cursor: default;
        :hover{
            transition: none;
            color: black; //karol
        }
    }
`;

export const Form = styled.form`
    max-width: 430px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: red;
    
    & > button {
        margin-top: 20px;
    }
`;

export const Container = styled.div`
    background-color: #c8c8c8;
    opacity: 90%;
    border-radius: 70px;
    display: flex;
    flex-direction: column;
    width: 550px;
    justify-content: center;
    align-items: center;
`;