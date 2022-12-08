import styled, {css} from 'styled-components';

export const Main = styled.div`
    position: relative;
    background: #FFF;
    border-radius: 5px;
    padding: 5px;
    box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
    border-top: 24px solid rgba(230, 236, 245, 0.4);
    cursor: grab;
    header {
        position: absolute;
        top: -30px;
        left: -5px;
    }

    p {
        font-weight: 500;
        line-height: 20px;
    }

    button {
        text-align: right;
        margin-left: 100%;
    }

    ${props => props.isDragging && css`
    border: 2px dashed rgba(0, 0, 0, 0.2);
    padding-top: 31px;
    border-radius: 0;
    background: transparent;
    box-shadow: none;
    cursor: grabbing;
    
    p, header {
        opacity: 0;
    }
    `}
`;
