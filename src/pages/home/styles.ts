import styled from 'styled-components';
import Campus from '../../assets/img/ifpb-monteiro.png';

export const Main = styled.div`
    padding: 25px;
    //background-color: #d9d9d9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    min-height: calc(100vh - 200px);
    padding: 50px;

    background-image: url(${Campus});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    @media screen and (max-width: 600px){
        padding: 15px;
    }
`;

export const LoginSpan = styled.span`
    text-decoration: none;
    color: white;
    cursor: pointer;

    :hover{
        transition: 0.3s all ease;
        color: #CF3034;
    }

    &.user {
        cursor: default;
        :hover{
            transition: none;
            color: white; 
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
        margin-top: 20px;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
`;