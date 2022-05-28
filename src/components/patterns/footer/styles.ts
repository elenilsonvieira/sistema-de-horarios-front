import styled from 'styled-components';

export const Main = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 150px;
    padding: 20px 90px;
    background-color: #D0D0D0;
`;

export const Divisor = styled.span`
    padding: 0 45px;
`;

export const Nav = styled.nav`
    color: white;
    font-size: 22px;
    > ul {
        list-style: none;
        display: flex;

        > li {
            a {
                color: white;
                text-decoration: none;

                :hover{
                    color: #CF3034;
                }
            }
        }
    }
`;