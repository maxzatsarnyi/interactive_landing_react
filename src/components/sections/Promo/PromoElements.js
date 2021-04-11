import styled from 'styled-components';

export const PromoSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const PromoContainer = styled.div`
    width: 100%;
    max-width: 62%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 168px;

    position: relative;

    @media screen and (max-width: 1400px){
        max-width: 90%;
    }
    
    @media screen and (max-width: 992px){
        margin-top: 128px;
    }
    @media screen and (max-width: 768px){
        max-width: 90%; 
        margin-top: 67px;

        flex-direction: column;
        align-items: flex-start;
    }
    @media screen and (max-width: 320px){
        max-width: 94%;
        margin-top: 30px;
    }
`;


export const PromoContent = styled.div`
    max-width: 51%;

     //same max-width fits for 1200 and 768
    @media screen and (max-width: 768px){
        max-width: 100%; 
    }

`;

export const PromoH1 = styled.h1`
    color: var(--text-first-color);
    font-family: 'Epilogue', sans-serif;
    line-height: 120%;
     font-size: 42px;

    @media screen and (max-width: 768px){
        max-width: 85%; 

    }

    @media screen and (max-width: 480px){
        font-size: 27px;
    }

    @media screen and (max-width: 320px){
        max-width: 100%; 
        font-size: 22px;
    }
`;

export const PromoP = styled.p`
    margin-top: 20px;
    color: var(--text-third-color);

    max-width: 97%;

    font-style: normal;
    font-size: 18px;
    line-height: 150%;
    text-align: left;

    @media screen and (max-width: 768px){
        max-width: 100%; 
    }
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
    cursor: pointer;
    transition: 0.3s ease-in-out;
    &:hover{
        box-shadow: 0px 5px 10px rgba(76, 174, 80, 0.3);
    }

    @media screen and (max-width: 320px){
        width: 299px;
    }
`;

export const PromoImgWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 48%;
    position: absolute;
    right: -60px;

    @media screen and (max-width: 1420px){
        /* height: 500px; */
        /* top: 0; */
        right: -10px;
    }

    @media screen and (max-width: 768px){  
        width: 68%;
        margin: 0 auto;
        margin-top: 30px;
        position: relative;
        left: 0;
        right:0;
    }
    @media screen and (max-width: 320px){
        margin-top: 38px;

    }
`;

export const PromoImgBg = styled.img`
    position: relative;
    z-index: 0;
    overflow: hidden;
    /* height: 606px; */
    height: 45%;

    @media screen and (max-width: 1420px){
    }
`;

export const PromoImg = styled.img`
    position: absolute;
    z-index: 100;
    top: -35px;
    height: 100%;

    overflow: hidden;
    @media screen and (max-width: 480px){
        top: -5px;
    }
`;
