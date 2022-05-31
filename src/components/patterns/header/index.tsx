import {CampusLogo} from "../../../assets/img";

import {Main, Logo, Nav, Divisor} from './styles';

export const Header = () => {
    return (
        <Main>
            <Logo>
                <img src={CampusLogo} alt="" />
            </Logo>
            <Nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <Divisor>|</Divisor>
                    <li>
                        <a href="/access-info">Acesso às Informações</a>
                    </li>
                </ul>
            </Nav>

        </ Main>
    )
}
