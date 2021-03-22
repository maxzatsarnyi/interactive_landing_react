import React, {useState, useEffect} from 'react';
import {
    WorksContainer,
    WorksWrapper,
    WorksSliderCont,
    WorksMenu,
    WorksItem,
    ItemLine,
    ItemText,
    WorksContent,
    ContentTitle,
    ContentP,
    SpanP,
    ContentNotice,
    ContentNoticeP,

} from './WorksElements';
import Steps from '../../shared/Steps/index';
import data from './Data';

const Works = () => {
    const [currentSlide, setCurrentSlide] = useState(2);
    const [currentObj, setCurrentObj] = useState(data[currentSlide-1]);

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
                    <Steps/>
                    <WorksSliderCont>
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
                    </WorksSliderCont>
                </WorksWrapper>
            </WorksContainer>
        </>
    )
}

export default Works;
