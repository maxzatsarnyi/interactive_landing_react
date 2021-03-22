import React from 'react';
import {NumSelect, NumBtn, NumScore, NumIcon} from './NumElements';

const ChangeNumSelect = ({selectedScore, score, minus, plus}) => {
    
    return (
        <>
            <NumSelect>
                <NumBtn onClick={minus}>
                    <NumIcon src={require('../../../images/minus.svg').default}/>
                </NumBtn>
                <NumScore>{score}</NumScore>
                <NumBtn onClick={plus}>
                    <NumIcon src={require('../../../images/plus.svg').default}/>
                </NumBtn>
            </NumSelect>
        </>
    )
}

export default ChangeNumSelect;
