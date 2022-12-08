import styled from 'styled-components';

export const Main = styled.div`
    padding: 0 15px;
    height: 100px;
    flex: 0 0 192px;
    opacity: ${props => props.done ? 0.6 : 1};
    
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