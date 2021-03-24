import styled from 'styled-components';

export const ModalContainer = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    background: rgba(0, 0, 0, 0.2);

`;

export const ModalWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 1017px;
    height: 507px;
    background: #FFFFFF;
    /* background: silver; */
    box-shadow: 0px 2px 16px rgba(32, 108, 164, 0.16);
    border-radius: 35px;
    margin: 0 auto;
`;

export const ImgWrapper = styled.div`

`;

export const Img = styled.img`

`;

export const Content = styled.div`
    width: 524px;
    margin: 0 auto;


`;

export const ContentWrapper = styled.div`
    position: relative;
    /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: space-around; */
    /* height: 100%; */

`;
export const Icon = styled.img`
    cursor: pointer;
    position: absolute;
    right: -20px;
    top: -30px;
`;


export const ContentH2 = styled.h2`
    font-weight: bold;
    font-size: 36px;
    line-height: 65px;
    color: #000000;
`;

export const ContentP = styled.p`
    width: 524px;
    height: 96px;
    font-size: 18px;
    line-height: 32px;
    color: #000000;
`;

export const Form = styled.form`
    margin-top: 41px;
    display: flex;
    flex-direction: column;
`;

export const Input = styled.input`
    margin-top: 9px;
    padding-left: 20px;
    width: 253px;
    height: 50px;
    background: #FFFFFF;
    box-shadow: 0px 0px 1px #052953;
    border-radius: 10px;
    font-size: 18px;
    line-height: 27px;
    color: #909090;
    border: none;
    outline: none;

`;

export const Button = styled.button`
    margin-top: 22px;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 56px;
    background: #C774EE;
    border-radius: 10px;
    font-weight: bold;
    font-size: 18px;
    line-height: 18px;
    color: #FFFFFF;
    border: none;
    outline: none;
`;