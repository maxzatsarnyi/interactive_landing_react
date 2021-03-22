import styled from 'styled-components';

export const PromoSection = styled.div`
    height: 856px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const PromoContainer = styled.div`
    width: 100%;
    max-width: 1404px;
    height: 871px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;

`;


export const PromoContent = styled.div`
    max-width: 598px;

`;

export const PromoH1 = styled.h1`
    color: var(--text-first-color);
    font-family: 'Epilogue', sans-serif;
    line-height: 120%;
`;

export const PromoP = styled.p`
    margin-top: 20px;
    color: var(--text-third-color);

    max-width: 580px;
    max-height: 168px;
    font-style: normal;
    font-size: 18px;
    line-height: 150%;
    text-align: left;
`;

export const PromoBtnWrap = styled.div`
    margin-top: 30px;
`;

export const PromoBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 280px;
    height: 53px;
    background: #C774EE;
    border-radius: 10px;
    border: none;
    font-weight: bold;
    font-size: 20px;
    color: #FFFFFF;
    outline: none;
    transition: 0.3s ease-in-out;
    &:hover{
        box-shadow: 0px 5px 10px rgba(76, 174, 80, 0.3);
    }
`;

export const PromoImgWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    /* width: 889px;
    height: 667px; */
    position: relative;
`;

export const PromoImgBg = styled.img`
    position: relative;
    z-index: 0;

    width: 682px;
    height: 646px;
`;

export const PromoImg = styled.img`
    position: absolute;
    z-index: 100;
    top: -35px;
    width: 889px;
    height: 667px;
`;
