import styled from 'styled-components';

export const Main = styled.button`
    width: 100px;
    background-color: #656565;
    color: #fff;
    padding:  10px;
    border: 0;
    border-radius: 5px;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 5px 5px 10px rgba(1, 1, 1, 0.22);
    text-transform: uppercase;
    margin-right: 5px;

    :hover{
        transition: 0.3s all ease;
        background-color: #fff;
        color: #656565;
    }
`;