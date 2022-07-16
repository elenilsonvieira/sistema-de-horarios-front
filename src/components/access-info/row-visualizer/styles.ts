import styled from "styled-components";

export const RowVisualizer = styled('div')`
    width: 100%;
    padding: 10px 20px;
    background-color: #D9D9D9;
    border-radius: 5px;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;
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
            cursor: pointer; 
            
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
        transform:scaleY(1); // implicit, but good to specify explicitly
        transform-origin:top;
    }
`;