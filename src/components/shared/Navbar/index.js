import React from 'react';
import {
    Nav, 
    NavContainer, 
    LogoWrapper, 
    Logo,
    WrapperContent,
    IconsWrapper,
    Icon,
    Menu,
    MenuItem,
    MenuLinks,
    NavBtnsWrap,
    NavBtnDown,
    NavBtnSign,
    BurgerWrap,
    BurgerIcon,
} from './NavbarElements';

const Navbar = ({toggleBurger, toggleModal}) => {
    return (
        <>
            <Nav>
                <NavContainer>
                    <LogoWrapper to="#">
                        <Logo src={require('../../../images/logo.svg').default}/>
                    </LogoWrapper>
                    
                    <BurgerWrap onClick={toggleBurger} >
                            <BurgerIcon src={require('../../../images/burger.svg').default} />
                    </BurgerWrap>

                    <WrapperContent>

                        <IconsWrapper>
                            <Icon src={require('../../../images/search.svg').default} />
                            <Icon onClick={toggleModal} src={require('../../../images/phone-number.svg').default} />
                        </IconsWrapper>

                        

                        <Menu>
                            <MenuItem><MenuLinks to="#">About</MenuLinks></MenuItem>
                            <MenuItem><MenuLinks to="#">Product</MenuLinks></MenuItem>
                            <MenuItem><MenuLinks to="#">FAQ</MenuLinks></MenuItem>
                            <MenuItem><MenuLinks to="#">Contact</MenuLinks></MenuItem>
                        </Menu>

                        <NavBtnsWrap>
                            <NavBtnDown>Download</NavBtnDown>
                            <NavBtnSign>Sign up</NavBtnSign>
                        </NavBtnsWrap>

                    </WrapperContent>
                </NavContainer>
            </Nav>
        </>
    )
}

export default Navbar;
