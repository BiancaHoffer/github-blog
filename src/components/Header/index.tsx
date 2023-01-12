import { ContainerHeader, Logo } from "./styles";

import logo from '../../assets/iconLogo.svg'

export function Header() {
    return (
        <ContainerHeader>
            <Logo>
                <img src={logo} alt=">_" />
                Github Blog
            </Logo>
        </ContainerHeader>
    )
}