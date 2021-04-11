import styled from 'styled-components';

export const NumSelect = styled.div`
    /* width: 48.16%; */
    width: 100%;

    height: 50px;
    background: #F9FAFC;
    box-shadow: 0px 1px 3px rgba(5, 41, 83, 0.14);
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
    margin-left: 20px;

    
    @media screen and (max-width: 768px){
        :first-child{
      margin-left: 0px;
    }
    }
    @media screen and (max-width: 480px){
        margin-left: 0px;
    }
    /* margin: 0 auto; */
`;

export const NumBtn = styled.div`
    cursor: pointer;
    
`;

export const NumIcon = styled.img`

`;

export const NumScore = styled.div`
    font-size: 18px;
    line-height: 150%;
    color: #111563;
`;