import styled from 'styled-components';

export const Main = styled.button`
    width: 100%;
    max-width: 200px;
    background-color: #277e1c;
    color: white;
    padding: 14px;
    border: 0;
    border-radius: 25px;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 5px 5px 10px rgba(1, 1, 1, 0.22);
    text-transform: uppercase;
    margin-bottom: 10px;

    &:hover {
        background-color: rgba(112, 194, 41, 0.9); /* Verde mais opaco com opacidade ao passar o mouse */
        box-shadow: 5px 5px 15px rgba(255, 255, 255, 0.2); /* Adiciona uma box-shadow branca durante a transição */
    }
`;