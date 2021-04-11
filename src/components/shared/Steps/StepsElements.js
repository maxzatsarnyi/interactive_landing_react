import styled from 'styled-components';


export const StepsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 80px auto 0 auto;

    @media screen and (max-width: 480px){
        margin-top: 40px;
    }
`;

export const StepsH2 = styled.h2`
    font-family: 'Epilogue', sans-serif;
    font-weight: bold;
    font-size: 32px;
    color: #111563;
    text-align: center;

    @media screen and (max-width: 480px){
        width: 100%;
        font-size: 22px;
        text-align: left;
    }
`;

export const StepsP = styled.p`
    max-width: 60%;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    color: #63718E;
    margin: 16px auto 0 auto;

    /* @media screen and (max-width: 480px){
        font-size: 22px;
    } */
    @media screen and (max-width: 1200px){
        max-width: 70%;

    }
    @media screen and (max-width: 992px){
        max-width: 80%;

    }
    @media screen and (max-width: 768px){
        max-width: 86%;

    }
    @media screen and (max-width: 480px){
        max-width: 100%;

        font-size: 16px;
        text-align: left;

    }
`;

export const StepsMenu = styled.ul`
    margin-top: 25px;
    list-style: none;
    display: flex;  
    justify-content: center;
    justify-content: center;

    width: 100%;

    @media screen and (max-width: 480px){
        justify-content: space-between;

    }
`;

export const StepItem = styled.li`

    /* padding: 10px; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 25%;
    :last-child{
        max-width:5%;
    }

    @media screen and (max-width: 480px){
        :last-child{
            max-width:18%;
        }
    }
`;  

export const StepWrap = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`;  


export const StepIcon = styled.span`
    cursor: pointer;

    background: #FEE5FF;
    background: ${({isSelected}) => (isSelected ? 'var(--add-first-color)' : 'var(--add-second-color)')};

    color: ${({isSelected}) => (isSelected ? 'var(--primary-color)' : 'var(--add-third-color)')};
    transition: 0.3s ease-in-out;

    animation: _JAh3L 400ms ease forwards;
    border-radius: 50%;
    height: 2.5rem;
    width: 2.5rem;
    line-height: 2.5rem;
    display: inline-flex;
    transform-origin: center;
    align-items: center;
    justify-content: center;

    
    
`;
export const StepLine = styled.div`

    /* width: 197px; */
    width: 100%;
    /* max-width: 50%; */
    height: 2px;
    display: flex;
    position: relative;
    top: -10px;
    border-radius: 40px;
    transition: 0.3s ease-in-out;
    /* SELECTED */
    background: ${({isSelected}) => (isSelected ? 'var(--primary-color)' : 'var(--add-second-color)')};
    /* NOT SELECTED */
    
`;

export const StepTitle = styled.div`
    padding-top: 10px;
    width: 60px;
    font-size: 16px;
    line-height: 150%;
    text-align: center;
    transition: 0.3s ease-in-out;
    color: ${({isSelected}) => (isSelected ? 'var(--primary-color)' : 'var(--add-third-color)')};
`;

