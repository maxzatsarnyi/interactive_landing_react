import styled from 'styled-components';

export const NotebookContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const NotebookWrapper = styled.div`
    width: 100%;
    max-width: 62%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: space-around;

    margin-top: 130px;
    
    @media screen and (max-width: 1400px){
        max-width: 90%;
    }
    
    @media screen and (max-width: 992px){
        flex-direction: column;
        margin-top: 78px;

    }
    @media screen and (max-width: 768px){
        margin-top: 78px;
        max-width: 90%; 
    }
    @media screen and (max-width: 480px){
        margin-top: 68px;
        max-width: 94%;
    }
`;

export const NotebookContent = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 992px){
        flex-direction:column-reverse;
    }
`;

export const NotebookTextWrap = styled.div`
    max-width: 48.66%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 992px){
        max-width: 100%;
        margin-top: 40px;
    }
`;

export const NotebookH2 = styled.h2`
    max-width: 89.64%;
    font-family: 'Epilogue', sans-serif;
    font-weight: bold;
    font-size: 32px;
    color: #111563;
    @media screen and (max-width: 768px){
        max-width: 75%;
    }
    @media screen and (max-width: 480px){
        font-size: 22px;
        max-width: 100%;

    }
`;

export const NotebookP = styled.p`
    margin-top: 20px;
    width: 100%;
    font-size: 18px;
    line-height: 150%;
    color: #63718E;
`;
export const NotebookImgWrap = styled.div`
    max-width: 49.41%;
    position: relative;
    
    @media screen and (max-width: 992px){
        margin: 0 auto;
        max-width: 80%;
    }
`;

export const NotebookImgBg = styled.img`
    position: relative;
    width: 100%;
`;

export const NotebookImg = styled.img`
    position: absolute;
    left: 50px;
    top: 0;
    height: 100%;
    width: 100%;

    @media screen and (max-width: 480px){
        left:20px;

    }
`;

export const NoticeContent = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    margin-top: 50px;

    @media screen and (max-width: 992px){
        flex-direction: column;
    }
`;

export const NoticeImgWrap = styled.div`
    position: relative;
    width: 432px;
    margin-left: 48px;
    
    
    @media screen and (max-width: 480px){
        width: 300px;
        margin: 0 auto;
        height: 340px;
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


export const NoticeTextWrap = styled.div`
    max-width: 48.74%;
    display: flex;
    align-items: center;
    @media screen and (max-width: 1200px){
        margin-left: 50px;
    }
    @media screen and (max-width: 992px){
        max-width: 100%;
        margin-left: 0px;
    }
    @media screen and (max-width: 768px){
    }
    @media screen and (max-width: 480px){
        margin-top: 25px;
    }

`;

export const NoticeP = styled.p`
    font-size: 18px;
    line-height: 27px;
    color: var(--text-third-color);

    @media screen and (max-width: 992px){
        width: 100%;
    }
`;