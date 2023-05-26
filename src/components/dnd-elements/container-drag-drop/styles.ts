import styled from 'styled-components';

export const Main = styled.div`
    padding: 2px;
    margin: 1px;
    width: 190px;
    height: 88px;
    border-radius: 5px;
    background: #A9A9A9;

    & + div {
        border-left: 1px solid rgba(0, 0, 0, 0.05);
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 42px;

        h2 {
            font-weight: 500;
            font-size: 16px;
            padding: 0 10px;
        }
    }

    ul {
        margin-top: 30px;
    }
`;

export const BusyCard = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: 0.5em;
    color: #FFF;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    background-color: #cc3535;
`;