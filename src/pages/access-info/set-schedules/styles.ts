import styled from "styled-components";

export const Main = styled.div`
    width: 100%;
    min-height: calc(100vh - 200px);
    background-color: #d9d9d9;
    color: white;
    padding: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ContainerFilters = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    width: 100%;
    justify-content: center;
`;

export const ContainerLessons = styled.div`
    padding-top: 15px;
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    width: 100%;
    color: #797979;
    justify-content: center;
`;

export const SelectContainer = styled.div`
    display: flex;
    & > div {
        padding-left: 0;
        max-width: 400px;
    }
`;

export const Title = styled.h1`
    text-align: center;
    cursor: default;
    padding-bottom: 20px;
`;

export const Info = styled.div`
    display: flex;
    //max-width: 775px;
    border-radius: 5px;
    padding: 10px 15px;
    align-items: center;
    background-color: #3FA14C;

    & > span {
        font-size: 18px;
        padding-left: 5px;
    }
`;

export const IntervalContainer = styled.div`
    display: flex;
    flex-direction: column;

    & > div {
        display: flex;
        justify-content: space-between;
        margin-top: 5px;
        & > select {
            width: 150px !important;
        }
    }
`;