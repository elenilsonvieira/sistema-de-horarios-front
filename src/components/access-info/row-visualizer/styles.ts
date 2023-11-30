import styled from "styled-components";

export const RowVisualizer = styled('div')`
    width: 100%;
    padding: 10px 20px;
    background-color: rgba(100, 200, 100, 0.5); 
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6); 
    border: none; /* Remove a borda */
    color: white;
    border-radius: 20px;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;

    margin-bottom: 25px;
    transition: background-color 0.3s ease-out; /* Adiciona uma transição na mudança de cor de fundo */

    &:hover {
        background-color: rgba(100, 200, 100, 0.8);  /* Altera a cor de fundo quando o mouse passa por cima */
        box-shadow: 0px 0px 10px rgba(200,200, 200, 0.2); 

    }   

    & > .expand {
        height: 0;
        transform:scaleY(0);
    }

    & > div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        img {
            width: 30px;
            cursor: pointer; 
            background-color: rgba(100, 200, 100, 0.4);
        }

        & > .active{
            transform: rotate(180deg);
        }

        /* &:last-child {
            @media screen and (max-width: 600px){
                align-items: flex-start;
            }
        } */
    }

    & > .expand{
        transition:transform 0.3s ease-out;
        height: auto;
        background-color: rgba(100, 200, 100, 0.0); 
        color: white;
        transform:scaleY(1); // implicit, but good to specify explicitly
        transform-origin:top;
    }
`;