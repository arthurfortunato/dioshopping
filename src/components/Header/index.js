import { Link } from 'react-router-dom';
import Cart from '../Cart';

import {
    ContainerStyled,
    ContatoButtonStyled,
    HomeButtonStyled,
    LogoStyled,
    WrapperStyled
} from './styles';

const Header = () => {
    return (

        <ContainerStyled>
            <WrapperStyled>
                <LogoStyled>Dio Shopping</LogoStyled>
                <HomeButtonStyled><Link style={{ textDecoration: 'inherit', color: 'inherit' }} to="/">Home</Link></HomeButtonStyled>
                <ContatoButtonStyled><Link style={{ textDecoration: 'inherit', color: 'inherit' }} to="/contato">Contato</Link></ContatoButtonStyled>
                <Cart />
            </WrapperStyled>
        </ContainerStyled>

    )
}

export default Header;
