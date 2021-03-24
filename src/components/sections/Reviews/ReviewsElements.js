import styled from 'styled-components';

export const ReviewsSection = styled.div`
    min-height: 843px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ReviewsContainer = styled.div`
    width: 100%;
    max-width: 1180px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;


export const ReviewsH2 = styled.h2`
    font-family: 'Epilogue', sans-serif;
    font-weight: bold;
    font-size: 32px;
    line-height: 38px;
    color: var(--text-first-color);
`;

export const ReviewsP = styled.p`
    margin-top: 16px;

    font-size: 18px;
    line-height: 27px;
    text-align: center;
    color: #63718E;
`;

export const ReviewsList = styled.ul`

    width: 100%;
    height: 100%;
    list-style: none;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    overflow: hidden;

    @media screen and (max-width: 768px){
        flex-wrap: ${({isMore}) => (isMore ? 'wrap' : 'nowrap')};
        justify-content: center;
    }

    @media screen and (max-width: 480px){
    }
`;

export const ReviewItem = styled.li`
    margin-top: 25px;

    background: #FFFFFF;
    box-shadow: 0px 2px 16px rgba(32, 108, 164, 0.16);
    border-radius: 8px;
    width: 380px;
    height: 500px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    :hover{
        transform: scale(1.03);
    }

    @media screen and (max-width: 768px){
        flex-wrap: nowrap;
        justify-content: center;
        margin: 25px 10px 0 10px;
    }

    
`;
export const ReviewItemWrap = styled.div`
    width: 320px;
    height: 100%;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    /* align-items: center; */
`;


export const ItemTitleWrap = styled.div`
    margin-top: 30px;

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

    width: 298px;
    font-style: italic;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    color: #63718E;
    /* padding: 46px 52px 122px 30px; */
`;

export const ItemUserWrap = styled.div`
    /* margin-top: 122px; */
    display: flex;
    flex-direction: column; 
    justify-content: flex-end;
    padding-bottom: 30px;

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

