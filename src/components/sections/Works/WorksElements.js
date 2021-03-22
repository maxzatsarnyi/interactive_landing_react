import styled from 'styled-components';

export const WorksContainer = styled.div`
    height: 798px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const WorksWrapper = styled.div`
    width: 100%;
    max-width: 980px;
    height: 642px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    
    justify-content: center;
`;

export const WorksContent = styled.div`
    margin-top: 30px;
    
`;

export const WorksSliderCont = styled.div`
    display: flex;
    justify-content: space-around;
    /* width: 100%; */
    max-width: 980px;   
`;

export const WorksMenu = styled.ul`
    list-style: none;   
    margin-left: 20px;
    /* margin-right: 105px;  */
`;

export const WorksItem = styled.li`
    margin-top: 30px;
    max-width: 295px;
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
    margin-left: 20px;
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
`;


// export const WorksContent = styled.div`
    
// `;

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