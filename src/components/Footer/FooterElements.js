import styled from 'styled-components';

export const FooterContainer = styled.div`
    height: 371px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #1C1E1F;
`;

export const FooterWrapper = styled.div`
    width: 100%;
    max-width: 1071px;
    margin: 0 auto;
    display: flex; 
    flex-direction: column;
    /* align-items: center; */
    justify-content: space-between;
`;


export const FooterContent = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

export const FooterInfo = styled.div`
    
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
    display: flex;
    flex-direction:column;
    justify-content: space-between;
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
`;

export const CardsIcons = styled.div`
      display: flex;
    align-items: center;
`;

export const SecurityLogoWrap = styled.div`
    display: flex;
    align-items: center;
`;

export const Icon = styled.img`
    margin-left: 10px;
    cursor: pointer;
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

