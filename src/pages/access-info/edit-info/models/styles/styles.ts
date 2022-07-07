import styled from 'styled-components';

export const Main = styled('div')`
    padding: 20px;
    width: 100%;
    color: #797979;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
`;

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
    & >.expand {
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

        &:last-child {
            @media screen and (max-width: 600px){
                align-items: flex-start;
            }
        }
    }
    input[type="radio"]{
        display: none;
    }

    input[type="radio"]:checked~.expand{
        transition:transform 0.3s ease-out;
        height: auto;
        transform:scaleY(1); // implicit, but good to specify explicitly
        transform-origin:top;
    }

    input[type="radio"]:checked+div{
        color: #CF3034;
        img {
            display: none;
        }
    }
`;

export const ExpandDetails = styled('div')`
    width: 100%;
    background-color: #D9D9D9;
    border-radius: 5px;
    font-size: 18px;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 600px){
        padding-top: 10px;
    }

    & > div {
        display: flex;
        align-items: center;
        padding-bottom: 7px;
        .title {
            font-weight: 600;
            margin-right: 10px;
        }

        &.edit-mode {
            width: 315px;
            justify-content: flex-end;
        }
    }
    
    input, select {
        width: 250px;
    }

`;

export const ActionContainer = styled('div')`
    padding-top: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 600px){
        justify-content: end;
    }
`;