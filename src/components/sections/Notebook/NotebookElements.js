import styled from 'styled-components';

export const NotebookContainer = styled.div`
    height: 995px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const NotebookWrapper = styled.div`
    width: 100%;
    max-width: 1216px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const NotebookContent = styled.div`
    display: flex;
    justify-content: space-around;

`;

export const NotebookTextWrap = styled.div`
    max-width: 579px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const NotebookH2 = styled.h2`
    max-width: 519px;
    font-family: 'Epilogue', sans-serif;
    font-weight: bold;
    font-size: 32px;
    line-height: 38px;
    color: #111563;
`;

export const NotebookP = styled.p`
    margin-top: 20px;
    width: 579px;
    font-size: 18px;
    line-height: 150%;
    color: #63718E;
`;
export const NotebookImgWrap = styled.div`
    max-width: 588px;
    position: relative;
`;

export const NotebookImgBg = styled.img`

`;

export const NotebookImg = styled.img`
    position: absolute;
    left: 0;
    top: 50px;
    height: 440px;
`;

export const NoticeContent = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1132px;
    width: 100%;
`;

export const NoticeImgWrap = styled.div`
    position: relative;
    max-width: 432px;
`;

export const NoticeImgBg = styled.img`
    
`;

export const NoticeCard = styled.div`
    position: absolute;
    top: 10px;
    right: 0;
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
`;


export const NoticeTextWrap = styled.div`
    max-width: 580px;
    display: flex;
    align-items: center;
`;

export const NoticeP = styled.p`
    font-size: 18px;
    line-height: 27px;
    color: var(--text-third-color);
`;