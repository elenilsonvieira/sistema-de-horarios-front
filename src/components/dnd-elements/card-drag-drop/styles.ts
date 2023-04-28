import styled, { css } from 'styled-components';

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    background: #FFF;
    border-radius: 5px;
    margin-bottom: 2px;
    box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
    cursor: grab;
    place-itens: center;
    padding: 0.5em;
    margin-bottom: 1em;
    span {
        display: flex;
        justify-content: space-between;
    }

    header h2 {
        display: flex;
        width: 100%;
        padding: 0;
        font-size: larger;
    }

    header {
        display: flex;
        width: fit-content;
        heigth: 100%;
        margin-bottom: 0;
    }

    p {
        display: flex;
        font-weight: bold;
        justify-content: center;
        align-items:center;
    }

    button {
        display: flex;
        width: 30%;
        justify-content: center;
        align-items: center;
        border: none;
        border-radius: 3px;
        background-color: #4ca84e;
        color: #FFF;
        font-weight: bold;
        margin: 0.5em;
        padding: 0.5em;
        cursor: pointer;
        transition: 0.2s;
    }

    button:hover{
        background-color: #3E7F3F;
        transition: 0.2s;
    }

    ${props => props.isDragging && css`
    border: 2px dashed rgba(0, 0, 0, 0.2);
    padding-top: 31px;
    border-radius: 0;
    background: transparent;
    box-shadow: none;
    cursor: grabbing;
    
    p, header {
        opacity: 0;
    }

    
    `}
`;
