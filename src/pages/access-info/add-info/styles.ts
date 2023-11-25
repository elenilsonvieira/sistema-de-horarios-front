import styled from 'styled-components';
import Campus from '../../../assets/img/ifpbmonteiro.png';


export const Main = styled.div`
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    min-height: calc(100vh - 200px);
    padding: 95px 50px 50px 50px;

    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9)), url(${Campus});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    & > .select-label {
        display: none;
        width: 100%;
        max-width: 450px;
        margin-bottom: 50px;

        & > select {
            margin-top: 5px;
        }
    }

    @media screen and (max-width: 600px){
        padding: 15px;
        flex-direction: column-reverse;

        & > .select-label {
            display: block;
        }
    }

`;

export const WrapperContainer = styled('div')`
    background-color: rgba(13, 56, 28, 0.5); /* Verde mais escuro com 5% de opacidade */
    box-shadow: 5px 5px 10px rgba(1, 1, 1, 0.5);
    padding: 0 50px;
    max-width: 940px;
    width: 100%;
    height: 420px;
    border-radius: 5px;
    display: flex;

    @media screen and (max-width: 600px){
        justify-content: center;
        padding: 0 5px;
    }
`;

export const TypesContainer = styled('div')`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    & > div {
        text-align: center;
        width: 100%;
        margin-left: 45px;
        display: flex;
        flex-direction: column;
        max-width: 500px;

        & > div {
            margin: 10px 0;
        }
    }
    input {
        display: none;
    }

    input[type="radio"]:checked+label{
        transition: 0.5s all ease-out;
        font-size: 25px;
        color: white ;

        & > div {
            border-bottom: solid 1px greenyellow ;
        }

        & > span {
            :hover {
                color: greenyellow;
            }
        }
    }

    @media screen and (max-width: 600px){
        display: none;
    }

`;

// {export const Type = styled('div')`
//     width: 100%;
//     text-align: center;
//     padding: 10px;
//     border-bottom: solid 1px white;
// `;}

export const TypeLabel = styled('label')`
    font-size: 16px;
    text-align: center;

    & > div {
        margin-top: 5px;
        border-bottom: solid 1px white;
    } 

    & > span {
        cursor: pointer;

        :hover{
            color:greenyellow;
        }
    }

`;

export const FormContainer = styled('div')`
    background-color: #3FA14C;
    width: 100%;
    height: 100%;
    max-width: 400px;
`;

export const Tab = styled('div')`
    height: 45px;
    width: 100%;
    background-color: #3FA14C;
    margin-top: -45px;
    padding-left: 20px;
    display: flex;
    align-items: center;
    color: white;
    border-radius: 50px 50px 0 0;
`;

