import React, {forwardRef, useState} from 'react';
// import the progress bar
import StepProgressBar from 'react-step-progress';
// import the stylesheet
import 'react-step-progress/dist/index.css';
import {
    StepsContainer,
    StepsH2,
    StepsP,
    StepsMenu,
    StepItem,
    StepIcon,
    StepTitle,
    StepLine,
    StepWrap,

} from './StepsElements';


const StepsComponent = ({stepsOpt, currentStep, setCurrentStep, setStepsOpt}) => {
    const makeStep = (e) => {
        let index = e.currentTarget.dataset.index;

        let st = stepsOpt.map(obj => {
            if(obj.step <= index){
                obj.isSelected = true;
            } 
            else {
                obj.isSelected = false;
            }
            return obj;
        })

        setStepsOpt(st);
        setCurrentStep(index);
    }

    return (
        <>
            <StepsContainer>
                <StepsH2>How it works</StepsH2>
                <StepsP> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</StepsP>
                <StepsMenu>
                    {stepsOpt.map(({step, label, line, isSelected}) => (
                        <StepItem key={step}>
                            <StepWrap data-index={step} onClick={makeStep}>
                                <StepIcon isSelected={isSelected}>{step}</StepIcon>
                                <StepTitle isSelected={isSelected}>{label}</StepTitle>
                            </StepWrap>
                            {line && (<StepLine isSelected={isSelected && step < currentStep }></StepLine>)}
                        </StepItem>
                    ))}
                </StepsMenu>
                
            </StepsContainer>
        </>
    )
}

export default StepsComponent
