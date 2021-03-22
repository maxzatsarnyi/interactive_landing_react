import styled from 'styled-components';


export const StepsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
`;

export const StepsH2 = styled.h2`
    font-family: 'Epilogue', sans-serif;
    font-weight: bold;
    font-size: 32px;
    line-height: 38px;
    color: #111563;
    text-align: center;
`;

export const StepsP = styled.p`
    max-width: 573px;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    color: #63718E;
    margin: 16px auto 0 auto;
`;

export const StepsMenu = styled.ul`
    margin-top: 25px;
    list-style: none;
    display: flex;
`;

export const StepItem = styled.li`
    /* padding: 10px; */
    display: flex;
    align-items: center;
`;  

export const StepWrap = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`;  


export const StepIcon = styled.span`
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

    width: 197px;
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

export const StepCountH2 = styled.div`
    margin-top: 10px;
    font-family: "Epilogue", sans-serif;
    font-weight: bold;
    font-size: 32px;
    line-height: 38px;
    transition: 0.5s ease-in-out;
    color: var(--text-first-color);
`;