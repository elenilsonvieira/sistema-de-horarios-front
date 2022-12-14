import styled from 'styled-components';

export const Main = styled.div`
    padding: 25px;
    background-color: #d9d9d9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    min-height: calc(100vh - 200px);
    padding: 95px 50px 50px 50px;

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
    background-color: #656565;
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
        color: #FF5559;

        & > div {
            border-bottom: solid 1px #FF5559;
        }

        & > span {
            :hover {
                color: #FF5559;
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
            color: #3FA14C;
        }
    }

`;

export const FormContainer = styled('div')`
    background-color: #D9D9D9;
    width: 100%;
    height: 100%;
    max-width: 400px;
`;

export const Tab = styled('div')`
    height: 45px;
    width: 100%;
    background-color: #C4C4C4;
    margin-top: -45px;
    padding-left: 20px;
    display: flex;
    align-items: center;
    color: #797979;
    border-radius: 5px 5px 0 0;
`;

