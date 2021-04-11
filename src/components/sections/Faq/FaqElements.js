import styled from 'styled-components';

export const FaqContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 100px;
   
    @media screen and (max-width: 992px){
        margin-top: 100px;
    }
    @media screen and (max-width: 768px){
        margin-top: 0px;
    }

`;

export const FaqWrapper = styled.div`
    width: 100%;
    max-width: 54.38%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
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
        margin-top: 68px;
        max-width: 94%;
    }
`;

export const FaqTitleH2 = styled.h2`
    width: 100%;
    font-family: "Epilogue", sans-serif;
    font-weight: bold;
    font-size: 32px;
    line-height: 38px;
    color: var(--text-first-color);

    @media screen and (max-width: 768px){
        text-align: center;
    }
`;

export const FaqList = styled.ul`
    margin-top: 10px;
    list-style: none; 
    width: 100%;
`;

export const FaqItem = styled.li`
    width: 100%;
    margin-top: 20px;
    padding: 20px;
    background: #FFFFFF;
    box-shadow: 0px 2px 16px rgba(32, 108, 164, 0.16);
    border-radius: 8px;
    margin: 20px 0px;
    transition: 0.3s ease-in-out;

`;

export const FaqItemWrap = styled.div`
`;

export const ItemTitleWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ItemTitle = styled.h4`
    font-weight: bold;
    font-size: 22px;
    color: var(--text-first-color);
    line-height: 1.4rem;
    @media screen and (max-width: 768px){
        max-width: 90%; 
    }
`;

export const ItemArrow = styled.img`
    transition: 0.4s ease-in-out;
    transform: ${({isVisible}) => (isVisible ? null : 'rotate(180deg)')};
    cursor: pointer;
`;


export const ItemText = styled.p`
    font-size: 18px;
    line-height: 27px;
    color: #63718E;
    align-self: center;
    margin: 14px 0px;
    color: var(--text-third-color);
    transition: 0.4s ease-in-out;
    width: 98%;
`;

export const FaqButton = styled.button`
    margin-top: 36px;
    display: flex;
    cursor: pointer;

    justify-content: center;
    align-items: center;
    /* padding: 18px 22px; */
    width: 181px;
    height: 62px;
    background: var(--primary-color);
    border-radius: 10px;
    font-weight: bold;
    font-size: 20px;
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;
    border:none;
    outline: none;
    transition: 0.3s ease-in-out;

    :hover{
        box-shadow: 0px 5px 10px rgba(76, 174, 80, 0.3);
    }

    @media screen and (max-width: 768px){
        margin-top: 20px;
    }
`;