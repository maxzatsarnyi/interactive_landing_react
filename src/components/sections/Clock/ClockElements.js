import styled from 'styled-components';

export const ClockSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ClockContainer = styled.div`
    width: 100%;
    max-width: 62%;
    
    margin: 0 auto;
    display: flex;
    align-items: center;    
    justify-content: space-between;

    margin-top: 150px;

    @media screen and (max-width: 1400px){
        max-width: 90%;
    }
    
    @media screen and (max-width: 992px){
        margin-top: 128px;
    }
    @media screen and (max-width: 768px){
        max-width: 90%; 
        margin-top: 67px;

        flex-direction: column-reverse;
        
        align-items: flex-start;
    }
    @media screen and (max-width: 480px){
        max-width: 94%;
        margin-top: 20px;
    }

`;

export const ClockContent = styled.div`
    margin-top: 40px;
    max-width: 50%;

    @media screen and (max-width: 1400px){
        max-width: 46%;
    }

    @media screen and (max-width: 768px){
        max-width: 100%;
    }
`;

export const ClockH2 = styled.h2`
    color: var(--text-first-color);
    font-family: 'Epilogue', sans-serif;
    font-size: 32px;
    @media screen and (max-width: 768px){
        max-width: 85%;
    }
    @media screen and (max-width: 480px){
        max-width: 100%;
        font-size: 22px;

    }
`;

export const ClockP = styled.p`
    margin-top: 20px;
    color: var(--text-third-color);

    width: 100%;
    font-size: 18px;
    line-height: 150%;
    text-align: left;
`;

export const ClockBtnWrap = styled.div`
    margin-top: 20px;
`;

export const ClockBtn = styled.button`
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 180px;
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

export const ClockImgWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    max-width: 46.61%;

    @media screen and (max-width: 768px){
        margin-top: 27px;
        max-width: 55.61%;
    }
    @media screen and (max-width: 480px){
        max-width: 100%;
    }
`;

export const ClockImgBg = styled.img`
    position: relative;
    z-index: 0;
    /* max-width: 550px; */
    max-width: 100%;

    @media screen and (max-width: 768px){
        max-width: 180%;
    }
    @media screen and (max-width: 480px){
        max-width: 100%;
    }
`;

export const ClockImg = styled.img`
    position: absolute;
    z-index: 100;
    top: 0;
    width: 100%;
    height: auto;
    @media screen and (max-width: 768px){
        width: 180%;
    }
    @media screen and (max-width: 480px){
        max-width: 100%;
    }
`;


export const NoticeImgWrap = styled.div`
    position: absolute;
    width: 432px;
    margin-left: 48px;
    z-index: 200;
    /* bottom: -120px; */
    @media screen and (max-width: 992px){
        margin: 0 auto;
    }
    @media screen and (max-width: 768px){
        top: 60px;
        right: -280px;

    }
    @media screen and (max-width: 480px){
        width: 350px;
        margin: 0 auto;
        /* height: 340px; */

        top: 120px;
        right: 0px;
        left: 0;
    }
    @media screen and (max-width: 320px){
        width: 300px;
        margin: 0 auto;
        height: 340px;
        top: 70px;
        right: 0px;
        left: 0;
    }
`;

export const NoticeImgBg = styled.img`
    @media screen and (max-width: 480px){
        width: 100%;
    }
`;

export const NoticeCard = styled.div`
    position: absolute;
    top: 10px;
    right: 0;
    /* left: 0; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 380px;
    width: 100%;
    height: 249px;
    background: #FFFFFF;
    box-shadow: 0px 2px 16px rgba(32, 108, 164, 0.16);
    border-radius: 8px;
    @media screen and (max-width: 992px){
        top: 35px;
        margin: 0 auto;
    }
    @media screen and (max-width: 480px){
        height: 300px;
    }
`;

export const CardIconWrap = styled.div`
    width: 100%;
`;


export const CardIcon = styled.img`
    height: 60px;
    margin-left: 28px;
`;

export const CardText = styled.p`
    padding-top: 5px;
    max-width: 324px;
    font-size: 16px;
    line-height: 150%;
    color: var(--text-third-color);
    @media screen and (max-width: 480px){
        max-width: 80%;
    }
`;