import styled from 'styled-components';

export const Main = styled.button`
    max-width: 550px;
    width: 100%;
    margin: 20px;
    background: #3FA14C;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    border: 0;
    border-radius: 100px;
    font-size: 30px;
    text-transform: uppercase;
    height: 80px;
    cursor: pointer;
    
    & > a {
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        text-decoration: none;
        height: 100%;
        width: 100%;

        :hover{
            transition: 1s all ease;
            color: #3FA14C;
        }
    }

    @media screen and (max-width: 600px){
        font-size: 22px;
    }

    :hover{
        transition: 1s all ease;
        background-color: #fff;
        box-shadow: 0px 4px 20px rgba(255, 255, 255, 0.25);
        color: #3FA14C;
    }
`;