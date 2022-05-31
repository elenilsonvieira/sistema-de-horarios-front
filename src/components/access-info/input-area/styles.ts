import styled from 'styled-components';

export const Main = styled.input`
    background: #FFF;
    border: 2px solid #797979;
    box-shadow: 5px 5px 10px rgba(1, 1, 1, 0.22);
    border-radius: 5px;
    width:100%;
    min-width: 150px;
    padding: 8px;
    font-size: 16px;
    color: #797979;

    :focus {
        outline: 0;
    }

    &#capacidade {
        max-width: 180px;
    }
`;