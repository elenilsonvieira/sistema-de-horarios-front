import styled from "styled-components";

export const Main = styled.button`
    max-width: 550px;
    width: 100%;
    margin: 20px;
    background: #3FA14C;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    border: 0;
    border-radius: 20px;
    font-size: 30px;
    text-transform: uppercase;
    color: white;
    padding: 30px 10px;
    cursor: pointer;

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