import styled from 'styled-components';

export const Calculator = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CalculatorContainer = styled.div`
    /* margin-top:90px; */
    width: 100%;
    max-width: 62%;
    background: #FFFFFF;
    box-shadow: 0px 2px 16px rgba(32, 108, 164, 0.16);
    border-radius: 8px;
    margin-top: 168px;
    padding-bottom: 45px;
    @media screen and (max-width: 1400px){
        max-width: 90%;
    }
    
    @media screen and (max-width: 992px){
        margin-top: 128px;
    }
    @media screen and (max-width: 768px){
        max-width: 100%; 
        margin-top: 67px;

        flex-direction: column;
        align-items: flex-start;
    }
    @media screen and (max-width: 480px){
        margin-top: 200px;
    }
    @media screen and (max-width: 320px){
        max-width: 94%;
        margin-top: 250px;
    }
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

    @media screen and (max-width: 480px){
        font-size: 22px;
        margin-top: 30px;
    }
`;

export const CalculatorP = styled.p`
    margin: 0 auto;

    font-size: 18px;
    line-height: 150%;
    color: #63718E;
    margin-top: 16px;
    text-align: center;
    @media screen and (max-width: 768px){
        margin-top: 10px;
    }
    @media screen and (max-width: 480px){
        width: 100%;
        font-size: 16px;
    }
`;

export const CalculatorWrapper = styled.div`
    margin-top: 25px;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 768px){
        max-width: 80.73%;

        margin: 0 auto;

        flex-direction:column;
    }

    @media screen and (max-width: 768px){
        max-width: 94%;
    }
`;

export const CalculatorSelectors = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: space-between;
    width: 100%;
    max-width: 65%;
    /* height: 150px; */

    flex-wrap: wrap;
    @media screen and (max-width: 768px){
        max-width: 90%;
        margin: 0 auto;

        margin-top: 20px;
    }
    @media screen and (max-width: 480px){
        max-width: 100%;
    }
    
`;

export const SelectorWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    @media screen and (max-width: 768px){
        width: 100%;

    }

    @media screen and (max-width: 480px){
        width: 100%;
        flex-direction: column;
    }
    
`;

export const SelectorWrapper2 = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    @media screen and (max-width: 768px){
        /* width: 100%; */
       
    }

    @media screen and (max-width: 480px){
        /* width: 100%; */
        flex-direction: column;
    }
    
`;

export const CalculatorResults = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-left: 20px;
    max-width: 23.08%;
    /* margin-right: auto; */

    @media screen and (max-width: 768px){
        flex-direction: row;
        max-width: 100%;
        justify-content: center;
        margin-left: 0px;

    }

    @media screen and (max-width: 480px){
        /* margin-top: 20px; */
        flex-direction: column;
    }
`;

export const ResultsWrap = styled.div`
    /* width: 100%; */
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

    @media screen and (max-width: 768px){
        margin-top: 20px;

    }

    @media screen and (max-width: 480px){
        width: 100%;
    }
`;



export const ResultsBtn = styled.button`
    width: 180px;

    margin-top: 20px;
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
    height: 50px;
    background: #C774EE;
    box-shadow: 0px 2px 16px rgba(32, 108, 164, 0.16);
    border-radius: 10px;
    transition: 0.3s ease-in-out;
    &:hover{
        box-shadow: 0px 5px 10px rgba(76, 174, 80, 0.3);
    }


    @media screen and (max-width: 768px){
        margin-left: 20px;

    }
    @media screen and (max-width: 480px){
        width: 100%;
        margin-left: 0px;

    }
`;
