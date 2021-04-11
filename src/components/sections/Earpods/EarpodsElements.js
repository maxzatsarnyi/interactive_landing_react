import styled from 'styled-components';

export const EarpodsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 200px;
    @media screen and (max-width: 992px){
        margin-top: 150px;
    }
    @media screen and (max-width: 768px){
        margin-top: 58px;
    }
    @media screen and (max-width: 480px){
        margin-top: 40px;
    }
`;

export const EarpodsWrapper = styled.div`
    width: 100%;
    max-width: 62%;
    margin: 0 auto;
    display: flex; 
    align-items: center;

    @media screen and (max-width: 1400px){
        max-width: 90%;
    }
    
    @media screen and (max-width: 992px){
        flex-direction: column;
    }
    @media screen and (max-width: 768px){
        margin-top: 78px;
        max-width: 90%; 
    }
    @media screen and (max-width: 480px){
        margin-top: 48px;
        max-width: 94%;
    }
`;


export const EarpodsImgWrap = styled.div`
    position: relative;

    @media screen and (max-width: 768px){
        width: 70%; 
    }
    @media screen and (max-width: 480px){
        width: 100%; 
    }
`;

export const EarpodsImgBg = styled.img`
    position: relative;

    @media screen and (max-width: 768px){
        width: 100%; 
    }
    @media screen and (max-width: 480px){
        max-width: 90%; 
    }
`;
export const EarpodsImg = styled.img`
    position: absolute;
    top: 20px;
    left: -10px;
    height: 100%;

    @media screen and (max-width: 768px){
        max-width: 100%; 
    }
    @media screen and (max-width: 480px){
        max-width: 90%; 
    }
`;

export const EarpodsContent = styled.div`
    margin-left: 60px;

    @media screen and (max-width: 992px){
        margin-left: 0px;
        margin-top: 40px;
    }
`;


export const EarpodsH2 = styled.h2`
    font-family: 'Epilogue', sans-serif;
    font-weight: bold;
    font-size: 32px;
    line-height: 38px;
    color: #111563;

    @media screen and (max-width: 480px){
        font-size: 22px;
    }
`;

export const EarpodsList = styled.ul`
    /* width: 48.66%; */
    margin-left: 22px;

    @media screen and (max-width: 992px){
        margin-left: 0px;
        padding-left: 20px;
        width: 100%;
    }

   
`;

export const EarpodsLi = styled.li`
    margin-top: 20px;
    font-size: 18px;
    line-height: 150%;
    color: #63718E;
    width: 100%;
    max-width: 94.82%;

    @media screen and (max-width: 992px){
        max-width: 100%;
    }

    ::marker {
        color: #111563;
        font-size: 1.3rem;
    }
`;