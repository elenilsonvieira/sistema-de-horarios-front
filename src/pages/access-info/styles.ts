import styled from 'styled-components';

export const Main = styled.div`
    background-color: #3FA14C;
    display: flex;
    justify-content: center;
    min-height: calc(100vh - 200px);
    width: 100vw;

    @media screen and (max-width: 600px){
        flex-direction: column-reverse;
        justify-content: space-between;
    }
`;

export const SuperDiv = styled.div`
    display: flex;
`;

export const Container = styled.div`
    width: 100%;
    max-width: 920px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Col = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
`;

export const Menu = styled.div`
    width: 100%;
    justify-content: center;
    display: flex;
    height: 100%;
`;