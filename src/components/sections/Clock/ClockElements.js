import styled from 'styled-components';

export const ClockSection = styled.div`
    height: 680px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ClockContainer = styled.div`
    width: 100%;
    max-width: 1355px;
    height: 680px;
    margin: 0 auto;
    display: flex;
    align-items: center;    
    justify-content: space-between;

`;


export const ClockContent = styled.div`
    max-width: 585px;

`;

export const ClockH2 = styled.h2`
    color: var(--text-first-color);
    font-family: 'Epilogue', sans-serif;
    line-height: 38px;
`;

export const ClockP = styled.p`
    margin-top: 20px;
    color: var(--text-third-color);

    max-width: 585px;
    max-height: 168px;
    font-style: normal;
    font-size: 18px;
    line-height: 150%;
    text-align: left;
`;

export const ClockBtnWrap = styled.div`
    margin-top: 20px;
`;

export const ClockBtn = styled.button`
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
`;

export const ClockImgBg = styled.img`
    position: relative;
    z-index: 0;

    width: 725px;
    height: 513px;  
`;

export const ClockImg = styled.img`
    position: absolute;
    z-index: 100;
    top: -30px;
    /* right: 30px; */
    left: -200px;
    width: auto;
    height: 752px;
`;
