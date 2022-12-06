import styled from 'styled-components';

export const Main = styled('div')`
    width: 100%;
    min-height: calc(100vh - 200px);
    background-color: #d9d9d9;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > .list-items {
        width: 100%;
        max-width: 1200px;
    }
`;
