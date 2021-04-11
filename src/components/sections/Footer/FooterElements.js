import styled from 'styled-components';

export const FooterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #1C1E1F;
    margin-top: 150px;

    @media screen and (max-width: 1400px){
        margin-top: 100px;
    }
    @media screen and (max-width: 992px){
        margin-top: 100px;
    }
    @media screen and (max-width: 768px){
        margin-top: 50px;
    }
    @media screen and (max-width: 480px){
        margin-top: 40px;
    }
`;

export const FooterWrapper = styled.div`
    width: 100%;
    max-width: 55.78%;
    margin: 0 auto;
    margin-top: 65px;
    display: flex; 
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 50px;

    @media screen and (max-width: 1400px){
        max-width: 90%;
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


export const FooterContent = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;

    @media screen and (max-width: 768px){
        width: 80%;
        align-items: flex-end;
        flex-wrap: wrap;
    }
`;

export const FooterInfo = styled.div`
    width: 194px;

    @media screen and (max-width: 768px){
        order: 3;
        margin-top: 40px;
    }

    @media screen and (max-width: 480px){
        order: 2;
    }
`;

export const InfoNumber = styled.div`
    color: #7E8183;
    cursor: pointer;
`;

export const InfoSpan = styled.div`
    color: #7E8183;

`;

export const InfoStars = styled.div`
    display: flex;  
    margin-top: 40px;
    margin-bottom: 40px;
    align-items: center;
`;

export const InfoStarsScore = styled.div`
    color: var(--primary-color);
    opacity: 0.85;
    font-size: 16px;
    margin-left: 8px;
`;

export const FooterLinks = styled.div`
    
    display: flex;
    justify-content: space-between;
    max-width: 290px;
    width: 100%;

    @media screen and (max-width: 768px){
        max-width: 214px;
    }
`;

export const LinksBlock = styled.ul`
    list-style: none;
`;


export const LinksItem = styled.li`
    margin-bottom: 15px;
    
`;


export const LinkA = styled.a`
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 19px;
    color: #7E8183;
    transition: 0.3s ease-in-out;
    :hover{
        color: white;
    }
    /* margin: 15px 0px; */
`;



export const FooterNetLinks = styled.div`
    max-width: 174px;
    max-height: 151px;
    margin-right: 40px;
    display: flex;
    flex-direction:column;
    justify-content: space-between;

    @media screen and (max-width: 768px){
        position: relative;
        top: -25px;
    }

    @media screen and (max-width: 480px){
        margin-top: 50px;
        order: 3;
    }
`;

export const SocialIcons = styled.div`
    /* margin-top: 30px; */
    display: flex;
    justify-content: space-between;
    position: relative;

    
`;

export const CardsIcons = styled.div`
    margin-top: 30px;

    display: flex;
    align-items: center;
`;

export const SecurityLogoWrap = styled.div`
    margin-top: 30px;

    display: flex;
    align-items: center;
`;

export const Icon = styled.img`

    margin-right: 10px;
    cursor: pointer;

    :last-child{
        margin-right: 0;
    }
`;

export const FooterCopyright = styled.p`
    width: 145px;
    left: calc(50% - 145px/2 - 514.5px);
    top: calc(50% - 20px/2 + 143.5px);
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    line-height: 20px;
    /* text-align: center; */
    color: #3A3A3A;
    margin-top: 63px;
`;

