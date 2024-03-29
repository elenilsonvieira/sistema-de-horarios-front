import styled from 'styled-components';

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2px;
    margin: 1px;
    width: 100%;
    heigth: 100%;
    border-radius: 5px;
    background-color: #A9A9A9;
    justify-content: center;
    align-items: center;
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