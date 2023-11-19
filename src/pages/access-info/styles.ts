import styled from 'styled-components';
import Campus from '../../assets/img/ifpbmonteiro.png';

export const Main = styled.div`
    display: flex;
    min-height: calc(100vh - 200px);
    width: 100vw;
    background-image: url(${Campus});

    @media screen and (max-width: 600px){
        flex-direction: column-reverse;
        justify-content: space-between;
    }
`;

export const SuperDiv = styled.div`
    display: flex;
`;

export const Container = styled.div`
    width: 150%;
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
    width: 1000%;
    justify-content: right;
    display: flex;
    height: 100%;
`;