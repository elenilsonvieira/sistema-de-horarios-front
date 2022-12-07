import styled from "styled-components";

export const Main = styled('div')`
    padding: 25px;
    background-color: #d9d9d9;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #131819;
    min-height: calc(100vh - 200px);
    padding: 20px 50px 50px 50px;

    @media screen and (max-width: 600px){
        padding: 20px 5px;
    }
`;

export const Container = styled('div')`
    max-width: 1200px;
    width: 100%;
`;

export const SelectContainer = styled('div')`
    display: flex;

    & > div {
        @media screen and (max-width: 600px){
            padding: 5px;
        }
    }
`;

export const Title = styled.h1`
    text-align: center;
    cursor: default;
    padding: 20px 0;
`;

export const Table = styled('table')`
    background-color: #D0D0D0;
    width: 100%;
`;

export const THead = styled('thead')`
    & > tr {
        & > th {
            text-align: center;
            text-transform: uppercase;
            font-size: 18px;
            padding: 10px;
            :nth-child(even) {background: #5BCD5F}
            :nth-child(odd) {background: #5BCD5F}
        }
    }
`;

export const TBody = styled('tbody')`
    & > tr {
        & > td {
            padding: 5px 10px;
            background-color: #969696;
            text-transform: capitalize;
        }
        & > th {
            font-size: 18px;
            padding: 10px;
        }
        :nth-child(odd) {
            & > th {
                background: #5BCD5F;
            }
        }
        :nth-child(even) {
            & > th {
                background: #5BCD5F;
            }
        }
    }
    
        
`;

export const TitleLesson = styled('label')`
    font-size: 16px;
`;

export const TitleTurma = styled('h2')`
    text-align: center;
    margin: 20px;
`; 

export const TdContent = styled('div')`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    & > img {
        cursor: pointer;
    }
`;