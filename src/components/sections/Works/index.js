import React, {useState, useEffect} from 'react';
import {
    WorksContainer,
    WorksWrapper,
    WorksSliderCont,
    WorksContent,
    ContentTitle,
    ContentP,
    SpanP,
    ContentNotice,
    ContentNoticeP,
    StepCount,
    StepCountWrap,
    StepCountH2,
    Slider,
    WorksItem,
    WorksMenu,
    ItemText,
    
} from './WorksElements';
import Steps from '../../shared/Steps/index';
import data from './Data';
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
const Works = () => {
    const [currentSlide, setCurrentSlide] = useState(2);
    const [currentObj, setCurrentObj] = useState(data[currentSlide-1]);

    const [stepsOpt, setStepsOpt] = useState(stepsOptions);
    const [currentStep, setCurrentStep] = useState(3);
    
    const changeSlide = ({currentTarget}) => {
        setCurrentSlide(currentTarget.dataset.slide)
        setCurrentObj(data[currentTarget.dataset.slide-1])
    }

    useEffect(() => {
    }, [currentSlide])

    return (
        <>
            <WorksContainer>
                <WorksWrapper>
                    <Steps 
                        stepsOpt={stepsOpt} 
                        currentStep={currentStep} 
                        setStepsOpt={setStepsOpt}
                        setCurrentStep={setCurrentStep}
                    />
                    <WorksSliderCont>
                        <StepCountWrap>
                            <StepCount>Step {currentStep}</StepCount>
                            <StepCountH2>Sed ut perspiciatis</StepCountH2>
                        </StepCountWrap>
                        <Slider>
                            <WorksMenu>
                                <WorksItem data-slide={1} onClick={changeSlide}>
                                    <ItemText isActive={currentSlide == 1 && true}>Nemo enim</ItemText>
                                </WorksItem>
                                <WorksItem data-slide={2} onClick={changeSlide}>
                                    <ItemText isActive={currentSlide == 2 && true}>Die ipsam voluptatem</ItemText>
                                </WorksItem>
                                <WorksItem data-slide={3} onClick={changeSlide}>
                                    <ItemText isActive={currentSlide == 3 && true}>Ut enim ad minima</ItemText>
                                </WorksItem>
                                <WorksItem data-slide={4} onClick={changeSlide}>
                                    <ItemText isActive={currentSlide == 4 && true}>Quis autem vel</ItemText>
                                </WorksItem>
                                <WorksItem data-slide={5} onClick={changeSlide}>
                                    <ItemText isActive={currentSlide == 5 && true}>Sed ut perspiciatis</ItemText>
                                </WorksItem>
                            </WorksMenu>

                            <WorksContent>
                                {currentObj && (
                                    <>
                                    <ContentTitle>{currentObj.title}</ContentTitle>
                                    {currentObj.textOfpParagraphs.map(({id, text}) => (
                                        <ContentP key={id}><SpanP>{id}.</SpanP> {text}</ContentP>
                                    ))}
                                    <ContentNotice>
                                        <SpanP>Notice:</SpanP>
                                        <ContentNoticeP>{currentObj.notice}</ContentNoticeP>
                                    </ContentNotice>
                                </>
                                )}
                            </WorksContent>
                        </Slider>
                        
                    </WorksSliderCont>
                </WorksWrapper>
            </WorksContainer>
        </>
    )
}

export default Works;
