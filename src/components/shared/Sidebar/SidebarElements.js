import styled from 'styled-components';
import {Link} from 'react-scroll';

export const SidebarContainer = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1010;
    background: white;
    transition: 0.3s ease-in-out;
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
`;

export const SidebaWrapper = styled.div`

`;


export const CloseIcon = styled.img`
    position: absolute;
    top: 1.2rem;
    right: 1.2rem;
    background: transparent;
    cursor: pointer;
    outline: none;  
`;

export const SidebarContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 95%;
`;


export const Menu = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;

`;

export const MenuItem = styled.li`
    cursor: pointer;
    padding: 20px 8px;

`;

export const MenuLinks = styled(Link)`
    color: var(--text-third-color);
    transition: 0.3s ease-in-out;
    font-size: 24px;

    &:hover{
        color: var(--primary-color);
    }
`;

export const NavBtnsWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const NavBtnDown = styled.button`
    margin-top: 10px;
    width: 250px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--primary-color);
    border-radius: 10px;
    outline: none;
    border: none;
    font-weight: bold;
    font-size: 24px;

    color: #ffffff;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    
    &:hover{
        box-shadow: 0px 5px 10px rgba(76, 174, 80, 0.3);
    }
`;

export const NavBtnSign = styled.button`
    margin-top: 15px;
    outline: none;
    cursor: pointer;
    color: var(--text-third-color);
    font-weight: bold;
    font-size: 24px;

    width: 250px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    border-radius: 10px;
    border: 2px solid #63718E;
    transition: 0.3s ease-in-out;

    &:hover{
        color: var(--primary-color);
        border: 2px solid var(--primary-color);
    }
`;