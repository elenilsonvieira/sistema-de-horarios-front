import styled from 'styled-components';

export const Main = styled('div')`
    width: 100%;
    min-height: calc(100vh - 200px);
    background-color: #3FA14C;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > .list-items {
        width: 100%;
        max-width: 1200px;
    }
`;

export const SelectContainer = styled('div')`
    display: flex;
    width: 100%;
    color: white;
    max-width: 1200px;
    & > div {
        max-width: 400px;
    }
`;

export const Title = styled.h1`
    padding-top: 20px;
    text-align: center;
    color: white;
    padding-bottom: 20px;
    cursor: default;
`;

export const TabsBar = styled('div')`
    width: 100%;
    background-color: #656565;
    display: flex;
    overflow: auto;
    padding-left: 20px;
`;

export const Tab = styled('div')`
    padding: 10px 15px;
    white-space: nowrap;
    & > input {
        display: none;
    }

    input[type="radio"]:checked+label{
        color: #fff;
        border-bottom: solid 3px #fff;

        & > div {
            border-bottom: solid 1px #CF3034;
        }
        
        & > span {
            :hover {
                color: #fff;
            }
        }
    }
`;

export const TabLabel = styled('label')`
    font-size: 20px;
    color: #C4C4C4;
    padding: 7px 10px;
    :hover {
        color: #fff;
    }
`;