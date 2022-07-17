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

export const EditButtons = styled('div')`
    display: flex;
    &> :first-child {
        margin-right: 10px;
    }
`;