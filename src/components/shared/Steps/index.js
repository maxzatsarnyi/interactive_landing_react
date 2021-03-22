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
    StepCount,
    StepCountWrap,
    StepCountH2,
} from './StepsElements';

const stepsOptions = [
    {
        step: 1,
        label: 'Step 1',
        name: 'step 1',
        line:  true,
        isSelected:  true,
        text: 'Dui accumsan sit',
    },
    {
        step: 2,
        label: 'Step 2',
        name: 'step 2',
        line:  true,
        isSelected:  true,
        text: 'Vitae proin sagittis',

    },
    {
        step: 3,
        label: 'Step 3',
        name: 'step 3',
        line:  true,
        isSelected:  true,
        text: 'Sed ut perspiciatis',

    },
    {
        step: 4,
        label: 'Step 3',
        name: 'step 3',
        line:  false,
        isSelected:  false,
        text: 'Leo integer malesuada',

    },
  ];

const textSlide = [
    `Leo integer malesuada`,
    `Leo integer malesuada`,
    `Leo integer malesuada`,
]
const StepsComponent = () => {
    const [stepsOpt, setStepsOpt] = useState(stepsOptions);
    const [currentStep, setCurrentStep] = useState(3);
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
                <StepCountWrap>
                    <StepCount>Step {currentStep}</StepCount>
                    <StepCountH2>Sed ut perspiciatis</StepCountH2>
                </StepCountWrap>
            </StepsContainer>
        </>
    )
}

export default StepsComponent
