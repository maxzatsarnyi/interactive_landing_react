import styled from 'styled-components';

export const ReviewsSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ReviewsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1187.08px;

    margin: 130px auto 0 auto;

    
    @media screen and (max-width: 1400px){
        max-width: 90%;
    }
    
    @media screen and (max-width: 1200px){
        overflow: hidden;
    }

    @media screen and (max-width: 992px){
    }
    @media screen and (max-width: 768px){
        margin-top: 78px;
        max-width: 90%; 
    }
    @media screen and (max-width: 480px){
        margin-top: 45px;
        max-width: 94%;
    }
    
`;

export const ReviewsH2 = styled.h2`
    font-family: 'Epilogue', sans-serif;
    font-weight: bold;
    font-size: 32px;
    line-height: 38px;
    color: var(--text-first-color);

    @media screen and (max-width: 480px){
        width: 100%;
        font-size: 22px;
        text-align: left;
    }
`;

export const ReviewsP = styled.p`
    margin-top: 16px;

    font-size: 18px;
    line-height: 27px;
    text-align: center;
    color: #63718E;

    @media screen and (max-width: 480px){
        width: 100%;
        text-align: left;
        font-size: 16px;
    }
`;

export const ReviewsList = styled.ul`
    height: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    list-style: none;

    @media screen and (max-width: 1200px){
        flex-wrap: ${({isMore}) => (isMore ? 'wrap' : 'nowrap')};
    }
    @media screen and (max-width: 480px){
        margin-top: 40px;
        flex-direction: column;
    }
`;

export const ReviewItem = styled.li`
    height: 500px;
    width: 380px;
    display: flex;
    align-items: center;
    margin: 25px 3px 0 3px;

    background: #FFFFFF;
    box-shadow: 0px 2px 16px rgba(32, 108, 164, 0.16);
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    :hover{
        transform: scale(1.03);
    }
    @media screen and (max-width: 768px){
        margin: 25px 10px 0 10px;
    }
    @media screen and (max-width: 480px){
        width: 300px;
    }
`;

export const ReviewItemWrap = styled.div`
    height: 436px;
    width: 84%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: space-between;
`;

export const ItemTitleWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Icon = styled.img`
    
`;

export const ItemStarsWrap = styled.div`
    font-size: 18px;
    line-height: 25px;
    color: #63718E;
    display: flex;
    align-items: center;
`;

export const ItemText = styled.div`
    margin-top: 35px;
    width: 95%;
    font-style: italic;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    color: #63718E;

    @media screen and (max-width: 480px){
        font-size: 16px;
    }
`;

export const ItemUserWrap = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: flex-end;
    position: relative;
    bottom: 0;
    height: 100%;
`;

export const ItemUser = styled.div`
    display: flex;
`;

export const ItemUserId = styled.div`
    margin-left: 10px;
    font-size: 16px;
    line-height: 24px;
    color: #63718E;
`;

export const ItemUserCateg = styled.div`
    margin-top: 10px;
    font-size: 16px;
    line-height: 24px;
    color: #63718E;
`;

export const ReviewsBtnMore = styled.button`
    margin-top: 40px;
    font-family: "Epilogue", sans-serif;
    font-weight: bold;
    font-size: 16px;
    line-height: 16px;
    cursor: pointer;
    color: #C774EE;
    border: none;
    outline: none;
    background: transparent;
    border-bottom: 2px dotted #C774EE;
    padding-bottom: 8px;
    transition: 0.3s ease-in-out;
`;

