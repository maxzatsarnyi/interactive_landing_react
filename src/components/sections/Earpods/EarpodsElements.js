import styled from 'styled-components';

export const EarpodsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 650px;
`;

export const EarpodsWrapper = styled.div`
    width: 100%;
    max-width: 1179px;
    /* height: 643px; */
    margin: 0 auto;
    display: flex; 
    align-items: center;
`;


export const EarpodsImgWrap = styled.div`
    position: relative;
`;

export const EarpodsImgBg = styled.img`
    position: relative;
`;
export const EarpodsImg = styled.img`
    position: absolute;
    top: 20px;
    left: -30px;
    height: 455px;
`;

export const EarpodsContent = styled.div`
    margin-left: 60px;
`;


export const EarpodsH2 = styled.h2`
    font-family: 'Epilogue', sans-serif;
    font-weight: bold;
    font-size: 32px;
    line-height: 38px;
    /* align-items: center; */
    color: #111563;
`;

export const EarpodsList = styled.ul`
    max-width: 579px;
    margin-left: 22px;
`;

export const EarpodsLi = styled.li`
    margin-top: 20px;
    font-size: 18px;
    line-height: 150%;
    color: #63718E;
    max-width: 549px;

    ::marker {
        color: #111563;
        font-size: 1.3rem;
    }
`;