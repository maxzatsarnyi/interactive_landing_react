import React from 'react';
import { 
    SidebarContainer, 
    SidebaWrapper, 
    CloseIcon,
    Menu,
    MenuItem,
    MenuLinks,
    NavBtnsWrap,
    NavBtnDown,
    NavBtnSign,
    SidebarContent,
} from './SidebarElements';

const Sidebar = ({isOpen,toggleBurger}) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen}>
                <SidebaWrapper>
                    <CloseIcon onClick={toggleBurger} src={require('../../../images/modal-close.svg').default}/>
                </SidebaWrapper>

                <SidebarContent>
                    <Menu>
                        <MenuItem><MenuLinks onClick={toggleBurger} to="#">About</MenuLinks></MenuItem>
                        <MenuItem><MenuLinks onClick={toggleBurger} to="#">Product</MenuLinks></MenuItem>
                        <MenuItem><MenuLinks onClick={toggleBurger} to="#">FAQ</MenuLinks></MenuItem>
                        <MenuItem><MenuLinks onClick={toggleBurger} to="#">Contact</MenuLinks></MenuItem>
                    </Menu>

                    <NavBtnsWrap>
                        <NavBtnDown onClick={toggleBurger}>Download</NavBtnDown>
                        <NavBtnSign onClick={toggleBurger}>Sign up</NavBtnSign>
                    </NavBtnsWrap>
                </SidebarContent>
                
            </SidebarContainer>
        </>
    )
}

export default Sidebar;
