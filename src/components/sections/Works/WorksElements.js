import styled from 'styled-components';

export const WorksContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

`;

export const WorksWrapper = styled.div`
    width: 100%;
    max-width: 62%;
    margin: 0 auto;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 1400px){
        max-width: 90%;
    }
    @media screen and (max-width: 768px){
        margin-top: 0px;

        flex-direction: column;
        align-items: flex-start;
    }
    @media screen and (max-width: 480px){
        max-width: 94%;
        margin-top: 0px;
    }
`;

export const WorksContent = styled.div`
    margin: 30px auto 0 auto;
    width: 100%;
    max-width: 50%;

    @media screen and (max-width: 768px){
        max-width: 100%;
        font-size: 16px;
    }
`;

export const Slider = styled.div`
    display: flex;
    
    @media screen and (max-width: 768px){
        flex-direction: column;
        /* justify-content: flex-start; */
    }
`;

export const WorksSliderCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
    width: 84%;   

    @media screen and (max-width: 768px){
        width: 100%;    
    }
`;

export const WorksMenu = styled.ul`
    list-style: none;   
    margin-left: 20px;
    margin: 0 auto;
    width: 100%;

    @media screen and (max-width: 768px){
        display: flex;
        overflow-x: auto;
    }
`;

export const WorksItem = styled.li`
    margin-top: 30px;
    max-width: 295px;
    cursor: pointer;
        
    @media screen and (max-width: 768px){
        width: 100%;
        white-space: nowrap;
        display: block;

        ::-webkit-scrollbar {
            display: none;
        }
    }
`;

export const ItemLine = styled.div`
    width: 20px;
    height: 1px;
    background: #63718E;
    border-radius: 40px;
    margin-right: 10px;
`;

export const ItemText = styled.p`
    font-family: "Epilogue", sans-serif;
    font-size: 22px;
    line-height: 23px;
    font-weight: ${({isActive}) => (isActive === true ? 'bold' : 'normal')};
    color: ${({isActive}) => (isActive === true ? 'var(--primary-color)' : 'var(--text-third-color)')};
    margin-right: 20px;

    ::before{
        content:'';
        display:inline-block;
        vertical-align:middle;
        box-sizing:border-box;
        left: ${({isActive}) => (isActive === true ? '-10px' : '-20px')};
        position: relative;
        margin-left: ${({isActive}) => (isActive === true ? '-8%' : '0px')};
        width: ${({isActive}) => (isActive === true ? '40px' : '20px')};
        height: ${({isActive}) => (isActive === true ? '2px' : '1px')};
        background: ${({isActive}) => (isActive === true ? 'var(--primary-color)' : 'var(--text-third-color)')};
    }

    @media screen and (max-width: 768px){
        min-width: 100%;
        font-size: 16px;

        ::before{
            display:none;
        }
    }
`;

export const ContentTitle = styled.p`
    color: var(--text-third-color);
`;

export const ContentP = styled.p`
    max-width: 450px;
    margin-top: 20px;
    color: var(--text-third-color);
`;

export const SpanP = styled.span`
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    color: var(--primary-color);
`;

export const ContentNotice = styled.div`
    margin-top: 20px;
`;

export const ContentNoticeP = styled.p`
    max-width: 480px;
    font-size: 16px;
    line-height: 22px;
    color: var(--text-third-color);
`;

export const StepCount = styled.div`
    transition: 0.5s ease-in-out;
    color: var(--text-first-color);
    font-family: "Epilogue", sans-serif;
    font-weight: bold;
    font-size: 22px;
    line-height: 23px;
`;

export const StepCountWrap = styled.div`
    margin-top: 60px;
`;

export const StepCountH2 = styled.h2`
    margin-top: 10px;
    font-family: "Epilogue", sans-serif;
    font-weight: bold;
    font-size: 32px;
    transition: 0.5s ease-in-out;
    color: var(--text-first-color);
    
    @media screen and (max-width: 480px){
        font-size: 22px;
    }
`;