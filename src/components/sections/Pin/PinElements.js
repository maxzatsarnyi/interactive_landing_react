import styled from 'styled-components';

export const PinContainer = styled.div`
    height: 650px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const PinWrapper = styled.div`
    width: 100%;
    max-width: 1169px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const PinContent = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ContentTextWrap = styled.div`
    max-width: 582px;
`;

export const ContentH2 = styled.h2`
    width: 580px;
    font-family: "Epilogue", sans-serif;
    font-weight: bold;
    font-size: 32px;
    line-height: 38px;
    color: var(--text-first-color);
`;

export const ContentP = styled.p`
    margin-top: 16px;
    font-size: 18px;
    line-height: 27px;
    color: #63718E;
    color: var(--text-third-color);
`;

export const ContentWrap = styled.div`
    
`;

export const ContentImgWrap = styled.div`
    position: relative;
`;

export const ContentImgBg = styled.img`
    
`;


export const PinSliderWrap = styled.div`
    max-width: 980px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
`;

export const ContentImg = styled.img`
    position: absolute;
    top: 0;
    left: -150px;
    height: 500px;
`;

export const PinMenu = styled.ul`
    list-style: none;   
    margin-left: 20px;
`;

export const PinItem = styled.li`
    margin-top: 30px;
    width: 291px;
`;

export const ItemText = styled.div`
    font-family: "Epilogue", sans-serif;
    font-size: 22px;
    line-height: 23px;
    color: ${({isActive}) => (isActive === true ? 'var(--primary-color)' : 'var(--text-third-color)')};
    font-weight: ${({isActive}) => (isActive === true ? 'bold' : 'normal')};

    ::before{
        content:'';
        display:inline-block;
        vertical-align:middle;
        box-sizing:border-box;
        left: -14px;
        position: relative;
        margin-left: ${({isActive}) => (isActive === true ? '-7%' : '0px')};
        width: ${({isActive}) => (isActive === true ? '40px' : '20px')};
        height: ${({isActive}) => (isActive === true ? '2px' : '1px')};
        background: ${({isActive}) => (isActive === true ? 'var(--primary-color)' : 'var(--text-third-color)')};
    }
`;

export const PinSliderText = styled.p`
    max-width: 480px;
    margin-top: 30px;
    font-size: 18px;
    line-height: 27px;
    color: #63718E;
    color: var(--text-third-color);
`;


