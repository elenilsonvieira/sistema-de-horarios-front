import styled from 'styled-components';

export const Main = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    padding: 10px 45px;
    background-color: #4CA84E;

    @media screen and (max-width: 600px){
        padding: 10px 20px;
    }
`;

export const Divisor = styled.span`
    padding: 0 45px;
`;

export const Nav = styled.nav`
    color: white;
    font-size: 18px;
    > ul {
        list-style: none;
        display: flex;

        > li {
            a {
                color: white;
                text-decoration: none;

                :hover{
                    color: greenyellow;
                }
            }
        }

        @media screen and (max-width: 600px){
            flex-direction: column;
            align-items: start;
            & > span {
                display: none;
            }

            > li {
                a {
                    font-size: 16px;
                }
            }
        }
    }
`;