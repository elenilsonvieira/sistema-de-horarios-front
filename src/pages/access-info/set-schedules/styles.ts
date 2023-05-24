import styled from 'styled-components';

export const Main = styled('div')`
    min-height: calc(100vh - 200px);
    background-color: #d9d9d9;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    & > .list-items {
        width: 100%;
        max-width: 1200px;
    }

    .p{
        text-align: center;
    }
`;

export const Filters = styled('div')`
background-color: #d9d9d9;
display: flex;
flex-direction: row;
justify-content: center;
flex-direction: row;
padding: 1em;

div {
    margin: 1em;
}

select {
    padding: 0.5em;
    justify-self: center;
}

p{
    font-weight: bold;
    margin-bottom: 0.2em;
}

div {
    padding: 1em;
    background-color: #4ca84e;
    border-radius: 0.5em;
    color: #FFF;
}
`;
