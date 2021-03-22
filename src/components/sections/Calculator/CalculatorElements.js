import styled from 'styled-components';

export const Calculator = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 450px;
`;

export const CalculatorContainer = styled.div`
    width: 100%;
    max-width: 1180px;
    height: 360px;
    left: 370px;
    top: calc(50% - 360px/2 - 1px);
    background: #FFFFFF;
    box-shadow: 0px 2px 16px rgba(32, 108, 164, 0.16);
    border-radius: 8px;
`;
export const CalculatorH2 = styled.h2`
    font-family: 'Epilogue', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 38px;
    color: #111563;
    margin-top: 59px;
    text-align: center;
`;

export const CalculatorP = styled.p`
    font-size: 18px;
    line-height: 150%;
    color: #63718E;
    margin-top: 16px;
    text-align: center;
`;

export const CalculatorWrapper = styled.div`
    margin-top: 25px;
    display: flex;
    justify-content: center;
`;

export const CalculatorSelectors = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: space-between;
    max-width: 780px;
    height: 150px;
    flex-wrap: wrap;
`;

export const CalculatorResults = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;
    margin-left: 20px;
    max-width: 180px;
    height: 125px;

`;

export const ResultsWrap = styled.div`
    width: 180px;
    height: 50px;
    border-radius: 10px;
    font-family: 'Epilogue', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 23px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #C774EE;

`;



export const ResultsBtn = styled.button`
    /* margin-top: 20px; */
    cursor: pointer;
    font-weight: bold;
    font-size: 20px;
    line-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    border: none;
    outline: none;
    width: 180px;
    height: 50px;
    background: #C774EE;
    box-shadow: 0px 2px 16px rgba(32, 108, 164, 0.16);
    border-radius: 10px;
    transition: 0.3s ease-in-out;
    &:hover{
        box-shadow: 0px 5px 10px rgba(76, 174, 80, 0.3);
    }
`;
