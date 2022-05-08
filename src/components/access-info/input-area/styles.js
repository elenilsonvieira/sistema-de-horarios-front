import styled from 'styled-components';

export const Main = styled.input`
    background: #DEDEDE;
    border: 2px solid #FFFFFF;
    box-shadow: 5px 5px 10px rgba(1, 1, 1, 0.22);
    border-radius: 5px;
    width: 250px;
    padding: 8px;
    font-size: 16px;
    color: #CF3034;

    :focus {
        outline: 0;
    }

    &#capacidade {
        width: 180px;
    }
`;