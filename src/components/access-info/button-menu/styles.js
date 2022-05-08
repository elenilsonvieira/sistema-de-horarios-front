import styled from 'styled-components';

export const Main = styled.div`
    padding: 50px;
`;

export const StyledButton = styled.button`
    border: none;
    display: flex;
    background-color: #C4C4C4;
    box-shadow: 5px 5px 10px rgba(1, 1, 1, 0.22);
    border-radius: 10px;
    padding: 8px;
    width: 350px;
    cursor: pointer;

    > a {
        display: flex;
        text-decoration: none;
    }

`;

export const TextButton= styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    color: white;
    padding-left: 5px;

    > b {
        font-size: 14px;
    }

    > span {
        text-align: start;
    }

    :hover {
        color: #CF3034;
    }

`;