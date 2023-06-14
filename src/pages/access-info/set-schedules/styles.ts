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
flex-direction: column;
justify-content: center;
align-items:center;
padding: 1em;


div {
    display: flex;
    justify-content: center;
    margin: 1em;
    width: 10em;
    padding: 1em;
    border-radius: 0.5em;
    color: #FFF;
}

select {
    display:flex;
    padding: 0.5em;
    justify-self: center;
    width: 9em;
}

p{
    font-weight: bold;
    text-align: center;
    margin-bottom: 0.2em;
}

.filters-group{
    display:flex;
    width: fit-content;
    margin:0;
    padding: 0;
    background-color: #4ca84e;
}

h2 {
    padding: 0.5em;
    border-radius: 0.5em 0.5em 0 0;
    background-color: #4ca84e;
    color: #FFF;
}
`;
