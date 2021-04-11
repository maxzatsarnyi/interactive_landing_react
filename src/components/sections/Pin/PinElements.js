import styled from 'styled-components';

export const PinContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const PinWrapper = styled.div`
    width: 100%;
    max-width: 62%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 42px;

    @media screen and (max-width: 1400px){
        max-width: 90%;
    }
 
    @media screen and (max-width: 768px){
        margin-top: 40px;
        max-width: 90%; 
    }
    @media screen and (max-width: 480px){
        max-width: 94%;
        margin-top: 25px;
    }
`;

export const PinContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`;

export const ContentTextWrap = styled.div`
    max-width: 49.32%;

    @media screen and (max-width: 768px){
        max-width: 100%;
    }
`;

export const ContentH2 = styled.h2`
    font-family: "Epilogue", sans-serif;
    font-weight: bold;
    font-size: 32px;
    /* line-height: 38px; */
    color: var(--text-first-color);

    @media screen and (max-width: 768px){
        max-width: 100%;
        width: 86%;
    }

    @media screen and (max-width: 480px){
        font-size: 22px;
        width: 100%;

    }
`;

export const ContentP = styled.p`
    margin-top: 16px;
    font-size: 18px;
    line-height: 27px;
    color: #63718E;
    color: var(--text-third-color);

    @media screen and (max-width: 480px){
        font-size: 16px;
    }
`;

export const ContentWrap = styled.div`
    
`;

export const ContentImgWrap = styled.div`
    position: relative;
    right: 0;
    width: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px){
        margin-top: 57px;
        width: 90%;
    }
`;

export const ContentImgBg = styled.img`
    position: relative;
    right: 0;
    width: 80%;
`;

export const ContentImg = styled.img`
    position: absolute;
    top: -20px;
    right: 10px;
    width: 100%;
`;

export const PinSliderWrap = styled.div`
    max-width: 83.05%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;

    @media screen and (max-width: 768px){
        flex-direction: column;
        max-width: 100%;
    }
    @media screen and (max-width: 320px){
        overflow: hidden;
    }
`;


export const PinMenu = styled.ul`
    list-style: none;   
    margin-left: 20px;
    width: 50%;

    @media screen and (max-width: 768px){
        width: 100%;
        margin-left: 0px;
        display: flex;
        overflow-x: auto;
    }
    @media screen and (max-width: 320px){
        /* width: 350px; */
        /* overflow: hidden; */
    }
`;

export const PinItem = styled.li`
    margin-top: 30px;
    cursor: pointer;

    @media screen and (max-width: 768px){
        margin-right: 15px;
        white-space: nowrap;

    }
`;

export const ItemText = styled.div`
    font-family: "Epilogue", sans-serif;
    font-size: 22px;
    /* max-width: 100%; */
    line-height: 23px;
    color: ${({isActive}) => (isActive === true ? 'var(--primary-color)' : 'var(--text-third-color)')};
    font-weight: ${({isActive}) => (isActive === true ? 'bold' : 'normal')};


    ::before{
        content:'';
        display:inline-block;
        vertical-align:middle;
        box-sizing:border-box;
        left: ${({isActive}) => (isActive === true ? '-10px' : '-20px')};
        position: relative;
        margin-left: ${({isActive}) => (isActive === true ? '-4%' : '0px')};
        width: ${({isActive}) => (isActive === true ? '40px' : '20px')};
        height: ${({isActive}) => (isActive === true ? '2px' : '1px')};
        background: ${({isActive}) => (isActive === true ? 'var(--primary-color)' : 'var(--text-third-color)')};
    }
    /* ::before{
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
    } */
    
    @media screen and (max-width: 768px){
        font-size: ${({isActive}) => (isActive === true ? '22px' : '16px')};
        ::before{
            display: none;
        }
    }
    @media screen and (max-width: 480px){
        font-size: ${({isActive}) => (isActive === true ? '18px' : '14px')};
        font-weight: normal;
        ::before{
            display: none;
        }
        white-space: nowrap;
    }
`;

export const PinSliderText = styled.p`
    max-width: 50%;
    margin-top: 30px;
    font-size: 18px;
    line-height: 27px;
    color: #63718E;
    color: var(--text-third-color);

    @media screen and (max-width: 768px){
        max-width: 100%;
    }
`;


