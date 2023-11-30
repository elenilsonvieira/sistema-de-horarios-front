import styled from 'styled-components';
import Campus from '../../../assets/img/ifpbmonteiro.png';

export const Main = styled('div')`
    width: 100%;
    min-height: calc(150vh - 200px);
    background-color: yellowgreen;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9)), url(${Campus});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    & > .list-items {
        width: 100%;
        max-width: 1200px;
    }
`;

export const SelectContainer = styled('div')`
    display: flex;
    width: 100%;
    color: white;
    max-width: 1200px;
    & > div {
        max-width: 400px;
    }
`;

export const Title = styled.h1`
    padding-top: 20px;
    text-align: center;
    color: white;
    padding-bottom: 20px;
    cursor: default;
`;

export const TabsBar = styled('div')`
    width: 100%;
    height: 47px;
    background-color: rgba(100, 200, 100, 0.5); 
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); 

    display: flex;
    overflow: auto;
    padding-left: 20px;
`;

export const Tab = styled('div')`
    padding: 10px 15px;
    white-space: nowrap;
    & > input {
        display: none;
    }

    /* Adicione uma transição para a fonte e o padding */
input[type="radio"]+label {
    transition: font-size 0.3s ease, padding 0.3s ease;
}

/* Estilo para quando o radio está marcado */
input[type="radio"]:checked+label {
    color: #fff;
    border-bottom: solid 3px #fff;
    font-size: 20px; /* Ajuste o tamanho da fonte desejado */
    padding-bottom: 10px; /* Ajuste o preenchimento desejado */

    & > div {
        border-bottom: solid 1px #CF3034;
    }

    & > span {
        :hover {
            color: #fff;
        }
    }
}

`;

export const TabLabel = styled('label')`
    font-size: 16px;
    color: white;
    padding: 10px 10px;
    :hover {
        color: yellowgreen;
    }
`;