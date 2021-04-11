import styled from 'styled-components';
import {Link} from 'react-scroll';

export const Nav = styled.nav`
    height: 88px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0;

    z-index: 1005;
`;

export const NavContainer = styled.div`
    width: 100%;
    max-width: 62%;
    height: 88px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 1400px){
        //same max-width fits for 1200 and 768
        max-width: 90%; 
    }
    
    @media screen and (max-width: 320px){
        max-width: 94%;
    }
`;

export const LogoWrapper = styled(Link)`
    display: flex;
    align-items: center;
`;


export const Logo = styled.img`
    cursor: pointer;
`;

export const WrapperContent = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    /* max-width: 670px; */
    /* max-width: 750px; */
    max-width: 64%;

    justify-content: flex-end;


    @media screen and (max-width: 992px){
        display: none;
    }

    /* @media screen and (max-width: 768px){
    } */
`;

export const IconsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const BurgerWrap = styled.div`
    display: none; 
    z-index: 999;
    @media screen and (max-width: 992px){
        display: block;
    }
`;

export const BurgerIcon = styled.img`
    display: flex;
    align-items: center;
`;

export const Icon = styled.img`
    cursor: pointer;
    margin-right: 25px;

    &:last-child{
        margin-right: 15px;
    }
`;


export const Menu = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;

`;

export const MenuItem = styled.li`
    cursor: pointer;
    padding: 0 8px;

`;

export const MenuLinks = styled(Link)`
    color: var(--text-third-color);
    transition: 0.3s ease-in-out;

    &:hover{
        color: var(--primary-color);
    }
`;

export const NavBtnsWrap = styled.div`
    display: flex;
`;

export const NavBtnDown = styled.button`
    width: 113px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--primary-color);
    border-radius: 10px;
    outline: none;
    border: none;
    font-weight: bold;
    font-size: 15px;
    color: #ffffff;
    cursor: pointer;
    margin-left: 20px;
    transition: 0.3s ease-in-out;

    &:hover{
        box-shadow: 0px 5px 10px rgba(76, 174, 80, 0.3);
    }
`;

export const NavBtnSign = styled.button`
    outline: none;
    cursor: pointer;
    color: var(--text-third-color);
    font-weight: bold;
    font-size: 15px;
    width: 113px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    border-radius: 10px;
    border: 2px solid #63718E;
    margin-left: 30px;
    transition: 0.3s ease-in-out;

    &:hover{
        color: var(--primary-color);
        border: 2px solid var(--primary-color);
    }
`;