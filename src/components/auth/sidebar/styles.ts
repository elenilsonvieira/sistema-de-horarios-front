import styled from 'styled-components';

export const Main = styled.div`
    width: 280px;
    padding: 15px;
    background-color: #979797;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;

    @media screen and (max-width: 600px){
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        padding: 5px 15px;
    }
`;

export const UserData = styled.div`
    display: flex;
    flex-direction: column;
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
    font-size: 24px;
    padding-bottom: 10px;

    @media screen and (max-width: 600px){
        font-size: 18px;
    }
`;

export const Button = styled.button`
    width: 200px;
    padding: 10px 0;
    color: white;
    font-size: 16px;
    background: #C4C4C4;
    cursor: pointer;
    border: 0;
    border-radius: 5px;
    margin-top: 10px;

    :hover {
        color: #CF3034;
    }

    @media screen and (max-width: 600px){
        width: 130px;
        padding: 5px 0;
        margin-top: 0;
        margin-left: 10px;

        &:last-child {
            margin-top: 5px;
        }
    }
`;