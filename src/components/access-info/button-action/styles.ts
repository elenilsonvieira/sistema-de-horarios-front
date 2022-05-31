import styled from 'styled-components';

export const Main = styled.button`
    width: 100%;
    max-width: 200px;
    background-color: #3FA14C;
    color: white;
    padding: 14px;
    border: 0;
    border-radius: 25px;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 5px 5px 10px rgba(1, 1, 1, 0.22);
    text-transform: uppercase;
    margin-bottom: 10px;

    :hover{
        transition: 0.5s all ease;
        background-color: #656565;
    }
`;